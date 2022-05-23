import { BaseDropdownModel, BaseModel } from '../shared/models';

export interface IItem extends BaseModel {
  code?: string;
  description?: string;
}

export enum PortionSize
{
S = 1,
M = 2,
L = 3
}