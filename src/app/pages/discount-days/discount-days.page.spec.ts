import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscountDaysPage } from './discount-days.page';

describe('DiscountDaysPage', () => {
  let component: DiscountDaysPage;
  let fixture: ComponentFixture<DiscountDaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountDaysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountDaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
