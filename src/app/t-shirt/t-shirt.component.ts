import { Component } from '@angular/core';
import { PaymentsService } from '../services/payments.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.css']
})
export class TShirtComponent {

  constructor(private payService: PaymentsService, private router: Router) { }

  price!: number;
  productPrice: number = 8000;
  // Set the default product image
  productImage: string = 'assets/images/t-shirt/1.jpg';
  // This variable tracks the currently selected button
  selectedButton: string = '';
  // Variable to track quantity
  quantity: number = 1;
  selectedSize: string = '';
  email: string = '';
  phone: string = '';
  fullname: string = '';
  address: string = '';


  selectSize(size: string): void {
    this.selectedSize = size;
    switch
    (size) {
      case 's':
        this.selectedSize = 's';
        break;
      case 'm':
        this.selectedSize = 'm';
        break;
      case 'l':
        this.selectedSize = 'l';
        break;
      case 'xl':
        this.selectedSize = 'xl';
        break;
      default:
        this.selectedSize = 'm';
        break;
    }
    // console.log(size);
  };
  // This function will update the image based on the selected cloth type
  changeImage(clothType: string): void {
    this.selectedButton = clothType;
    switch (clothType) {
      case 'endViolence':
        this.productImage = 'assets/images/t-shirt/1.jpg';
        break;
      case 'proudlyFeminist':
        this.productImage = 'assets/images/t-shirt/2.jpg';
        break;
      case 'noExcuses':
        this.productImage = 'assets/images/t-shirt/3.jpg';
        break;
      case 'hores':
        this.productImage = 'assets/images/t-shirt/4.jpg';
        break;
      default:
        this.productImage = 'assets/images/t-shirt/1.jpg';
        break;
    }
  }

  calculateProductPrice(): void {
    this.price = (this.productPrice || 1) * this.quantity;
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

  startPayment(data:any): void {
    this.payService.initiatePayment(data).subscribe({
      next: (response) => {
        // console.log("Payment Success:", response);
        if (response && response.data) {
          window.location.href = response.data.link;
        } else {
          // console.error("Invalid payment URL in response:", response);
          alert("Payment initiation failed. Please try again.");
        }
      },
      error: (err) => {
        // console.error("Payment Failed:", err);
        alert("Payment initiation failed. Please try again.");
      }
    });
  }


  initiateProductPayment(): void {
    const price = Number(this.price) || Number(this.productPrice);
    const productQuantity = Number(this.quantity) || 1;
    const amount = price * productQuantity;
    const email = this.email;

    const payload = {
      productSize: this.selectedSize,
      productQuantity,
      amount,
      email
    };

    // console.log("Client Payload:", payload);
    this.startPayment(payload);
  }

}


