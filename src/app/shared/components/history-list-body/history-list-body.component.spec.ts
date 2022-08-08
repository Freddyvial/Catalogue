import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListPipe } from '../../pipe/order-list.pipe';


import { HistoryListBodyComponent } from './history-list-body.component';

describe('HistoryListBodyComponent', () => {
  let component: HistoryListBodyComponent;
  let fixture: ComponentFixture<HistoryListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HistoryListBodyComponent,
        OrderListPipe
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
