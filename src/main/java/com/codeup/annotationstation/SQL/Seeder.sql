USE annotation_db;

# truncate users;
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

INSERT INTO collections(user_id, title, is_private, description,image)
VALUES (1,'Web_dev', false, 'simple collection of notes on web development videos','https://mdbootstrap.com/img/new/standard/nature/184.jpg');
SELECT * FROM collections;
INSERT INTO collections(user_id, title, is_private, description,image)
VALUES (2,'Home Decor', false, 'worlds greatest home decor ideas','https://mdbootstrap.com/img/new/standard/nature/184.jpg');
SELECT * FROM collections;
INSERT INTO collections(user_id, title, is_private, description,image)
VALUES (3,'Mixology', false, 'awesome teaching for bartenders and alcohol lovers','https://mdbootstrap.com/img/new/standard/nature/184.jpg');
SELECT * FROM collections;
INSERT INTO collections(user_id, title, is_private, description,image)
VALUES (4,'Books', false, 'A collection of my favorite artist','https://mdbootstrap.com/img/new/standard/nature/184.jpg');
SELECT * FROM collections;
INSERT INTO collections(user_id, title, is_private, description,image)
VALUES (5,'Cooking', false, 'recipes by Chef Gordon','https://mdbootstrap.com/img/new/standard/nature/184.jpg');
SELECT * FROM collections;
INSERT INTO collections(user_id, title, is_private, description,image)
VALUES (1,'Anime', false, 'collection of the best anime of all time','https://mdbootstrap.com/img/new/standard/nature/184.jpg');
SELECT * FROM collections;
INSERT INTO collections(user_id, title, is_private, description,image)
VALUES (2,'Home Improvement', false, 'Tip and Tricks for home improvement','https://mdbootstrap.com/img/new/standard/nature/184.jpg');
SELECT * FROM collections;
INSERT INTO collections(user_id, title, is_private, description,image)
VALUES (3,'Space', false, 'The Wonders of space unraveled in this collection','https://mdbootstrap.com/img/new/standard/nature/184.jpg');
SELECT * FROM collections;
INSERT INTO collections(user_id, title, is_private, description,image)
VALUES (4,'Makeup', false, 'Makeup tutorials and tricks','https://mdbootstrap.com/img/new/standard/nature/184.jpg');
SELECT * FROM collections;
INSERT INTO collections(user_id, title, is_private, description,image)
VALUES (5,'Tech', false, 'The world of Technology','https://mdbootstrap.com/img/new/standard/nature/184.jpg');
SELECT * FROM collections;

INSERT INTO sections (title, collection_id)
VALUES ('HTML', 1);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('CSS', 1);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Java', 1);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Lighting', 2);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Gardening', 2);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Furniture', 2);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Vodka', 3);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Cognac', 3);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Best Mixes misc,.', 3);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Fantasy', 4);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Crime', 4);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Learning', 4);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Japanese Dishes', 5);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Greek Dishes', 5);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Mexican Dishes', 5);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Demon Slayer', 6);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('My Hero', 6);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('DBZ', 6);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Tiling', 7);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Roofing', 7);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Counters', 7);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Andromeda', 8);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Sun', 8);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Moon', 8);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Sun', 8);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Foundation Tricks', 9);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Eyeshadow', 9);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Concealer', 9);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('New Tech', 10);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Coding', 10);
SELECT * FROM sections;
INSERT INTO sections (title, collection_id)
VALUES ('Phones', 10);
SELECT * FROM sections;




INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 1);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 2);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 3);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 4);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 5);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 6);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 7);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 8);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 9);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 10);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 11);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 12);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 13);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 14);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 15);
INSERT INTO videos (video_url, section_id)
VALUES ('https://www.youtube.com/watch?v=pQN-pnXPaVg', 16);
SELECT * FROM videos;

INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 1, '0:45',1);
INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 2, '0:45',2);
INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 3, '0:45',3);
INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 4, '0:45',4);
INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 5, '0:45',5);
INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 6, '0:45',6);
INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 7, '0:45',7);
INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 8, '0:45',8);
INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 9, '0:45',9);
INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 10, '0:45',10);
INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 11, '0:45',11);
INSERT INTO notes (note, video_id, time_stamp,section_id)
VALUES ('This is my first annotation!', 12, '0:45',12);
SELECT * FROM notes;

INSERT INTO tags (tag)
VALUES ('HTML');
INSERT INTO notes_tags (note_id, tag_id)
VALUES (1, 1);
SELECT * FROM tags;
SELECT * FROM notes_tags;

INSERT INTO comments (user_id,  collection_id, comment)
VALUES (2, 2, 'Nice Annotation!');
SELECT * FROM comments;