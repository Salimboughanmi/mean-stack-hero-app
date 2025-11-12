import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

user ={
  name:  "salim boughanmi",
  age: 30,
  Image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjmAhZ6K9DpC5BfemC9fLSWn_niy1ZfO_pnIyZjuyTf8VyEZHbKaxIvA-cU4XxXYJ06H8FqW2NLkXk_0OFT3F-ttqPZ77Vw0eMEygJWU4o",
}

imageCat = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtGGbkhGt7_kjElLH4Ma4IVyEIbP_sE5x5-UJBaKHEJN84bchAWlv8c8&s"

newname = "" ;
changeName() {
  this.user.name = this.newname;
}

imageChanged = true ;

changeimage() {
  this.imageChanged = !this.imageChanged;
}
desepear = true;
car = ["peugort",  "renault", "mercedes" , "bmw", "fiat"];

student =[
{name: "salim", age: 30},
{name: "fedi", age: 25},
{name: "sami", age: 19},
{name: "ziyed", age: 10},
{name: "marwen", age: 15}
]

friends ={
name :"ahmed",
age :55,
color : "red",
bg : 'yellow'
}

constructor() { }

  ngOnInit(): void {
  }

}
