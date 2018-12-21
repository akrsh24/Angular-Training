import { Component, Input } from '@angular/core'
import { product } from './product.model';

@Component({
    selector: 'product',
    templateUrl: './product.template.html',
    styleUrls: ['./product.style.css']
})


export default class productComponent {
    @Input() isFree: boolean=false;
    @Input() productdetails: product = {
        title: 'Laptop',
        price: 50000,
        quantity: 50
    }
}
