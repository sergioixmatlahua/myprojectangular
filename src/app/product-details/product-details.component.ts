import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
//importamos 
import { products } from '../products';
//agregamos nuestro servicio a esta clase
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute, private cartService: CartService) {

  }

  //Este es el metodo que permitira agregar un producto desde el detalle
  addToCart(product) {
    this.cartService.addProductToCart(product);
    window.alert("Tu producto ha sido agregado al carrito de compras!!.");
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
