import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-promo-type',
  templateUrl: './select-promo-type.page.html',
  styleUrls: ['./select-promo-type.page.scss'],
})
export class SelectPromoTypePage implements OnInit {

  type:any

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next(){

    if(this.type == "basica"){

      localStorage.setItem("post", JSON.stringify({type: this.type}))
      this.router.navigateByUrl('basic-promo');

    }else{
      alert("Debe elegir una categoría para continuar")
    }

  }

}
