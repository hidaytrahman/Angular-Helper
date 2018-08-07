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
        **const headerOptions = {
            headers = new HttpHeaders({
                'Content-Type' : 'application/json',
                'Authorization' : 'Basic keys'
            })
        }**
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

