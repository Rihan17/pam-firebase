import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../shared/consulta.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-marcar-consulta',
  templateUrl: './marcar-consulta.page.html',
  styleUrls: ['./marcar-consulta.page.scss'],
  standalone: false,
})
export class MarcarConsultaPage implements OnInit {
  bookingForm: any

  constructor(
    private aptService: ConsultaService,
    private router: Router,
    public fb: FormBuilder

  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
    });
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      return this.aptService
        .createBooking(this.bookingForm.value)
        .then((res) => {
          console.log(res);
          this.bookingForm.reset();
          this.router.navigate(['/consultas']);
        })
        .catch((error) => console.log(error));
    }
  }

}
