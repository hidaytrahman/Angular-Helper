import { Component, OnInit } from '@angular/core';
import { COMMON_CONST } from './global/common.const';
import { VideoService } from './services/videos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  imgPath = COMMON_CONST.imgPath;
  channelRes: any;
  channelDetails: any;

  constructor(private _videoServ: VideoService) {

  }

  ngOnInit() {

    // get channel details
    this._videoServ.getChannelDetails().subscribe(
      res => {
        console.log(res);
        this.channelRes = res;
        //this.channelDetails = this.channelRes.items[0].snippet;
      }
    );

    // get videos
    // this._videoServ.getChannelVideos().subscribe(
    //   res => {
    //     console.log(res);
    //   }
    // );

  }

}
