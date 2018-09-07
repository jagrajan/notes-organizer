-- MySQL Script generated by MySQL Workbench
-- Tue 28 Aug 2018 07:46:03 PM PDT
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema notes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema notes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `notes` ;
USE `notes` ;

-- -----------------------------------------------------
-- Table `notes`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notes`.`user` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `notes`.`auth_token`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notes`.`auth_token` (
  `auth_token_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `fingerprint` TEXT NULL,
  `expires` DATETIME NULL,
  `valid` TINYINT NULL,
  PRIMARY KEY (`auth_token_id`),
  CONSTRAINT `FK_AUTH_TOKEN_USER_ID`
    FOREIGN KEY (`user_id`)
    REFERENCES `notes`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- CREATE INDEX `FK_AUTH_TOKEN_USER_ID_idx` ON `notes`.`auth_token` (`user_id` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
