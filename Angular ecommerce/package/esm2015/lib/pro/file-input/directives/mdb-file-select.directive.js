import { __decorate, __metadata, __param } from "tslib";
import { ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy, PLATFORM_ID, Inject, ViewEncapsulation, Component, } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { MDBUploaderService } from '../classes/mdb-uploader.class';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let MDBFileSelectDirective = 
// tslint:disable-next-line:component-class-suffix
class MDBFileSelectDirective {
    constructor(platform_id, elementRef) {
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this._destroy$ = new Subject();
        this.isServer = isPlatformServer(this.platform_id);
        this.fileListener = () => {
            this.upload.handleFiles(this.el.files);
            this.el.value = '';
        };
        this.uploadOutput = new EventEmitter();
    }
    ngOnInit() {
        if (this.isServer) {
            return;
        }
        const concurrency = (this.options && this.options.concurrency) || Number.POSITIVE_INFINITY;
        const allowedContentTypes = (this.options && this.options.allowedContentTypes) || ['*'];
        const maxUploads = (this.options && this.options.maxUploads) || Number.POSITIVE_INFINITY;
        this.upload = new MDBUploaderService(concurrency, allowedContentTypes, maxUploads);
        this.el = this.elementRef.nativeElement;
        this.el.addEventListener('change', this.fileListener, false);
        this.upload.serviceEvents.pipe(takeUntil(this._destroy$)).subscribe((event) => {
            this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
    }
    ngOnDestroy() {
        if (this.isServer) {
            return;
        }
        if (this.el) {
            this.el.removeEventListener('change', this.fileListener, false);
        }
        if (this.uploadInput) {
            this.uploadInput.unsubscribe();
        }
        this._destroy$.next();
        this._destroy$.complete();
    }
};
MDBFileSelectDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef }
];
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], MDBFileSelectDirective.prototype, "uploadInput", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MDBFileSelectDirective.prototype, "options", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MDBFileSelectDirective.prototype, "uploadOutput", void 0);
MDBFileSelectDirective = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: '[mdbFileSelect]',
        template: '<ng-content></ng-content>',
        encapsulation: ViewEncapsulation.None,
        styles: [".file-field{position:relative;display:flex;flex-direction:row}.file-field .file-path-wrapper{padding-left:10px;height:2.5rem;overflow:visible;display:flex;flex-grow:1}.file-field input[type=file]::-webkit-file-upload-button{display:none}.file-field .file-path-wrapper:after{content:\"\";clear:both}.file-field input.file-path{background-color:transparent;border:none;border-bottom:1px solid #ccc;border-radius:0;outline:0;height:2.1rem;width:100%;font-size:1rem;box-shadow:none;box-sizing:content-box;transition:.3s}.file-field .btn{position:relative;display:flex;float:none}.file-field .btn:hover{cursor:pointer}.file-field .btn input[type=file]{height:100%}.file-field .btn input[type=file] :hover,.file-field span{cursor:pointer}.file-field input[type=file]{opacity:0;position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:1px;cursor:pointer;opacity:0}.file-field input[type=file]::-ms-value{display:none}.file-field input[type=file]::-ms-browse{width:100%}.btn-file{padding-top:1px}"]
    })
    // tslint:disable-next-line:component-class-suffix
    ,
    __param(0, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [Object, ElementRef])
], MDBFileSelectDirective);
export { MDBFileSelectDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZpbGUtc2VsZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZmlsZS1pbnB1dC9kaXJlY3RpdmVzL21kYi1maWxlLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFnQixNQUFNLCtCQUErQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVTNDLElBQWEsc0JBQXNCO0FBRG5DLGtEQUFrRDtBQUNsRCxNQUFhLHNCQUFzQjtJQVlqQyxZQUF5QyxXQUFnQixFQUFVLFVBQXNCO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFLO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVBqRixjQUFTLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7UUFHakQsYUFBUSxHQUFZLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQStDdkQsaUJBQVksR0FBRyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBN0NBLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7SUFDdkQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQzNGLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hGLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUN6RixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRW5GLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRTtZQUMxRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFdBQVcsWUFBWSxZQUFZLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FNRixDQUFBOzs0Q0EvQ2MsTUFBTSxTQUFDLFdBQVc7WUFBZ0QsVUFBVTs7QUFYaEY7SUFBUixLQUFLLEVBQUU7OEJBQWMsWUFBWTsyREFBTTtBQUMvQjtJQUFSLEtBQUssRUFBRTs7dURBQTBCO0FBQ3hCO0lBQVQsTUFBTSxFQUFFOzhCQUFlLFlBQVk7NERBQWU7QUFIeEMsc0JBQXNCO0lBUmxDLFNBQVMsQ0FBQztRQUNULDhDQUE4QztRQUM5QyxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSwyQkFBMkI7UUFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7SUFDRixrREFBa0Q7O0lBYW5DLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOzZDQUErQyxVQUFVO0dBWjlFLHNCQUFzQixDQTJEbEM7U0EzRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgUExBVEZPUk1fSUQsXG4gIEluamVjdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbXBvbmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1EQlVwbG9hZGVyU2VydmljZSwgVXBsb2FkT3V0cHV0IH0gZnJvbSAnLi4vY2xhc3Nlcy9tZGItdXBsb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgVXBsb2FkZXJPcHRpb25zIH0gZnJvbSAnLi4vY2xhc3Nlcy9tZGItdXBsb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1ttZGJGaWxlU2VsZWN0XScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuLy4uL2ZpbGUtaW5wdXQtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIE1EQkZpbGVTZWxlY3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHVwbG9hZElucHV0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgb3B0aW9uczogVXBsb2FkZXJPcHRpb25zO1xuICBAT3V0cHV0KCkgdXBsb2FkT3V0cHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkT3V0cHV0PjtcblxuICBwcml2YXRlIF9kZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgdXBsb2FkOiBNREJVcGxvYWRlclNlcnZpY2U7XG4gIGlzU2VydmVyOiBib29sZWFuID0gaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtX2lkKTtcbiAgLy8gZWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGVsOiBIVE1MSW5wdXRFbGVtZW50IHwgYW55O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1faWQ6IGFueSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy51cGxvYWRPdXRwdXQgPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZE91dHB1dD4oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmlzU2VydmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uY3VycmVuY3kgPSAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5jb25jdXJyZW5jeSkgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIGNvbnN0IGFsbG93ZWRDb250ZW50VHlwZXMgPSAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5hbGxvd2VkQ29udGVudFR5cGVzKSB8fCBbJyonXTtcbiAgICBjb25zdCBtYXhVcGxvYWRzID0gKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubWF4VXBsb2FkcykgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIHRoaXMudXBsb2FkID0gbmV3IE1EQlVwbG9hZGVyU2VydmljZShjb25jdXJyZW5jeSwgYWxsb3dlZENvbnRlbnRUeXBlcywgbWF4VXBsb2Fkcyk7XG5cbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmZpbGVMaXN0ZW5lciwgZmFsc2UpO1xuXG4gICAgdGhpcy51cGxvYWQuc2VydmljZUV2ZW50cy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoZXZlbnQ6IFVwbG9hZE91dHB1dCkgPT4ge1xuICAgICAgdGhpcy51cGxvYWRPdXRwdXQuZW1pdChldmVudCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy51cGxvYWRJbnB1dCBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgICAgdGhpcy51cGxvYWQuaW5pdElucHV0RXZlbnRzKHRoaXMudXBsb2FkSW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmlzU2VydmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWwpIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5maWxlTGlzdGVuZXIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51cGxvYWRJbnB1dCkge1xuICAgICAgdGhpcy51cGxvYWRJbnB1dC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZmlsZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgIHRoaXMudXBsb2FkLmhhbmRsZUZpbGVzKHRoaXMuZWwuZmlsZXMpO1xuICAgIHRoaXMuZWwudmFsdWUgPSAnJztcbiAgfTtcbn1cbiJdfQ==