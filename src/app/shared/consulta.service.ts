import { Injectable } from '@angular/core';
import { Consulta } from '../shared/Consulta';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class ConsultaService { 

  listConsultasRef: AngularFireList<any>;
  consultaRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.listConsultasRef = db.list('/consulta'); //your path api
 
  }
  // Create
  createBooking(apt: Consulta) {
    return this.listConsultasRef.push({
      nome: apt.nome,
      email: apt.email,
      telefone: apt.telefone,
    });
  }
  // Get Single
  getBooking(id: string) {
    this.consultaRef = this.db.object('/consulta/' + id);
    return this.consultaRef;
  }
  // Get List
  getBookingList() {
    // this.listConsultasRef = this.db.list('/consulta');
    return this.listConsultasRef;
  }
}