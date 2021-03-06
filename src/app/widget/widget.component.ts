import { Component, OnInit } from '@angular/core';
import {WidgetData} from '.././Models/widget-data';
import { SharedService } from '.././Services/shared.service';
import {NgForm} from '@angular/forms';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

 private subscription: Subscription;
  private userText:string;

  constructor(private _sharedService:SharedService) {
    this.subscription = this._sharedService
            .widgetData$
            .subscribe(data =>
            {
                this.userText = data.sampleText; //assign new data to class member
            });
   }

  ngOnInit() {
  }

  onFormSubmit(formData: NgForm)
    {
      const newData = new WidgetData(formData.value.sampleText);
      this._sharedService.update(newData);
    }

}