import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeBoxComponent } from './qrcode-box.component';

describe('QrcodeBoxComponent', () => {
  let component: QrcodeBoxComponent;
  let fixture: ComponentFixture<QrcodeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
