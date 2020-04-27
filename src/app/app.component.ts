import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoggedService } from './services/logged.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public user:any = null;
  navigate : any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loggedService: LoggedService,
    private router: Router
  ) {
    this.sideMenu();
    this.initializeApp();

    this.loggedService.getObservable().subscribe((data) => {
      this.user = data
      this.sideMenu();
    });

  }

  sideMenu()
  {
    let menu = [{
      title : "Home",
      url   : "/home",
      icon  : "home"
    },];
    if(this.user == null){
      menu.push(
      {
        title : "Login",
        url   : "/login",
        icon  : "person-outline"
      },
      {
        title : "Register",
        url   : "/register",
        icon  : "person-add-outline"
      })
    }

    else if(this.user.role_id == 2){
      menu.push(
      {
        title : "Post",
        url   : "/select-promo-type",
        icon  : "person-outline"
      })
    }

    else if(this.user.role_id == 1){
      menu.push(
        {
          title : "Categorias",
          url   : "admin/categories",
          icon  : "person-outline"
        },
        {
          title : "Comunas",
          url   : "admin/locations",
          icon  : "person-outline"
        }
      )
    }


    this.navigate = menu

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname;
    if (path !== undefined) {
      this.selectedIndex = this.navigate.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout(){

    window.localStorage.removeItem("user")
    window.localStorage.removeItem("token")
    this.loggedService.publishSomeData(null)
    this.router.navigateByUrl('home');

  }

}
