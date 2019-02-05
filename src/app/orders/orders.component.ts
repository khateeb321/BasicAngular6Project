import { Component, OnInit } from '@angular/core';
import { IOrder, ICustomer } from 'app/shared/interfaces';
import { DataService } from 'app/core/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'); // + sign convert to number type
    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.orders = orders;
    });

    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }

}
