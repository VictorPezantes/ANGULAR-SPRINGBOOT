/**
 * Created by sebastianfuss on 02.09.16.
 */
export class PageScrollUtilService {
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param variable
  true the variable is undefined or null
     */
    static isUndefinedOrNull(variable) {
        return typeof variable === 'undefined' || variable === undefined || variable === null;
    }
    static extractElementPosition(document, scrollTargetElement) {
        const body = document.body;
        const docEl = document.documentElement;
        const windowPageYOffset = (document.defaultView && document.defaultView.pageYOffset) || undefined;
        const windowPageXOffset = (document.defaultView && document.defaultView.pageXOffset) || undefined;
        const scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        const scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        const clientTop = docEl.clientTop || body.clientTop || 0;
        const clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (PageScrollUtilService.isUndefinedOrNull(scrollTargetElement)) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        const box = scrollTargetElement.getBoundingClientRect();
        const top = box.top + scrollTop - clientTop;
        const left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLXV0aWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBYTtRQUMzQyxPQUFPLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxRQUFRLEtBQUssU0FBUyxJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUM7SUFDeEYsQ0FBQztJQUVNLE1BQU0sQ0FBQyxzQkFBc0IsQ0FDbEMsUUFBa0IsRUFDbEIsbUJBQWdDO1FBRWhDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0IsTUFBTSxLQUFLLEdBQVEsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUU1QyxNQUFNLGlCQUFpQixHQUNyQixDQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUssUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFtQixDQUFDLElBQUksU0FBUyxDQUFDO1FBQ25GLE1BQU0saUJBQWlCLEdBQ3JCLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQW1CLENBQUMsSUFBSSxTQUFTLENBQUM7UUFFbkYsTUFBTSxTQUFTLEdBQUcsaUJBQWlCLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pFLE1BQU0sVUFBVSxHQUFHLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUU1RSxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3pELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFFNUQsSUFBSSxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQ2hFLDhGQUE4RjtZQUM5RixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7U0FDN0M7UUFDRCxNQUFNLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRXhELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM1QyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDMUQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHNlYmFzdGlhbmZ1c3Mgb24gMDIuMDkuMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhZ2VTY3JvbGxVdGlsU2VydmljZSB7XG4gIC8qKlxuICAgKiBVdGlsIG1ldGhvZCB0byBjaGVjayB3aGV0aGVyIGEgZ2l2ZW4gdmFyaWFibGUgaXMgZWl0aGVyIHVuZGVmaW5lZCBvciBudWxsXG4gICAqIEBwYXJhbSB2YXJpYWJsZVxudHJ1ZSB0aGUgdmFyaWFibGUgaXMgdW5kZWZpbmVkIG9yIG51bGxcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNVbmRlZmluZWRPck51bGwodmFyaWFibGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT09ICd1bmRlZmluZWQnIHx8IHZhcmlhYmxlID09PSB1bmRlZmluZWQgfHwgdmFyaWFibGUgPT09IG51bGw7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGV4dHJhY3RFbGVtZW50UG9zaXRpb24oXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHNjcm9sbFRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50XG4gICk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBkb2NFbDogYW55ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgY29uc3Qgd2luZG93UGFnZVlPZmZzZXQ6IG51bWJlciB8IGFueSA9XG4gICAgICAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgKGRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0IGFzIGFueSkpIHx8IHVuZGVmaW5lZDtcbiAgICBjb25zdCB3aW5kb3dQYWdlWE9mZnNldDogbnVtYmVyIHwgYW55ID1cbiAgICAgIChkb2N1bWVudC5kZWZhdWx0VmlldyAmJiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQgYXMgYW55KSkgfHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93UGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3dQYWdlWE9mZnNldCB8fCBkb2NFbC5zY3JvbGxMZWZ0IHx8IGJvZHkuc2Nyb2xsTGVmdDtcblxuICAgIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICAgIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgaWYgKFBhZ2VTY3JvbGxVdGlsU2VydmljZS5pc1VuZGVmaW5lZE9yTnVsbChzY3JvbGxUYXJnZXRFbGVtZW50KSkge1xuICAgICAgLy8gTm8gZWxlbWVudCBmb3VuZCwgc28gcmV0dXJuIHRoZSBjdXJyZW50IHBvc2l0aW9uIHRvIG5vdCBjYXVzZSBhbnkgY2hhbmdlIGluIHNjcm9sbCBwb3NpdGlvblxuICAgICAgcmV0dXJuIHsgdG9wOiBzY3JvbGxUb3AsIGxlZnQ6IHNjcm9sbExlZnQgfTtcbiAgICB9XG4gICAgY29uc3QgYm94ID0gc2Nyb2xsVGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHRvcCA9IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3A7XG4gICAgY29uc3QgbGVmdCA9IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQ7XG5cbiAgICByZXR1cm4geyB0b3A6IE1hdGgucm91bmQodG9wKSwgbGVmdDogTWF0aC5yb3VuZChsZWZ0KSB9O1xuICB9XG59XG4iXX0=