/**
 * Created by sebastianfuss on 29.08.16.
 */
import { EventEmitter } from '@angular/core';
import { PageScrollConfig, } from './mdb-page-scroll.config';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
/**
 * Represents a scrolling action
 */
export class PageScrollInstance {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {@link PageScrollInstance#simpleInstance}
     *      {@link PageScrollInstance#newInstance}
     */
    constructor(namespace, document) {
        /**
         * These properties will be set during instance construction and default to their defaults from PageScrollConfig
         */
        /* A namespace to "group" scroll animations together and stopping some does not stop others */
        this._namespace = PageScrollConfig._defaultNamespace;
        /* Whether we scroll vertically (true) or horizontally (false) */
        this._verticalScrolling = PageScrollConfig.defaultIsVerticalScrolling;
        /* Offset in px that the animation should stop above that target element */
        this._offset = PageScrollConfig.defaultScrollOffset;
        /* Duration in milliseconds the scroll animation should last */
        this._duration = PageScrollConfig.defaultDuration;
        /* Easing function to manipulate the scrollTop/scrollLeft value over time */
        this._easingLogic = PageScrollConfig.defaultEasingLogic;
        /* Boolean whether the scroll animation should stop on user interruption or not */
        this._interruptible = PageScrollConfig.defaultInterruptible;
        /* Whether the advanded offset calculation for inline scrolling should be used */
        this._advancedInlineOffsetCalculation = PageScrollConfig.defaultAdvancedInlineOffsetCalculation;
        /* Event emitter to notify the world about the scrolling */
        this._pageScrollFinish = new EventEmitter();
        /**
         * These properties will be set/manipulated if the scroll animation starts
         */
        /* The initial value of the scrollTop or scrollLeft position when the animation starts */
        this._startScrollPosition = 0;
        /* Whether an interrupt listener is attached to the body or not */
        this._interruptListenersAttached = false;
        /* References to the timer instance that is used to perform the scroll animation to be
           able to clear it on animation end*/
        this._timer = null;
        this._namespace = namespace;
        this.document = document;
    }
    /*
     * Factory methods for instance creation
     */
    static simpleInstance(document, scrollTarget, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            namespace,
        });
    }
    static newInstance(options) {
        if (Util.isUndefinedOrNull(options.namespace) || options.namespace.length <= 0) {
            options.namespace = PageScrollConfig._defaultNamespace;
        }
        const pageScrollInstance = new PageScrollInstance(options.namespace, document);
        if (Util.isUndefinedOrNull(options.scrollingViews) || options.scrollingViews.length === 0) {
            pageScrollInstance._isInlineScrolling = false;
            pageScrollInstance._scrollingViews = [
                document.documentElement,
                document.body,
                document.body.parentNode,
            ];
        }
        else {
            pageScrollInstance._isInlineScrolling = true;
            pageScrollInstance._scrollingViews = options.scrollingViews;
        }
        pageScrollInstance._scrollTarget = options.scrollTarget;
        if (!Util.isUndefinedOrNull(options.verticalScrolling)) {
            pageScrollInstance._verticalScrolling = options.verticalScrolling;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollOffset)) {
            pageScrollInstance._offset = options.pageScrollOffset;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollEasingLogic)) {
            pageScrollInstance._easingLogic = options.pageScrollEasingLogic;
        }
        if (Util.isUndefinedOrNull(options.pageScrollDuration) &&
            !Util.isUndefinedOrNull(options.pageScrollSpeed)) {
            // No duration specified in the options, only in this case we use the speed option when present
            pageScrollInstance._speed = options.pageScrollSpeed;
            pageScrollInstance._duration = undefined;
        }
        else if (!Util.isUndefinedOrNull(options.pageScrollDuration)) {
            pageScrollInstance._duration = options.pageScrollDuration;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollFinishListener)) {
            pageScrollInstance._pageScrollFinish = options.pageScrollFinishListener;
        }
        pageScrollInstance._interruptible =
            options.pageScrollInterruptible ||
                (Util.isUndefinedOrNull(options.pageScrollInterruptible) &&
                    PageScrollConfig.defaultInterruptible);
        pageScrollInstance._advancedInlineOffsetCalculation =
            options.advancedInlineOffsetCalculation ||
                (Util.isUndefinedOrNull(options.advancedInlineOffsetCalculation) &&
                    PageScrollConfig.defaultAdvancedInlineOffsetCalculation);
        return pageScrollInstance;
    }
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param namespace Optional namespace to group scroll animations logically
     *
     **/
    static simpleDirectionInstance(document, scrollTarget, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            namespace,
            verticalScrolling,
        });
    }
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param namespace Optional namespace to group scroll animations logically
     *
     */
    static simpleInlineInstance(document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews: [scrollingView],
            verticalScrolling: true,
            namespace,
        });
    }
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param namespace Optional namespace to group scroll animations logically
     *
     * @deprecated Use {@link newInstance(options: PageScrollOptions)}
     */
    static simpleInlineDirectionInstance(document, scrollTarget, scrollingView, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews: [scrollingView],
            namespace,
            verticalScrolling,
        });
    }
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param namespace Optional namespace to group scroll animations logically
     * @param verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finishe
     *
     */
    static advancedInstance(document, scrollTarget, scrollingViews, namespace, verticalScrolling, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews,
            namespace,
            verticalScrolling,
            pageScrollOffset,
            pageScrollInterruptible,
            pageScrollEasingLogic,
            pageScrollDuration,
            pageScrollFinishListener,
        });
    }
    getScrollPropertyValue(scrollingView) {
        if (!this.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    }
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     */
    extractScrollTargetPosition() {
        let scrollTargetElement;
        if (typeof this._scrollTarget === 'string') {
            scrollTargetElement = this.document.getElementById(this._scrollTarget.substr(1));
        }
        else {
            scrollTargetElement = this._scrollTarget;
        }
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this._isInlineScrolling) {
            const position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
            if (this._advancedInlineOffsetCalculation && this.scrollingViews.length === 1) {
                const accumulatedParentsPos = { top: 0, left: 0 };
                // not named window to make sure we're not getting the global window variable by accident
                const theWindow = scrollTargetElement.ownerDocument.defaultView;
                let parentFound = false;
                // Start parent is the immediate parent
                // let parent = scrollTargetElement.parentElement;
                let parent = scrollTargetElement.parentElement;
                // Iterate upwards all parents
                while (!parentFound && !Util.isUndefinedOrNull(parent)) {
                    if (theWindow.getComputedStyle(parent).getPropertyValue('position') === 'relative') {
                        accumulatedParentsPos.top += parent.offsetTop;
                        accumulatedParentsPos.left += parent.offsetLeft;
                    }
                    // Next iteration
                    parent = parent.parentElement;
                    parentFound = parent === this.scrollingViews[0];
                }
                if (parentFound) {
                    // Only use the results if we found the parent, otherwise we accumulated too much anyway
                    position.top += accumulatedParentsPos.top;
                    position.left += accumulatedParentsPos.left;
                }
                else {
                    if (PageScrollConfig._logLevel >= 2) {
                        console.warn('Unable to find nested scrolling targets parent!');
                    }
                }
            }
            return position;
        }
        return Util.extractElementPosition(this.document, scrollTargetElement);
    }
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     */
    getCurrentOffset() {
        return this._offset;
    }
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @return true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    setScrollPosition(position) {
        if (PageScrollConfig._logLevel >= 5) {
            console.warn('Scroll Position: ' + position);
        }
        // Set the new scrollTop/scrollLeft to all scrollingViews elements
        return this.scrollingViews.reduce((oneAlreadyWorked, scrollingView) => {
            const startScrollPropertyValue = this.getScrollPropertyValue(scrollingView);
            if (scrollingView && !Util.isUndefinedOrNull(startScrollPropertyValue)) {
                const scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                const isSmallMovement = scrollDistance < PageScrollConfig._minScrollDistance;
                if (!this.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                // Return true of setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)
                if (isSmallMovement ||
                    scrollDistance > Math.abs(this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }, false);
    }
    /**
     * Trigger firing a animation finish event
     * @param value Whether the animation finished at the target (true) or got interrupted (false)
     */
    fireEvent(value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    }
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     */
    attachInterruptListeners(interruptReporter) {
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = (event) => {
            interruptReporter.report(event, this);
        };
        PageScrollConfig._interruptEvents.forEach((event) => this.document.body.addEventListener(event, this._interruptListener));
        this._interruptListenersAttached = true;
    }
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     */
    detachInterruptListeners() {
        PageScrollConfig._interruptEvents.forEach((event) => this.document.body.removeEventListener(event, this._interruptListener));
        this._interruptListenersAttached = false;
    }
    get namespace() {
        return this._namespace;
    }
    get scrollTarget() {
        return this._scrollTarget;
    }
    get verticalScrolling() {
        return this._verticalScrolling;
    }
    get scrollingViews() {
        return this._scrollingViews;
    }
    set startScrollPosition(value) {
        this._startScrollPosition = value;
    }
    get startScrollPosition() {
        return this._startScrollPosition;
    }
    set targetScrollPosition(value) {
        this._targetScrollPosition = value;
    }
    get targetScrollPosition() {
        return this._targetScrollPosition;
    }
    set distanceToScroll(value) {
        this._distanceToScroll = value;
    }
    get distanceToScroll() {
        return this._distanceToScroll;
    }
    get executionDuration() {
        return this._executionDuration;
    }
    set executionDuration(value) {
        this._executionDuration = value;
    }
    get duration() {
        return this._duration;
    }
    get speed() {
        return this._speed;
    }
    get easingLogic() {
        return this._easingLogic;
    }
    get interruptible() {
        return this._interruptible;
    }
    set startTime(value) {
        this._startTime = value;
    }
    get startTime() {
        return this._startTime;
    }
    set endTime(value) {
        this._endTime = value;
    }
    get endTime() {
        return this._endTime;
    }
    set timer(value) {
        this._timer = value;
    }
    get timer() {
        return this._timer;
    }
    get interruptListenersAttached() {
        return this._interruptListenersAttached;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zbW9vdGhzY3JvbGwvbWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3QyxPQUFPLEVBRUwsZ0JBQWdCLEdBR2pCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLHFCQUFxQixJQUFJLElBQUksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBd0UvRTs7R0FFRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUFpUTdCOzs7OztPQUtHO0lBQ0gsWUFBWSxTQUFpQixFQUFFLFFBQWtCO1FBdFFqRDs7V0FFRztRQUVILDhGQUE4RjtRQUN0RixlQUFVLEdBQVcsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7UUFTaEUsaUVBQWlFO1FBQ3pELHVCQUFrQixHQUFHLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDO1FBQ3pFLDJFQUEyRTtRQUNuRSxZQUFPLEdBQVcsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7UUFDL0QsK0RBQStEO1FBQ3ZELGNBQVMsR0FBVyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFHN0QsNEVBQTRFO1FBQ3BFLGlCQUFZLEdBQWdCLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO1FBQ3hFLGtGQUFrRjtRQUMxRSxtQkFBYyxHQUFZLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO1FBSXhFLGlGQUFpRjtRQUN6RSxxQ0FBZ0MsR0FDdEMsZ0JBQWdCLENBQUMsc0NBQXNDLENBQUM7UUFDMUQsMkRBQTJEO1FBQ25ELHNCQUFpQixHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBRS9FOztXQUVHO1FBQ0gseUZBQXlGO1FBQ2pGLHlCQUFvQixHQUFHLENBQUMsQ0FB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LCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgc2ViYXN0aWFuZnVzcyBvbiAyOS4wOC4xNi5cbiAqL1xuXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgRWFzaW5nTG9naWMsXG4gIFBhZ2VTY3JvbGxDb25maWcsXG4gIFBhZ2VTY3JvbGxUYXJnZXQsXG4gIFBhZ2VTY3JvbGxpbmdWaWV3cyxcbn0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuY29uZmlnJztcbmltcG9ydCB7IFBhZ2VTY3JvbGxVdGlsU2VydmljZSBhcyBVdGlsIH0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwtdXRpbC5zZXJ2aWNlJztcblxuLyoqXG4gKiBBbiBJbnRlcmZhY2Ugc3BlY2lmeWluZyB0aGUgcG9zc2libGUgb3B0aW9ucyB0byBiZSBwYXNzZWQgaW50byB0aGUgbmV3SW5zdGFuY2UoKSBmYWN0b3J5IG1ldGhvZFxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVNjcm9sbE9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGRvY3VtZW50IG9iamVjdCBvZiB0aGUgY3VycmVudCBhcHBcbiAgICovXG4gIGRvY3VtZW50OiBEb2N1bWVudDtcblxuICAvKipcbiAgICogQSBzcGVjaWZpY2F0aW9uIG9mIHRoZSBET00gZWxlbWVudCB0byBzY3JvbGwgdG8uIEVpdGhlciBhIHN0cmluZyByZWZlcnJpbmcgdG8gYW5cbiAgICogb2JqZWN0IGlkIChgI3RhcmdldGApIG9yIGEgSFRNTEVsZW1lbnQgdGhhdCBpcyBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQncyBET00gdHJlZS5cbiAgICovXG4gIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldDtcblxuICAvKipcbiAgICogQXJyYXkgb2YgSFRNTEVsZW1lbnRzIG9yIHRoZSBib2R5IG9iamVjdCB0aGF0IHNob3VsZCBiZSBtYW5pcHVsYXRlZCB3aGlsZSBwZXJmb3JtaW5nXG4gICAqIHRoZSBzY3JvbGwgYW5pbWF0aW9uLlxuICAgKi9cbiAgc2Nyb2xsaW5nVmlld3M/OiBQYWdlU2Nyb2xsaW5nVmlld3NbXTtcblxuICAvKipcbiAgICogTmFtZXNwYWNlIG9mIHRoZSBzY3JvbGwgYW5pbWF0aW9uXG4gICAqL1xuICBuYW1lc3BhY2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhhdCBzY3JvbGwgYW5pbWF0aW9uIHNjcm9sbHMgaW4gdmVydGljYWwgZGlyZWN0aW9uICh0cnVlKSBvclxuICAgKiBob3Jpem9udGFsIChmYWxzZSwgZGVmYXVsdCB2YWx1ZSlcbiAgICovXG4gIHZlcnRpY2FsU2Nyb2xsaW5nPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYW4gYWR2YW5jZWQgb2Zmc2V0IGNhbGN1bGF0aW9uIGZvciBpbmxpbmUgc2Nyb2xsaW5ncyBzaG91bGQgYmUgYXBwbGllZFxuICAgKi9cbiAgYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE9mZnNldCBvZiB0YXJnZXQgZWxlbWVudHMgbG9jYXRpb24gYW5kIHNjcm9sbCBsb2NhdGlvblxuICAgKi9cbiAgcGFnZVNjcm9sbE9mZnNldD86IG51bWJlcjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgYmUgaW50ZXJydXB0aWJsZVxuICAgKi9cbiAgcGFnZVNjcm9sbEludGVycnVwdGlibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgZWFzaW5nIGxvZ2ljIHRvIGJlIHVzZWRcbiAgICovXG4gIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYz86IEVhc2luZ0xvZ2ljO1xuXG4gIC8qKlxuICAgKiBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGxhc3RcbiAgICovXG4gIHBhZ2VTY3JvbGxEdXJhdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4aW11bSBzcGVlZCB0byBiZSB1c2VkIGZvciB0aGUgc2Nyb2xsIGFuaW1hdGlvbi4gT25seSB0YWtlblxuICAgKiBpbnRvIGFjY291bnQgb2Ygbm8gcGFnZVNjcm9sbER1cmF0aW9uIGlzIHByb3ZpZGVkXG4gICAqL1xuICBwYWdlU2Nyb2xsU3BlZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHN0b3BzXG4gICAqL1xuICBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXI/OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNjcm9sbGluZyBhY3Rpb25cbiAqL1xuXG5leHBvcnQgY2xhc3MgUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgLyoqXG4gICAqIFRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBzZXQgZHVyaW5nIGluc3RhbmNlIGNvbnN0cnVjdGlvbiBhbmQgZGVmYXVsdCB0byB0aGVpciBkZWZhdWx0cyBmcm9tIFBhZ2VTY3JvbGxDb25maWdcbiAgICovXG5cbiAgLyogQSBuYW1lc3BhY2UgdG8gXCJncm91cFwiIHNjcm9sbCBhbmltYXRpb25zIHRvZ2V0aGVyIGFuZCBzdG9wcGluZyBzb21lIGRvZXMgbm90IHN0b3Agb3RoZXJzICovXG4gIHByaXZhdGUgX25hbWVzcGFjZTogc3RyaW5nID0gUGFnZVNjcm9sbENvbmZpZy5fZGVmYXVsdE5hbWVzcGFjZTtcbiAgLyogVGhlIGRvY3VtZW50IGFsbCB0aGUgc2Nyb2xsaW5nIHRha2VzIHBsYWNlIGFuZCBzY3JvbGwgdGFyZ2V0cyBhcmUgbG9jYXRlZCBpbiAqL1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgLyogVGhlIERPTSBlbGVtZW50cyBvciBzaW1pbGFyIG5vZGVzIHdob3NlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHByb3BlcnR5IHdpbGwgYmUgbWFuaXB1bGF0ZWQgZHVyaW5nIHNjcm9sbGluZyAqL1xuICBwcml2YXRlIF9zY3JvbGxpbmdWaWV3czogUGFnZVNjcm9sbGluZ1ZpZXdzW107XG4gIHByaXZhdGUgX2lzSW5saW5lU2Nyb2xsaW5nOiBib29sZWFuO1xuICAvKiBUaGUgdGFyZ2V0IGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQgaW50byB0aGUgdmlld3BvcnQgKi9cbiAgcHJpdmF0ZSBfc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0O1xuXG4gIC8qIFdoZXRoZXIgd2Ugc2Nyb2xsIHZlcnRpY2FsbHkgKHRydWUpIG9yIGhvcml6b250YWxseSAoZmFsc2UpICovXG4gIHByaXZhdGUgX3ZlcnRpY2FsU2Nyb2xsaW5nID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0SXNWZXJ0aWNhbFNjcm9sbGluZztcbiAgLyogT2Zmc2V0IGluIHB4IHRoYXQgdGhlIGFuaW1hdGlvbiBzaG91bGQgc3RvcCBhYm92ZSB0aGF0IHRhcmdldCBlbGVtZW50ICovXG4gIHByaXZhdGUgX29mZnNldDogbnVtYmVyID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0U2Nyb2xsT2Zmc2V0O1xuICAvKiBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGxhc3QgKi9cbiAgcHJpdmF0ZSBfZHVyYXRpb246IG51bWJlciA9IFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdER1cmF0aW9uO1xuICAvKiBTcGVlZCBpbiBcInBpeGVscy9zZWNvbmRcIiB0byBiZSB1c2VkIHdoZW4gc2Nyb2xsaW5nIHRvIHRoZSB0YXJnZXQgZWxlbWVudCAqL1xuICBwcml2YXRlIF9zcGVlZDogbnVtYmVyO1xuICAvKiBFYXNpbmcgZnVuY3Rpb24gdG8gbWFuaXB1bGF0ZSB0aGUgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgb3ZlciB0aW1lICovXG4gIHByaXZhdGUgX2Vhc2luZ0xvZ2ljOiBFYXNpbmdMb2dpYyA9IFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEVhc2luZ0xvZ2ljO1xuICAvKiBCb29sZWFuIHdoZXRoZXIgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIHN0b3Agb24gdXNlciBpbnRlcnJ1cHRpb24gb3Igbm90ICovXG4gIHByaXZhdGUgX2ludGVycnVwdGlibGU6IGJvb2xlYW4gPSBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRJbnRlcnJ1cHRpYmxlO1xuICAvKiBUaGUgbGlzdGVuZXIgdGhhdCB0aGlzIHNjcm9sbCBpbnN0YW5jZSBhdHRhY2hlcyB0byB0aGUgYm9keSB0byBsaXN0ZW4gZm9yIGludGVycnVwdCBldmVudHNcbiAgICAgV2UncmUga2VlcGluZyBhIHJlZmVyZW5jZSB0byBpdCBzbyB3ZSBjYW4gcHJvcGVybHkgcmVtb3ZlIGl0IHdoZW4gdGhlIGFuaW1hdGlvbiBmaW5pc2hlcyAqL1xuICBwcml2YXRlIF9pbnRlcnJ1cHRMaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdDtcbiAgLyogV2hldGhlciB0aGUgYWR2YW5kZWQgb2Zmc2V0IGNhbGN1bGF0aW9uIGZvciBpbmxpbmUgc2Nyb2xsaW5nIHNob3VsZCBiZSB1c2VkICovXG4gIHByaXZhdGUgX2FkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb246IGJvb2xlYW4gPVxuICAgIFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb247XG4gIC8qIEV2ZW50IGVtaXR0ZXIgdG8gbm90aWZ5IHRoZSB3b3JsZCBhYm91dCB0aGUgc2Nyb2xsaW5nICovXG4gIHByaXZhdGUgX3BhZ2VTY3JvbGxGaW5pc2g6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogVGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIHNldC9tYW5pcHVsYXRlZCBpZiB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzdGFydHNcbiAgICovXG4gIC8qIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCBwb3NpdGlvbiB3aGVuIHRoZSBhbmltYXRpb24gc3RhcnRzICovXG4gIHByaXZhdGUgX3N0YXJ0U2Nyb2xsUG9zaXRpb24gPSAwO1xuICAvKiBUaGUgdGFyZ2V0IHZhbHVlIG9mIHRoZSBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCBwb3NpdGlvbiBmb3IgdGhlIGFuaW1hdGlvbiAoYWthIFwidGhlIGZpbmFsIGRlc3RpbmF0aW9uXCIpICovXG4gIHByaXZhdGUgX3RhcmdldFNjcm9sbFBvc2l0aW9uOiBudW1iZXI7XG4gIC8qIERpZmZlcmVuY2UgYmV0d2VlbiBzdGFydFNjcm9sbFBvc2l0aW9uIGFuZCB0YXJnZXRTY3JvbGxQb3NpdGlvbi4gUHJlLWNhbGN1bGF0ZWQgdG8gbWluaW1pemUgY29tcHV0YXRpb25zIGR1cmluZyBhbmltYXRpb24gKi9cbiAgcHJpdmF0ZSBfZGlzdGFuY2VUb1Njcm9sbDogbnVtYmVyO1xuICAvKiBUaGUgdGltZXN0YW1wIHdoZW4gdGhlIGFuaW1hdGlvbiBzdGFydHMvZ290IHN0YXJ0ZWQgKi9cbiAgcHJpdmF0ZSBfc3RhcnRUaW1lOiBudW1iZXI7XG4gIC8qIFRoZSBlc3RpbWF0ZSBlbmQgdGltZSBvZiB0aGUgYW5pbWF0aW9uLCBjYWxjdWxhdGVkIGJ5IHN0YXJ0VGltZSArIGR1cmF0aW9uICovXG4gIHByaXZhdGUgX2VuZFRpbWU6IG51bWJlcjtcbiAgLyogVGhlIGR1cmF0aW9uIGEgc3RhcnRlZCBhbmltYXRpb24gdGFrZXMuIFRoaXMgbWF5IG1hdGNoIHRoZSBfZHVyYXRpb24gb3IgYmUgYWRqdXN0ZWQgZHVlIHRvIHRoZSBfc3BlZWQgb3B0aW9uICovXG4gIHByaXZhdGUgX2V4ZWN1dGlvbkR1cmF0aW9uOiBudW1iZXI7XG4gIC8qIFdoZXRoZXIgYW4gaW50ZXJydXB0IGxpc3RlbmVyIGlzIGF0dGFjaGVkIHRvIHRoZSBib2R5IG9yIG5vdCAqL1xuICBwcml2YXRlIF9pbnRlcnJ1cHRMaXN0ZW5lcnNBdHRhY2hlZCA9IGZhbHNlO1xuXG4gIC8qIFJlZmVyZW5jZXMgdG8gdGhlIHRpbWVyIGluc3RhbmNlIHRoYXQgaXMgdXNlZCB0byBwZXJmb3JtIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHRvIGJlXG4gICAgIGFibGUgdG8gY2xlYXIgaXQgb24gYW5pbWF0aW9uIGVuZCovXG4gIHByaXZhdGUgX3RpbWVyOiBhbnkgPSBudWxsO1xuXG4gIC8qXG4gICAqIEZhY3RvcnkgbWV0aG9kcyBmb3IgaW5zdGFuY2UgY3JlYXRpb25cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2ltcGxlSW5zdGFuY2UoXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldCxcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmdcbiAgKTogUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgICByZXR1cm4gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgIGRvY3VtZW50LFxuICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgbmFtZXNwYWNlLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBuZXdJbnN0YW5jZShvcHRpb25zOiBQYWdlU2Nyb2xsT3B0aW9ucyB8IGFueSkge1xuICAgIGlmIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMubmFtZXNwYWNlKSB8fCBvcHRpb25zLm5hbWVzcGFjZS5sZW5ndGggPD0gMCkge1xuICAgICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBQYWdlU2Nyb2xsQ29uZmlnLl9kZWZhdWx0TmFtZXNwYWNlO1xuICAgIH1cbiAgICBjb25zdCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSB8IGFueSA9IG5ldyBQYWdlU2Nyb2xsSW5zdGFuY2UoXG4gICAgICBvcHRpb25zLm5hbWVzcGFjZSxcbiAgICAgIGRvY3VtZW50XG4gICAgKTtcblxuICAgIGlmIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMuc2Nyb2xsaW5nVmlld3MpIHx8IG9wdGlvbnMuc2Nyb2xsaW5nVmlld3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2lzSW5saW5lU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX3Njcm9sbGluZ1ZpZXdzID0gW1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIGRvY3VtZW50LmJvZHksXG4gICAgICAgIGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5faXNJbmxpbmVTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9zY3JvbGxpbmdWaWV3cyA9IG9wdGlvbnMuc2Nyb2xsaW5nVmlld3M7XG4gICAgfVxuXG4gICAgcGFnZVNjcm9sbEluc3RhbmNlLl9zY3JvbGxUYXJnZXQgPSBvcHRpb25zLnNjcm9sbFRhcmdldDtcblxuICAgIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnZlcnRpY2FsU2Nyb2xsaW5nKSkge1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl92ZXJ0aWNhbFNjcm9sbGluZyA9IG9wdGlvbnMudmVydGljYWxTY3JvbGxpbmc7XG4gICAgfVxuXG4gICAgaWYgKCFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbE9mZnNldCkpIHtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fb2Zmc2V0ID0gb3B0aW9ucy5wYWdlU2Nyb2xsT2Zmc2V0O1xuICAgIH1cblxuICAgIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxFYXNpbmdMb2dpYykpIHtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fZWFzaW5nTG9naWMgPSBvcHRpb25zLnBhZ2VTY3JvbGxFYXNpbmdMb2dpYztcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbER1cmF0aW9uKSAmJlxuICAgICAgIVV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsU3BlZWQpXG4gICAgKSB7XG4gICAgICAvLyBObyBkdXJhdGlvbiBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMsIG9ubHkgaW4gdGhpcyBjYXNlIHdlIHVzZSB0aGUgc3BlZWQgb3B0aW9uIHdoZW4gcHJlc2VudFxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9zcGVlZCA9IG9wdGlvbnMucGFnZVNjcm9sbFNwZWVkO1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9kdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKCFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbER1cmF0aW9uKSkge1xuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9kdXJhdGlvbiA9IG9wdGlvbnMucGFnZVNjcm9sbER1cmF0aW9uO1xuICAgIH1cblxuICAgIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcikpIHtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fcGFnZVNjcm9sbEZpbmlzaCA9IG9wdGlvbnMucGFnZVNjcm9sbEZpbmlzaExpc3RlbmVyO1xuICAgIH1cblxuICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5faW50ZXJydXB0aWJsZSA9XG4gICAgICBvcHRpb25zLnBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlIHx8XG4gICAgICAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlKSAmJlxuICAgICAgICBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRJbnRlcnJ1cHRpYmxlKTtcblxuICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbiA9XG4gICAgICBvcHRpb25zLmFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24gfHxcbiAgICAgIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMuYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbikgJiZcbiAgICAgICAgUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0QWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbik7XG5cbiAgICByZXR1cm4gcGFnZVNjcm9sbEluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBhZ2VTY3JvbGxJbnN0YW5jZSByZXByZXNlbnRpbmcgYSBzY3JvbGwgYW5pbWF0aW9uIG9uIHRoZSBkb2N1bWVudHMgYm9keS5cbiAgICpcbiAgICogQHBhcmFtIGRvY3VtZW50IFRoZSBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBib2R5IHRvIGJlIHNjcm9sbGVkIGFuZCB0aGUgc2Nyb2xsVGFyZ2V0IGVsZW1lbnRzXG4gICAqIEBwYXJhbSBzY3JvbGxUYXJnZXQgV2hlcmUgdG8gc2Nyb2xsIHRvLiBDYW4gYmUgYSBIVE1MRWxlbWVudCByZWZlcmVuY2Ugb3IgYSBzdHJpbmcgbGlrZSAnI2VsZW1lbnRJZCdcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdG8gZ3JvdXAgc2Nyb2xsIGFuaW1hdGlvbnMgbG9naWNhbGx5XG4gICAqXG4gICAqKi9cbiAgcHVibGljIHN0YXRpYyBzaW1wbGVEaXJlY3Rpb25JbnN0YW5jZShcbiAgICBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0LFxuICAgIHZlcnRpY2FsU2Nyb2xsaW5nOiBib29sZWFuLFxuICAgIG5hbWVzcGFjZT86IHN0cmluZ1xuICApOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBzY3JvbGxUYXJnZXQsXG4gICAgICBuYW1lc3BhY2UsXG4gICAgICB2ZXJ0aWNhbFNjcm9sbGluZyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQYWdlU2Nyb2xsSW5zdGFuY2UgcmVwcmVzZW50aW5nIGEgc2Nyb2xsIGFuaW1hdGlvbiB0byB0aGUgdGFyZ2V0IGVsZW1lbnQgd2hlcmUgdGhlIHNjcm9sbGluZ1ZpZXdcbiAgICogZWxlbWVudHMgZ2V0IHNjcm9sbGVkIChsaWtlIGEgZGl2IGNvbnRhaW5lciB3aXRoIGZpeGVkIGhlaWdodCwgcmVzdWx0aW5nIGluIHNjcm9sbGJhcnMgaW4gaXQpLlxuICAgKlxuICAgKiBNYWtlIHN1cmUgdGhhdCB0aGUgc2Nyb2xsVGFyZ2V0IGlzIGxvY2F0ZWQgaW5zaWRlIHRoZSBzY3JvbGxpbmdWaWV3IGluIHRoZSBET00gaGllcmFyY2h5LCBvdGhlcndpc2UgdGhlXG4gICAqIHNjcm9sbGluZ1ZpZXcgd2lsbCBiZSBzY3JvbGxlZCB0byBhbiBhcHBhcmVudGx5IGFyYml0cmFyeSBwb3NpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGRvY3VtZW50IFRoZSBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBib2R5IHRvIGJlIHNjcm9sbGVkIGFuZCB0aGUgc2Nyb2xsVGFyZ2V0IGVsZW1lbnRzXG4gICAqIEBwYXJhbSBzY3JvbGxUYXJnZXQgV2hlcmUgdG8gc2Nyb2xsIHRvLiBDYW4gYmUgYSBIVE1MRWxlbWVudCByZWZlcmVuY2Ugb3IgYSBzdHJpbmcgbGlrZSAnI2VsZW1lbnRJZCdcbiAgICogQHBhcmFtIHNjcm9sbGluZ1ZpZXcgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWRcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdG8gZ3JvdXAgc2Nyb2xsIGFuaW1hdGlvbnMgbG9naWNhbGx5XG4gICAqXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNpbXBsZUlubGluZUluc3RhbmNlKFxuICAgIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBzY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQsXG4gICAgc2Nyb2xsaW5nVmlldzogUGFnZVNjcm9sbGluZ1ZpZXdzLFxuICAgIG5hbWVzcGFjZT86IHN0cmluZ1xuICApOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBzY3JvbGxUYXJnZXQsXG4gICAgICBzY3JvbGxpbmdWaWV3czogW3Njcm9sbGluZ1ZpZXddLFxuICAgICAgdmVydGljYWxTY3JvbGxpbmc6IHRydWUsXG4gICAgICBuYW1lc3BhY2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRvY3VtZW50IFRoZSBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBib2R5IHRvIGJlIHNjcm9sbGVkIGFuZCB0aGUgc2Nyb2xsVGFyZ2V0IGVsZW1lbnRzXG4gICAqIEBwYXJhbSBzY3JvbGxUYXJnZXQgV2hlcmUgdG8gc2Nyb2xsIHRvLiBDYW4gYmUgYSBIVE1MRWxlbWVudCByZWZlcmVuY2Ugb3IgYSBzdHJpbmcgbGlrZSAnI2VsZW1lbnRJZCdcbiAgICogQHBhcmFtIHNjcm9sbGluZ1ZpZXcgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWRcbiAgICogQHBhcmFtIHZlcnRpY2FsU2Nyb2xsaW5nIHdoZXRoZXIgdGhlIHNjcm9sbGluZyBzaG91bGQgYmUgcGVyZm9ybWVkIGluIHZlcnRpY2FsIGRpcmVjdGlvbiAodHJ1ZSwgZGVmYXVsdCkgb3IgaG9yaXpvbnRhbCAoZmFsc2UpXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgT3B0aW9uYWwgbmFtZXNwYWNlIHRvIGdyb3VwIHNjcm9sbCBhbmltYXRpb25zIGxvZ2ljYWxseVxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIG5ld0luc3RhbmNlKG9wdGlvbnM6IFBhZ2VTY3JvbGxPcHRpb25zKX1cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2ltcGxlSW5saW5lRGlyZWN0aW9uSW5zdGFuY2UoXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldCxcbiAgICBzY3JvbGxpbmdWaWV3OiBQYWdlU2Nyb2xsaW5nVmlld3MsXG4gICAgdmVydGljYWxTY3JvbGxpbmc6IGJvb2xlYW4sXG4gICAgbmFtZXNwYWNlPzogc3RyaW5nXG4gICk6IFBhZ2VTY3JvbGxJbnN0YW5jZSB7XG4gICAgcmV0dXJuIFBhZ2VTY3JvbGxJbnN0YW5jZS5uZXdJbnN0YW5jZSh7XG4gICAgICBkb2N1bWVudCxcbiAgICAgIHNjcm9sbFRhcmdldCxcbiAgICAgIHNjcm9sbGluZ1ZpZXdzOiBbc2Nyb2xsaW5nVmlld10sXG4gICAgICBuYW1lc3BhY2UsXG4gICAgICB2ZXJ0aWNhbFNjcm9sbGluZyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IHRoYXQgY29udGFpbnMgdGhlIGJvZHkgdG8gYmUgc2Nyb2xsZWQgYW5kIHRoZSBzY3JvbGxUYXJnZXQgZWxlbWVudHNcbiAgICogQHBhcmFtIHNjcm9sbFRhcmdldCBXaGVyZSB0byBzY3JvbGwgdG8uIENhbiBiZSBhIEhUTUxFbGVtZW50IHJlZmVyZW5jZSBvciBhIHN0cmluZyBsaWtlICcjZWxlbWVudElkJ1xuICAgKiBAcGFyYW0gc2Nyb2xsaW5nVmlld3MgVGhlIGVsZW1lbnRzIHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkLiBOdWxsIHRvIHVzZSB0aGUgZGVmYXVsdCBlbGVtZW50cyBvZiBkb2N1bWVudCBhbmQgYm9keS5cbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdG8gZ3JvdXAgc2Nyb2xsIGFuaW1hdGlvbnMgbG9naWNhbGx5XG4gICAqIEBwYXJhbSB2ZXJ0aWNhbFNjcm9sbGluZyB3aGV0aGVyIHRoZSBzY3JvbGxpbmcgc2hvdWxkIGJlIHBlcmZvcm1lZCBpbiB2ZXJ0aWNhbCBkaXJlY3Rpb24gKHRydWUsIGRlZmF1bHQpIG9yIGhvcml6b250YWwgKGZhbHNlKVxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbE9mZnNldCBUaGUgb2Zmc2V0IHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB0b3Agb2YgdGhlIHRhcmdldCBlbGVtZW50IG9yXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsL3VuZGVmaW5lZCB0byB1c2UgYXBwbGljYXRpb24gZGVmYXVsdFxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbEludGVycnVwdGlibGUgV2hldGhlciB0aGlzIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGJlIGludGVycnVwdGlibGUuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVsbC91bmRlZmluZWQgZm9yIGFwcGxpY2F0aW9uIGRlZmF1bHRcbiAgICogQHBhcmFtIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYyBFYXNpbmcgZnVuY3Rpb24gdG8gYmUgdXNlZCBmb3IgbWFuaXB1bGF0aW5nIHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXIgdGltZS4gTnVsbC91bmRlZmluZWQgZm9yIGFwcGxpY2F0aW9uIGRlZmF1bHRcbiAgICogQHBhcmFtIHBhZ2VTY3JvbGxEdXJhdGlvbiBUaGUgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIHRoZSBhbmltYXRpb24gc2hvdWxkIGxhc3QuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bGwvdW5kZWZpbmVkIGZvciBhcHBsaWNhdGlvbiBkZWZhdWx0XG4gICAqIEBwYXJhbSBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXIgTGlzdGVuZXIgdG8gYmUgY2FsbGVkIHRvIG5vdGlmeSBvdGhlciBwYXJ0cyBvZiB0aGUgYXBwbGljYXRpb25cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBoYXMgZmluaXNoZVxuICAgKlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhZHZhbmNlZEluc3RhbmNlKFxuICAgIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBzY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQsXG4gICAgc2Nyb2xsaW5nVmlld3M/OiBQYWdlU2Nyb2xsaW5nVmlld3NbXSxcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmcsXG4gICAgdmVydGljYWxTY3JvbGxpbmc/OiBib29sZWFuLFxuICAgIHBhZ2VTY3JvbGxPZmZzZXQ/OiBudW1iZXIsXG4gICAgcGFnZVNjcm9sbEludGVycnVwdGlibGU/OiBib29sZWFuLFxuICAgIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYz86IEVhc2luZ0xvZ2ljLFxuICAgIHBhZ2VTY3JvbGxEdXJhdGlvbj86IG51bWJlcixcbiAgICBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXI/OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj5cbiAgKTogUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgICByZXR1cm4gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgIGRvY3VtZW50LFxuICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgc2Nyb2xsaW5nVmlld3MsXG4gICAgICBuYW1lc3BhY2UsXG4gICAgICB2ZXJ0aWNhbFNjcm9sbGluZyxcbiAgICAgIHBhZ2VTY3JvbGxPZmZzZXQsXG4gICAgICBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZSxcbiAgICAgIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYyxcbiAgICAgIHBhZ2VTY3JvbGxEdXJhdGlvbixcbiAgICAgIHBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIGNvbnN0cnVjdG9yLCByZXF1aXJlcyB0aGUgcHJvcGVydGllcyBhc3N1bWVkIHRvIGJlIHRoZSBiYXJlIG1pbmltdW0uXG4gICAqIFVzZSB0aGUgZmFjdG9yeSBtZXRob2RzIHRvIGNyZWF0ZSBpbnN0YW5jZXM6XG4gICAqICAgICAge0BsaW5rIFBhZ2VTY3JvbGxJbnN0YW5jZSNzaW1wbGVJbnN0YW5jZX1cbiAgICogICAgICB7QGxpbmsgUGFnZVNjcm9sbEluc3RhbmNlI25ld0luc3RhbmNlfVxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZXNwYWNlOiBzdHJpbmcsIGRvY3VtZW50OiBEb2N1bWVudCkge1xuICAgIHRoaXMuX25hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2Nyb2xsUHJvcGVydHlWYWx1ZShzY3JvbGxpbmdWaWV3OiBhbnkpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy52ZXJ0aWNhbFNjcm9sbGluZykge1xuICAgICAgcmV0dXJuIHNjcm9sbGluZ1ZpZXcuc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgcmV0dXJuIHNjcm9sbGluZ1ZpZXcuc2Nyb2xsVG9wO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgdGhlIGV4YWN0IGxvY2F0aW9uIG9mIHRoZSBzY3JvbGxUYXJnZXQgZWxlbWVudC5cbiAgICpcbiAgICogRXh0cmFjdCB0aGUgc2Nyb2xsVGFyZ2V0IEhUTUxFbGVtZW50IGZyb20gdGhlIGdpdmVuIFBhZ2VTY3JvbGxUYXJnZXQgb2JqZWN0LiBUaGUgbGF0dGVyIG9uZSBtYXkgYmVcbiAgICogYSBzdHJpbmcgbGlrZSBcIiNoZWFkaW5nMlwiLCB0aGVuIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgRE9NIGVsZW1lbnQgZm9yIHRoYXQgaWQuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZXh0cmFjdFNjcm9sbFRhcmdldFBvc2l0aW9uKCk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcbiAgICBsZXQgc2Nyb2xsVGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQgfCBhbnk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9zY3JvbGxUYXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzY3JvbGxUYXJnZXRFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgoPHN0cmluZz50aGlzLl9zY3JvbGxUYXJnZXQpLnN1YnN0cigxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbFRhcmdldEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5fc2Nyb2xsVGFyZ2V0O1xuICAgIH1cblxuICAgIGlmIChzY3JvbGxUYXJnZXRFbGVtZW50ID09PSBudWxsIHx8IHNjcm9sbFRhcmdldEVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gU2Nyb2xsIHRhcmdldCBub3QgZm91bmRcbiAgICAgIHJldHVybiB7IHRvcDogTmFOLCBsZWZ0OiBOYU4gfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNJbmxpbmVTY3JvbGxpbmcpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0geyB0b3A6IHNjcm9sbFRhcmdldEVsZW1lbnQub2Zmc2V0VG9wLCBsZWZ0OiBzY3JvbGxUYXJnZXRFbGVtZW50Lm9mZnNldExlZnQgfTtcbiAgICAgIGlmICh0aGlzLl9hZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uICYmIHRoaXMuc2Nyb2xsaW5nVmlld3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGFjY3VtdWxhdGVkUGFyZW50c1BvcyA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gICAgICAgIC8vIG5vdCBuYW1lZCB3aW5kb3cgdG8gbWFrZSBzdXJlIHdlJ3JlIG5vdCBnZXR0aW5nIHRoZSBnbG9iYWwgd2luZG93IHZhcmlhYmxlIGJ5IGFjY2lkZW50XG4gICAgICAgIGNvbnN0IHRoZVdpbmRvdyA9IHNjcm9sbFRhcmdldEVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgbGV0IHBhcmVudEZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU3RhcnQgcGFyZW50IGlzIHRoZSBpbW1lZGlhdGUgcGFyZW50XG4gICAgICAgIC8vIGxldCBwYXJlbnQgPSBzY3JvbGxUYXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBwYXJlbnQ6IGFueSA9IHNjcm9sbFRhcmdldEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgICAvLyBJdGVyYXRlIHVwd2FyZHMgYWxsIHBhcmVudHNcbiAgICAgICAgd2hpbGUgKCFwYXJlbnRGb3VuZCAmJiAhVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChwYXJlbnQpKSB7XG4gICAgICAgICAgaWYgKHRoZVdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSA9PT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgYWNjdW11bGF0ZWRQYXJlbnRzUG9zLnRvcCArPSBwYXJlbnQub2Zmc2V0VG9wO1xuICAgICAgICAgICAgYWNjdW11bGF0ZWRQYXJlbnRzUG9zLmxlZnQgKz0gcGFyZW50Lm9mZnNldExlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIE5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgcGFyZW50Rm91bmQgPSBwYXJlbnQgPT09IHRoaXMuc2Nyb2xsaW5nVmlld3NbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudEZvdW5kKSB7XG4gICAgICAgICAgLy8gT25seSB1c2UgdGhlIHJlc3VsdHMgaWYgd2UgZm91bmQgdGhlIHBhcmVudCwgb3RoZXJ3aXNlIHdlIGFjY3VtdWxhdGVkIHRvbyBtdWNoIGFueXdheVxuICAgICAgICAgIHBvc2l0aW9uLnRvcCArPSBhY2N1bXVsYXRlZFBhcmVudHNQb3MudG9wO1xuICAgICAgICAgIHBvc2l0aW9uLmxlZnQgKz0gYWNjdW11bGF0ZWRQYXJlbnRzUG9zLmxlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKFBhZ2VTY3JvbGxDb25maWcuX2xvZ0xldmVsID49IDIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIGZpbmQgbmVzdGVkIHNjcm9sbGluZyB0YXJnZXRzIHBhcmVudCEnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gVXRpbC5leHRyYWN0RWxlbWVudFBvc2l0aW9uKHRoaXMuZG9jdW1lbnQsIHNjcm9sbFRhcmdldEVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdG9wIG9mZnNldCBvZiB0aGUgc2Nyb2xsIGFuaW1hdGlvbi5cbiAgICogVGhpcyBhdXRvbWF0aWNhbGx5IHRha2VzIHRoZSBvZmZzZXQgbG9jYXRpb24gb2YgdGhlIHNjcm9sbGluZyBjb250YWluZXIvc2Nyb2xsaW5nIHZpZXdcbiAgICogaW50byBhY2NvdW50IChmb3IgbmVzdGVkL2lubGluZSBzY3JvbGxpbmcpLlxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldEN1cnJlbnRPZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFwic2Nyb2xsVG9wXCIgb3IgXCJzY3JvbGxMZWZ0XCIgcHJvcGVydHkgZm9yIGFsbCBzY3JvbGxpbmdWaWV3cyB0byB0aGUgcHJvdmlkZWQgdmFsdWVcbiAgICogQHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IGZvciBvbmUgU2Nyb2xsVG9wU291cmNlIHRoZSBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZSBjb3VsZCBiZSBzZXQgYW5kIGl0IGtlcHQgdGhlIG5ldyB2YWx1ZS5cbiAgICogICAgICAgICAgZmFsc2UgaWYgaXQgZmFpbGVkIGZvciBhbGwgU2Nyb2xsaW5nVmlld3MsIG1lYW5pbmcgdGhhdCB3ZSBzaG91bGQgc3RvcCB0aGUgYW5pbWF0aW9uXG4gICAqICAgICAgICAgIChwcm9iYWJseSBiZWNhdXNlIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIHNjcm9sbGluZyByZWdpb24pXG4gICAqL1xuICBwdWJsaWMgc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChQYWdlU2Nyb2xsQ29uZmlnLl9sb2dMZXZlbCA+PSA1KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1Njcm9sbCBQb3NpdGlvbjogJyArIHBvc2l0aW9uKTtcbiAgICB9XG4gICAgLy8gU2V0IHRoZSBuZXcgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdG8gYWxsIHNjcm9sbGluZ1ZpZXdzIGVsZW1lbnRzXG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsaW5nVmlld3MucmVkdWNlKChvbmVBbHJlYWR5V29ya2VkOiBhbnksIHNjcm9sbGluZ1ZpZXc6IGFueSkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRTY3JvbGxQcm9wZXJ0eVZhbHVlID0gdGhpcy5nZXRTY3JvbGxQcm9wZXJ0eVZhbHVlKHNjcm9sbGluZ1ZpZXcpO1xuICAgICAgaWYgKHNjcm9sbGluZ1ZpZXcgJiYgIVV0aWwuaXNVbmRlZmluZWRPck51bGwoc3RhcnRTY3JvbGxQcm9wZXJ0eVZhbHVlKSkge1xuICAgICAgICBjb25zdCBzY3JvbGxEaXN0YW5jZSA9IE1hdGguYWJzKHN0YXJ0U2Nyb2xsUHJvcGVydHlWYWx1ZSAtIHBvc2l0aW9uKTtcblxuICAgICAgICAvLyBUaGUgbW92ZW1lbnQgd2UgbmVlZCB0byBwZXJmb3JtIGlzIGxlc3MgdGhhbiAycHhcbiAgICAgICAgLy8gVGhpcyB3ZSBjb25zaWRlciBhIHNtYWxsIG1vdmVtZW50IHdoaWNoIHNvbWUgYnJvd3NlciBtYXkgbm90IHBlcmZvcm0gd2hlblxuICAgICAgICAvLyBjaGFuZ2luZyB0aGUgc2Nyb2xsVG9wL3Njcm9sbExlZnQgcHJvcGVydHlcbiAgICAgICAgLy8gVGh1cyBpbiB0aGlzIGNhc2VzIHdlIGRvIG5vdCBzdG9wIHRoZSBzY3JvbGwgYW5pbWF0aW9uLCBhbHRob3VnaCBzZXR0aW5nIHRoZVxuICAgICAgICAvLyBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZSBcImZhaWxzXCJcbiAgICAgICAgY29uc3QgaXNTbWFsbE1vdmVtZW50ID0gc2Nyb2xsRGlzdGFuY2UgPCBQYWdlU2Nyb2xsQ29uZmlnLl9taW5TY3JvbGxEaXN0YW5jZTtcblxuICAgICAgICBpZiAoIXRoaXMudmVydGljYWxTY3JvbGxpbmcpIHtcbiAgICAgICAgICBzY3JvbGxpbmdWaWV3LnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JvbGxpbmdWaWV3LnNjcm9sbFRvcCA9IHBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIHRydWUgb2Ygc2V0dGluZyB0aGUgbmV3IHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlIHdvcmtlZFxuICAgICAgICAvLyBXZSBjb25zaWRlciB0aGF0IGl0IHdvcmtlZCBpZiB0aGUgbmV3IHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlIGlzIGNsb3NlciB0byB0aGVcbiAgICAgICAgLy8gZGVzaXJlZCBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB0aGFuIGJlZm9yZSAoaXQgbWlnaHQgbm90IGJlIGV4YWN0bHkgdGhlIHZhbHVlIHdlXG4gICAgICAgIC8vIHNldCBkdWUgdG8gZHBpIG9yIHJvdW5kaW5nIGlycmVndWxhcml0aWVzKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNTbWFsbE1vdmVtZW50IHx8XG4gICAgICAgICAgc2Nyb2xsRGlzdGFuY2UgPiBNYXRoLmFicyh0aGlzLmdldFNjcm9sbFByb3BlcnR5VmFsdWUoc2Nyb2xsaW5nVmlldykgLSBwb3NpdGlvbilcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvbmVBbHJlYWR5V29ya2VkO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGZpcmluZyBhIGFuaW1hdGlvbiBmaW5pc2ggZXZlbnRcbiAgICogQHBhcmFtIHZhbHVlIFdoZXRoZXIgdGhlIGFuaW1hdGlvbiBmaW5pc2hlZCBhdCB0aGUgdGFyZ2V0ICh0cnVlKSBvciBnb3QgaW50ZXJydXB0ZWQgKGZhbHNlKVxuICAgKi9cbiAgcHVibGljIGZpcmVFdmVudCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wYWdlU2Nyb2xsRmluaXNoKSB7XG4gICAgICB0aGlzLl9wYWdlU2Nyb2xsRmluaXNoLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggdGhlIGludGVycnVwdCBsaXN0ZW5lcnMgdG8gdGhlIFBhZ2VTY3JvbGxJbnN0YW5jZSBib2R5LiBUaGUgZ2l2ZW4gaW50ZXJydXB0UmVwb3J0ZXJcbiAgICogd2lsbCBiZSBjYWxsZWQgaWYgYW55IG9mIHRoZSBhdHRhY2hlZCBldmVudHMgaXMgZmlyZWQuXG4gICAqXG4gICAqIFBvc3NpYmx5IGF0dGFjaGVkIGludGVycnVwdExpc3RlbmVycyBhcmUgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gdGhlIGJvZHkgYmVmb3JlIHRoZSBuZXcgb25lIHdpbGwgYmUgYXR0YWNoZWQuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgYXR0YWNoSW50ZXJydXB0TGlzdGVuZXJzKGludGVycnVwdFJlcG9ydGVyOiBJbnRlcnJ1cHRSZXBvcnRlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lcnNBdHRhY2hlZCkge1xuICAgICAgLy8gRGV0YWNoIHBvc3NpYmx5IGV4aXN0aW5nIGxpc3RlbmVycyBmaXJzdFxuICAgICAgdGhpcy5kZXRhY2hJbnRlcnJ1cHRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgdGhpcy5faW50ZXJydXB0TGlzdGVuZXIgPSAoZXZlbnQ6IEV2ZW50KTogYW55ID0+IHtcbiAgICAgIGludGVycnVwdFJlcG9ydGVyLnJlcG9ydChldmVudCwgdGhpcyk7XG4gICAgfTtcbiAgICBQYWdlU2Nyb2xsQ29uZmlnLl9pbnRlcnJ1cHRFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT5cbiAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lcilcbiAgICApO1xuICAgIHRoaXMuX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGJvZHkgYW5kIHN0b3AgbGlzdGVuaW5nIGZvciBldmVudHMgdGhhdCBtaWdodCBiZSB0cmVhdGVkIGFzIFwiYW5pbWF0aW9uXG4gICAqIGludGVycnVwdFwiIGV2ZW50cy5cbiAgICovXG4gIHB1YmxpYyBkZXRhY2hJbnRlcnJ1cHRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgUGFnZVNjcm9sbENvbmZpZy5faW50ZXJydXB0RXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcy5faW50ZXJydXB0TGlzdGVuZXIpXG4gICAgKTtcbiAgICB0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lcnNBdHRhY2hlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lc3BhY2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICB9XG5cbiAgZ2V0IHNjcm9sbFRhcmdldCgpOiBQYWdlU2Nyb2xsVGFyZ2V0IHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsVGFyZ2V0O1xuICB9XG5cbiAgZ2V0IHZlcnRpY2FsU2Nyb2xsaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbFNjcm9sbGluZztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2Nyb2xsaW5nVmlld3MoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxpbmdWaWV3cztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgc3RhcnRTY3JvbGxQb3NpdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RhcnRTY3JvbGxQb3NpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGFydFNjcm9sbFBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0U2Nyb2xsUG9zaXRpb247XG4gIH1cblxuICBwdWJsaWMgc2V0IHRhcmdldFNjcm9sbFBvc2l0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90YXJnZXRTY3JvbGxQb3NpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCB0YXJnZXRTY3JvbGxQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRTY3JvbGxQb3NpdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgZGlzdGFuY2VUb1Njcm9sbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGlzdGFuY2VUb1Njcm9sbCA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBkaXN0YW5jZVRvU2Nyb2xsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3RhbmNlVG9TY3JvbGw7XG4gIH1cblxuICBnZXQgZXhlY3V0aW9uRHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uRHVyYXRpb247XG4gIH1cblxuICBzZXQgZXhlY3V0aW9uRHVyYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2V4ZWN1dGlvbkR1cmF0aW9uID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGR1cmF0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBzcGVlZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZWFzaW5nTG9naWMoKTogRWFzaW5nTG9naWMge1xuICAgIHJldHVybiB0aGlzLl9lYXNpbmdMb2dpYztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJydXB0aWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJydXB0aWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgc3RhcnRUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RhcnRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgZW5kVGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZW5kVGltZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBlbmRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZFRpbWU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHRpbWVyKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl90aW1lciA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCB0aW1lcigpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl90aW1lcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkO1xuICB9XG59XG5cbi8qKlxuICogQW4gSW50ZXJmYWNlIGEgbGlzdGVuZXIgc2hvdWxkIGltcGxlbWVudCB0byBiZSBub3RpZmllZCBhYm91dCBwb3NzaWJsZSBpbnRlcnJ1cHQgZXZlbnRzXG4gKiB0aGF0IGhhcHBlbmVkIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uIHdoaWxlIGEgc2Nyb2xsIGFuaW1hdGlvbiB0YWtlcyBwbGFjZS5cbiAqXG4gKiBUaGUgUGFnZVNjcm9sbFNlcnZpY2UgcHJvdmlkZXMgYW4gaW1wbGVtZW50YXRpb24gdG8gYSBQYWdlU2Nyb2xsSW5zdGFuY2UgdG8gYmUgbm90aWZpZWRcbiAqIGFib3V0IHNjcm9sbCBhbmltYXRpb24gaW50ZXJydXB0cyBhbmQgc3RvcCByZWxhdGVkIGFuaW1hdGlvbnMuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcnJ1cHRSZXBvcnRlciB7XG4gIHJlcG9ydDogKGV2ZW50OiBFdmVudCwgcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UpID0+IGFueTtcbn1cbiJdfQ==