import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MachinesListPage } from './machines-list.page';

describe('MachinesListPage', () => {
  let component: MachinesListPage;
  let fixture: ComponentFixture<MachinesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MachinesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
