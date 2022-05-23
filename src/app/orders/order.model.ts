import { IItem } from '../Items/item.model';
import { BaseDropdownModel, BaseModel } from '../shared/models';

export interface IOrder extends BaseModel {
  customerPhoneNo?: string;
  DeliveryPersonPhoneNo?: string;
  OrderThroughId?: number;
  OrderTypeId?: number;
  OrderStatusId?: number;
 // orderItems?: IItem[];
}

	export enum OrderThrough
	{
		Online = 1,
		POS = 2
	}

	export enum OrderType
	{
		DineIn = 1,
		TakeAway = 2
	}

	export enum OrderStatus
	{
		InQueue = 1,
		Preparing = 2,
		OrderReady = 3,
		PickedUp = 4,
		Cancelled = 5
	}