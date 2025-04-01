import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../shared/consulta.service';
import { Consulta } from '../shared/Consulta';
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
  standalone: false
})
export class ConsultasPage implements OnInit {

  consultas: any = [];

  constructor(private aptService: ConsultaService) { }
  //Ler todos os registros que estão no firebase

  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe((res) => {
      console.log(res);
    })
  }


  ngOnInit() {
    this.fetchBookings();

    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe((res) => {
      this.consultas = [];
      res.forEach((item) => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.consultas.push(a as Consulta);
      })
    })
  }

}
