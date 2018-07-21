import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class VideoService {
    channelRes;
    baseUrl: string;
    channelUsername: string;
    channelKey: string;
    channelId: string;
    
    constructor(private httpClient: HttpClient){
        this.baseUrl = "https://www.googleapis.com/youtube/v3/";
        this.channelUsername = "HidaytRahman";
        this.channelKey = "AIzaSyB5Ubyk2wxyXUuQJc1usSlVaye7QjIqRbc";
        this.channelId = "UCP_vlPQ7U8Sdg7ZrAxLatBw"

        // Getting channel details 
        this.getChannelDetails().subscribe(
            res => {
                this.channelRes = res;
                // set channel id  UCP_vlPQ7U8Sdg7ZrAxLatBw
                
                //this.channelId = this.channelRes.items[0].id;
                
    
                console.log( this.channelId);
            }
        );

    }

    // get channel details
    getChannelDetails() {
        return this.httpClient.get(this.baseUrl+"channels?part=snippet&forUsername="+this.channelUsername+"&key="+this.channelKey);
    }

    // Get Videos
    getChannelVideos() {
        return this.httpClient.get(this.baseUrl+"search?order=date&part=snippet&channelId="+this.channelId+"&maxResults=25&key="+this.channelKey);
    }


}