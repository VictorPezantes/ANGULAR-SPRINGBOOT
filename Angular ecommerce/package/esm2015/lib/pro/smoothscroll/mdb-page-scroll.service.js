var PageScrollService_1;
import { __decorate, __metadata } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { PageScrollConfig } from './mdb-page-scroll.config';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
let PageScrollService = PageScrollService_1 = class PageScrollService {
    constructor() {
        this.runningInstances = [];
        this.onInterrupted = {
            report: (event, pageScrollInstance) => {
                if (!pageScrollInstance.interruptible) {
                    // Non-interruptible anyway, so do not stop anything
                    return;
                }
                let shouldStop = true;
                if (event.type === 'keyup') {
                    // Only stop if specific keys have been pressed, for all others don't stop anything
                    // tslint:disable-next-line: deprecation
                    if (PageScrollConfig._interruptKeys.indexOf(event.keyCode) === -1) {
                        // The pressed key is not in the list of interrupting keys
                        shouldStop = false;
                    }
                }
                else if (event.type === 'mousedown') {
                    // For mousedown events we only stop the scroll animation of the mouse has
                    // been clicked inside the scrolling container
                    if (!pageScrollInstance.scrollingViews.some(scrollingView => scrollingView.contains(event.target))) {
                        // Mouse clicked an element which is not inside any of the the scrolling containers
                        shouldStop = false;
                    }
                }
                if (shouldStop) {
                    this.stopAll(pageScrollInstance.namespace);
                }
            },
        };
        if (PageScrollService_1.instanceCounter > 0 && isDevMode()) {
            console.warn('An instance of PageScrollService already exists, usually ' +
                'including one provider should be enough, so double check.');
        }
        PageScrollService_1.instanceCounter++;
    }
    stopInternal(interrupted, pageScrollInstance) {
        const index = this.runningInstances.indexOf(pageScrollInstance);
        if (index >= 0) {
            this.runningInstances.splice(index, 1);
        }
        if (pageScrollInstance.interruptListenersAttached) {
            pageScrollInstance.detachInterruptListeners();
        }
        if (pageScrollInstance.timer) {
            // Clear/Stop the timer
            clearInterval(pageScrollInstance.timer);
            // Clear the reference to this timer
            pageScrollInstance.timer = undefined;
            pageScrollInstance.fireEvent(!interrupted);
            return true;
        }
        return false;
    }
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     */
    start(pageScrollInstance) {
        // Stop all possibly running scroll animations in the same namespace
        this.stopAll(pageScrollInstance.namespace);
        if (pageScrollInstance.scrollingViews === null ||
            pageScrollInstance.scrollingViews.length === 0) {
            // No scrollingViews specified, thus we can't animate anything
            if (isDevMode()) {
                console.warn('No scrollingViews specified, this ng2-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        let startScrollPositionFound = false;
        // Reset start scroll position to 0. If any of the scrollingViews has a different one, it will be extracted next
        pageScrollInstance.startScrollPosition = 0;
        // Get the start scroll position from the scrollingViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.scrollingViews.forEach((scrollingView) => {
            if (Util.isUndefinedOrNull(scrollingView)) {
                return;
            }
            // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
            // or "scrollLeft" property that is not undefined and unequal to 0
            const scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
            if (!startScrollPositionFound && scrollPosition) {
                // We found a scrollingView that does not have scrollTop or scrollLeft 0
                // Return the scroll position value, as this will be our startScrollPosition
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true;
            }
        });
        const pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        const scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
        pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.verticalScrolling
            ? scrollTargetPosition.top
            : scrollTargetPosition.left) - pageScrollOffset);
        // Calculate the distance we need to go in total
        pageScrollInstance.distanceToScroll =
            pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            // We weren't able to find the target position, maybe the element does not exist?
            if (isDevMode()) {
                // console.log('Scrolling not possible, as we can\'t find the specified target');
            }
            pageScrollInstance.fireEvent(false);
            return;
        }
        // We're at the final destination already
        // OR we need to scroll down but are already at the end
        // OR we need to scroll up but are at the top already
        const allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < PageScrollConfig._minScrollDistance;
        // Check how long we need to scroll if a speed option is given
        // Default executionDuration is the specified duration
        pageScrollInstance.executionDuration = pageScrollInstance.duration;
        // Maybe we need to pay attention to the speed option?
        if (!Util.isUndefinedOrNull(pageScrollInstance.speed) &&
            Util.isUndefinedOrNull(pageScrollInstance.duration)) {
            // Speed option is set and no duration => calculate duration based on speed and scroll distance
            pageScrollInstance.executionDuration =
                (pageScrollInstance.distanceToScroll / pageScrollInstance.speed) * 1000;
        }
        // We should go there directly, as our "animation" would have one big step
        // only anyway and this way we save the interval stuff
        const tooShortInterval = pageScrollInstance.executionDuration <= PageScrollConfig._interval;
        if (allReadyAtDestination || tooShortInterval) {
            if (isDevMode()) {
                if (allReadyAtDestination) {
                    // console.log('Scrolling not possible, as we can\'t get any closer to the destination');
                }
                else {
                    // console.log('Scroll duration shorter that interval length, jumping to target');
                }
            }
            pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
            pageScrollInstance.fireEvent(true);
            return;
        }
        // Register the interrupt listeners if we want an interruptible scroll animation
        if (pageScrollInstance.interruptible ||
            (Util.isUndefinedOrNull(pageScrollInstance.interruptible) &&
                PageScrollConfig.defaultInterruptible)) {
            pageScrollInstance.attachInterruptListeners(this.onInterrupted);
        }
        // Let's get started, get the start time...
        pageScrollInstance.startTime = new Date().getTime();
        // .. and calculate the end time (when we need to finish at last)
        pageScrollInstance.endTime =
            pageScrollInstance.startTime + pageScrollInstance.executionDuration;
        pageScrollInstance.timer = setInterval((_pageScrollInstance) => {
            // Take the current time
            const currentTime = new Date().getTime();
            // Determine the new scroll position
            let newScrollPosition;
            let stopNow = false;
            if (_pageScrollInstance.endTime <= currentTime) {
                // We're over the time already, so go the targetScrollPosition (aka destination)
                newScrollPosition = _pageScrollInstance.targetScrollPosition;
                stopNow = true;
            }
            else {
                // Calculate the scroll position based on the current time using the easing function
                newScrollPosition = Math.round(_pageScrollInstance.easingLogic.ease(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollPosition, _pageScrollInstance.distanceToScroll, _pageScrollInstance.executionDuration));
            }
            // Set the new scrollPosition to all scrollingViews elements
            if (!_pageScrollInstance.setScrollPosition(newScrollPosition)) {
                // Setting the new scrollTop/scrollLeft value failed for all ScrollingViews
                // early stop the scroll animation to save resources
                stopNow = true;
            }
            // At the end do the internal stop maintenance and fire the pageScrollFinish event
            // (otherwise the event might arrive at "too early")
            if (stopNow) {
                this.stopInternal(false, _pageScrollInstance);
            }
        }, PageScrollConfig._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    }
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     */
    stopAll(namespace) {
        if (this.runningInstances.length > 0) {
            let stoppedSome = false;
            for (let i = 0; i < this.runningInstances.length; ++i) {
                const pageScrollInstance = this.runningInstances[i];
                if (Util.isUndefinedOrNull(namespace) ||
                    namespace.length === 0 ||
                    pageScrollInstance.namespace === namespace) {
                    stoppedSome = true;
                    this.stopInternal(true, pageScrollInstance);
                    // Decrease the counter, as we removed an item from the array we iterate over
                    i--;
                }
            }
            return stoppedSome;
        }
        return false;
    }
    stop(pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    }
};
PageScrollService.instanceCounter = 0;
PageScrollService = PageScrollService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], PageScrollService);
export { PageScrollService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Ntb290aHNjcm9sbC9tZGItcGFnZS1zY3JvbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTVELE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxJQUFJLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUcvRSxJQUFhLGlCQUFpQix5QkFBOUIsTUFBYSxpQkFBaUI7SUFnUTVCO1FBN1BRLHFCQUFnQixHQUF5QixFQUFFLENBQUM7UUFFNUMsa0JBQWEsR0FBc0I7WUFDekMsTUFBTSxFQUFFLENBQUMsS0FBWSxFQUFFLGtCQUFzQyxFQUFRLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUU7b0JBQ3JDLG9EQUFvRDtvQkFDcEQsT0FBTztpQkFDUjtnQkFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBRXRCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQzFCLG1GQUFtRjtvQkFDbkYsd0NBQXdDO29CQUN4QyxJQUFJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQWlCLEtBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTt3QkFDbEYsMERBQTBEO3dCQUMxRCxVQUFVLEdBQUcsS0FBSyxDQUFDO3FCQUNwQjtpQkFDRjtxQkFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO29CQUNyQywwRUFBMEU7b0JBQzFFLDhDQUE4QztvQkFDOUMsSUFDRSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFB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LE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxJQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7b0JBQ2pDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFDdEIsa0JBQWtCLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFDMUM7b0JBQ0EsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDNUMsNkVBQTZFO29CQUM3RSxDQUFDLEVBQUUsQ0FBQztpQkFDTDthQUNGO1lBQ0QsT0FBTyxXQUFXLENBQUM7U0FDcEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSxJQUFJLENBQUMsa0JBQXNDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBV0YsQ0FBQTtBQXhRZ0IsaUNBQWUsR0FBRyxDQUFDLENBQUM7QUFEeEIsaUJBQWlCO0lBRDdCLFVBQVUsRUFBRTs7R0FDQSxpQkFBaUIsQ0F5UTdCO1NBelFZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdlU2Nyb2xsQ29uZmlnIH0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuY29uZmlnJztcbmltcG9ydCB7IFBhZ2VTY3JvbGxJbnN0YW5jZSwgSW50ZXJydXB0UmVwb3J0ZXIgfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5pbnN0YW5jZSc7XG5pbXBvcnQgeyBQYWdlU2Nyb2xsVXRpbFNlcnZpY2UgYXMgVXRpbCB9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLXV0aWwuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlU2Nyb2xsU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlQ291bnRlciA9IDA7XG5cbiAgcHJpdmF0ZSBydW5uaW5nSW5zdGFuY2VzOiBQYWdlU2Nyb2xsSW5zdGFuY2VbXSA9IFtdO1xuXG4gIHByaXZhdGUgb25JbnRlcnJ1cHRlZDogSW50ZXJydXB0UmVwb3J0ZXIgPSB7XG4gICAgcmVwb3J0OiAoZXZlbnQ6IEV2ZW50LCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCFwYWdlU2Nyb2xsSW5zdGFuY2UuaW50ZXJydXB0aWJsZSkge1xuICAgICAgICAvLyBOb24taW50ZXJydXB0aWJsZSBhbnl3YXksIHNvIGRvIG5vdCBzdG9wIGFueXRoaW5nXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHNob3VsZFN0b3AgPSB0cnVlO1xuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJykge1xuICAgICAgICAvLyBPbmx5IHN0b3AgaWYgc3BlY2lmaWMga2V5cyBoYXZlIGJlZW4gcHJlc3NlZCwgZm9yIGFsbCBvdGhlcnMgZG9uJ3Qgc3RvcCBhbnl0aGluZ1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICAgIGlmIChQYWdlU2Nyb2xsQ29uZmlnLl9pbnRlcnJ1cHRLZXlzLmluZGV4T2YoKDxLZXlib2FyZEV2ZW50PmV2ZW50KS5rZXlDb2RlKSA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBUaGUgcHJlc3NlZCBrZXkgaXMgbm90IGluIHRoZSBsaXN0IG9mIGludGVycnVwdGluZyBrZXlzXG4gICAgICAgICAgc2hvdWxkU3RvcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgIC8vIEZvciBtb3VzZWRvd24gZXZlbnRzIHdlIG9ubHkgc3RvcCB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBvZiB0aGUgbW91c2UgaGFzXG4gICAgICAgIC8vIGJlZW4gY2xpY2tlZCBpbnNpZGUgdGhlIHNjcm9sbGluZyBjb250YWluZXJcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFwYWdlU2Nyb2xsSW5zdGFuY2Uuc2Nyb2xsaW5nVmlld3Muc29tZShzY3JvbGxpbmdWaWV3ID0+XG4gICAgICAgICAgICBzY3JvbGxpbmdWaWV3LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIE1vdXNlIGNsaWNrZWQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgaW5zaWRlIGFueSBvZiB0aGUgdGhlIHNjcm9sbGluZyBjb250YWluZXJzXG4gICAgICAgICAgc2hvdWxkU3RvcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRTdG9wKSB7XG4gICAgICAgIHRoaXMuc3RvcEFsbChwYWdlU2Nyb2xsSW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIHByaXZhdGUgc3RvcEludGVybmFsKGludGVycnVwdGVkOiBib29sZWFuLCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLnJ1bm5pbmdJbnN0YW5jZXMuaW5kZXhPZihwYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnJ1bm5pbmdJbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpZiAocGFnZVNjcm9sbEluc3RhbmNlLmludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkKSB7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuZGV0YWNoSW50ZXJydXB0TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2VTY3JvbGxJbnN0YW5jZS50aW1lcikge1xuICAgICAgLy8gQ2xlYXIvU3RvcCB0aGUgdGltZXJcbiAgICAgIGNsZWFySW50ZXJ2YWwocGFnZVNjcm9sbEluc3RhbmNlLnRpbWVyKTtcbiAgICAgIC8vIENsZWFyIHRoZSByZWZlcmVuY2UgdG8gdGhpcyB0aW1lclxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLnRpbWVyID0gdW5kZWZpbmVkO1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLmZpcmVFdmVudCghaW50ZXJydXB0ZWQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBhIHNjcm9sbCBhbmltYXRpb24uIEFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBhbmltYXRpb24gYXJlIHN0b3JlZCBpbiB0aGUgZ2l2ZW4ge0BsaW5rIFBhZ2VTY3JvbGxJbnN0YW5jZX0gb2JqZWN0LlxuICAgKlxuICAgKiBUaGlzIGlzIHRoZSBjb3JlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHdob2xlIGxpYnJhcnkuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgc3RhcnQocGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UpOiB2b2lkIHtcbiAgICAvLyBTdG9wIGFsbCBwb3NzaWJseSBydW5uaW5nIHNjcm9sbCBhbmltYXRpb25zIGluIHRoZSBzYW1lIG5hbWVzcGFjZVxuICAgIHRoaXMuc3RvcEFsbChwYWdlU2Nyb2xsSW5zdGFuY2UubmFtZXNwYWNlKTtcblxuICAgIGlmIChcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxpbmdWaWV3cyA9PT0gbnVsbCB8fFxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLnNjcm9sbGluZ1ZpZXdzLmxlbmd0aCA9PT0gMFxuICAgICkge1xuICAgICAgLy8gTm8gc2Nyb2xsaW5nVmlld3Mgc3BlY2lmaWVkLCB0aHVzIHdlIGNhbid0IGFuaW1hdGUgYW55dGhpbmdcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05vIHNjcm9sbGluZ1ZpZXdzIHNwZWNpZmllZCwgdGhpcyBuZzItcGFnZS1zY3JvbGwgZG9lcyBub3Qga25vdyB3aGljaCBET00gZWxlbWVudHMgdG8gc2Nyb2xsJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzdGFydFNjcm9sbFBvc2l0aW9uRm91bmQgPSBmYWxzZTtcbiAgICAvLyBSZXNldCBzdGFydCBzY3JvbGwgcG9zaXRpb24gdG8gMC4gSWYgYW55IG9mIHRoZSBzY3JvbGxpbmdWaWV3cyBoYXMgYSBkaWZmZXJlbnQgb25lLCBpdCB3aWxsIGJlIGV4dHJhY3RlZCBuZXh0XG4gICAgcGFnZVNjcm9sbEluc3RhbmNlLnN0YXJ0U2Nyb2xsUG9zaXRpb24gPSAwO1xuXG4gICAgLy8gR2V0IHRoZSBzdGFydCBzY3JvbGwgcG9zaXRpb24gZnJvbSB0aGUgc2Nyb2xsaW5nVmlld3MgKGUuZy4gaWYgdGhlIHVzZXIgYWxyZWFkeSBzY3JvbGxlZCBkb3duIHRoZSBjb250ZW50KVxuICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxpbmdWaWV3cy5mb3JFYWNoKChzY3JvbGxpbmdWaWV3OiBhbnkpID0+IHtcbiAgICAgIGlmIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHNjcm9sbGluZ1ZpZXcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIEdldCB0aGUgc2Nyb2xsVG9wIG9yIHNjcm9sbExlZnQgdmFsdWUgb2YgdGhlIGZpcnN0IHNjcm9sbGluZ1ZpZXcgdGhhdCByZXR1cm5zIGEgdmFsdWUgZm9yIGl0cyBcInNjcm9sbFRvcFwiXG4gICAgICAvLyBvciBcInNjcm9sbExlZnRcIiBwcm9wZXJ0eSB0aGF0IGlzIG5vdCB1bmRlZmluZWQgYW5kIHVuZXF1YWwgdG8gMFxuXG4gICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHBhZ2VTY3JvbGxJbnN0YW5jZS5nZXRTY3JvbGxQcm9wZXJ0eVZhbHVlKHNjcm9sbGluZ1ZpZXcpO1xuICAgICAgaWYgKCFzdGFydFNjcm9sbFBvc2l0aW9uRm91bmQgJiYgc2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgICAgLy8gV2UgZm91bmQgYSBzY3JvbGxpbmdWaWV3IHRoYXQgZG9lcyBub3QgaGF2ZSBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCAwXG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBzY3JvbGwgcG9zaXRpb24gdmFsdWUsIGFzIHRoaXMgd2lsbCBiZSBvdXIgc3RhcnRTY3JvbGxQb3NpdGlvblxuICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2Uuc3RhcnRTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuICAgICAgICBzdGFydFNjcm9sbFBvc2l0aW9uRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFnZVNjcm9sbE9mZnNldCA9IHBhZ2VTY3JvbGxJbnN0YW5jZS5nZXRDdXJyZW50T2Zmc2V0KCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIHRhcmdldCBwb3NpdGlvbiB0aGF0IHRoZSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCBnbyB0b1xuXG4gICAgY29uc3Qgc2Nyb2xsVGFyZ2V0UG9zaXRpb24gPSBwYWdlU2Nyb2xsSW5zdGFuY2UuZXh0cmFjdFNjcm9sbFRhcmdldFBvc2l0aW9uKCk7XG4gICAgcGFnZVNjcm9sbEluc3RhbmNlLnRhcmdldFNjcm9sbFBvc2l0aW9uID0gTWF0aC5yb3VuZChcbiAgICAgIChwYWdlU2Nyb2xsSW5zdGFuY2UudmVydGljYWxTY3JvbGxpbmdcbiAgICAgICAgPyBzY3JvbGxUYXJnZXRQb3NpdGlvbi50b3BcbiAgICAgICAgOiBzY3JvbGxUYXJnZXRQb3NpdGlvbi5sZWZ0KSAtIHBhZ2VTY3JvbGxPZmZzZXRcbiAgICApO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSB3ZSBuZWVkIHRvIGdvIGluIHRvdGFsXG4gICAgcGFnZVNjcm9sbEluc3RhbmNlLmRpc3RhbmNlVG9TY3JvbGwgPVxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLnRhcmdldFNjcm9sbFBvc2l0aW9uIC0gcGFnZVNjcm9sbEluc3RhbmNlLnN0YXJ0U2Nyb2xsUG9zaXRpb247XG5cbiAgICBpZiAoaXNOYU4ocGFnZVNjcm9sbEluc3RhbmNlLmRpc3RhbmNlVG9TY3JvbGwpKSB7XG4gICAgICAvLyBXZSB3ZXJlbid0IGFibGUgdG8gZmluZCB0aGUgdGFyZ2V0IHBvc2l0aW9uLCBtYXliZSB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdD9cblxuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTY3JvbGxpbmcgbm90IHBvc3NpYmxlLCBhcyB3ZSBjYW5cXCd0IGZpbmQgdGhlIHNwZWNpZmllZCB0YXJnZXQnKTtcbiAgICAgIH1cbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5maXJlRXZlbnQoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFdlJ3JlIGF0IHRoZSBmaW5hbCBkZXN0aW5hdGlvbiBhbHJlYWR5XG4gICAgLy8gT1Igd2UgbmVlZCB0byBzY3JvbGwgZG93biBidXQgYXJlIGFscmVhZHkgYXQgdGhlIGVuZFxuICAgIC8vIE9SIHdlIG5lZWQgdG8gc2Nyb2xsIHVwIGJ1dCBhcmUgYXQgdGhlIHRvcCBhbHJlYWR5XG4gICAgY29uc3QgYWxsUmVhZHlBdERlc3RpbmF0aW9uID1cbiAgICAgIE1hdGguYWJzKHBhZ2VTY3JvbGxJbnN0YW5jZS5kaXN0YW5jZVRvU2Nyb2xsKSA8IFBhZ2VTY3JvbGxDb25maWcuX21pblNjcm9sbERpc3RhbmNlO1xuXG4gICAgLy8gQ2hlY2sgaG93IGxvbmcgd2UgbmVlZCB0byBzY3JvbGwgaWYgYSBzcGVlZCBvcHRpb24gaXMgZ2l2ZW5cbiAgICAvLyBEZWZhdWx0IGV4ZWN1dGlvbkR1cmF0aW9uIGlzIHRoZSBzcGVjaWZpZWQgZHVyYXRpb25cbiAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuZXhlY3V0aW9uRHVyYXRpb24gPSBwYWdlU2Nyb2xsSW5zdGFuY2UuZHVyYXRpb247XG4gICAgLy8gTWF5YmUgd2UgbmVlZCB0byBwYXkgYXR0ZW50aW9uIHRvIHRoZSBzcGVlZCBvcHRpb24/XG4gICAgaWYgKFxuICAgICAgIVV0aWwuaXNVbmRlZmluZWRPck51bGwocGFnZVNjcm9sbEluc3RhbmNlLnNwZWVkKSAmJlxuICAgICAgVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChwYWdlU2Nyb2xsSW5zdGFuY2UuZHVyYXRpb24pXG4gICAgKSB7XG4gICAgICAvLyBTcGVlZCBvcHRpb24gaXMgc2V0IGFuZCBubyBkdXJhdGlvbiA9PiBjYWxjdWxhdGUgZHVyYXRpb24gYmFzZWQgb24gc3BlZWQgYW5kIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLmV4ZWN1dGlvbkR1cmF0aW9uID1cbiAgICAgICAgKHBhZ2VTY3JvbGxJbnN0YW5jZS5kaXN0YW5jZVRvU2Nyb2xsIC8gcGFnZVNjcm9sbEluc3RhbmNlLnNwZWVkKSAqIDEwMDA7XG4gICAgfVxuXG4gICAgLy8gV2Ugc2hvdWxkIGdvIHRoZXJlIGRpcmVjdGx5LCBhcyBvdXIgXCJhbmltYXRpb25cIiB3b3VsZCBoYXZlIG9uZSBiaWcgc3RlcFxuICAgIC8vIG9ubHkgYW55d2F5IGFuZCB0aGlzIHdheSB3ZSBzYXZlIHRoZSBpbnRlcnZhbCBzdHVmZlxuICAgIGNvbnN0IHRvb1Nob3J0SW50ZXJ2YWwgPSBwYWdlU2Nyb2xsSW5zdGFuY2UuZXhlY3V0aW9uRHVyYXRpb24gPD0gUGFnZVNjcm9sbENvbmZpZy5faW50ZXJ2YWw7XG5cbiAgICBpZiAoYWxsUmVhZHlBdERlc3RpbmF0aW9uIHx8IHRvb1Nob3J0SW50ZXJ2YWwpIHtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICBpZiAoYWxsUmVhZHlBdERlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1Njcm9sbGluZyBub3QgcG9zc2libGUsIGFzIHdlIGNhblxcJ3QgZ2V0IGFueSBjbG9zZXIgdG8gdGhlIGRlc3RpbmF0aW9uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1Njcm9sbCBkdXJhdGlvbiBzaG9ydGVyIHRoYXQgaW50ZXJ2YWwgbGVuZ3RoLCBqdW1waW5nIHRvIHRhcmdldCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2Uuc2V0U2Nyb2xsUG9zaXRpb24ocGFnZVNjcm9sbEluc3RhbmNlLnRhcmdldFNjcm9sbFBvc2l0aW9uKTtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5maXJlRXZlbnQodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgdGhlIGludGVycnVwdCBsaXN0ZW5lcnMgaWYgd2Ugd2FudCBhbiBpbnRlcnJ1cHRpYmxlIHNjcm9sbCBhbmltYXRpb25cbiAgICBpZiAoXG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuaW50ZXJydXB0aWJsZSB8fFxuICAgICAgKFV0aWwuaXNVbmRlZmluZWRPck51bGwocGFnZVNjcm9sbEluc3RhbmNlLmludGVycnVwdGlibGUpICYmXG4gICAgICAgIFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEludGVycnVwdGlibGUpXG4gICAgKSB7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuYXR0YWNoSW50ZXJydXB0TGlzdGVuZXJzKHRoaXMub25JbnRlcnJ1cHRlZCk7XG4gICAgfVxuXG4gICAgLy8gTGV0J3MgZ2V0IHN0YXJ0ZWQsIGdldCB0aGUgc3RhcnQgdGltZS4uLlxuICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAvLyAuLiBhbmQgY2FsY3VsYXRlIHRoZSBlbmQgdGltZSAod2hlbiB3ZSBuZWVkIHRvIGZpbmlzaCBhdCBsYXN0KVxuICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5lbmRUaW1lID1cbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5zdGFydFRpbWUgKyBwYWdlU2Nyb2xsSW5zdGFuY2UuZXhlY3V0aW9uRHVyYXRpb247XG5cbiAgICBwYWdlU2Nyb2xsSW5zdGFuY2UudGltZXIgPSBzZXRJbnRlcnZhbChcbiAgICAgIChfcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UpID0+IHtcbiAgICAgICAgLy8gVGFrZSB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIG5ldyBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgbGV0IG5ld1Njcm9sbFBvc2l0aW9uOiBudW1iZXI7XG4gICAgICAgIGxldCBzdG9wTm93ID0gZmFsc2U7XG4gICAgICAgIGlmIChfcGFnZVNjcm9sbEluc3RhbmNlLmVuZFRpbWUgPD0gY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAvLyBXZSdyZSBvdmVyIHRoZSB0aW1lIGFscmVhZHksIHNvIGdvIHRoZSB0YXJnZXRTY3JvbGxQb3NpdGlvbiAoYWthIGRlc3RpbmF0aW9uKVxuICAgICAgICAgIG5ld1Njcm9sbFBvc2l0aW9uID0gX3BhZ2VTY3JvbGxJbnN0YW5jZS50YXJnZXRTY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgICBzdG9wTm93ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHNjcm9sbCBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgY3VycmVudCB0aW1lIHVzaW5nIHRoZSBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgICBuZXdTY3JvbGxQb3NpdGlvbiA9IE1hdGgucm91bmQoXG4gICAgICAgICAgICBfcGFnZVNjcm9sbEluc3RhbmNlLmVhc2luZ0xvZ2ljLmVhc2UoXG4gICAgICAgICAgICAgIGN1cnJlbnRUaW1lIC0gX3BhZ2VTY3JvbGxJbnN0YW5jZS5zdGFydFRpbWUsXG4gICAgICAgICAgICAgIF9wYWdlU2Nyb2xsSW5zdGFuY2Uuc3RhcnRTY3JvbGxQb3NpdGlvbixcbiAgICAgICAgICAgICAgX3BhZ2VTY3JvbGxJbnN0YW5jZS5kaXN0YW5jZVRvU2Nyb2xsLFxuICAgICAgICAgICAgICBfcGFnZVNjcm9sbEluc3RhbmNlLmV4ZWN1dGlvbkR1cmF0aW9uXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIG5ldyBzY3JvbGxQb3NpdGlvbiB0byBhbGwgc2Nyb2xsaW5nVmlld3MgZWxlbWVudHNcbiAgICAgICAgaWYgKCFfcGFnZVNjcm9sbEluc3RhbmNlLnNldFNjcm9sbFBvc2l0aW9uKG5ld1Njcm9sbFBvc2l0aW9uKSkge1xuICAgICAgICAgIC8vIFNldHRpbmcgdGhlIG5ldyBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZSBmYWlsZWQgZm9yIGFsbCBTY3JvbGxpbmdWaWV3c1xuICAgICAgICAgIC8vIGVhcmx5IHN0b3AgdGhlIHNjcm9sbCBhbmltYXRpb24gdG8gc2F2ZSByZXNvdXJjZXNcbiAgICAgICAgICBzdG9wTm93ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0IHRoZSBlbmQgZG8gdGhlIGludGVybmFsIHN0b3AgbWFpbnRlbmFuY2UgYW5kIGZpcmUgdGhlIHBhZ2VTY3JvbGxGaW5pc2ggZXZlbnRcbiAgICAgICAgLy8gKG90aGVyd2lzZSB0aGUgZXZlbnQgbWlnaHQgYXJyaXZlIGF0IFwidG9vIGVhcmx5XCIpXG4gICAgICAgIGlmIChzdG9wTm93KSB7XG4gICAgICAgICAgdGhpcy5zdG9wSW50ZXJuYWwoZmFsc2UsIF9wYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgUGFnZVNjcm9sbENvbmZpZy5faW50ZXJ2YWwsXG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2VcbiAgICApO1xuXG4gICAgLy8gUmVnaXN0ZXIgdGhlIGluc3RhbmNlIGFzIHJ1bm5pbmcgb25lXG4gICAgdGhpcy5ydW5uaW5nSW5zdGFuY2VzLnB1c2gocGFnZVNjcm9sbEluc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGFsbCBydW5uaW5nIHNjcm9sbCBhbmltYXRpb25zLiBPcHRpb25hbGx5IGxpbWl0IHRvIHN0b3Agb25seSB0aGUgb25lcyBvZiBzcGVjaWZpYyBuYW1lc3BhY2UuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgc3RvcEFsbChuYW1lc3BhY2U/OiBzdHJpbmcgfCBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nSW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBzdG9wcGVkU29tZSA9IGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucnVubmluZ0luc3RhbmNlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBwYWdlU2Nyb2xsSW5zdGFuY2UgPSB0aGlzLnJ1bm5pbmdJbnN0YW5jZXNbaV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG5hbWVzcGFjZSkgfHxcbiAgICAgICAgICBuYW1lc3BhY2UubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLm5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlXG4gICAgICAgICkge1xuICAgICAgICAgIHN0b3BwZWRTb21lID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0b3BJbnRlcm5hbCh0cnVlLCBwYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICAgICAgICAgIC8vIERlY3JlYXNlIHRoZSBjb3VudGVyLCBhcyB3ZSByZW1vdmVkIGFuIGl0ZW0gZnJvbSB0aGUgYXJyYXkgd2UgaXRlcmF0ZSBvdmVyXG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RvcHBlZFNvbWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzdG9wKHBhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcEludGVybmFsKHRydWUsIHBhZ2VTY3JvbGxJbnN0YW5jZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoUGFnZVNjcm9sbFNlcnZpY2UuaW5zdGFuY2VDb3VudGVyID4gMCAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnQW4gaW5zdGFuY2Ugb2YgUGFnZVNjcm9sbFNlcnZpY2UgYWxyZWFkeSBleGlzdHMsIHVzdWFsbHkgJyArXG4gICAgICAgICAgJ2luY2x1ZGluZyBvbmUgcHJvdmlkZXIgc2hvdWxkIGJlIGVub3VnaCwgc28gZG91YmxlIGNoZWNrLidcbiAgICAgICk7XG4gICAgfVxuICAgIFBhZ2VTY3JvbGxTZXJ2aWNlLmluc3RhbmNlQ291bnRlcisrO1xuICB9XG59XG4iXX0=