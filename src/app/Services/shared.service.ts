import { Injectable } from '@angular/core';
import {ReplaySubject, Subscription} from "rxjs";
import {WidgetData} from '.././Models/widget-data';

@Injectable()
export class SharedService {

  constructor() { }

  private _widgetData = new ReplaySubject<WidgetData>();
    public widgetData$ = this._widgetData.asObservable();

    public update(data)
    {
        this._widgetData.next(data)
    }

}