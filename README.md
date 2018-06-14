# ProvideInTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Services

### AppModule

| ServiceName  | Provide                | Injected                     | Shipped   |
| ------------ | ---------------------- | ---------------------------- | --------- |
| OneService   | AppModule providers:[] | XXX                          | AppModule |
| TwoService   | providedIn: "root"     | TwoComponent                 | AppModule |
| ThreeService | AppModule providers:[] | imported into ThreeComponent | AppModule |
| FourService  | providedIn: "root"     | XXX                          | XXX       |

### LazyModule

| ServiceName  | Provide            | Injected      | Shipped    |
| ------------ | ------------------ | ------------- | ---------- |
| LazyService  | providedIn: "root" | LazyComponent | LazyModule |
| Lazy2Service | providedIn: "root" | XXX           | XXX        |

<img src="https://pbs.twimg.com/media/DfoYIDkX4AABx54.jpg:large">
