npm init nx-workspace


nx serve  api
nx serve  pis
nx test api
nx test pis

nx e2e pis-e2e

nx list： 列出已经有的功能

nx list @schematics/angular

>  NX  Capabilities in @schematics/angular :


nx g  @schematics/angular:module ebbinghaus  创立 新module

npm init nx-workspace   先创立 empty project。 z
ng add @nrwl/angular
ng add @nrwl/nest

ng g @nrwl/angular:application ui

nx g  @nrwl/nest:app api

# 资料

- 关于authentication and jwt
- https://jasonwatmore.com/post/2019/06/22/angular-8-jwt-authentication-example-tutorial   



Promise 的缺点：
1：不能取消， 2： 由于 Promise 只会承载一个值

函数响应式编程（FRP）： 

Observable 必须被 subscribe 之后才会开始生产数据。如果没人 subscribe 它，那就什么都不会做。