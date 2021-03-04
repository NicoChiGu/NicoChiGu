import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AmazonCharacterComponent} from './amazon-character.component';

describe('AmazonCharacterComponent', () => {
  let component: AmazonCharacterComponent;
  let fixture: ComponentFixture<AmazonCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonCharacterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
