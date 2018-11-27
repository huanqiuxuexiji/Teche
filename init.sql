drop database if exists tech;
create database tech;
use tech;
create table user (
	id int auto_increment not null,
    account varchar(30) not null,
    password varchar(30) not null,
    name varchar(30),
    nick_name varchar(30),
    create_date date,
    update_date date,
    close_date date,
    role_id int,
    email_id int,
    telephone_id int,
    address_id int,
    person_image_id int,
    card_id int,
    vip_id int,
    fadada_id int,
    state varchar(10),
    primary key(id)
);


create table email(
	id int auto_increment not null,
    value varchar(30),
    valid_state boolean default 0,
    primary key(id)
);

create table telephone(
	id int auto_increment not null,
    value varchar(30),
    valid_state boolean default 0,
    primary key(id)
);

create table address(
	id int auto_increment not null,
    city_id int,
    value varchar(50),
    primary key(id)
);

create table city(
	id int auto_increment not null,
    province_id int,
    value varchar(50),
    primary key(id)
);

create table province(
	id int auto_increment not null,
    value varchar(50),
    primary key(id)
);

create table person_image(
	id int auto_increment not null,
    value varchar(30),
    url varchar(50),
    cdn varchar(30),
    primary key(id)
);

create table card(
	id int auto_increment not null,
	name varchar(30),
    number varchar(50),
    valid_state boolean default 0,
    primary key(id)
);

create table vip(
	id int auto_increment not null,
    number varchar(50),
    vip_stage_id int,
    integration int,
    state varchar(10),
    primary key(id)
);

create table vip_stage(
	id int auto_increment not null,
    value varchar(10),
    primary key(id)
);

create table role(
	id int auto_increment not null,
    value varchar(10),
    state varchar(10),
    primary key(id)
);

create table fadada(
	id int auto_increment not null,
	value varchar(50),
    valid_state boolean default 0,
    primary key(id)
);


create table project(
	id int auto_increment not null,
    number varchar(30),
    name varchar(30),
    user_id int,
    project_detail_id int,
    create_date date,
    update_date date,
    close_date date,
    generate_view_state varchar(10),
    person_view_state varchar(10),
    state varchar(10),
    primary key(id)
);

create table project_detail(
	id int auto_increment not null,
    prospect_overview varchar(200),
    cooperative_requirement varchar(200),
    cooperation_cycle varchar(10),
    project_money int,
    project_follow int,
    project_image_id int,
    primary key(id)
);

create table project_image(
    id int auto_increment not null,
    image_value varchar(30),
    url varchar(50),
    cdn varchar(30),
    primary key(id)
);

create table development_stage(
	id int auto_increment not null,
    information varchar(200),
    stage_num int,
    project_detail_id int,
    primary key(id)
);

create table project_files(
	id int auto_increment not null,
    number varchar(30),
    name varchar(30),
    url varchar(50),
    cdn varchar(30),
    project_detail_id int,
    primary key(id)
);

create table cooperation(
	id int auto_increment not null,
    project_id int,
    cooperate_user_id int,
    cooperate_state varchar(30),
    primary key(id)
);

create table follow(
	id int auto_increment not null,
    project_id int,
    follow_user_id int,
    follow_state varchar(30),
    primary key(id)
);