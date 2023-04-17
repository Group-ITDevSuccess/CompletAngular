import { IHotel } from './../hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelListService } from '../hotel-list.service';
import { IHotel } from '../hotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  public hotel: IHotel = <IHotel>{};
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelListService
    ) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotels().subscribe((hotels: IHotel[]) => {
      this.hotel = hotels.find(hotel => hotel.hotelId === id);
      console.log('id: ', this.hotel);
    });
  }

}
