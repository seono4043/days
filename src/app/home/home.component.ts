import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterLink} from '@angular/router';
import { DataReaderService } from '../data-reader.service';
import { DateComponent } from '../date/date.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [DatePipe,RouterLink,DateComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  showcalender = signal(false)
  toggleCalender(){
    this.showcalender.update(value => !value)
  }

  scrollup(){
    window.scrollTo(0,0)
  }
  
  Data:any=[];
  receivedData:any

  receiveData(data: string) {
    this.toggleCalender()
    this.getData()

    this.dataserice.getdata().subscribe((res: any[]) => {
      this.Data = res.filter((item: any) => item.id == data);
      console.log(this.Data); // This will show the filtered data
    });
  }
  
  
  constructor(private dataserice:DataReaderService){}

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.Data = this.dataserice.getdata().subscribe((res)=>{this.Data = res})
  }

  filterData(data: any) {
    this.Data = this.Data.filter((value: any) => value.id == this.receiveData);
    console.log('Data before filtering:', this.Data);
  }
  
}
