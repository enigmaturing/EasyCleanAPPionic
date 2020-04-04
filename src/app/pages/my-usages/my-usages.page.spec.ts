import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyUsagesPage } from './my-usages.page';

describe('MyUsagesPage', () => {
  let component: MyUsagesPage;
  let fixture: ComponentFixture<MyUsagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUsagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyUsagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
