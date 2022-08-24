import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[sample]'
})

export class SampleDirective implements OnInit{
    constructor(private element:ElementRef, private renderer:Renderer2){}
    @Input() color:string='black'
    @Input() backgroundColor:string = 'transparent'
   @HostBinding('style.color')textColor!:string
   @HostBinding('style.backgroundColor')background!:string
    ngOnInit(): void {
        // this.element.nativeElement.style.backgroundColor='coral'
        // this.element.nativeElement.style.color='white'
        // this.renderer.setStyle(this.element.nativeElement, 'background-color','red')
        // this.renderer.setStyle(this.element.nativeElement, 'color','white')
    }
    @HostListener('mouseenter') mouseenter(eventData:Event){
        // this.renderer.setStyle(this.element.nativeElement, 'background-color','red')
        // this.renderer.setStyle(this.element.nativeElement, 'color','white')
        this.textColor='red'
        this.background='white'
    }
    @HostListener('mouseleave') mouseleave(eventData:Event){
        // this.renderer.setStyle(this.element.nativeElement, 'background-color','transparent')
        // this.renderer.setStyle(this.element.nativeElement, 'color','grey')
        this.textColor=this.color
        this.background=this.background
    }
}