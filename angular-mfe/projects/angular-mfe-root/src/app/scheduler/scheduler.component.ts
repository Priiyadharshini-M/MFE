import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { AgendaService, DayService, EventSettingsModel, MonthService, ResourceDirective, ResourcesDirective, ScheduleComponent, TimeScaleModel, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResourceDirective, ResourcesDirective],
  encapsulation: ViewEncapsulation.None
})
export class SchedulerComponent {
  constructor(private elementRef: ElementRef) {}
  onCheckChange(check: boolean, event: any) {
    const ele = this.elementRef.nativeElement.querySelector('.e-quick-popup-wrapper')
    if(check) {
      event.closest('.e-work-cells').classList.add('checkComplete')
      ele.classList.remove('newAddition');
    }
    else{
      event.closest('.e-work-cells').classList.remove('checkComplete')
      ele.classList.add('newAddition')
    }
  }
  public timeScale: TimeScaleModel = {
    enable : true,
    interval: 30,
    slotCount: 1
  }

  public infos : any = [
    {
      totalSlot: 4,
      given: 1,
      date: new Date(2023, 4, 1, 12, 30)
    },
    {
      totalSlot: 3,
      given: 2,
      date: new Date(2023, 4, 2, 12, 30)
    },
    {
      totalSlot: 4,
      given: 0,
      date: new Date(2023, 4, 3, 12, 30)
    },
    {
      totalSlot: 4,
      given: 4,
      date: new Date(2023, 4, 4, 12, 30)
    },
  ]
  
  findInfoByDate(date: Date): any {
    var result =  this.infos.find((info : any) => info.date.getTime() === date.getTime());
    console.log('result,', result);
    return result
  }

  private data: Object[] = [
    // {
    //   Id: 1,
    //   Subject: '0',
    //   Location: 'Office',
    //   StartTime: new Date(2023, 4, 5, 12, 30),
    //   EndTime: new Date(2023, 4, 5, 13, 30),
    //   RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1'
    // },
  ]
  public fields: Object = {
    id: 'Id',
    subject: { name: 'Subject' },
    startTime: { name: 'StartTime' },
    endTime: { name: 'EndTime' }
  }
 
  public eventSettings: EventSettingsModel = { dataSource: this.data, fields: this.fields };
}
