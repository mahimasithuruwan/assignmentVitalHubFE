import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { finalize } from 'rxjs/operators';
import { EnumAsStringPipe } from '../../shared/pipes';
import { IOrder, OrderStatus, OrderThrough, OrderType } from '../order.model';
import { OrderService } from '../order.service';
import { Location } from '@angular/common';
import { UIMessageService } from 'src/app/shared/services';

export enum SearchMethod {
  Regular,
  MultipleFilters,
}

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css'],
})
export class ListOrderComponent implements OnInit {
  _pageTitle: string = 'Orders';
  _pageSubTitle: string = '';
  _activeTabIndex: number = 0;
  _form: FormGroup;
  // _spinner: string = 'listOrderSpinner';
  _selectedRow: any;
  _items: any[] = [];
  _order: any = [];
  _list: IOrder[];
  //_order: IOrder;
  _routePath: string = 'order';
  _orderStatus = OrderStatus;
  _orderType = OrderType;
  _orderThrough = OrderThrough

  constructor(
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private uiMessageService: UIMessageService,
    private location: Location,
    private orderService: OrderService

  ) { }

  ngOnInit(): void {
    this.get();
    this._items.push({
      description: "kk",
      quantity: "8"
    });
    this._items.push({
      description: "kk",
      quantity: "8"
    });
    this._items.push({
      description: "kk",
      quantity: "8"
    });

    this._activeTabIndex = 0;

    this._order.push(
      {
        id: "qq",
        createdDate: "22",
        orderedThrough: "Online",
        orderType: "Take Away",
        status: 1,
        items: this._items
      }
    )
    this._order.push(
      {
        id: "qq",
        createdDate: "22",
        orderedThrough: "Online",
        orderType: "Take Away", status: 1,
        items: this._items
      }
    )
    this._order.push(
      {
        id: "qq",
        createdDate: "22",
        orderedThrough: "Online",
        orderType: "Take Away", status: 2,
        items: this._items
      }
    )
    console.log(this._order)
    this._form = this.formBuilder.group({

    });
  }

  statusChange(order) {
  }

  get order() {
    return this._order;
  }
  set order(value: any) {
    this._order = value;
  }


  get(): void {
    // this.spinner.show(this._spinner);
    this.orderService
      .get()
      .pipe(
        finalize(() => {
          // this.spinner.hide(this._spinner);
        })
      )
      .subscribe(
        (response) => {
          this.onRetrieved(response);
        },
        (error) => {
          this.uiMessageService.error(error);
        }
      );
  }

  onRetrieved(response) {
    // for (let c = 0; c < response.length; c++) {
    //   this._order.push({
    //     id: response.id,
    //     createdDate: "22",
    //     orderedThrough: "Online",
    //     orderType: "Take Away", status: 2,
    //     items: this._items
    //   })
    // }
    console.log(response)
    this._order = response;
  }

  close() {
    this.location.back();
  }

  onTabIndexChange(event) { }
}
