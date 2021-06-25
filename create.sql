create table collections (id bigint not null auto_increment, description varchar(255) not null, image varchar(255) not null, is_private bit not null, title varchar(255) not null, user_id bigint, primary key (id)) engine=InnoDB
create table comments (collection_id bigint not null, user_id bigint not null, id bigint not null, comment varchar(255), primary key (collection_id, user_id)) engine=InnoDB
create table notes (id bigint not null auto_increment, note varchar(255) not null, time_stamp varchar(255), section_id bigint, video_id bigint, primary key (id)) engine=InnoDB
create table notes_tags (note_id bigint not null, tag_id bigint not null) engine=InnoDB
create table sections (id bigint not null auto_increment, title varchar(255) not null, collection_id bigint, primary key (id)) engine=InnoDB
create table tags (id bigint not null auto_increment, tag varchar(255) not null, primary key (id)) engine=InnoDB
create table users (id bigint not null auto_increment, email varchar(255) not null, first_name varchar(255) not null, is_admin bit not null, last_name varchar(255) not null, password varchar(255) not null, user_image varchar(255) not null, username varchar(255) not null, primary key (id)) engine=InnoDB
create table videos (id bigint not null auto_increment, video_url varchar(255) not null, section_id bigint, primary key (id)) engine=InnoDB
alter table collections add constraint FKn7pdedyqaiddr0uxdj603my7d foreign key (user_id) references users (id)
alter table comments add constraint FK56gwrgendmnb9fxjpn0cwjnoc foreign key (collection_id) references collections (id)
alter table comments add constraint FK8omq0tc18jd43bu5tjh6jvraq foreign key (user_id) references users (id)
alter table notes add constraint FKsuonsoogp60wim91moa8ly5jr foreign key (section_id) references sections (id)
alter table notes add constraint FKhtvvt60nbw5pwwhwgjma4rd5e foreign key (video_id) references videos (id)
alter table notes_tags add constraint FK9oi8krp2qos7c0icr3j01butb foreign key (tag_id) references tags (id)
alter table notes_tags add constraint FKcxrhvlv1dppm49b2snddodsvi foreign key (note_id) references notes (id)
alter table sections add constraint FK2j70x0uihv80smbnrqok9liwx foreign key (collection_id) references collections (id)
alter table videos add constraint FK5pbmp2i4a97q92m4uo9b5v1iu foreign key (section_id) references sections (id)
create table collections (id bigint not null auto_increment, description varchar(255) not null, image varchar(255) not null, is_private bit not null, title varchar(255) not null, user_id bigint, primary key (id)) engine=InnoDB
create table comments (collection_id bigint not null, user_id bigint not null, id bigint not null, comment varchar(255), primary key (collection_id, user_id)) engine=InnoDB
create table notes (id bigint not null auto_increment, note varchar(255) not null, time_stamp varchar(255), section_id bigint, video_id bigint, primary key (id)) engine=InnoDB
create table notes_tags (note_id bigint not null, tag_id bigint not null) engine=InnoDB
create table sections (id bigint not null auto_increment, title varchar(255) not null, collection_id bigint, primary key (id)) engine=InnoDB
create table tags (id bigint not null auto_increment, tag varchar(255) not null, primary key (id)) engine=InnoDB
create table users (id bigint not null auto_increment, email varchar(255) not null, first_name varchar(255) not null, is_admin bit not null, last_name varchar(255) not null, password varchar(255) not null, user_image varchar(255) not null, username varchar(255) not null, primary key (id)) engine=InnoDB
create table videos (id bigint not null auto_increment, video_url varchar(255) not null, section_id bigint, primary key (id)) engine=InnoDB
alter table collections add constraint FKn7pdedyqaiddr0uxdj603my7d foreign key (user_id) references users (id)
alter table comments add constraint FK56gwrgendmnb9fxjpn0cwjnoc foreign key (collection_id) references collections (id)
alter table comments add constraint FK8omq0tc18jd43bu5tjh6jvraq foreign key (user_id) references users (id)
alter table notes add constraint FKsuonsoogp60wim91moa8ly5jr foreign key (section_id) references sections (id)
alter table notes add constraint FKhtvvt60nbw5pwwhwgjma4rd5e foreign key (video_id) references videos (id)
alter table notes_tags add constraint FK9oi8krp2qos7c0icr3j01butb foreign key (tag_id) references tags (id)
alter table notes_tags add constraint FKcxrhvlv1dppm49b2snddodsvi foreign key (note_id) references notes (id)
alter table sections add constraint FK2j70x0uihv80smbnrqok9liwx foreign key (collection_id) references collections (id)
alter table videos add constraint FK5pbmp2i4a97q92m4uo9b5v1iu foreign key (section_id) references sections (id)
