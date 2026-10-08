import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonContent
  ]
})
export class HomePage {
  apiUrl = 'http://127.0.0.1:5000';

  expenses = [
    { title: 'Groceries', category: 'Food', amount: 450, icon: '🛒' },
    { title: 'Bus', category: 'Transport', amount: 80, icon: '🚌' },
    { title: 'Game', category: 'Entertainment', amount: 299, icon: '🎮' }
  ];

  categories = [
    { name: 'Food', amount: 5200, percentage: 42 },
    { name: 'Shopping', amount: 3000, percentage: 24 },
    { name: 'Transport', amount: 2250, percentage: 18 },
    { name: 'Entertainment', amount: 1500, percentage: 12 }
  ];

  openMenu() {
    console.log('Menu clicked');
  }

  viewAll() {
    console.log('View all expenses clicked');
  }

  addExpense() {
    console.log('Add expense clicked');
  }
}