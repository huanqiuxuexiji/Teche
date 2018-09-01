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
      new ProjectModel('./assets/images/project1.jpg', 'N0.1', '数据图像共享技术处理', '可议价：￥9,000', '招募中', '1个月', 12),
      new ProjectModel('./assets/images/project1.jpg', 'N0.1', '数据图像共享技术处理', '可议价：￥9,000', '招募中', '1个月', 12),
      new ProjectModel('./assets/images/project1.jpg', 'N0.1', '数据图像共享技术处理', '可议价：￥9,000', '招募中', '1个月', 12),
      new ProjectModel('./assets/images/project1.jpg', 'N0.1', '数据图像共享技术处理', '可议价：￥9,000', '招募中', '1个月', 12),
      new ProjectModel('./assets/images/project1.jpg', 'N0.1', '数据图像共享技术处理', '可议价：￥9,000', '招募中', '1个月', 12),
      new ProjectModel('./assets/images/project1.jpg', 'N0.1', '数据图像共享技术处理', '可议价：￥9,000', '招募中', '1个月', 12),
      new ProjectModel('./assets/images/project1.jpg', 'N0.1', '数据图像共享技术处理', '可议价：￥9,000', '招募中', '1个月', 12),
      new ProjectModel('./assets/images/project1.jpg', 'N0.1', '数据图像共享技术处理', '可议价：￥9,000', '招募中', '1个月', 12),
    ];
  }

}
