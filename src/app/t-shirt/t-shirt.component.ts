import { Component } from '@angular/core';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.css']
})
export class TShirtComponent {
  price!: number;
  productPrice: number = 8000;
  // Set the default product image
  productImage: string = 'assets/images/t-shirt/1.jpg';
  // This variable tracks the currently selected button
  selectedButton: string = '';
  // Variable to track quantity
  quantity: number = 1;

  // This function will update the image based on the selected cloth type
  changeImage(clothType: string): void {
    this.selectedButton = clothType;
    switch (clothType) {
      case 'endViolence':
        this.productImage = 'assets/images/t-shirt/1.jpg';  // Update with the actual image path
        break;
      case 'proudlyFeminist':
        this.productImage = 'assets/images/t-shirt/2.jpg';  // Update with the actual image path
        break;
      case 'noExcuses':
        this.productImage = 'assets/images/t-shirt/3.jpg';  // Update with the actual image path
        break;
      case 'hores':
        this.productImage = 'assets/images/t-shirt/4.jpg';  // Update with the actual image path
        break;
      default:
        this.productImage = 'assets/images/t-shirt/1.jpg';  // Default image if no match
        break;
    }
  }

  calculateProductPrice():void{
    this.price = this.productPrice * this.quantity;    
  }
  // Method to increase quantity
  increaseQuantity(): void {
    this.quantity++;
    this.calculateProductPrice()
  }

  // Method to decrease quantity
  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculateProductPrice();
    }
  }
}
