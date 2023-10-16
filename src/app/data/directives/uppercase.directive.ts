import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(private ref: ElementRef, private control: NgControl) {
  }

  @HostListener('input', ['$event']) onEvent() {
    let upper = this.ref.nativeElement.value.toUpperCase();
    this.control?.control?.setValue(upper);
  }

}


