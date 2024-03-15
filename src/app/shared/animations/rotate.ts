import {animate, group, query, style, transition, trigger} from "@angular/animations";

export let rotate = trigger('rotate', [
  transition(':enter', [
      animate('.5s ease-in', style({
        transform: 'rotate(360deg) scale(0.9)'
      }))
    ],
  ),
  transition(':leave', [
      animate('.5s ease-out', style({
        transform: 'rotate(-360deg) scale(0.9)'
      }))
    ],
  )
]);
