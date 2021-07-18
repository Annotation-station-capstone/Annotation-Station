INSERT INTO collections (description, image, is_private, title, user_id)


VALUES ('description', 'https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg', false, 'Cooking: Italian Cuisine', 6),
 ('description', 'https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg', false, 'Gardening', 6),
('description', 'https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg', false, 'Carpentry: Cabinet Making', 6),


('description', 'https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg', false, 'Languages: Spanish', 8),


('description', 'https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg', false, 'Anime: Demon Hunter', 11),
('description', 'https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg', false, 'Tech: Apple products', 11),

 ('description', 'https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg', false, 'Games: Monster Hunter World', 9),
('description', 'https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg', false, 'Crafts: One minute crafts', 9);

-- V ?
INSERT INTO collections ('description', 'https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg', false, 'title', user_id);


INSERT INTO sections (title, collection_id)

values
('Sauces', 5),
('Risotto', 5),
('Al Forno', 5),
('Alla Genovese', 5),
('Garden pests and plant diseases', 6),
('Composting', 6),
('Indoor gardens', 6),
('Rasied Beds', 6),
('Casing', 7),
('Joining', 7),
('Finishing', 7),
('Tool Types and Reviews', 7),
('Vocabulary', 8),
('Spanish Shows', 8),
('Grammar', 8),
('New Demons', 9),
('New Slayers', 9),
('Cool Fighting Techniques', 9),
('Plot development', 9),
('IOS Features', 10),
('IPhones', 10),
('Macbooks', 10),
('Apple-Tv/ Apple-Music', 10),
('Lore', 11),
('Character Builds', 11),
('Monsters', 11),
('Locations', 11),
('Clothing', 12),
('Kitchen', 12),
('Camping', 12),
('Around the House', 12);
