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