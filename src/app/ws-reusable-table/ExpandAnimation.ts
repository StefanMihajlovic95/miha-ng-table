import {trigger, style, transition, animate, state} from '@angular/animations';

export const expandAnimation = [
  trigger('expandAnimation', [
    state('true', style({width: '300px'})),
    state('false', style({width: '131px'})),
    transition('* => *', animate('100ms linear'))
  ]),
];

