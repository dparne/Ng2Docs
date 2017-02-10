### Angular Bootstrap AppModule
So to create a very basic website, traditionally all you need is just an html file say like following and you have a static website which greets the user with probably the most young applications first sentence "Hello World!"

```
<html>
Hello World!
</html>
```


Let's build the same thing with an Angular framework without getting into much of other  details. This is just what you will need to have a page show "Hello World". But instead of being a static page. We will have an Angular application. (We will need a server to run this on. We will use ```lite-server``` for this)

##### Step 1
- Make sure you have node installed. Best way to do that is by using ```nvm```
- Now install typescript using the following command, since we use typescript in Angular 2
  ```npm install -g typescript```
- We need a package.json file as the Angular 2 project is like an npm package
- Let's add basic details like this
```
{
  "name": "angular-bootstrap-example",
  "version": "1.0.0",
  "description": "QuickStart package.json from the documentation, supplemented with testing support",
  "dependencies": {
    "@angular/common": "~2.4.0",
    "@angular/compiler": "~2.4.0",
    "@angular/core": "~2.4.0",
    "@angular/platform-browser": "~2.4.0",
    "@angular/platform-browser-dynamic": "~2.4.0",
    "rxjs": "5.0.1",
    "zone.js": "^0.7.4"
  }
}
```
- These are the basic angular dependencies we need for a project
- Run ```npm install``` to get all these installed as __node_modules__ in your working directory

##### Step 2
- Now create a directory structure of ```app/src``` where your ```package.json``` is
- Add an ```index.html``` file in your app folder
- Create two files ```app.module.ts``` and ```app.component.ts```. Angular apps needs at least one module and we wanna load the "Hello World" from the component to prove it out
- Add this to ```app.module.ts```. It's the most basic stuff

```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```
- And add this to ```app.component.ts```. Again this is also very basic

```
import { Component } from "@angular/core";

@Component({
    selector : 'app-root',
    template : `
        <p>Hello World!</p>
    `
})
export class AppComponent {

}
```
- Now since the selector of the AppComponent is ```app-root```, Let's make the index.html file look like this

```
<html>
<body>
    <app-root></app-root>
</body>
</html>
```
- Ok going forward we won't touch either the module file or the component file.

##### Step 3
- Ok now we want to compile typescript to javascript and we need a server that we need to run our website on.
- Since we already installed __typescript__, you will have ```tsc``` executable installed on your computer.
- ```tsc -p {dir}/``` will compile all the typescript files inside the given directory if we have a tsconfig.json file in there. So let's create it at ```src```

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": [ "es2015", "dom" ],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  }
}
```
- Now let's add lite-server as devDependencies in __pacakge.json__
- After that create config file __bs-config.json__ for __lite-server__ with content

```
{
  "server": {
    "baseDir": "src",
    "routes": {
      "/node_modules": "node_modules"
    }
  }
}
```
- Now let's add two scripts to our __pacakge.json__, one build and other to serve the website. Add this

```
"scripts": {
  "build": "tsc -p src/",
  "serve": "lite-server -c=bs-config.json"
}
```
- After adding this ```npm run build``` will build the source files and ```npm run serve``` will launch a server with your website using __lite-server__. But, before we do that we need few more things to make it work.

##### Step 4
- Please read up on SystemJS as we are going to use it to load different javascript modules
- Add a systemjs.config.js @ __src__ folder

```
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

            // other libraries
            'rxjs':                      'npm:rxjs'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
```

- This is used to tell the index.html page where all the modules we are talking about are and SystemJS makes sure to load them only when necessary.
- Let's add these two as dependencies in __pacakge.json__

```
"systemjs": "0.19.40",
"core-js": "^2.4.1",
```
- Now the final __pacakge.json__ looks like this

```
{
  "name": "angular-bootstrap-example",
  "version": "1.0.0",
  "description": "QuickStart package.json from the documentation, supplemented with testing support",
  "scripts": {
    "build": "tsc -p src/",
    "serve": "lite-server -c=bs-config.json"
  },
  "dependencies": {
    "@angular/common": "~2.4.0",
    "@angular/compiler": "~2.4.0",
    "@angular/core": "~2.4.0",
    "@angular/platform-browser": "~2.4.0",
    "@angular/platform-browser-dynamic": "~2.4.0",
    "systemjs": "0.19.40",
    "core-js": "^2.4.1",
    "rxjs": "5.0.1",
    "zone.js": "^0.7.4"
  },
  "devDependencies": {
    "lite-server": "^2.2.2"
  }
}
```

##### Step 5
- Now let's add these 4 scripts to our index.html

```
<script src="node_modules/core-js/client/shim.min.js"></script>
<script src="node_modules/zone.js/dist/zone.js"></script>
<script src="node_modules/systemjs/dist/system.src.js"></script>

<script src="systemjs.config.js"></script>
<script>
    System.import('main.js').catch(function(err){ console.error(err); });
</script>
```
- I don't know about the shim.min.js as it was giving me an error saying ```reflect-metadata shim is required when using class decorators``` when I didn't have it.
- Others are angular dependencies and SystemJS.
_ now the last script is SystemJS loading __main.js__ but we didn't create one yet. Let's create a __main.ts__ file, which get's compiled to __main.js__ and which is where we bootstrap our main AppModule.
- Let's create __main.ts__ @ __src__ folder with content

```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

##### Step 6
- Ok cool. Now we are all done!
- Run ```npm run build```
- Then ```npm run serve```
- You should see a website showing "Hello World!"
- There is this sample project at it's final stage in example folder.
