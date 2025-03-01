import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date',
  imports: [],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent implements OnInit {
  day:any
  date:any
  currentdate:any
  year:any
  month:any
  monthIndex:any

  @Output () DataEvenet = new EventEmitter<any> ()
  
  getcontent(date:any){
    console.log(date)
    this.DataEvenet.emit(`${date}${this.monthIndex}${this.year}`)
  }

  constructor(private router:Router){}

  ngOnInit(): void {
    this.date = new Date().getDate()
    this.currentdate = this.date
    this.day = new Date().getDay()
    this.monthIndex = new Date().getMonth()
    this.month = this.monthList[this.monthIndex]
    this.year = new Date().getFullYear()

    this.Dates = this.getDates()
  }

  Dates:any = []
  getDates(){
    let startIndex = new Date(this.year, this.monthIndex, 1).getDay()
    let lastIndex = new Date(this.year, this.monthIndex+1, 0).getDate()
    let DatesArray = []

    let I = 1
    
    for(let i=0;i<42;i++){
      if(i<startIndex){
        DatesArray.push(0)
      }else if(I<=lastIndex){
        DatesArray.push(I)
        I++
      }else{
        DatesArray.push(0)
      }
    }

    return DatesArray
  }



  // CONTROLS
  upCalender(){
    if(this.monthIndex === this.monthList.length-1){
      this.year += 1
    }
    this.monthIndex = (this.monthIndex+1)%this.monthList.length

    this.Dates = this.getDates()
  }

  downCalender(){
    if(this.monthIndex === this.monthList.length-1){
      this.year -= 1
    }
    this.monthIndex = this.monthIndex-1
    this.monthIndex = this.monthIndex < 0 ? this.monthList.length-1 : this.monthIndex
    this.monthIndex = (this.monthIndex)%this.monthList.length

    this.Dates = this.getDates()
    // %this.monthList.length
  }


  // STATIC VALUES
  monthList = [
    {"month":"January","days":31},
    {"month":"February","days":28},
    {"month":"March","days":31},
    {"month":"April","days":30},
    {"month":"May","days":31},
    {"month":"June","days":30},
    {"month":"July","days":31},
    {"month":"August","days":31},
    {"month":"September","days":30},
    {"month":"October","days":31},
    {"month":"November","days":30},
    {"month":"December","days":31}
  ]

  Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday"
  ]
}
