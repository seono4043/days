import { Component, OnInit ,inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-image',
  imports: [RouterLink],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent implements OnInit {
  image:String|null = ''

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  ngOnInit(){
    this.image = this.route.snapshot.paramMap.get('string')

    if(this.image === null){
      this.router.navigate(['/'])
    }
  }
}
