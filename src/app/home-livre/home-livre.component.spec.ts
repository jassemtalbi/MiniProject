import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLivreComponent } from './home-livre.component';

describe('HomeLivreComponent', () => {
  let component: HomeLivreComponent;
  let fixture: ComponentFixture<HomeLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
