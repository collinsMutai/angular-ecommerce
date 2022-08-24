import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appJituif]'
})
export class JituifDirective {
@Input() set appJituif(condition:boolean){
 
if(condition){
    this.templateRef.createEmbeddedView(this.templateRef)
}else{
  this.viewContainer.clear()
}
}
constructor(private templateRef:TemplateRef<any>, private viewContainer:ViewContainerRef) {} 
}
