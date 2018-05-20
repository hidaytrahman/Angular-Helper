# Angular 6 Specific

## HttpClientModule, HttpClient - Angular 5+
Step 1 : add below line in app.module.ts

```javascript
import { HttpClientModule } from '@angular/common/http';

imports: [
    HttpClientModule
  ],
```
Step 2 : add below line in your.services.ts

```javascript
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

constructor(private httpClient:HttpClient){

    }

  getUsers(): Observable<any> {
        return this.httpClient.get(this.urlUsers)
    } 
    
 ```
   
Step 3 : add below line in your.component.ts
```javascript
import { GlobalService } from '../services/global.service';

@Component({
  providers: [GlobalService]
})

  constructor(private globalService:GlobalService) {
    
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
