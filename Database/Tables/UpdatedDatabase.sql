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
  `role_id` INT NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE INDEX `role_id` (`role_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`questions` (
  `que_id` INT NOT NULL AUTO_INCREMENT,
  `que_text` TEXT NOT NULL,
  PRIMARY KEY (`que_id`),
  UNIQUE INDEX `que_id` (`que_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(20) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `role_id` INT NOT NULL,
  `que_id` INT NOT NULL,
  `answer` TEXT NOT NULL,
  `approve` TINYINT(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `email` (`email` ASC) VISIBLE,
  INDEX `role_id` (`role_id` ASC) VISIBLE,
  INDEX `que_id` (`que_id` ASC) VISIBLE,
  CONSTRAINT `users_ibfk_1`
    FOREIGN KEY (`role_id`)
    REFERENCES `afs`.`roles` (`role_id`),
  CONSTRAINT `users_ibfk_2`
    FOREIGN KEY (`que_id`)
    REFERENCES `afs`.`questions` (`que_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1001
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`admins` (
  `admin_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `fname` VARCHAR(50) NOT NULL,
  `lname` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE INDEX `admin_id` (`admin_id` ASC) VISIBLE,
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `admin_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `afs`.`users` (`user_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`states`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`states` (
  `state_id` INT NOT NULL AUTO_INCREMENT,
  `state_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`state_id`),
  UNIQUE INDEX `state_id` (`state_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 1101
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`cities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`cities` (
  `city_id` INT NOT NULL AUTO_INCREMENT,
  `city_name` VARCHAR(50) NOT NULL,
  `state_id` INT NOT NULL,
  PRIMARY KEY (`city_id`),
  UNIQUE INDEX `city_id` (`city_id` ASC) VISIBLE,
  INDEX `state_id` (`state_id` ASC) VISIBLE,
  CONSTRAINT `city_ibfk_1`
    FOREIGN KEY (`state_id`)
    REFERENCES `afs`.`states` (`state_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1241
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`areas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`areas` (
  `area_id` INT NOT NULL AUTO_INCREMENT,
  `area_name` VARCHAR(100) NOT NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`area_id`),
  UNIQUE INDEX `area_id` (`area_id` ASC) VISIBLE,
  INDEX `city_id` (`city_id` ASC) VISIBLE,
  CONSTRAINT `area_ibfk_1`
    FOREIGN KEY (`city_id`)
    REFERENCES `afs`.`cities` (`city_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1301
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`artists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`artists` (
  `artist_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `fname` VARCHAR(50) NOT NULL,
  `lname` VARCHAR(50) NULL DEFAULT NULL,
  `area_id` INT NOT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `contact` VARCHAR(20) NOT NULL,
  `speciality` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`artist_id`),
  UNIQUE INDEX `artist_id` (`artist_id` ASC) VISIBLE,
  UNIQUE INDEX `contact` (`contact` ASC) VISIBLE,
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `area_id` (`area_id` ASC) VISIBLE,
  CONSTRAINT `artists_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `afs`.`users` (`user_id`),
  CONSTRAINT `artists_ibfk_2`
    FOREIGN KEY (`area_id`)
    REFERENCES `afs`.`areas` (`area_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2001
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`categories` (
  `cat_id` INT NOT NULL AUTO_INCREMENT,
  `cat_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`cat_id`),
  UNIQUE INDEX `cat_id` (`cat_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 201
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`ngo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`ngo` (
  `ngo_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `ngo_name` VARCHAR(50) NOT NULL,
  `domain` VARCHAR(255) NULL DEFAULT NULL,
  `area_id` INT NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `contact` VARCHAR(20) NOT NULL,
  `certificate` LONGBLOB NULL DEFAULT NULL,
  `account_no` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`ngo_id`),
  UNIQUE INDEX `ngo_id` (`ngo_id` ASC) VISIBLE,
  UNIQUE INDEX `contact` (`contact` ASC) VISIBLE,
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `area_id` (`area_id` ASC) VISIBLE,
  CONSTRAINT `ngo_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `afs`.`users` (`user_id`),
  CONSTRAINT `ngo_ibfk_2`
    FOREIGN KEY (`area_id`)
    REFERENCES `afs`.`areas` (`area_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5001
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`arts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`arts` (
  `art_id` INT NOT NULL AUTO_INCREMENT,
  `artist_id` INT NOT NULL,
  `cat_id` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `ngo_id` INT NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `art_name` VARCHAR(50) NOT NULL,
  `status` VARCHAR(10) NOT NULL DEFAULT 'unsold',
  `image` LONGBLOB NULL DEFAULT NULL,
  PRIMARY KEY (`art_id`),
  UNIQUE INDEX `art_id` (`art_id` ASC) VISIBLE,
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
    REFERENCES `afs`.`ngo` (`ngo_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8001
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


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
    REFERENCES `afs`.`arts` (`art_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 301
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`customers` (
  `cust_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `fname` VARCHAR(50) NOT NULL,
  `lname` VARCHAR(255) NULL DEFAULT NULL,
  `area_id` INT NULL DEFAULT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `contact` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`cust_id`),
  UNIQUE INDEX `cust_id` (`cust_id` ASC) VISIBLE,
  UNIQUE INDEX `contact` (`contact` ASC) VISIBLE,
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `area_id` (`area_id` ASC) VISIBLE,
  CONSTRAINT `customers_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `afs`.`users` (`user_id`),
  CONSTRAINT `customers_ibfk_2`
    FOREIGN KEY (`area_id`)
    REFERENCES `afs`.`areas` (`area_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3001
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`ngo_fund`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`ngo_fund` (
  `nf_id` INT NOT NULL AUTO_INCREMENT,
  `ngo_id` INT NOT NULL,
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
    REFERENCES `afs`.`arts` (`art_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 401
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `cust_id` INT NOT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `datetime` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `payment_id` VARCHAR(50) NOT NULL,
  `pay_mode` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE INDEX `unique_payment_id` (`payment_id` ASC) VISIBLE,
  INDEX `fk_cust_id_idx` (`cust_id` ASC) VISIBLE,
  CONSTRAINT `fk_cust_id`
    FOREIGN KEY (`cust_id`)
    REFERENCES `afs`.`customers` (`cust_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 7001
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `afs`.`order_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afs`.`order_details` (
  `od_id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `art_id` INT NOT NULL,
  PRIMARY KEY (`od_id`),
  INDEX `order_id` (`order_id` ASC) VISIBLE,
  INDEX `art_id` (`art_id` ASC) VISIBLE,
  CONSTRAINT `order_details_ibfk_1`
    FOREIGN KEY (`order_id`)
    REFERENCES `afs`.`orders` (`order_id`),
  CONSTRAINT `order_details_ibfk_2`
    FOREIGN KEY (`art_id`)
    REFERENCES `afs`.`arts` (`art_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7501
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `afs` ;

-- -----------------------------------------------------
-- procedure UpdateFundsForSoldArt
-- -----------------------------------------------------

DELIMITER $$
USE `afs`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateFundsForSoldArt`(art_id INT, ngo_id INT, price DECIMAL(10, 2))
BEGIN
  DECLARE ngo_amount DECIMAL(10, 2);
  DECLARE afw_amount DECIMAL(10, 2);
  
  SET ngo_amount = price * 0.70;
  SET afw_amount = price * 0.30;
  
  INSERT INTO `afs`.`ngo_fund` (`ngo_id`, `art_id`, `amount`)
  VALUES (ngo_id, art_id, ngo_amount);
  
  INSERT INTO `afs`.`afw_fund` (`art_id`, `amount`)
  VALUES (art_id, afw_amount);
END$$

DELIMITER ;
USE `afs`;

DELIMITER $$
USE `afs`$$
CREATE
DEFINER=`root`@`localhost`
TRIGGER `afs`.`set_default_approve`
BEFORE INSERT ON `afs`.`users`
FOR EACH ROW
BEGIN
  IF NEW.role_id = 4 THEN
    SET NEW.approve = 0;
  ELSE
    SET NEW.approve = 1;
  END IF;
END$$

USE `afs`$$
CREATE
DEFINER=`root`@`localhost`
TRIGGER `afs`.`update_funds_on_art_sold`
AFTER UPDATE ON `afs`.`arts`
FOR EACH ROW
BEGIN
  IF NEW.status = 'sold' AND OLD.status = 'unsold' THEN
    CALL UpdateFundsForSoldArt(NEW.art_id, NEW.ngo_id, NEW.price);
  END IF;
END$$

USE `afs`$$
CREATE
DEFINER=`root`@`localhost`
TRIGGER `afs`.`update_art_status_after_order_insert`
AFTER INSERT ON `afs`.`order_details`
FOR EACH ROW
BEGIN
    
    UPDATE `afs`.`arts`
    SET status = 'sold'
    WHERE art_id = NEW.art_id;
END$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- ------------------------------------------------------------------------------------
--	DUMMY DATA
-- ------------------------------------------------------------------------------------


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
    ('abhinav', 'Abhinav@123', 'abhinav@gmail.com', 1, 11, 'Blue', 1),
    ('mahendra', 'Mahendra@123', 'mahendra@gmail.com', 1, 12, 'Fluffy', 1);
   


-- Insert data into afs.admin table

INSERT INTO afs.admins (user_id, fname, lname)
VALUES
    (1001, 'Abhinav', 'Kumar'),
    (1002, 'Mahendra', 'Meena');
    
-- Insert data into afs.state table

INSERT INTO afs.states (state_name)
VALUES
    ('Andhra Pradesh'),
    ('Arunachal Pradesh'),
    ('Assam'),
    ('Bihar'),
    ('Chhattisgarh'),
    ('Goa'),
    ('Gujarat'),
    ('Haryana'),
    ('Himachal Pradesh'),
    ('Jharkhand'),
    ('Karnataka'),
    ('Kerala'),
    ('Madhya Pradesh'),
    ('Maharashtra'),
    ('Manipur'),
    ('Meghalaya'),
    ('Mizoram'),
    ('Nagaland'),
    ('Odisha'),
    ('Punjab'),
    ('Rajasthan'),
    ('Sikkim'),
    ('Tamil Nadu'),
    ('Telangana'),
    ('Tripura'),
    ('Uttar Pradesh'),
    ('Uttarakhand'),
    ('West Bengal'),
    ('Andaman and Nicobar Islands'),
    ('Chandigarh'),
    ('Dadra and Nagar Haveli and Daman and Diu'),
    ('Lakshadweep'),
    ('Delhi'),
    ('Puducherry');


  

-- Insert data into afs.city table

-- Andhra Pradesh
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Visakhapatnam', 1101),
    ('Vijayawada', 1101),
    ('Tirupati', 1101);

-- Arunachal Pradesh
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Itanagar', 1102),
    ('Naharlagun', 1102),
    ('Pasighat', 1102);

-- Assam
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Guwahati', 1103),
    ('Dibrugarh', 1103),
    ('Silchar', 1103);

-- Bihar
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Patna', 1104),
    ('Gaya', 1104),
    ('Muzaffarpur', 1104);

-- Chhattisgarh
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Raipur', 1105),
    ('Bhilai', 1105),
    ('Bilaspur', 1105);

-- Goa
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Panaji', 1106),
    ('Margao', 1106),
    ('Vasco da Gama', 1106);

-- Gujarat
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Ahmedabad', 1107),
    ('Surat', 1107),
    ('Vadodara', 1107);

-- Haryana
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Chandigarh', 1108),
    ('Faridabad', 1108),
    ('Gurgaon', 1108);

-- Himachal Pradesh
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Shimla', 1109),
    ('Dharamshala', 1109),
    ('Mandi', 1109);

-- Jharkhand
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Ranchi', 1110),
    ('Jamshedpur', 1110),
    ('Dhanbad', 1110);

-- Karnataka
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Bengaluru', 1111),
    ('Mysuru', 1111),
    ('Hubballi', 1111);

-- Kerala
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Thiruvananthapuram', 1112),
    ('Kochi', 1112),
    ('Kozhikode', 1112);

-- Madhya Pradesh
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Bhopal', 1113),
    ('Indore', 1113),
    ('Gwalior', 1113);

-- Maharashtra
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Mumbai', 1114),
    ('Pune', 1114),
    ('Nagpur', 1114);

-- Manipur
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Imphal', 1115),
    ('Thoubal', 1115),
    ('Bishnupur', 1115);

-- Meghalaya
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Shillong', 1116),
    ('Tura', 1116),
    ('Jowai', 1116);

-- Mizoram
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Aizawl', 1117),
    ('Lunglei', 1117),
    ('Champhai', 1117);

-- Nagaland
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Kohima', 1118),
    ('Dimapur', 1118),
    ('Mokokchung', 1118);

-- Odisha
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Bhubaneswar', 1119),
    ('Cuttack', 1119),
    ('Rourkela', 1119);

-- Punjab
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Chandigarh', 1120),
    ('Ludhiana', 1120),
    ('Amritsar', 1120);

-- Rajasthan
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Jaipur', 1121),
    ('Jodhpur', 1121),
    ('Udaipur', 1121);

-- Sikkim
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Gangtok', 1122),
    ('Namchi', 1122),
    ('Mangan', 1122);

-- Tamil Nadu
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Chennai', 1123),
    ('Coimbatore', 1123),
    ('Madurai', 1123);

-- Telangana
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Hyderabad', 1124),
    ('Warangal', 1124),
    ('Nizamabad', 1124);

-- Tripura
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Agartala', 1125),
    ('Udaipur', 1125),
    ('Dharmanagar', 1125);

-- Uttar Pradesh
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Lucknow', 1126),
    ('Kanpur', 1126),
    ('Agra', 1126);

-- Uttarakhand
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Dehradun', 1127),
    ('Haridwar', 1127),
    ('Rishikesh', 1127);

-- West Bengal
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Kolkata', 1128),
    ('Howrah', 1128),
    ('Durgapur', 1128);

-- Andaman and Nicobar Islands
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Port Blair', 1129),
    ('Havelock Island', 1129),
    ('Diglipur', 1129);

-- Chandigarh
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Chandigarh', 1130),
    ('Panchkula', 1130),
    ('Mohali', 1130);

-- Dadra and Nagar Haveli and Daman and Diu
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Daman', 1131),
    ('Silvassa', 1131),
    ('Diu', 1131);

-- Lakshadweep
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Kavaratti', 1132),
    ('Agatti', 1132),
    ('Amini', 1132);

-- Delhi
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('New Delhi', 1133),
    ('Delhi Cantonment', 1133);
    
-- Puducherry
INSERT INTO afs.cities (city_name, state_id) VALUES
    ('Puducherry', 1134),
    ('Karaikal', 1134),
    ('Mahe', 1134);

    

    

-- Insert data into afs.area table
    

-- Andhra Pradesh
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Beachside', 1241),
    ('Downtown', 1241),
    ('Hillview', 1242),
    ('Green Valley', 1242);

-- Arunachal Pradesh
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('City Center', 1243),
    ('Riverside', 1243),
    ('Mountain View', 1244),
    ('Lakefront', 1244);

-- Assam
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Historic District', 1245),
    ('Business Park', 1245),
    ('Suburbia', 1246),
    ('Parks and Recreation', 1246);

-- Continue inserting imaginary areas for Indian cities with auto-incremented IDs starting from 1241

-- Bihar
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Riverside View', 1247),
    ('Central Square', 1247);

-- Chhattisgarh
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('City Heights', 1248),
    ('Lakefront Park', 1248);

-- Goa
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Beachfront Paradise', 1249),
    ('Palm Grove', 1249);

-- Gujarat
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Business District', 1250),
    ('Garden Oasis', 1250);

-- Haryana
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Metro Heights', 1251),
    ('Greenfield Estates', 1251);

-- Himachal Pradesh
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Hillside Retreat', 1252),
    ('Valley View', 1252);

-- Jharkhand
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Urban Center', 1253),
    ('Forest Ridge', 1253);

-- Karnataka
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Tech Park', 1254),
    ('Garden City', 1254);

-- Kerala
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Coastal Haven', 1255),
    ('Backwater Bliss', 1255);
    
    -- Madhya Pradesh
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Historic Square', 1256),
    ('Riverfront View', 1256);

-- Maharashtra
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Financial District', 1257),
    ('Cultural Hub', 1257);

-- Manipur
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Heritage Park', 1258),
    ('Riverbank Views', 1258);

-- Meghalaya
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Scenic Hills', 1259),
    ('Lakeside Retreat', 1259);

-- Continue inserting imaginary areas for Indian cities with auto-incremented IDs starting from 1241

-- Mizoram
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Cityscape View', 1260),
    ('Lush Green Valley', 1260);

-- Nagaland
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Highland Haven', 1261),
    ('Riverfront Plaza', 1261);

-- Odisha
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Oceanview Promenade', 1262),
    ('Cultural Heritage District', 1262);

-- Punjab
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Punjab Heartland', 1263),
    ('Golden Temple Plaza', 1263);

-- Rajasthan
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Royal Palace Gardens', 1264),
    ('Desert Oasis', 1264);

-- Sikkim
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Himalayan Heights', 1265),
    ('Monastery Square', 1265);

-- Tamil Nadu
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Marina Bay', 1266),
    ('Silicon Valley', 1266);

-- Telangana
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Tech Hub Plaza', 1267),
    ('Lakeside Serenity', 1267);

-- Tripura
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Green Retreat', 1268),
    ('Cultural Junction', 1268);

-- Uttar Pradesh
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Historic Heritage Square', 1269),
    ('Ganges Riverfront', 1269);

-- Uttarakhand
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Himalayan Getaway', 1270),
    ('Adventure Haven', 1270);

-- West Bengal
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('City of Joy Central', 1271),
    ('Mangrove Bay Views', 1271);

-- Andaman and Nicobar Islands
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Island Paradise Retreat', 1272),
    ('Coral Cove', 1272);

-- Chandigarh
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Union Territory Hub', 1273),
    ('Garden City Plaza', 1273);

-- Dadra and Nagar Haveli and Daman and Diu
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Daman Waterfront', 1274),
    ('Silvassa Green Park', 1274);

-- Lakshadweep
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Tropical Island Oasis', 1275),
    ('Lagoon View', 1275);

-- Delhi
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('Capital City Central', 1276),
    ('Historic Landmarks District', 1276);

-- Puducherry
INSERT INTO afs.areas (area_name, city_id) VALUES
    ('French Riviera', 1277),
    ('Paradise Beachfront', 1277);



    




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



