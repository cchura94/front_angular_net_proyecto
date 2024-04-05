import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPrestarComponent } from './dialog-prestar.component';

describe('DialogPrestarComponent', () => {
  let component: DialogPrestarComponent;
  let fixture: ComponentFixture<DialogPrestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogPrestarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogPrestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
