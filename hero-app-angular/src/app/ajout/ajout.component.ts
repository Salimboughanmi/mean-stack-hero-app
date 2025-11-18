import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  myhero ={
  name:"" ,
  power:'',
 }
 image : any;
 selectimg(event:any){
  this.image = event.target.files[0];
  console.log(this.image);
 }

/*  addhero(){
  this._shared.heros.push(this.myhero)
  this.myhero ={
    name:"" ,
    power:'',
    image:""
   }

} */

   addhero(){
    let formdata = new FormData();
    formdata.append('name' , this.myhero.name);
    formdata.append('power' , this.myhero.power.toString());
    formdata.append('image' , this.image);
    this._shared.createNewHero(formdata).subscribe(res=>{
      console.log(res);
       this.myhero ={
        name:"" ,
        power:'',
       }

    },
    err=>{console.log(err);})
   }


   /*  addhero(){
    this._shared.createNewHero(this.myhero).subscribe(res=>{
      console.log(res);
      this.myhero ={
        name:"" ,
        power:'',
        image:""
       }
    })
   } */

  constructor(public _shared: SharedService) { }

  ngOnInit(): void {
  }

}
