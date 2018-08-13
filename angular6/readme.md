# Angular 6 Specific

## HttpClientModule, HttpClient - Angular 5+
Step 1 : add below line in app.module.ts

```javascript
import { HttpClientModule } from '@angular/common/http';

imports: [
    HttpClientModule
  ],
```
Step 2 : add below line in local.services.ts

```javascript
import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable()
export classs YourLocalServiceFile {
constructor(private httpClient:HttpClient){

    }

  getUsers(): Observable<any> {
        return this.httpClient.get(this.urlUsers)
    } 
  }  
 ```
   
Step 3 : add below line in your.component.ts
```javascript
import { YourLocalServiceFile } from '../services/local.service';

@Component({
  providers: [YourLocalServiceFile]
})

  constructor(private localService:YourLocalServiceFile) {
    
    localService.getUsers().subscribe(
      res => {
        this.allUsers = res;
        console.log(res);
      },

      err => console.error("Http Error :"+err),
      () => console.log("User call completed")
    );

   }
```


## Get Request with Header parameters
Step 1 : Will be same as above

Step 2 : add below line in your.services.ts

```javascript
import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root' // this will be access from anywhere to the program, you don't need to add service in provider
})
export classs YourGlobalServiceFile {
constructor(private httpClient:HttpClient){

    }

  getUsers(): Observable<any> {
        const headerOptions = {
            headers = new HttpHeaders({
                'Content-Type' : 'application/json',
                'Authorization' : 'Basic keys'
            })
        }
        return this.httpClient.get(this.urlUsers, headerOptions)
    } 
  }  
 ```
   
Step 3 : add below line in your.component.ts
```javascript
import { YourGlobalServiceFile } from '../services/global.service';

  constructor(private globalService:YourGlobalServiceFile) {
    
    globalService.getUsers().subscribe(
      res => {
        this.allUsers = res;
        console.log(res);
      },

      err => console.error("Http Error :"+err),
      () => console.log("User call completed")
    );

   }
```

__Notes__

 * _if you using ```providedIn:'root'``` in service file, its global and you can directly use from anynwhere and you don't need to put in providers_
 
* _HttpHeaders is used to send some parameters to server to get conditional response, something like login scenerio_

* _you can use ```atob()``` function for encrypting data in require format eg. (username:password) and you can put in Authorization key with Basic and encrypted value_


## Share data using Services Behaviour Subject

#### Step 1 : add below line in shares.services.ts
```javascript 
    import { Injectable } from '@angular/core';
    import { BehaviorSubject } from 'rxjs';
    @Injectable({
        providedIn: 'root'
    })
    export class SharedService {
    
     dataShare: BehaviorSubject<any> = new BehaviorSubject<any>(true);
     dataShareObs = this.dataShare.asObservable();
     
     update(data: any) {
       this.dataShare.next(data);
     }
    }
```
#### Step 2 go to the component from where you want to send data
Add below lines in that component
```javascript 
    import { SharedService } from '../services/shared.service';
    export class myFirstComponent {
        constructor (private _sharedService:SharedService) {
            _sharedService.update('Hi from first component');
        }
    }
```

#### Step 3 go to the component from where you want access data
Add below lines in that component
```javascript 
    import { SharedService } from '../services/shared.service';
    export class mySecondComponent {
        constructor (private _sharedService:SharedService) {
            _sharedService.dataShareObs.subscribe(res => {
                console.log(res);
            });
        }
    }
```

## Directives with ElementRef

### Add below codes in custom.directive.ts file

```javascript

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}

```
### import custom directive into app.module.ts

### now use directive as a attribute appHighlight
```javascript
  <p appHighlight>
    Hey everyone !
  </p>
  ```

## Filter using Custom Pipe in Angular with JSON data

__1. create custom pipe with name filter.pipe.ts and put below code__

```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(items: any[], searchText: string): any {
        if ( !items ) { return []; }
        if ( !searchText ) { return items; }

        searchText = searchText.toLowerCase();

        return items.filter( it => {
            return JSON.stringify(it).toLowerCase().includes(searchText);
        });
    }
}
```

__2. import filter.pipe.ts into app.module.ts and put class name in direction section__

```javascript
import { FilterPipe } from './pipes/filter.pipe';
declarations: [
    FilterPipe
  ],

```

__3. Now use as a pipe in your component __
```javascript
 <tr *ngFor="let user of usersList | filter: searchNow">
    <td>{{user?.id}}</td>
    <td>{{user?.name}}</td>

  </tr>
  ```
