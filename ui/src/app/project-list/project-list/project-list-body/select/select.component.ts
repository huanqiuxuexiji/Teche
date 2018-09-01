import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  private status = [{name: '全部', stl: true}, {name: '招募中', stl: false},
                  {name: '开发中', stl: false}, {name: '已完成', stl: false}
  ];
  constructor() { }

  ngOnInit() {
  }

}
