import { product } from './product.model';

export class ProductService {

    productlist: product[] = [
        new product('TV', 50000, 90, "https://images.samsung.com/is/image/samsung/vn-hd-j4303-ua32j4303akxxv-001-front-indigo-blue?$PD_GALLERY_L_JPG$", 4),
        new product('Mobile', 5000, 89, "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-6/space-gray/device-front.png.transform/pdpCarousel/image.jpg", 5)
    ];

    getAllProducts(): product[] {
        return this.productlist;
    }
}