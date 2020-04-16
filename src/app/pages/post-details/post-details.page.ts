import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {

  data:any
  simDay = 0

  constructor(private route: ActivatedRoute, private router: Router) { 

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.post;
        console.log("test-details", this.data)
      }
    });

  }

  ngOnInit() {

  }

  simulateDay(day){
    this.simDay = day
  }

}
