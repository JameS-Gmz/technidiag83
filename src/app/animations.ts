import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('void', style({ opacity: 0 })),
  state('*', style({ opacity: 1 })),
  transition(':enter', [
    animate('300ms ease-in')
  ]),
  transition(':leave', [
    animate('300ms ease-out')
  ])
]);

export const slideInOut = trigger('slideInOut', [
  state('void', style({ transform: 'translateY(-20px)', opacity: 0 })),
  state('*', style({ transform: 'translateY(0)', opacity: 1 })),
  transition(':enter', [
    animate('400ms ease-out')
  ]),
  transition(':leave', [
    animate('400ms ease-in')
  ])
]);

export const scaleInOut = trigger('scaleInOut', [
  state('void', style({ transform: 'scale(0.95)', opacity: 0 })),
  state('*', style({ transform: 'scale(1)', opacity: 1 })),
  transition(':enter', [
    animate('300ms ease-out')
  ]),
  transition(':leave', [
    animate('300ms ease-in')
  ])
]);

export const rotateInOut = trigger('rotateInOut', [
  state('void', style({ transform: 'rotate(-5deg)', opacity: 0 })),
  state('*', style({ transform: 'rotate(0)', opacity: 1 })),
  transition(':enter', [
    animate('400ms ease-out')
  ]),
  transition(':leave', [
    animate('400ms ease-in')
  ])
]); 