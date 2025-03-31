import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarConsultaPage } from './editar-consulta.page';

describe('EditarConsultaPage', () => {
  let component: EditarConsultaPage;
  let fixture: ComponentFixture<EditarConsultaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
