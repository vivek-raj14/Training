import { of, from } from "rxjs";

import { map, filter } from "rxjs/operators";

const ob1$ = of(1, 2, 3, 4, 5);

export const sub1 = ob1$
  .pipe(
    map((n) => n * 2),
    filter((n) => n > 5),
  )
  .subscribe(console.log);

const ob2$ = from([1, 2, 3, 4]);

export const sub2 = ob2$
  .pipe(
    map((n) => n * 2),
    filter((n) => n > 2),
  )
  .subscribe(console.log);
setTimeout(() => {
  sub1.unsubscribe();
  sub2.unsubscribe();
  console.log("Unsubscribed from all observables");
}, 3000);
