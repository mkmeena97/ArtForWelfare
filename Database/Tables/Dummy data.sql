

INSERT INTO `afs`.`roles` (`role_name`)
VALUES
    ('Admin'),
    ('Artist'),
    ('Customer'),
    ('NGO');

-- Insert data into afs.questions table

INSERT INTO `afs`.`questions` (`que_text`)
VALUES
    ('What is your favorite color?'),
    ('What is your pet\'s name?'),
    ('What is your mother\'s maiden name?');

-- Insert data into afs.users table

INSERT INTO afs.users (user_name, password, email, role_id, que_id, answer, approve)
VALUES
    ('admin', 'admin123', 'admin@example.com', 1, 11, 'Blue', 1),
    ('artist1', 'artist123', 'artist1@example.com', 2, 12, 'Fluffy', 1),
    ('customer1', 'customer123', 'customer1@example.com', 3, 13, 'Smith', 1),
    ('ngo1', 'ngo123', 'ngo1@example.com', 4, 11, 'Blue', 1),
    ('artist2', 'artist456', 'artist2@example.com', 2, 12, 'Buddy', 1),
    ('ngo2', 'ngo789', 'ngo2@example.com', 4, 11, 'Green', 1),
    ('customer2', 'customer456', 'customer2@example.com', 3, 13, 'Johnson', 1),
    ('admin2', 'admin456', 'admin2@example.com', 1, 11, 'Red', 1),
    ('Alice', 'customer123', 'alice@example.com', 3, 13, 'Brown', 1),
    ('Bob', 'customer456', 'bob@example.com', 3, 11, 'Yellow', 1),
    ('Eva', 'customer456', 'eva@example.com', 3, 12, 'Whiskers', 1),
    ('JohnDoe', 'admin123', 'john.doe@example.com', 1, 13, 'Garcia', 1),
    ('EmilyJ', 'admin456', 'emily.johnson@example.com', 1, 11, 'Purple', 1),
    ('JaneSmith', 'artist123', 'jane.smith@example.com', 2, 12, 'Milo', 1),
    ('WilliamB', 'artist456', 'william.brown@example.com', 2, 13, 'Davis', 1),
    ('MichaelJ', 'artist456', 'michael.johnson@example.com', 2, 11, 'Orange', 1);




-- Insert data into afs.state table

INSERT INTO afs.states (state_name)
VALUES
    ('Delhi'),
    ('Maharashtra'),
    ('Karnataka'),
    ('Tamil Nadu'),
    ('Uttar Pradesh');


-- Insert data into afs.admin table

INSERT INTO afs.admins (user_id, fname, lname)
VALUES
    (1001, 'John', 'Doe'),
    (1008, 'Emily', 'Johnson'),
    (1012, 'John', 'Doe'), 
    (1013, 'Emily', 'Johnson');



-- Insert data into afs.city table

INSERT INTO afs.cities (city_name, state_id)
VALUES
    ('New Delhi', 41),
    ('Mumbai', 42),
    ('Bangalore', 43),
    ('Chennai', 44),
    ('Lucknow', 45);
    
    

-- Insert data into afs.area table
    
INSERT INTO afs.areas (area_name, city_id)
VALUES
    ('Connaught Place', 101),
    ('Dadar', 102),
    ('Koramangala', 103),
    ('T. Nagar', 104),
    ('Hazratganj', 105);

-- Insert data into afs.artists table    

INSERT INTO afs.artists (user_id, fname, lname, area_id, contact, speciality)
VALUES
    (1002, 'Jane', 'Smith', 141, '555-1234', 'Impressionism'),
    (1005, 'Artist', 'Two', 142, '555-5555', 'Abstract'),
    (1014, 'Jane', 'Smith', 141, '555-1235', 'Realism'),
    (1015, 'William', 'Brown', 142, '555-5678', 'Cubism'),
    (1016, 'Michael', 'Johnson', 141, '555-7890', 'Surrealism');

-- Insert data into afs.customers table
    
