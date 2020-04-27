import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-promo',
  templateUrl: './basic-promo.page.html',
  styleUrls: ['./basic-promo.page.scss'],
})
export class BasicPromoPage implements OnInit {

  categories:[]
  title:""
  description:""
  amount:""
  categoryId:""
  saleDate:""
  price:""
  url:any
  image:any
  image2:any

  constructor(private http: HttpClient, private urlService: UrlService, private router: Router) { 
    this.url = this.urlService.getUrl()
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.fetchCategories()

    /*if(localStorage.getItem("post") != null){

      let post = JSON.parse(localStorage.getItem("post"))

      if(post.title){
        this.title = post.title
      }

      if(post.description){
        this.description = post.description
      }

      if(post.amount){
        this.amount = post.amount
      }

      if(post.categoryId){
        this.categoryId = post.categoryId
      }

      if(post.saleDate){
        this.saleDate = post.saleDate
      }

      if(post.price){
        this.price = post.price
      }

      if(post.image){
        this.image = post.image
      }

      if(post.image2){
        this.image2 = post.image2
      }

    }*/

  }


  next(){
    
    let post = JSON.parse(localStorage.getItem("post"))
    post = {type: post.type, title: this.title, description: this.description, amount: this.amount, categoryId: this.categoryId, saleDate: this.saleDate, price: this.price, image: this.image, image2:this.image2}
    localStorage.setItem("post", JSON.stringify(post))
    this.router.navigateByUrl('discount-days');
  }

  goBack(){
    
    this.router.navigateByUrl('select-promo-type');
    
  }

  convertBase64(event) {
    var input = event.target;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e:any) => {
        this.image = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  convertBase642(event) {
    var input = event.target;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e:any) => {
        this.image2 = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  fetchCategories(){

    this.http.get(this.url+"/api/categories/fetch")
    .subscribe((response: any) => {

      this.categories = response.categories

    })

  }

}
