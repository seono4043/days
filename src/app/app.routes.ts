import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ImageComponent } from './image/image.component';

export const routes: Routes = [
    {path:"",title:"Collections : [days]", component:HomeComponent},
    {path:"image/:string", title:"View image", component:ImageComponent},
    {path:"**", title:"this is invalid page", component:NotfoundComponent}
];
