import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagVsGraphrag } from './rag-vs-graphrag';

describe('RagVsGraphrag', () => {
  let component: RagVsGraphrag;
  let fixture: ComponentFixture<RagVsGraphrag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RagVsGraphrag],
    }).compileComponents();

    fixture = TestBed.createComponent(RagVsGraphrag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
