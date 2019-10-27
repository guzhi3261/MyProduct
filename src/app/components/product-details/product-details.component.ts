import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
   addToCart(product) {
     window.alert('The product has been add to your shopping cart !');
     this.cartservise.addToCart(product);
   }

  constructor(private route: ActivatedRoute, private cartservise: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.product = products[+param.get('productId')];
    });
  }

}