INSERT INTO afs.customers (user_id, fname, lname, area_id, contact)
VALUES
    (1003, 'Customer', 'One', 142, '555-4444'), 
    (1007, 'Customer', 'Two', 141, '555-5555'), 
    (1009, 'Alice', 'Johnson', 141, '555-1111'),
    (1010, 'Bob', 'Williams', 142, '555-2222'),
    (1011, 'Eva', 'Martinez', 141, '555-3333');    


-- Insert data into afs.ngo table    

INSERT INTO afs.ngo (user_id, fname, lname, area_id, address, contact)
VALUES
    (1004, 'NGO One', 'Organization', 141, '212 gokhlenagar' , '555-9876'),
    (1006, 'NGO Two', 'Foundation', 142, '280 jagatpura' , '555-5432');

-- Insert data into afs.category table
INSERT INTO `afs`.`categories` (`cat_name`)
VALUES
    ('Painting'),
    ('Sculpture'),
    ('Photography'),
    ('Drawing'),
    ('Digital Art'),
    ('Mixed Media'),
    ('Printmaking'),
    ('Ceramics'),
    ('Textile Art'),
    ('Illustration');

-- Insert data into afs.art table

INSERT INTO `afs`.`arts` (`artist_id`, `cat_id`, `price`, `ngo_id`, `description`, `art_name`, `image`)
VALUES
    (2001, 201, 100.00, 5001, 'Beautiful painting of a landscape', 'Landscape Painting', 'landscape.jpg'),
    (2002, 202, 250.00, 5002, 'Elegant sculpture depicting a figure', 'Elegant Sculpture', 'sculpture.jpg'),
    (2003, 203, 50.00, 5001, 'Vibrant photograph capturing a moment', 'Vibrant Photography', 'photo.jpg'),
    (2001, 201, 75.00, 5002, 'Abstract artwork with bold colors', 'Abstract Art', 'abstract.jpg'),
    (2004, 204, 180.00, 5001, 'Detailed pencil drawing of a portrait', 'Portrait Drawing', 'drawing.jpg'),
    (2002, 205, 120.00, 5002, 'Digital art with a futuristic theme', 'Futuristic Digital Art', 'digital_art.jpg'),
    (2003, 206, 300.00, 5001, 'Mixed media piece with various materials', 'Mixed Media Artwork', 'mixed_media.jpg'),
    (2005, 207, 40.00, 5002, 'Print of a nature scene', 'Nature Print', 'nature_print.jpg'),
    (2004, 208, 220.00, 5001, 'Ceramic vase with intricate design', 'Intricate Ceramic Vase', 'ceramic_vase.jpg'),
    (2001, 209, 90.00, 5002, 'Textile art with vibrant patterns', 'Vibrant Textile Art', 'textile_art.jpg'),
    (2003, 210, 160.00, 5001, 'Illustration of a whimsical fantasy world', 'Fantasy Illustration', 'fantasy_illustration.jpg'),
    (2004, 201, 200.00, 5002, 'Realistic oil painting of a still life', 'Still Life Painting', 'still_life.jpg'),
    (2002, 202, 130.00, 5001, 'Bronze sculpture of an animal', 'Animal Sculpture', 'animal_sculpture.jpg'),
    (2005, 203, 70.00, 5002, 'Black and white photography', 'Black and White Photo', 'bw_photo.jpg'),
    (2002, 204, 85.00, 5001, 'Charcoal drawing of a cityscape', 'Cityscape Drawing', 'cityscape_drawing.jpg'),
    (2001, 205, 180.00, 5002, 'Digital artwork with vibrant colors', 'Vibrant Digital Art', 'vibrant_digital.jpg'),
    (2003, 206, 270.00, 5001, 'Mixed media collage with abstract elements', 'Abstract Mixed Media', 'abstract_collage.jpg'),
    (2004, 207, 30.00, 5002, 'Print of a seascape', 'Seascape Print', 'seascape_print.jpg'),
    (2005, 208, 240.00, 5001, 'Handcrafted ceramic bowl', 'Handcrafted Ceramic Bowl', 'ceramic_bowl.jpg'),
    (2003, 209, 110.00, 5002, 'Textile artwork inspired by nature', 'Nature-Inspired Textile Art', 'nature_textile.jpg');

    
  