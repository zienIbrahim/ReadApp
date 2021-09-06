
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';



@Injectable
({

  providedIn: 'root'

})




export class AuthService 
{



  constructor(private http : HttpClient) { }


  loginX(model:any)
  {

    const BaseUrl = 'http://localhost:57723/api/Auth/Login';

    console.log("Model : Login",model);

    return this.http.post(BaseUrl, model).pipe
    (

      map((Response:any) =>
      {
        const user = Response;

        if(user){localStorage.setItem('token' , user.token);}

      })

    )


  }




  RegisterX(model:any)
  {

    
     console.log("Model : Login",model);

     const RegisterBaseUrl = 'http://localhost:57723/api/Auth/Register';

    return this.http.post(RegisterBaseUrl, model).pipe
    (

      map((Response:any) =>
      {
        const user = Response;

        if(user){localStorage.setItem('token' , user.token);}

      })

    )


  }


}
