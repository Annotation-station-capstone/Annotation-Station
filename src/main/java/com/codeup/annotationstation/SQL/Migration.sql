DROP DATABASE IF EXISTS annotation_db;
CREATE DATABASE IF NOT EXISTS annotation_db;

USE annotation_db;

CREATE TABLE IF NOT EXISTS users (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	is_admin BOOLEAN NOT NULL,
	username VARCHAR(255) UNIQUE NOT NULL,
	user_image VARCHAR(255),
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
	);

CREATE TABLE IF NOT EXISTS tags(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	tag VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
	);


CREATE TABLE IF NOT EXISTS collections (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	user_id INT UNSIGNED NOT NULL,
	title VARCHAR(255) NOT NULL,
	is_private BOOLEAN NOT NULL,
	description VARCHAR(255) NOT NULL,
	image VARCHAR(255),
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id)
	);

CREATE TABLE IF NOT EXISTS sections (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	collection_id INT UNSIGNED NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (collection_id) REFERENCES collections(id)
	);

CREATE TABLE IF NOT EXISTS videos(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	video_url VARCHAR(255) NOT NULL,
	section_id INT UNSIGNED NOT NULL,
	FOREIGN KEY (section_id) REFERENCES sections(id),
	PRIMARY KEY (id)
	);

CREATE TABLE IF NOT EXISTS notes (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	note TEXT NOT NULL,
	video_id INT UNSIGNED NOT NULL,
	section_id INT UNSIGNED NOT NULL,
	time_stamp TEXT,
	PRIMARY KEY(id),
	FOREIGN KEY(video_id) REFERENCES videos(id)
	);

CREATE TABLE IF NOT EXISTS notes_tags (
	note_id INT UNSIGNED NOT NULL,
	tag_id INT UNSIGNED NOT NULL,
	FOREIGN KEY (note_id) REFERENCES notes(id),
	FOREIGN KEY (tag_id) REFERENCES tags(id)
	);

CREATE TABLE IF NOT EXISTS comments (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	user_id INT UNSIGNED NOT NULL,
	comment TEXT NOT NULL,
	collection_id INT UNSIGNED NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (collection_id) REFERENCES collections(id)
	);

alter table collections add constraint FKn7pdedyqaiddr0uxdj603my7d foreign key (user_id) references users (id)
alter table comments add constraint FK56gwrgendmnb9fxjpn0cwjnoc foreign key (collection_id) references collections (id)
alter table comments add constraint FK8omq0tc18jd43bu5tjh6jvraq foreign key (user_id) references users (id)
alter table notes add constraint FKsuonsoogp60wim91moa8ly5jr foreign key (section_id) references sections (id)
alter table notes add constraint FKhtvvt60nbw5pwwhwgjma4rd5e foreign key (video_id) references videos (id)
alter table notes_tags add constraint FK9oi8krp2qos7c0icr3j01butb foreign key (tag_id) references tags (id)
alter table notes_tags add constraint FKcxrhvlv1dppm49b2snddodsvi foreign key (note_id) references notes (id)
alter table sections add constraint FK2j70x0uihv80smbnrqok9liwx foreign key (collection_id) references collections (id)
alter table videos add constraint FK5pbmp2i4a97q92m4uo9b5v1iu foreign key (section_id) references sections (id)




