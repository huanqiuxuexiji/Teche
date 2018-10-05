import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-project-body',
  templateUrl: './person-project-body.component.html',
  styleUrls: ['./person-project-body.component.css']
})
export class PersonProjectBodyComponent implements OnInit {
  private projects = [
    {
      type_img: '', type: 'IT互联网',
      type_word: '图像处理', state: '已拒绝', img: '../assets/images/project1.jpg',
      num: 'N0.4531', name: '数据图像共享技术处理', price: '9,000', period: '30天',
      project_state: '开放中', button: '重新报名'
    },

    {
      type_img: '', type: 'IT互联网',
      type_word: '图像处理', state: '已拒绝', img: '../assets/images/project1.jpg',
      num: 'N0.4531', name: '数据图像共享技术处理', price: '9,000', period: '30天',
      project_state: '开放中', button: '重新报名'
    },

    {
      type_img: '', type: 'IT互联网',
      type_word: '图像处理', state: '已拒绝', img: '../assets/images/project1.jpg',
      num: 'N0.4531', name: '数据图像共享技术处理', price: '9,000', period: '30天',
      project_state: '开放中', button: '重新报名'
    },

    {
      type_img: '', type: 'IT互联网',
      type_word: '图像处理', state: '已拒绝', img: '../assets/images/project1.jpg',
      num: 'N0.4531', name: '数据图像共享技术处理', price: '9,000', period: '30天',
      project_state: '开放中', button: '重新报名'
    },

    {
      type_img: '', type: 'IT互联网',
      type_word: '图像处理', state: '已拒绝', img: '../assets/images/project1.jpg',
      num: 'N0.4531', name: '数据图像共享技术处理', price: '9,000', period: '30天',
      project_state: '开放中', button: '重新报名'
    },

    {
      type_img: '', type: 'IT互联网',
      type_word: '图像处理', state: '已拒绝', img: '../assets/images/project1.jpg',
      num: 'N0.4531', name: '数据图像共享技术处理', price: '9,000', period: '30天',
      project_state: '开放中', button: '重新报名'
    },

    {
      type_img: '', type: 'IT互联网',
      type_word: '图像处理', state: '已拒绝', img: '../assets/images/project1.jpg',
      num: 'N0.4531', name: '数据图像共享技术处理', price: '9,000', period: '30天',
      project_state: '开放中', button: '重新报名'
    },

    {
      type_img: '', type: 'IT互联网',
      type_word: '图像处理', state: '已拒绝', img: '../assets/images/project1.jpg',
      num: 'N0.4531', name: '数据图像共享技术处理', price: '9,000', period: '30天',
      project_state: '开放中', button: '重新报名'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
