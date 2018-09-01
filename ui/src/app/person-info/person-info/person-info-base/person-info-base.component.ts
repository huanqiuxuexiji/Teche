import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-info-base',
  templateUrl: './person-info-base.component.html',
  styleUrls: ['./person-info-base.component.css']
})
export class PersonInfoBaseComponent implements OnInit {
  option1s = [];
  option2s = [];
  constructor() {
  }

  ngOnInit() {
    this.option1s = [
      { value: '上海市', label: '上海市' },
      { value: '上海市', label: '上海市' },
      { value: '上海市', label: '上海市' }
    ];
    this.option2s = [
      { value: '浦东新区', label: '浦东新区' },
      { value: '浦东新区', label: '浦东新区' },
      { value: '浦东新区', label: '浦东新区' }
    ];
  }

}
