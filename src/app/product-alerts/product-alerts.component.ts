import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
// la clase EventEmitter define el manejo de eventos
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  //este es el producto que va a validar como entrada
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
