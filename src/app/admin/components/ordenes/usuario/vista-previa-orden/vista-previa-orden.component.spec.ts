import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPreviaOrdenComponent } from './vista-previa-orden.component';

describe('VistaPreviaOrdenComponent', () => {
  let component: VistaPreviaOrdenComponent;
  let fixture: ComponentFixture<VistaPreviaOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaPreviaOrdenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaPreviaOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
