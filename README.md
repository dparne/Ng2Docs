# Angular 2 Guidelines

### Node
- Using ```nvm``` is recommended to manage node installation as you can easily switch from one version to another.
- Needs to go to top.., Setup Section

### SystemJS and Angular CLI
- SystemJS takes care of importing appropriate javascript files when needed.
- If you would like to not worry about the SystemJS file and managing it specifically using Angular CLI is recommended.
- If this is your first time with Angular 2, it is recommended to understand the [bootstrap process](angular-bootstrap) of an Angular AppModule.

### Typescript
- Typescript is a superscript of javascript. With static typing it is helpful in an easier transition for developers coming from an object oriented programming experience. 
- You can find some guidelines for typescript development [here](typescript)

### Angular Style Guide
- Follow [this](https://angular.io/docs/ts/latest/guide/style-guide.html) style guide when developing angular applications

### Modules
- Make use of Angular modules to group related sections of a website so that they are only loaded when the section of the website is visited
- You will need to import a component once for each module if you are using them across modules.
- Services are an exception. They are providers injected at the root level. So they are available to all modules.
- Provide Example, Naming Conventions

### Inline Templates / External Templates
- Use ES6 specification string literal for multiline strings when writing inline html templates
- Using external templates better organizes your code and keeps your component typescript file clean.
- Examples for each...

### Data Communication
- Use ```@Input``` and ```@Output``` declarations to pass data between parent and child components
- Refer to ```EventEmitter``` for actions that need callbacks. Using it to emit events makes handling them in parent components easy with the ```@Output``` property handler.
- Template variables can also be used for instant access of public variables and functions of child components in parent components.
- Template variables are declared inside an html tag with # prefix. Example : ```#child_component```
- more examples

### Repeating Data
- ```<component *ngFor="let data of dataSet" [data]="data">```
- Here ```*ngFor``` is used to iterate over a list of data i.e ```dataSet``` to create multiple components.
- The expression for repeating over ```dataSet``` is a Typescript expression for a ```for``` loop
- ```*ngFor``` is called a structural directive. A structural directive is something which adds or removes elements from DOM

### Styles
- Checkout [```BEM```](getbem.com/introduction) and [```smacss```](smacss.com)

### Interpolation, Property Binding, Events and Statements

#### Interpolation & Property Binding (Uses Expressions)
- ```<h2>{{data.value}}<h2>``` <-- Interpolation
- ```<img [src]="data.value" />``` <-- Property Binding

##### Expression Don'ts
- Assignments (=, +=, ++, etc)
- new Keyword
- Expression Chaining With ;
- Global Namespace (console, window, etc..)

##### Expression Recommendations
- Should Have No Side-Effects (should not change the state of the app)
- Should Evaluate Fast
- Keep it Simple
- Should be Idempotent

#### Event Binding & Statements (Uses Template Statements)
- ```<button (click)="someFunction()"></button>```
- Here assigning a behavior to ```(click)``` is called Event Binding and the behavior ```someFunction()``` is Statement.

##### Statement Restrictions
- Assignments except = (+=, ++, etc)
- new Keyword
- Global Namespace (console, window, etc..)

##### Statement Recommendations
- Keep it Simple

#### Template Syntax
- Take a look at ```?``` operator. If you are familiar with swift, it's kinda like an optional. whenever you do ```variable?``` it is handled safely.
- You can also chain these like ```data?.value?``` so that it can be safely handled both when ```data``` is null/undefined or ```data.value``` is null/undefined
- You can use ```ngIf``` to optionally show the element if the expression is not null/undefined. Ex : ```<someTag *ngIf="data?.value?"></someTag>``` will be displayed on if the value is actually there
- ```*ngIf``` comments out the DOM element when the app is rendered. So it is not a good approach when you need the element to switch from hidden and showing status.
- Assigning the expression to ```[hidden]``` property of an element instead keeps it in the DOM but only hides it. So choose one over the other in relation to your requirements.
- You can use ```[ngSwitch]``` to show different elements by a case by case basis. You just add a ```*ngSwitchCase="someChildData"``` property to any child element with ```[ngSwitch]=data?``` property. The child element will only show when ```data``` is equal to ```someChildData```
- Checkout ```[class.value]``` and ```[ngClass]``` to find out how you can do conditional class binding for DOM elements in your HTML
- Similarly check ```[style.value]``` and ```[ngStyle]``` to do conditional styles for DOM elements

### Services
- It is highly recommended to have the business logic in a Service
- A service class needs to be declared as ```@Injectable``` and declared as a provider in AppModule
- Always try to wrap third party services to make it testable.
- Services do not have lifecycle functions

### Component Lifecycle
- It is recommended to make use of component lifecycle interface to do the logic that needs to be done when the view is loaded etc..

### Routing
- Use ```@ActivatedRoute``` to access routing parameters in the url
- Use ```[routerLink]``` to link to different route from an anchor link.
- In router definitions if two paths match the order of declaration takes precedence.
- To navigate from code import router using ```import {Router} from '@angular/router'``` statement and inject it using a constructor. Once injected you can do ```this.router.navigate(['/route'])```
- Use ```canActivate``` and ```canDeactivate``` route guards for preventing users from navigating to an undesired location or showing something when they do access an undesired location
- Use __resolve__ property in your paths of appRoutes object to preload content. This is typically useful for any API calls that need to happen before showing the component to the user.
- You can use ```routerLinkActive``` attribute to set styles by applying classes only when the route matches the ```routerLink```. But say you have ```/paths``` and ```/paths/one```, they both match ```/paths```. In this case you can specify the path to be exact by using ```[routerLinkActiveOptions]="{exact:true}"```.


### Tips
- Adding prefix ```+``` to an expression casts it to a number
- Adding prefix ```!!``` to an expression casts it to a boolean
- ```...``` is spread operator which expands an array to a set of values. It can be used to pass an array to a function which takes multiple parameters
- Create barrels i.e ```index.ts``` files wherever possible

### Cloud Foundry Deployment

##### Example manifest.yml

```
---
applications:
- name: solsticeexperience
  buildpack: staticfile_buildpack
  disk_quota: 64M
  memory: 64M
  path: dist```
