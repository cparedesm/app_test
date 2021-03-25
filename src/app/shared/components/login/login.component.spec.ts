import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let view: HTMLElement;

  const viewHasErrors = (view: HTMLElement): Boolean => {
    return !!view.querySelectorAll('.error').length;
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form', () => {
    component.email.setValue('a@a.com');
    component.password.setValue('12345');

    component.submitForm();
    expect(component.showErrors).toBeFalsy();
  });

  it('should show errors when no info is submitted', () => {
    expect(viewHasErrors(view)).toBeFalsy();

    component.submitForm();

    fixture.detectChanges();

    expect(component.showErrors).toBeTruthy();
    expect(viewHasErrors(view)).toBeTruthy();
  });

  it('should show errors when typing wrong values',  () => {
    expect(viewHasErrors(view)).toBeFalsy();

    component.email.setValue('abs');
    component.password.setValue('1234');
    component.submitForm();

    fixture.detectChanges();

    expect(component.showErrors).toBeTruthy();
    expect(viewHasErrors(view)).toBeTruthy();
  })
});
