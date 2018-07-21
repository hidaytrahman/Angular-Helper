import { Component } from '@angular/core';
import { COMMON_CONST } from './global/common.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  imgPath = COMMON_CONST.imgPath;
}
