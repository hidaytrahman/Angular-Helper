# Angular4-Helper
Just for usual things in Angular 4 implementations

## 1.	BOOTSTRAP 3 
 __npm install --save bootstrap__


after inside angular-cli.json (inside project root folder) find styles and add a bootstrap css like this:

```javascript 
"styles": [
   "../node_modules/bootstrap/dist/css/bootstrap.min.css",
   "styles.css"
]
```


## 2.	BOOTSTRAP 4 Only
__npm install --save bootstrap@4.0.0-alpha.6__

## 3.	BOOTSTRAP 4 with font awesome
__npm install --save bootstrap@4.0.0-alpha.6 font-awesome__
 

## 4. NgBootstrap (For Carousal, Tabs kind of things)

__npm install --save @ng-bootstrap/ng-bootstrap__

Once installed you need to import our main module.

```javascript
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
```

-----------------------------------------------------------
### Adding full Bootstrap component JS support
// version 4
**Note:** from Bootstrap site 
  
Some plugins and CSS components depend on other plugins. If you include plugins individually, 
make sure to check for these dependencies in the docs. Also note that all plugins depend on 
jQuery (this means jQuery must be included before the plugin files).
Consult our bower.json to see which versions of jQuery are supported.
https://v4-alpha.getbootstrap.com/getting-started/javascript/

In `.angular-cli.json` add the following lines to the scripts section:

# version 4.x
```javascript
  "scripts": [
  	"../node_modules/jquery/dist/jquery.js",
    "../node_modules/tether/dist/js/tether.js",
    "../node_modules/bootstrap/dist/js/bootstrap.js",
  ]
```
Bootstra p 4 Nav  support add below lines in angular-cli.json
```javascript
"scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/bootstrap/dist/js/bootstrap.js"
	],
```

-----------------------------------------------------


	
## 5. LESS INSTALL
__ng new project_name --style less__

## 6. SASS INSTALL
__ng new project_name --style scss__


## 7. INSTALL FA (Font Awesome) Complete
 __npm install --save font-awesome angular-font-awesome__
 Import the module:
```javascript
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
@NgModule({
  //...
  imports: [
    //...
    AngularFontAwesomeModule
  ],
  //...
})
export class AppModule { }
```




## 8. HOW TO CHANGE TITLE WITH COMPONENTS or MENU

app.module.ts
```javascript
import { BrowserModule, Title } from '@angular/platform-browser';
```

Add Title in Provider
```javascript
providers: [Title]
```

Go to your component like nav.component.ts
import { Title }     from '@angular/platform-browser';

```javascript
 public constructor(private titleService: Title ) { }
     public setTitle( newTitle: string) {
       this.titleService.setTitle( newTitle );
     }

 <ul>
    <li><a (click)="setTitle( 'Home' )">Home</a>.</li>
    <li><a (click)="setTitle( 'About Us' )">About Us</a>.</li>
    <li><a (click)="setTitle( 'Contact Us' )">Contact Us</a>.</li>
  </ul>
 ```


## 9. HOW TO CREATE NEW COMPONENT
__ng generate component componentName__

This will generate new components with all the related files (.ts, .html, .css) and it will pass and import in app.module.ts


## 10. Add META TAG

Go to your component like about.component.ts
```javascript
import { Meta } from '@angular/platform-browser';

public constructor(meta: Meta) {
    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'keyword', content: 'About Us, hello travel india, about hello travel india' },
      { name: 'description', content: 'Hello Travel India, offers a wide range of destinations from the mainstream to the exotic ones.' },
    ]);

  }
```


## 11. How to Implement _Http Service_ in angular 4 - GET method - Using Local JSON File
### Import Http Module in _app.module.ts_
```javascript
import { HttpModule } from '@angular/http';
```

### Pass **HttpModule** in _Imports_
```javascript
imports: [
    HttpModule
]
```
### Write all below code in your services.ts
```javascript	
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PackageService {
 
  packagesUrl:string =  "assets/data/packages.json";
  constructor(private http: Http) { }
  
  getPackages() {
    return this.http.get(this.packagesUrl)
      .map(response => response.json());
  }

}
```
__Go to the component where you want to access json file, In my case I've packages.component.ts__
### import your service here
```javascript
import { PackageService } from '../data/packages.service';
```

### add _PackageService_ to provider
```javascript
@Component({
    selector: "packages-section",
    templateUrl: "../view/packages.component.html",
    providers:[PackageService]
})

constructor(packageService: PackageService){
	packageService.getPackages().subscribe(
		people => {
		  this.totalPackages = people;
		  console.log("Packages is "+this.totalPackages.packageLocation)
		},
		error => console.error("Error : " + error),
		() => console.info('Packages Completed')
	  );
}
```
## LOCAL JSON Implementation
__Regarding JSON file, you have to keep _myData.json_ file in _assets/data folder_

Go to **angular-cli.json** and add data in **assets** something like below
```javascript
"assets": [
        "assets",
        "favicon.ico",
        "data" // this is your json path
      ],
```

### Congrats!!! Now You will have to access JSON file :)
