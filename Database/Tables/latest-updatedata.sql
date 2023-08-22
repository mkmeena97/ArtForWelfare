SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema afs
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema afs
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `afs` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `afs` ;

-- -----------------------------------------------------
-- Table `afs`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`roles` (
  `role_id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `role_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`role_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`questions` (
  `que_id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `que_text` TEXT NOT NULL,
  PRIMARY KEY (`que_id`))
  AUTO_INCREMENT = 11
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`users` (
  `user_id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `user_name` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `email` VARCHAR(50) NOT NULL UNIQUE,
  `role_id` INT NOT NULL,
  `que_id` INT NOT NULL,
  `answer` TEXT NOT NULL,
  `approve` TINYINT(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  INDEX `role_id` (`role_id` ASC) VISIBLE,
  INDEX `que_id` (`que_id` ASC) VISIBLE,
  CONSTRAINT `users_ibfk_1`
    FOREIGN KEY (`role_id`)
    REFERENCES `afs`.`roles` (`role_id`),
  CONSTRAINT `users_ibfk_2`
    FOREIGN KEY (`que_id`)
    REFERENCES `afs`.`questions` (`que_id`)
) AUTO_INCREMENT = 1001
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;



DELIMITER //
CREATE TRIGGER set_default_approve
BEFORE INSERT ON `afs`.`users`
FOR EACH ROW
BEGIN
  IF NEW.role_id = 4 THEN
    SET NEW.approve = 0;
  ELSE
    SET NEW.approve = 1;
  END IF;
END;
//
DELIMITER ;

-- -----------------------------------------------------
-- Table `afs`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`admins` (
  `admin_id` INT AUTO_INCREMENT UNIQUE,
  `user_id` INT NOT NULL,
  `fname` VARCHAR(50) NOT NULL,
  `lname` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `admin_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `afs`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `afs`.`state`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`states` (
  `state_id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `state_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`state_id`)) AUTO_INCREMENT = 41
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`cities` (
  `city_id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `city_name` VARCHAR(50) NOT NULL,
  `state_id` INT NOT NULL,
  PRIMARY KEY (`city_id`),
  INDEX `state_id` (`state_id` ASC) VISIBLE,
  CONSTRAINT `city_ibfk_1`
    FOREIGN KEY (`state_id`)
    REFERENCES `afs`.`states` (`state_id`)) AUTO_INCREMENT = 101
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`area`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`areas` (
  `area_id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `area_name` VARCHAR(100) NOT NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`area_id`),
  INDEX `city_id` (`city_id` ASC) VISIBLE,
  CONSTRAINT `area_ibfk_1`
    FOREIGN KEY (`city_id`)
    REFERENCES `afs`.`cities` (`city_id`)) AUTO_INCREMENT = 141
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`artists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`artists` (
  `artist_id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `fname` VARCHAR(50) NOT NULL,
  `lname` VARCHAR(50) NULL DEFAULT NULL,
  `area_id` INT NOT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `contact` VARCHAR(20) NOT NULL UNIQUE,
  `speciality` VARCHAR(100) NULL DEFAULT NULL,
  
  PRIMARY KEY (`artist_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `area_id` (`area_id` ASC) VISIBLE,
  CONSTRAINT `artists_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `afs`.`users` (`user_id`),
  CONSTRAINT `artists_ibfk_2`
    FOREIGN KEY (`area_id`)
    REFERENCES `afs`.`areas` (`area_id`)) AUTO_INCREMENT = 2001
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`categories` (
  `cat_id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `cat_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`cat_id`)) AUTO_INCREMENT = 201
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`ngo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`ngo` (
  `ngo_id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `fname` VARCHAR(50) NOT NULL,
  `lname` VARCHAR(50) NULL DEFAULT NULL,
  `area_id` INT NOT NULL ,
  `address` VARCHAR(255) NOT NULL,
  `contact` VARCHAR(20) NOT NULL UNIQUE ,
  `certificate` BLOB NULL DEFAULT NULL,
  `account_no` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`ngo_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `area_id` (`area_id` ASC) VISIBLE,
  CONSTRAINT `ngo_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `afs`.`users` (`user_id`),
  CONSTRAINT `ngo_ibfk_2`
    FOREIGN KEY (`area_id`)
    REFERENCES `afs`.`areas` (`area_id`)) AUTO_INCREMENT = 5001
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`art`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`arts` (
  `art_id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `artist_id` INT NOT NULL,
  `cat_id` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `ngo_id` INT NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `art_name` VARCHAR(50) NOT NULL,
  `status` VARCHAR(10)  NOT NULL DEFAULT 'unsold', 
  `image` BLOB NOT NULL,
  PRIMARY KEY (`art_id`),
  INDEX `artist_id` (`artist_id` ASC) VISIBLE,
  INDEX `cat_id` (`cat_id` ASC) VISIBLE,
  INDEX `ngo_id` (`ngo_id` ASC) VISIBLE,
  CONSTRAINT `art_ibfk_1`
    FOREIGN KEY (`artist_id`)
    REFERENCES `afs`.`artists` (`artist_id`),
  CONSTRAINT `art_ibfk_2`
    FOREIGN KEY (`cat_id`)
    REFERENCES `afs`.`categories` (`cat_id`),
  CONSTRAINT `art_ibfk_3`
    FOREIGN KEY (`ngo_id`)
    REFERENCES `afs`.`ngo` (`ngo_id`)
) AUTO_INCREMENT = 8001
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

DELIMITER //
CREATE PROCEDURE UpdateFundsForSoldArt(art_id INT, ngo_id INT, price DECIMAL(10, 2))
BEGIN
  DECLARE ngo_amount DECIMAL(10, 2);
  DECLARE afw_amount DECIMAL(10, 2);
  
  SET ngo_amount = price * 0.70;
  SET afw_amount = price * 0.30;
  
  INSERT INTO `afs`.`ngo_fund` (`ngo_id`, `art_id`, `amount`)
  VALUES (ngo_id, art_id, ngo_amount);
  
  INSERT INTO `afs`.`afw_fund` (`art_id`, `amount`)
  VALUES (art_id, afw_amount);
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER update_funds_on_art_sold
AFTER UPDATE ON `afs`.`arts`
FOR EACH ROW
BEGIN
  IF NEW.status = 'sold' AND OLD.status = 'unsold' THEN
    CALL UpdateFundsForSoldArt(NEW.art_id, NEW.ngo_id, NEW.price);
  END IF;
END;
//
DELIMITER ;


-- -----------------------------------------------------
-- Table `afs`.`afw_fund`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `afs`.`afw_fund` (
  `afwf_id` INT NOT NULL AUTO_INCREMENT,
  `art_id` INT NOT NULL,
  `amount` DECIMAL(10,2) NULL DEFAULT NULL,
  `datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`afwf_id`),
  INDEX `art_id` (`art_id` ASC) VISIBLE,
  CONSTRAINT `afw_fund_ibfk_1`
    FOREIGN KEY (`art_id`)
    REFERENCES `afs`.`arts` (`art_id`)) AUTO_INCREMENT = 301
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`customers` (
  `cust_id` INT NOT NULL UNIQUE AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `fname` VARCHAR(50) NOT NULL ,
  `lname` VARCHAR(255) NULL DEFAULT NULL,
  `area_id` INT NULL DEFAULT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `contact` VARCHAR(20) NOT NULL UNIQUE,
  PRIMARY KEY (`cust_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `area_id` (`area_id` ASC) VISIBLE,
  CONSTRAINT `customers_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `afs`.`users` (`user_id`),
  CONSTRAINT `customers_ibfk_2`
    FOREIGN KEY (`area_id`)
    REFERENCES `afs`.`areas` (`area_id`)) AUTO_INCREMENT = 3001
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`ngo_fund`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`ngo_fund` (
  `nf_id` INT NOT NULL AUTO_INCREMENT,
  `ngo_id` INT NOT NULL ,
  `art_id` INT NOT NULL,
  `amount` DECIMAL(10,2) NULL DEFAULT NULL,
  `datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`nf_id`),
  INDEX `ngo_id` (`ngo_id` ASC) VISIBLE,
  INDEX `art_id` (`art_id` ASC) VISIBLE,
  CONSTRAINT `ngo_fund_ibfk_1`
    FOREIGN KEY (`ngo_id`)
    REFERENCES `afs`.`ngo` (`ngo_id`),
  CONSTRAINT `ngo_fund_ibfk_2`
    FOREIGN KEY (`art_id`)
    REFERENCES `afs`.`arts` (`art_id`)) AUTO_INCREMENT = 401
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `cust_id` INT NOT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `payment_id` VARCHAR(50) NOT NULL,
  `pay_mode` VARCHAR(50), -- Adjust the data type and length as needed
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `unique_payment_id` (`payment_id`),
  INDEX `fk_cust_id_idx` (`cust_id` ASC) VISIBLE,
  CONSTRAINT `fk_cust_id`
    FOREIGN KEY (`cust_id`)
    REFERENCES `afs`.`customers` (`cust_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) AUTO_INCREMENT = 7001
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;






-- -----------------------------------------------------
-- Table `afs`.`order_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`order_details` (
  `od_id` INT NOT NULL  AUTO_INCREMENT,
  `order_id` INT NOT NULL ,
  `art_id` INT NOT NULL ,
  PRIMARY KEY (`od_id`),
  INDEX `order_id` (`order_id` ASC) VISIBLE,
  INDEX `art_id` (`art_id` ASC) VISIBLE,
  CONSTRAINT `order_details_ibfk_1`
    FOREIGN KEY (`order_id`)
    REFERENCES `afs`.`orders` (`order_id`),
  CONSTRAINT `order_details_ibfk_2`
    FOREIGN KEY (`art_id`)
    REFERENCES `afs`.`arts` (`art_id`)) AUTO_INCREMENT = 7501
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

DELIMITER //
CREATE TRIGGER update_art_status_after_order_insert
AFTER INSERT ON `afs`.`order_details`
FOR EACH ROW
BEGIN
    -- Update the status of the artwork to 'sold'
    UPDATE `afs`.`arts`
    SET status = 'sold'
    WHERE art_id = NEW.art_id;
END;
//
DELIMITER ;



-- ------------------------------------------------------------------------------------
--	DUMMY DATA
-- ------------------------------------------------------------------------------------


-- Insert data into afs.roles table



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

    
  
    
  