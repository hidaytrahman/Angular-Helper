# Angular Interview Questions with Answers

## Basic
### What is Angular and Why Angular?
Angular is not a programming language like Javascript or Typescript. Angular is a front-end or client-side Framework, N"Angular is a client-side framework"? It means that it runs on the client-side or user's browser and not on a Web Server (where java/python/run). Of course, there is the [Angular Universal](https://angular.io/guide/universal) which allows Angular to run on a server; but, primarily, angular is a client-side framework. Angular is a product developed and maintained by the techie giant Google and has adopted the SPA (Single Page Application) principles.

### What’s new in Angular 5?
_Certain tools are optimized in the new version of Angular, let us see what the tools are:_

* Angular 5 supports Typescript version 2.4

* Angular 5 supports RxJS 5.5 which has new features like Pipeable Operators

* A build tool to make the js bundles (files) lighter

* Ahead of Time (AOT) is updated to be on by default

* Events like ActivationStart and ActivationEnd are introduced in Router

### What is Ahead of Time (AOT) ?
**It's compiles your app at build time.**

_Commands__
```javascript
ng build --aot
ng serve --aot
```
[More Details](https://angular.io/guide/aot-compiler)
