import { Component, OnInit } from "@angular/core";
import { IHotel } from "./hotel";
import { HotelListService } from "./hotel-list.service";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit {
  public title = 'List Hotels';

  public hotels: IHotel[] = [];

  public showBadge: boolean;
  private _hotelFilter = "mot";
  public filteredHotels : IHotel[] = [];
  public receivedRating : string;

  constructor(private hotelListService: HotelListService) {}

  ngOnInit(): void {
    this.hotels = this.hotelListService.getHotels();
    this.filteredHotels = this.hotels;
    this.hotelFilter = '';
  }

  public togglesNewBadge(): void{
    this.showBadge = ! this.showBadge;
  }

  public get hotelFilter(): string{
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string){
    this._hotelFilter = filter;
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  public receiveRatingClick(message: string): void{
    this.receivedRating = message;
  }

  private filterHotels(criteria: string): IHotel[]{
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel : IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) != -1
    );

    return res;
  }

}
