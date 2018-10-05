import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  private status = [{name: '全部', stl: true}, {name: '开放中', stl: false},
                  {name: '合作中', stl: false}, {name: '合作已结束', stl: false}
  ];
  constructor() { }

  ngOnInit() {
  }

}
