import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicPromoPage } from './basic-promo.page';

describe('BasicPromoPage', () => {
  let component: BasicPromoPage;
  let fixture: ComponentFixture<BasicPromoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPromoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicPromoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
