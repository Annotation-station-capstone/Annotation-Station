UPDATE collections SET title = 'Anime: Demon Slayer' WHERE id = 9;


INSERT INTO sections (title, collection_id)

values
('Green Lantern Corps', 15),
('Red Lantern Corps', 15),
('Yellow Lantern Corps', 15);


DELETE FROM collections
WHERE id = 20;

DELETE FROM sections
WHERE id = 50;

DELETE FROM videos
WHERE id = 154;

DELETE FROM videos
WHERE id = 155;

DELETE FROM videos
WHERE id = 158;

DELETE FROM videos
WHERE id = 159;



SET FOREIGN_KEY_CHECKS=0;

SET FOREIGN_KEY_CHECKS=1;

select * from collections;


DELETE FROM comments
WHERE id = 4;

DELETE FROM comments
WHERE id = 5;