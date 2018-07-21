import { Component, OnInit } from '@angular/core';
import { COMMON_CONST } from '../global/common.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imgPath = COMMON_CONST.imgPath;
  constructor() { }

  ngOnInit() {
  }

}
