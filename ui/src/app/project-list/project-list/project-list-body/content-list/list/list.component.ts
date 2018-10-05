import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../../../../model/project-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  projectList: Array<ProjectModel>;
  constructor() { }

  ngOnInit() {
    this.projectList = [
      new ProjectModel('./assets/images/project1.jpg', 'N0.4531', '数据图像共享技术处理', '可议价：￥9,000', '开放中', '1年', 12),
      new ProjectModel('./assets/images/project1.jpg', 'N0.1432', '自然语言技术处理', '可议价：￥9,000', '开放中', '2年', 23),
      new ProjectModel('./assets/images/project1.jpg', 'N0.3561', '自动化挖掘机', '可议价：￥9,000', '开放中', '6个月', 34),
      new ProjectModel('./assets/images/project1.jpg', 'N0.4541', '光电传输晶体管', '可议价：￥9,000', '开放中', '11个月', 62),
      new ProjectModel('./assets/images/project1.jpg', 'N0.1688', '乌龙茉莉花茶叶', '可议价：￥9,000', '开放中', '9个月', 82),
      new ProjectModel('./assets/images/project1.jpg', 'N0.1109', '无人机外卖派送', '可议价：￥9,000', '开放中', '9个月', 72),
      new ProjectModel('./assets/images/project1.jpg', 'N0.6871', '防热防疫防冷服', '可议价：￥9,000', '开放中', '3年', 66),
      new ProjectModel('./assets/images/project1.jpg', 'N0.5616', '全新自动化无人驾驶贝壳车', '可议价：￥9,000', '开放中', '1个月', 28),
    ];
  }

}
