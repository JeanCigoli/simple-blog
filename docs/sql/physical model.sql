-- MySQL Workbench Forward Engineering

DROP DATABASE blog;

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 ;
USE `blog` ;

-- -----------------------------------------------------
-- Table `blog`.`tb_blog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`tb_blog` (
  `blog_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `short_description` VARCHAR(200) NOT NULL,
  `author` VARCHAR(70) NOT NULL,
  `author_photo` VARCHAR(200) NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` DATETIME NOT NULL,
  `external_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`blog_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`tb_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`tb_category` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `external_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`category_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`tb_rel_blog_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`tb_rel_blog_category` (
  `rel_blog_category_id` INT NOT NULL AUTO_INCREMENT,
  `blog_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`rel_blog_category_id`),
  INDEX `fk_tb_rel_blog_category_tb_blog_idx` (`blog_id` ASC) VISIBLE,
  INDEX `fk_tb_rel_blog_category_tb_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_rel_blog_category_tb_blog`
    FOREIGN KEY (`blog_id`)
    REFERENCES `blog`.`tb_blog` (`blog_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_rel_blog_category_tb_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `blog`.`tb_category` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`tb_section`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`tb_section` (
  `section_id` INT NOT NULL AUTO_INCREMENT,
  `blog_id` INT NOT NULL,
  `title` VARCHAR(70) NULL,
  `text` TEXT NOT NULL,
  `image` VARCHAR(200) NULL,
  `external_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`section_id`),
  INDEX `fk_tb_section_tb_blog1_idx` (`blog_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_section_tb_blog1`
    FOREIGN KEY (`blog_id`)
    REFERENCES `blog`.`tb_blog` (`blog_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
