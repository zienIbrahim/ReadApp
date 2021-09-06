import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component
({

  selector: 'app-home',

  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']


})


export class HomeComponent implements OnInit 
{

        ishome:boolean=true;
        isProfile:boolean=false;
        isSignOut:boolean=false;
        isBlog:boolean=false;

        constructor(private router : Router) { }

        ngOnInit(): void 
        {

        }


      switchPage(page:string)
      {

          switch (page) 
          {

            case 'ishome':
              this.isBlog=false;
              this.isSignOut=false;
              this.isProfile=false;
              this.ishome=true;
              break;
            case 'isProfile':
              {
                this.isBlog=false;
                this.isSignOut=false;
                this.isProfile=true;
                this.ishome=false;
                break;
              }
              
            case 'isSignOut':
              
          {
            this.isBlog=false;
            this.isSignOut=true;
            this.isProfile=false;
            this.ishome=false;
              break;}
            case 'isBlog':
              this.isBlog=true;
              this.isSignOut=false;
              this.isProfile=false;
              this.ishome=false;
          {
                break;
          }      
            default:
          {   
            break;
          }


        }

    }


}