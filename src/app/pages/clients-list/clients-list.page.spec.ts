import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientsListPage } from './clients-list.page';

describe('ClientsListPage', () => {
  let component: ClientsListPage;
  let fixture: ComponentFixture<ClientsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
