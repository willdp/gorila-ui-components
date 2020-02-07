import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoadingModule } from '@gorilainvest/ui-toolkit/loading';

import { UiLoadingModalComponent } from './ui-loading-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('UiLoadingModalComponent', () => {
  let component: UiLoadingModalComponent;
  let fixture: ComponentFixture<UiLoadingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoadingModule],
      declarations: [UiLoadingModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLoadingModalComponent);
    component = fixture.componentInstance;
    component.data.titleText = 'Loading Modal Title';
    component.data.bodyText = 'Loading Modal Body Text';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the spinner', () => {
    const spinner = fixture.debugElement.query(By.css('mur-loading')).nativeElement;
    expect(spinner).toBeTruthy();
  });

  it('should display loading modal title', () => {
    const title = fixture.debugElement.query(By.css('h3')).nativeElement.textContent.trim();
    expect(title).toEqual('Loading Modal Title');
  });

  it('should display loading modal body text if data has bodyText', () => {
    const text = fixture.debugElement.query(By.css('p')).nativeElement.textContent.trim();
    expect(text).toEqual('Loading Modal Body Text');
  });
});