import { Component } from '@angular/core';
import { product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.template.html',
  styleUrls: ['./cart.style.css']
  // providers: [ProductService]
})



export default class cartComponent {
  txtCompany: string = "";
  txtProduct: string = "";
  newProduct: product = new product();
  productlist:product[]=[];
  
  //DI
  constructor(public theservInstance:ProductService){
    this.productlist=this.theservInstance.getAllProducts();
  }
  // productlist: product[] = [
  //   new product('TV', 50000, 90, "https://images.samsung.com/is/image/samsung/vn-hd-j4303-ua32j4303akxxv-001-front-indigo-blue?$PD_GALLERY_L_JPG$", 4),
  //   new product('Mobile', 5000, 89, "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-6/space-gray/device-front.png.transform/pdpCarousel/image.jpg", 5)
  // ];


  handleClick() {
    console.log("Clicking me........");
  }

  AddNewProduct(theForm) {

    if (theForm.valid) {
      this.productlist.push(this.newProduct);
      this.newProduct = new product();//resetting the list
      theForm.reset();
    }
  }
}
