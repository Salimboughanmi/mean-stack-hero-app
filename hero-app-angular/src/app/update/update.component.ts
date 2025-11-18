import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
hero :any;
  id: any
  update(){
    this._shared.updatehero(this.id , this.hero).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/list']);
    }, err=>{
      console.log(err);
    });
  }
  constructor(private act : ActivatedRoute ,private _shared:SharedService , private router:Router) {}


  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    //console.log(this.id);
    this._shared.getHeroById(this.id).subscribe((res)=>{
      this.hero = res;
      console.log(this.hero);
    });
  }

}
