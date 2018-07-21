import { Component, OnInit } from '@angular/core';
import { COMMON_CONST } from '../global/common.const';

@Component({
  selector: 'app-box-menu',
  templateUrl: './box-menu.component.html',
  styleUrls: ['./box-menu.component.scss']
})
export class BoxMenuComponent implements OnInit {
  imgPath = COMMON_CONST.imgPath;
  constructor() { }

  ngOnInit() {
  }

}
