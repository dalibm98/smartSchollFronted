import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTemplateComponentComponent } from './dialog-template-component.component';

describe('DialogTemplateComponentComponent', () => {
  let component: DialogTemplateComponentComponent;
  let fixture: ComponentFixture<DialogTemplateComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogTemplateComponentComponent]
    });
    fixture = TestBed.createComponent(DialogTemplateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
