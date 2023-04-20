import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelDetailGuard } from './shared/guard/hotel-detail.guard';
import { HotelListComponent } from './hotel-list/hotel-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'hotels/:id', component: HotelDetailComponent, canActivate: [HotelDetailGuard]},
      {path: 'hotels', component: HotelListComponent},
    ]),
  ],
  exports:[RouterModule]
})
export class HotelRoutingModule { }
