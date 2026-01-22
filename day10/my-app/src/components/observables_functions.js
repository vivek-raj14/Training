import { of, from } from "rxjs";
import { map, filter, switchMap } from "rxjs/operators";
const numbers$ = of(1, 2, 3, 4, 5);

const sub1 = numbers$
  .pipe(
    map((n) => n * 2),
    filter((n) => n > 5),
  )
  .subscribe((value) => {
    console.log("map + filter:", value);
  });
const letters$ = from(["A", "B", "C"]);

const sub2 = letters$
  .pipe(
    switchMap((letter) => {
      return from(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(`Response for ${letter}`);
          }, 1000);
        }),
      );
    }),
  )
  .subscribe((value) => {
    console.log("switchMap:", value);
  });
setTimeout(() => {
  sub1.unsubscribe();
  sub2.unsubscribe();
  console.log("All subscriptions unsubscribed");
}, 4000);
