import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-project-body',
  templateUrl: './person-project-body.component.html',
  styleUrls: ['./person-project-body.component.css']
})
export class PersonProjectBodyComponent implements OnInit {
  private projects = [
    {type_img:'',type:'微信公众号',
    type_word:'全栈开发',state:'已拒绝',img:'../assets/images/project1.jpg',
    num:'888',name:'微课堂',price:'9,000',period:'30天',
    project_state:'招募中',button:'重新报名'},

    {type_img:'',type:'Web网站',
    type_word:'前端开发',state:'已拒绝',img:'./assets/images/project1.jpg',
    num:'888',name:'新星教育平台',price:'9,000',period:'30天',
    project_state:'开发中',button:'开始合作'},

    {type_img:'',type:'微信公众号开发',
    type_word:'全栈开发',state:'已取消',img:'./assets/images/project1.jpg',
    num:'888',name:'微课堂',price:'9,000',period:'30天',
    project_state:'开发中',button:''},

    {type_img:'',type:'微信公众号开发',
    type_word:'全栈开发',state:'已完成',img:'./assets/images/project1.jpg',
    num:'888',name:'体育器材购物',price:'9,000',period:'30天',
    project_state:'已完成',button:''},

    {type_img:'',type:'Web网站开发',
    type_word:'前端开发',state:'待审核',img:'./assets/images/project1.jpg',
    num:'888',name:'广告设计与策划',price:'9,000',period:'30天',
    project_state:'招募中',button:''},

    {type_img:'',type:'Web网站开发',
    type_word:'前端开发',state:'已通过',img:'./assets/images/project1.jpg',
    num:'888',name:'新星教育平台',price:'9,000',period:'30天',
    project_state:'开发中',button:'开始合作'},

    {type_img:'',type:'微信公众号开发',
    type_word:'全栈开发',state:'已拒绝',img:'./assets/images/project1.jpg',
    num:'888',name:'微课堂',price:'9,000',period:'30天',
    project_state:'招募中',button:'重新报名'},

    {type_img:'',type:'Web网站开发',
    type_word:'前端开发',state:'待审核',img:'./assets/images/project1.jpg',
    num:'888',name:'广告设计与策划',price:'9,000',period:'30天',
    project_state:'招募中',button:''},
  ];
  constructor() { }

  ngOnInit() {
  }

}
