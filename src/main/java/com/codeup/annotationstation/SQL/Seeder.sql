USE annotation_db;

truncate users;
insert into users (first_name, last_name, is_admin, username, user_image, email, password)
values('nathan','adcock',true,'NA', null, 'nathan@codeup.com', 'codeup');
insert into users (first_name, last_name, is_admin, username, user_image, email, password)
values('darius','brown',true,'DB', null, 'darius@codeup.com', 'codeup');
insert into users (first_name, last_name, is_admin, username, user_image, email, password)
values('brett','crawford',true,'BC', null, 'brett@codeup.com', 'codeup');
insert into users (first_name, last_name, is_admin, username, user_image, email, password)
values('kelvon','patterson',true,'KP', null, 'kelvon@codeup.com', 'codeup');
insert into users (first_name, last_name, is_admin, username, user_image, email, password)
values('victor','hernandez',true,'VH', null, 'victor@codeup.com', 'codeup');
SELECT * FROM users;

INSERT INTO collections(user_id, title, is_private, description)
VALUES (1,'Web_dev', false, 'simple collection of notes on web development videos');
SELECT * FROM collections;

INSERT INTO sections (title, collection_id)
VALUES ('HTML', 1);
SELECT * FROM sections;

INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 1);
SELECT * FROM videos;

INSERT INTO notes (note, video_id, time_stamp)
VALUES ('This is my first annotation!', 1, '0:45');
SELECT * FROM notes;

INSERT INTO tags (tag)
VALUES ('HTML');
INSERT INTO notes_tags (note_id, tag_id)
VALUES (1, 1);
SELECT * FROM tags;
SELECT * FROM notes_tags;

INSERT INTO comments (user_id, comment, collection_id)
VALUES (2, 'Nice Annotation!', 1);
SELECT * FROM comments;
