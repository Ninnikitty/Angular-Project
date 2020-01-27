import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AikaComponent } from './aika.component';

describe('AikaComponent', () => {
  let component: AikaComponent;
  let fixture: ComponentFixture<AikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
