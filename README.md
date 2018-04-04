# Angular4-Helper
Just for usual things in Angular 4 implementations

## Install Angular 
__ng new project_name__

## Install Angular with LESS
__ng new project_name --style less__

## Install Angular with SASS
__ng new project_name --style scss__

## Upgrade Angular CLI to the latest version
__npm install -g @angular/cli@latest__

**In the project folder**

__npm install --save-dev @angular/cli@latest__

## BOOTSTRAP 3 
 __npm install --save bootstrap__

after inside angular-cli.json (inside project root folder) find styles and add a bootstrap css like this:

```javascript 
"styles": [
   "../node_modules/bootstrap/dist/css/bootstrap.min.css",
   "styles.css"
]
```


## BOOTSTRAP 4 Only
__npm install --save bootstrap@4.0.0-alpha.6__

### Update For Bootstrap 4 (currently in beta):
__npm install bootstrap@next --save__

## Install jQuery and Tether
__npm install --save tether__

__npm install --save jquery__

## BOOTSTRAP 4 with font awesome
__npm install --save bootstrap@4.0.0-alpha.6 font-awesome__
 

##  NgBootstrap (For Carousal, Tabs kind of things)

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


	


##  INSTALL FA (Font Awesome) Complete
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

## HOW TO CREATE NEW COMPONENT
__ng generate component componentName__

### using short form
__ng g c componentName__

This will generate new components with all the related files (.ts, .html, .css) and it will pass and import in app.module.ts



## HOW TO CHANGE TITLE WITH COMPONENTS or MENU

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


## Add META TAG

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


## How to Implement _Http Service_ in angular 4 - GET method - Using Local JSON File
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

## IF ELSE
#### TS
```javascript
  serverCreationStatus = "No server created";
  serverName = "";
  serverCreated = false;
```

#### Template
```html
<p *ngIf="serverCreated; else noServer">{{ serverCreationStatus }}</p>
 <ng-template #noServer>
      <p>No server was created.</p>
 </ng-template>
 ```



# FEEL FREE To ADD MORE :)
