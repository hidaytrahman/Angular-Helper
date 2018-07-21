import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/videos.service';
import { COMMON_CONST } from '../global/common.const';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title = 'app';
  imgPath = COMMON_CONST.imgPath;
  channelRes: any;
  channelDetails: any;
  channelId: string;
  channelVideoRes: any;
  allVideos: any;


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  constructor(private _videoServ: VideoService) { }

  ngOnInit() {
    // get channel details
    this._videoServ.getChannelDetails().subscribe(
      res => {
        this.channelRes = res;
        this.channelDetails = this.channelRes.items[0].snippet;
        this.channelId = this.channelRes.items[0].id;
        //console.log("my channel"+this.channelId);
      }
    );

    //get videos
    this._videoServ.getChannelVideos().subscribe(
      res => {
        this.channelVideoRes = res;
        this.allVideos = this.channelVideoRes.items;
        console.log(this.channelVideoRes);
      }
    );
  }

}
