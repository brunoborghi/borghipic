import { Component, Input } from '@angular/core';

@Component({
    selector: 'bp-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent {
    @Input() text = '';
}