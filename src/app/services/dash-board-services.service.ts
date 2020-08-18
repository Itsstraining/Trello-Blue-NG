import { Injectable } from '@angular/core';
import {DashListItem, DashBox} from '../models/dash-item.model'

@Injectable({
  providedIn: 'root'
})
export class DashBoardServicesService {
  db : Array<DashListItem>=[];
  dashBoxDB : Array<DashBox> =[];
  constructor() { }
}
