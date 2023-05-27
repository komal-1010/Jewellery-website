-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 12:17 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vjweb`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`admin`@`database-1.czgpobln5rne.us-east-1.rds.amazonaws.com` PROCEDURE `sp_banner` (IN `data` JSON, IN `mode` TINYINT(5))   BEGIN
DECLARE var_bid BIGINT;
DECLARE var_btype VARCHAR(10);
DECLARE var_remark VARCHAR(500);
DECLARE var_imgdata TEXT;
DECLARE var_where text;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.bid')) INTO var_bid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.btype')) INTO var_btype;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.remark')) INTO var_remark;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.imgdata')) INTO var_imgdata;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.whr')) INTO var_where;
IF mode = 1 THEN
 INSERT INTO bannermaster VALUES(var_bid,var_btype,var_remark,var_imgdata);
END IF;
IF mode = 2 THEN
 UPDATE bannermaster set  bid=var_bid,btype=var_btype,remark=var_remark WHERE bid=var_bid;
END IF;
IF mode = 5 THEN
 UPDATE bannermaster set  bid=var_bid,btype=var_btype,remark=var_remark,imgdata=var_imgdata WHERE bid=var_bid;
END IF;
IF mode = 3 THEN
 DELETE from bannermaster WHERE bid=var_bid;
END IF;
IF mode = 4 THEN
 IF var_where <>"" THEN
   set @t1 = concat("Select * From bannermaster where 1=1",var_where);
 Else
   set @t1 = concat("Select * From bannermaster where 1=1");
 END IF;
 prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
END$$

CREATE DEFINER=`admin`@`database-1.czgpobln5rne.us-east-1.rds.amazonaws.com` PROCEDURE `sp_category` (IN `data` JSON, IN `mode` TINYINT(5))   BEGIN
DECLARE var_catgid BIGINT;
DECLARE var_catgname VARCHAR(50);
DECLARE var_imgdata TEXT;
DECLARE var_isactive TINYINT(5);
DECLARE var_where text;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.catgid')) INTO var_catgid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.catgname')) INTO var_catgname;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.imgdata')) INTO var_imgdata;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.isactive')) INTO var_isactive;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.whr')) INTO var_where;
IF mode = 1 THEN
 INSERT INTO categorymaster VALUES(var_catgid,var_catgname,var_imgdata,var_isactive);
END IF;

IF mode = 2 THEN
 UPDATE categorymaster set  catgid=var_catgid,catgname=var_catgname,isactive=var_isactive WHERE catgid=var_catgid;
END IF;
IF mode = 5 THEN
 UPDATE categorymaster set  catgid=var_catgid,catgname=var_catgname,imgdata=var_imgdata,isactive=var_isactive WHERE catgid=var_catgid;
END IF;
IF mode = 3 THEN
 DELETE from categorymaster WHERE catgid=var_catgid;
END IF;
IF mode = 4 THEN
 IF var_where <>"" THEN
   set @t1 = concat("Select * From categorymaster where 1=1",var_where);
 Else
   set @t1 = concat("Select * From categorymaster where 1=1");
 END IF;
 prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
END$$

CREATE DEFINER=`admin`@`database-1.czgpobln5rne.us-east-1.rds.amazonaws.com` PROCEDURE `sp_companymaster` (IN `data` JSON, IN `mode` TINYINT(5))   BEGIN
DECLARE var_cmpid BIGINT;
DECLARE var_cmpname VARCHAR(100);
DECLARE var_ownername VARCHAR(255);
DECLARE var_cmpaddress TEXT;
DECLARE var_mob VARCHAR(12);
DECLARE var_wmob VARCHAR(12);
DECLARE var_weblink VARCHAR(150);
DECLARE var_cemail VARCHAR(100);
DECLARE var_officeno VARCHAR(20);
DECLARE var_devoheding VARCHAR(20);
DECLARE var_cmplogo TEXT;
DECLARE var_where text;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.cmpid')) INTO var_cmpid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.cmpname')) INTO var_cmpname;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.ownername')) INTO var_ownername;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.cmpaddress')) INTO var_cmpaddress;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.mob')) INTO var_mob;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.wmob')) INTO var_wmob;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.weblink')) INTO var_weblink;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.cemail')) INTO var_cemail;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.officeno')) INTO var_officeno;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.devoheding')) INTO var_devoheding;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.cmplogo')) INTO var_cmplogo;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.whr')) INTO var_where;
IF mode = 1 THEN
 INSERT INTO companymaster VALUES(var_cmpid,var_cmpname,var_ownername,var_cmpaddress,var_mob,var_wmob,var_weblink,var_cemail,var_officeno,var_devoheding,var_cmplogo);
END IF;
IF mode = 2 THEN
 UPDATE companymaster set  cmpid=var_cmpid,cmpname=var_cmpname,ownername=var_ownername,cmpaddress=var_cmpaddress,mob=var_mob,wmob=var_wmob,weblink=var_weblink,cemail=var_cemail,officeno=var_officeno,devoheding=var_devoheding WHERE cmpid=var_cmpid;
END IF;
IF mode = 5 THEN
 UPDATE companymaster set  cmpid=var_cmpid,cmpname=var_cmpname,ownername=var_ownername,cmpaddress=var_cmpaddress,mob=var_mob,wmob=var_wmob,weblink=var_weblink,cemail=var_cemail,officeno=var_officeno,devoheding=var_devoheding,cmplogo=var_cmplogo WHERE cmpid=var_cmpid;
END IF;
IF mode = 3 THEN
 DELETE from companymaster WHERE cmpid=var_cmpid;
END IF;
IF mode = 4 THEN
 IF var_where <>"" THEN
   set @t1 = concat("Select * From companymaster where 1=1",var_where);
 Else
   set @t1 = concat("Select * From companymaster where 1=1");
 END IF;
 prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
END$$

CREATE DEFINER=`admin`@`database-1.czgpobln5rne.us-east-1.rds.amazonaws.com` PROCEDURE `sp_customermaster` (IN `data` JSON, IN `mode` TINYINT(5))   BEGIN
DECLARE var_custid BIGINT;
DECLARE var_custname VARCHAR(100);
DECLARE var_mob VARCHAR(12);
DECLARE var_wmob VARCHAR(12);
DECLARE var_gender VARCHAR(150);
DECLARE var_dob VARCHAR(150);
DECLARE var_address TEXT;

DECLARE var_where text;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.custid')) INTO var_custid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.custname')) INTO var_custname;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.mob')) INTO var_mob;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.wmob')) INTO var_wmob;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.gender')) INTO var_gender;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.dob')) INTO var_dob;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.address')) INTO var_address;


SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.whr')) INTO var_where;
IF mode = 1 THEN
 INSERT INTO customermaster VALUES(var_custid,var_custname,var_mob,var_wmob,var_gender,var_dob,var_address);
END IF;
IF mode = 2 THEN
 UPDATE customermaster set  custid=var_custid,custname=var_custname,mob=var_mob,wmob=var_wmob,gender=var_gender,dob=var_dob,address=var_address WHERE custid=var_custid;
END IF;
IF mode = 3 THEN
 DELETE from customermaster WHERE custid=var_custid;
END IF;
IF mode = 4 THEN
 IF var_where <>"" THEN
   set @t1 = concat("Select * From customermaster where 1=1",var_where);
 Else
   set @t1 = concat("Select * From customermaster where 1=1");
 END IF;
 prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
END$$

CREATE DEFINER=`admin`@`database-1.czgpobln5rne.us-east-1.rds.amazonaws.com` PROCEDURE `sp_customsetting` (IN `data` JSON, IN `mode` TINYINT(5))   BEGIN
DECLARE var_custid BIGINT;
DECLARE var_sname TEXT;
DECLARE var_svalue TEXT;
DECLARE var_sremark TEXT;
DECLARE var_where text;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.custid')) INTO var_custid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.sname')) INTO var_sname;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.svalue')) INTO var_svalue;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.sremark')) INTO var_sremark;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.whr')) INTO var_where;
IF mode = 1 THEN
 INSERT INTO customsetting VALUES(var_custid,var_sname,var_svalue,var_sremark);
END IF;
IF mode = 2 THEN
 UPDATE customsetting set  custid=var_custid,sname=var_sname,svalue=var_svalue,sremark=var_sremark WHERE custid=var_custid;
END IF;
IF mode = 3 THEN
 DELETE from customsetting WHERE custid=var_custid;
END IF;
IF mode = 4 THEN
 IF var_where <>"" THEN
   set @t1 = concat("Select * From customsetting where 1=1",var_where);
 Else
   set @t1 = concat("Select * From customsetting where 1=1");
 END IF;
 prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
END$$

CREATE DEFINER=`admin`@`database-1.czgpobln5rne.us-east-1.rds.amazonaws.com` PROCEDURE `sp_enquirymaster` (IN `data` JSON, IN `mode` TINYINT(5))   BEGIN
DECLARE var_enqid BIGINT;
DECLARE var_logid BIGINT;
DECLARE var_edate DATE;
DECLARE var_pdetail TEXT;
DECLARE var_descr TEXT;
DECLARE var_where text;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.enqid')) INTO var_enqid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.logid')) INTO var_logid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.edate')) INTO var_edate;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.pdetail')) INTO var_pdetail;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.descr')) INTO var_descr;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.whr')) INTO var_where;
IF mode = 1 THEN
 INSERT INTO enquirymaster VALUES(var_enqid,var_logid,var_edate,var_pdetail,var_descr);
END IF;
IF mode = 2 THEN
 UPDATE enquirymaster set  enqid=var_enqid,logid=var_logid,edate=var_edate,pdetail=var_pdetail,descr=var_descr WHERE enqid=var_enqid;
END IF;
IF mode = 3 THEN
 DELETE from enquirymaster WHERE enqid=var_enqid;
END IF;
IF mode = 4 THEN
 IF var_where <>"" THEN
   set @t1 = concat("SELECT enquirymaster.enqid,enquirymaster.logid,enquirymaster.edate,enquirymaster.pdetail,enquirymaster.descr,login.mob,login.uname ,login.gender FROM enquirymaster INNER JOIN login ON enquirymaster.logid = login.logid where 1=1 ",var_where);
 Else
   set @t1 = concat("SELECT enquirymaster.enqid,enquirymaster.logid,enquirymaster.edate,enquirymaster.pdetail,enquirymaster.descr,login.mob,login.uname,login.gender FROM enquirymaster INNER JOIN login ON enquirymaster.logid = login.logid where 1=1");
 END IF;
 prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
END$$

CREATE DEFINER=`admin`@`database-1.czgpobln5rne.us-east-1.rds.amazonaws.com` PROCEDURE `sp_ImageuploadMaster` (IN `data` JSON, IN `mode` TINYINT(5))   BEGIN
DECLARE var_imgid BIGINT;
DECLARE var_imgpath TEXT;
DECLARE var_imgtype VARCHAR(50);
DECLARE var_imgname VARCHAR(250);
DECLARE var_uid BIGINT;
DECLARE var_where text;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.imgid')) INTO var_imgid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.imgpath')) INTO var_imgpath;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.imgtype')) INTO var_imgtype;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.imgname')) INTO var_imgname;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.uid')) INTO var_uid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.whr')) INTO var_where;
IF mode = 1 THEN
 INSERT INTO ImageuploadMaster VALUES(var_imgid,var_imgpath,var_imgtype,var_imgname,var_uid);
END IF;
IF mode = 2 THEN
 UPDATE ImageuploadMaster set  imgid=var_imgid,imgpath=var_imgpath,imgtype=var_imgtype,imgname=var_imgname,uid=var_uid WHERE imgid=var_imgid;
END IF;
IF mode = 3 THEN
 DELETE from ImageuploadMaster WHERE imgid=var_imgid;
END IF;
IF mode = 4 THEN
 IF var_where <>"" THEN
   set @t1 = concat("Select * From ImageuploadMaster where 1=1",var_where);
 Else
   set @t1 = concat("Select * From ImageuploadMaster where 1=1");
 END IF;
 prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
END$$

CREATE DEFINER=`admin`@`database-1.czgpobln5rne.us-east-1.rds.amazonaws.com` PROCEDURE `sp_login` (IN `data` JSON, IN `mode` TINYINT(5))   BEGIN
DECLARE var_logid BIGINT;
DECLARE var_uname VARCHAR(100);
DECLARE var_mob VARCHAR(12);
DECLARE var_emailid VARCHAR(100);
DECLARE var_passwd VARCHAR(255);
DECLARE var_isstatus TINYINT(5);
DECLARE var_otp VARCHAR(10);
DECLARE var_role VARCHAR(10);
DECLARE var_gender VARCHAR(10);

DECLARE var_where text;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.logid')) INTO var_logid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.uname')) INTO var_uname;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.mob')) INTO var_mob;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.emailid')) INTO var_emailid;

SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.passwd')) INTO var_passwd;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.isstatus')) INTO var_isstatus;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.otp')) INTO var_otp;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.role')) INTO var_role;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.gender')) INTO var_gender;

SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.whr')) INTO var_where;
IF mode = 1 THEN
 INSERT INTO login VALUES(var_logid,var_uname,var_mob,var_emailid,var_passwd,var_isstatus,var_otp,var_role,var_gender);
END IF;
IF mode = 2 THEN
 UPDATE login set  logid=var_logid,uname=var_uname,mob=var_mob,emailid=var_emailid,passwd=var_passwd,isstatus=var_isstatus,otp=var_otp,role=var_role,gender=var_gender WHERE logid=var_logid;
END IF;
IF mode = 3 THEN
 DELETE from login WHERE logid=var_logid;
END IF;
IF mode = 4 THEN
 IF var_where <>"" THEN
   set @t1 = concat("Select logid,uname,mob,emailid,isstatus,otp,role,gender From login where 1=1",var_where);
 Else
   set @t1 = concat("Select logid,uname,mob,emailid,isstatus,otp,role,gender From login where 1=1");
 END IF;
 prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
IF mode = 5 THEN
 IF var_where <>"" THEN
   set @t1 = concat("Select logid,uname,mob,emailid,passwd,isstatus,otp,role,gender From login where 1=1",var_where);
 Else
   set @t1 = concat("Select logid,uname,mob,emailid,passwd,isstatus,otp,role,gender From login where 1=1");
 END IF;
 prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
END$$

CREATE DEFINER=`admin`@`database-1.czgpobln5rne.us-east-1.rds.amazonaws.com` PROCEDURE `sp_product` (IN `data` JSON, IN `mode` TINYINT(5))   BEGIN
DECLARE var_prodid BIGINT;
DECLARE var_title VARCHAR(255);
DECLARE var_catgid BIGINT;
DECLARE var_decr TEXT;
DECLARE var_offer TEXT;
DECLARE var_pricedetail TEXT;
DECLARE var_imgdata TEXT;
DECLARE var_isactive TINYINT(5);
DECLARE var_where text;
DECLARE var_type varchar(10);
DECLARE var_flag varchar(10);
DECLARE var_gender varchar(10);
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.prodid')) INTO var_prodid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.title')) INTO var_title;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.catgid')) INTO var_catgid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.decr')) INTO var_decr;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.offer')) INTO var_offer;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.pricedetail')) INTO var_pricedetail;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.imgdata')) INTO var_imgdata;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.isactive')) INTO var_isactive;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.whr')) INTO var_where;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.type')) INTO var_type;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.flag')) INTO var_flag;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.gender')) INTO var_gender;
IF mode = 1 THEN
 INSERT INTO ProductMaster VALUES(var_prodid,var_catgid,var_title,var_decr,var_offer,var_pricedetail,var_imgdata,var_isactive,var_type,var_flag,var_gender);
END IF;
IF mode = 2 THEN
 UPDATE ProductMaster set  prodid=var_prodid,title=var_title,catgid=var_catgid,decr=var_decr,offer=var_offer,pricedetail=var_pricedetail,imgdata=var_imgdata,isactive=var_isactive,type=var_type,flag=var_flag,gender=var_gender WHERE prodid=var_prodid;
 
END IF;
IF mode = 5 THEN
 UPDATE ProductMaster set  prodid=var_prodid,title=var_title,catgid=var_catgid,decr=var_decr,offer=var_offer,pricedetail=var_pricedetail,imgdata=var_imgdata,isactive=var_isactive,type=var_type,flag=var_flag,gender=var_gender WHERE prodid=var_prodid;
 
END IF;
IF mode = 3 THEN
 DELETE from ProductMaster WHERE prodid=var_prodid;
END IF;
IF mode = 4 THEN
 IF var_where <>"" THEN
   set @t1 = concat("SELECT productmaster.*,categorymaster.catgname FROM productmaster inner join categorymaster ON productmaster.catgid = categorymaster.catgid where 1=1 ",var_where);
 Else
   set @t1 = concat("SELECT productmaster.*,categorymaster.catgname FROM productmaster inner join categorymaster ON productmaster.catgid = categorymaster.catgid  where 1=1 ");
 END IF;
  prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
END$$

CREATE DEFINER=`admin`@`database-1.czgpobln5rne.us-east-1.rds.amazonaws.com` PROCEDURE `sp_smstemplate` (IN `data` JSON, IN `mode` TINYINT(5))   BEGIN
DECLARE var_smsid BIGINT;
DECLARE var_sms TEXT;
DECLARE var_smstype VARCHAR(10);
DECLARE var_where text;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.smsid')) INTO var_smsid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.sms')) INTO var_sms;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.smstype')) INTO var_smstype;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.whr')) INTO var_where;
IF mode = 1 THEN
 INSERT INTO smsmaster VALUES(var_smsid,var_sms,var_smstype);
END IF;
IF mode = 2 THEN
 UPDATE smsmaster set  smsid=var_smsid,sms=var_sms,smstype=var_smstype WHERE smsid=var_smsid;
END IF;

IF mode = 3 THEN
 DELETE from smsmaster WHERE smsid=var_smsid;
END IF;
IF mode = 4 THEN
 IF var_where <>"" THEN
   set @t1 = concat("Select * From smsmaster where 1=1",var_where);
 Else
   set @t1 = concat("Select * From smsmaster where 1=1");
 END IF;
 prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
END$$

CREATE DEFINER=`admin`@`database-1.czgpobln5rne.us-east-1.rds.amazonaws.com` PROCEDURE `sp_subcategory` (IN `data` JSON, IN `mode` TINYINT(5))   BEGIN
DECLARE var_subcatgid BIGINT;
DECLARE var_catgid BIGINT;
DECLARE var_subcatgname VARCHAR(50);
DECLARE var_imgdata TEXT;
DECLARE var_isactive TINYINT(5);
DECLARE var_where text;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.subcatgid')) INTO var_subcatgid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.catgid')) INTO var_catgid;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.subcatgname')) INTO var_subcatgname;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.imgdata')) INTO var_imgdata;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.isactive')) INTO var_isactive;
SELECT JSON_UNQUOTE(JSON_EXTRACT(data, '$.whr')) INTO var_where;
IF mode = 1 THEN
 INSERT INTO subcategorymaster VALUES(var_subcatgid,var_catgid,var_subcatgname,var_imgdata,var_isactive);
END IF;
IF mode = 2 THEN
 UPDATE subcategorymaster set  subcatgid=var_subcatgid,catgid=var_catgid,subcatgname=var_subcatgname,imgdata=var_imgdata,isactive=var_isactive WHERE subcatgid=var_subcatgid;
END IF;
IF mode = 3 THEN
 DELETE from subcategorymaster WHERE subcatgid=var_subcatgid;
END IF;
IF mode = 4 THEN
 IF var_where <>"" THEN
   set @t1 = concat("Select * From subcategorymaster where 1=1",var_where);
 Else
   set @t1 = concat("Select * From subcategorymaster where 1=1");
 END IF;
 prepare stmt from @t1;
     execute stmt;
     deallocate prepare stmt;
END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `bannermaster`
--

CREATE TABLE `bannermaster` (
  `bid` bigint(20) NOT NULL,
  `btype` varchar(10) DEFAULT NULL,
  `remark` varchar(500) DEFAULT NULL,
  `imgdata` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bannermaster`
--

INSERT INTO `bannermaster` (`bid`, `btype`, `remark`, `imgdata`) VALUES
(78, 'Banner', 'Test', '[{\"id\": 1681154838746, \"imglink\": \"http://localhost:4000/Uploads/Banner/banner_1681154838745.jfif\", \"media_type\": \"image/jpeg\"}]'),
(79, 'Banner', '', '[{\"id\": 1676558412405, \"imglink\": \"http://localhost:4000/Uploads/Banner/banner_1676558412405.jpg\", \"media_type\": \"image/jpeg\"}]'),
(80, 'Banner', '', '[{\"id\": 1676558471701, \"imglink\": \"http://localhost:4000/Uploads/Banner/banner_1676558471700.jpg\", \"media_type\": \"image/jpeg\"}]'),
(81, 'Slider', '', '[{\"id\": 1676558502107, \"imglink\": \"http://localhost:4000/Uploads/Banner/banner_1676558502107.jpg\", \"media_type\": \"image/jpeg\"}]'),
(82, 'Banner', '', '[{\"id\": 1676558523521, \"imglink\": \"http://localhost:4000/Uploads/Banner/banner_1676558523521.jpg\", \"media_type\": \"image/jpeg\"}]'),
(83, 'Slider', '', '[{\"id\": 1676558560267, \"imglink\": \"http://localhost:4000/Uploads/Banner/banner_1676558560267.jpg\", \"media_type\": \"image/jpeg\"}]'),
(84, 'Slider', '', '[{\"id\": 1676558578255, \"imglink\": \"http://localhost:4000/Uploads/Banner/banner_1676558578255.jpg\", \"media_type\": \"image/jpeg\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `categorymaster`
--

CREATE TABLE `categorymaster` (
  `catgid` bigint(20) NOT NULL,
  `catgname` varchar(50) DEFAULT NULL,
  `imgdata` text DEFAULT NULL,
  `isactive` tinyint(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categorymaster`
--

INSERT INTO `categorymaster` (`catgid`, `catgname`, `imgdata`, `isactive`) VALUES
(41, 'Necklace', '[{\"id\": 1670686032788, \"imglink\": \"http://localhost:4000/Uploads/Category/catg_1670686032788.png\", \"media_type\": \"image/png\"}]', 0),
(57, 'Ring', '[{\"id\": 1676558736475, \"imglink\": \"http://localhost:4000/Uploads/Category/catg_1676558736475.webp\", \"media_type\": \"image/webp\"}]', 0),
(58, 'Ankelet', '[{\"id\": 1676558771385, \"imglink\": \"http://localhost:4000/Uploads/Category/catg_1676558771385.jpeg\", \"media_type\": \"image/jpeg\"}]', 0),
(59, 'Ear rings', '[{\"id\": 1676558844904, \"imglink\": \"http://localhost:4000/Uploads/Category/catg_1676558844903.jpeg\", \"media_type\": \"image/jpeg\"}]', 0),
(60, 'Bangle', '[{\"id\": 1676558914618, \"imglink\": \"http://localhost:4000/Uploads/Category/catg_1676558914618.jpg\", \"media_type\": \"image/jpeg\"}]', 0),
(61, 'Pendants', '[{\"id\": 1676559051849, \"imglink\": \"http://localhost:4000/Uploads/Category/catg_1676559051849.webp\", \"media_type\": \"image/webp\"}]', 0),
(62, 'Bracelet', '[{\"id\": 1681155279953, \"imglink\": \"http://localhost:4000/Uploads/Category/catg_1681155279953.png\", \"media_type\": \"image/png\"}]', 0),
(63, 'Nose Pin', '[{\"id\": 1681155349848, \"imglink\": \"http://localhost:4000/Uploads/Category/catg_1681155349848.webp\", \"media_type\": \"image/webp\"}]', 0);

-- --------------------------------------------------------

--
-- Table structure for table `companymaster`
--

CREATE TABLE `companymaster` (
  `cmpid` bigint(20) NOT NULL,
  `cmpname` varchar(100) DEFAULT NULL,
  `ownername` varchar(255) DEFAULT NULL,
  `cmpaddress` text DEFAULT NULL,
  `mob` varchar(12) DEFAULT NULL,
  `wmob` varchar(12) DEFAULT NULL,
  `weblink` varchar(150) DEFAULT NULL,
  `cemail` varchar(100) DEFAULT NULL,
  `officeno` varchar(20) DEFAULT NULL,
  `devoheding` varchar(20) DEFAULT NULL,
  `cmplogo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `companymaster`
--

INSERT INTO `companymaster` (`cmpid`, `cmpname`, `ownername`, `cmpaddress`, `mob`, `wmob`, `weblink`, `cemail`, `officeno`, `devoheding`, `cmplogo`) VALUES
(2, 'aaa', 'Komal', 'wdsefgb fvgbhy fvgbh', '8645335654', '5435845365', 'cdfvgbhn', 'dfvgbh', '4125368741', 'cfvgbhn', '[{\"id\": \"0VAhedM7AT2khuWaZMh7n\", \"imglink\": \"Uploads/companymaster/0VAhedM7AT2khuWaZMh7n1670752875414.jpeg\", \"type\": \"image\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `customermaster`
--

CREATE TABLE `customermaster` (
  `custid` bigint(20) NOT NULL,
  `custname` varchar(100) DEFAULT NULL,
  `mob` varchar(12) DEFAULT NULL,
  `wmob` varchar(12) DEFAULT NULL,
  `gender` varchar(150) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customermaster`
--

INSERT INTO `customermaster` (`custid`, `custname`, `mob`, `wmob`, `gender`, `dob`, `address`) VALUES
(1, 'Komal', '9119488672', '9119488672', 'Female', '2001-10-10', 'Miraj');

-- --------------------------------------------------------

--
-- Table structure for table `customsetting`
--

CREATE TABLE `customsetting` (
  `custid` bigint(20) NOT NULL,
  `sname` text DEFAULT NULL,
  `svalue` text DEFAULT NULL,
  `sremark` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customsetting`
--

INSERT INTO `customsetting` (`custid`, `sname`, `svalue`, `sremark`) VALUES
(1, 'base_url', 'http://localhost:4000/api/', '-'),
(2, 'img_url', 'http://localhost:4000/', '-'),
(3, 'enquiry_prod_url', 'http://localhost:3002/', '-');

-- --------------------------------------------------------

--
-- Table structure for table `enquirymaster`
--

CREATE TABLE `enquirymaster` (
  `enqid` bigint(20) NOT NULL,
  `logid` bigint(20) DEFAULT NULL,
  `edate` date DEFAULT NULL,
  `pdetail` text DEFAULT NULL,
  `descr` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `enquirymaster`
--

INSERT INTO `enquirymaster` (`enqid`, `logid`, `edate`, `pdetail`, `descr`) VALUES
(26, 17, '2023-02-25', '[{\"prodid\": 26, \"imgurl\": \"http://localhost:4000/Uploads/Product/img_1676532753151.webp\"}]', 'aksdjfgbnvtreon drtgcbnhkd'),
(30, 17, '2023-03-31', '[{\"prodid\": 28, \"imgurl\": \"http://localhost:4000/Uploads/Product/img_1676559242882.webp\"}]', 'qwkoma dfhok wodnrnbjfldif'),
(31, 17, '2023-04-11', '[{\"prodid\": 26, \"imgurl\": \"http://localhost:4000/Uploads/Product/img_1676532753151.webp\"}]', 'gfhjkhlkjhnb gfhjhkilolkgj fhyjgukilo'),
(32, 17, '2023-05-20', '[{\"prodid\": 26, \"imgurl\": \"http://localhost:4000/Uploads/Product/img_1676532753151.webp\"}]', 'wdfnvdfghd efrgtyufvf defrgthyuikjnhgfd dfghj');

-- --------------------------------------------------------

--
-- Table structure for table `imageuploadmaster`
--

CREATE TABLE `imageuploadmaster` (
  `imgid` bigint(20) NOT NULL,
  `imgpath` text DEFAULT NULL,
  `imgtype` varchar(50) DEFAULT NULL,
  `imgname` varchar(250) DEFAULT NULL,
  `uid` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `imageuploadmaster`
--

INSERT INTO `imageuploadmaster` (`imgid`, `imgpath`, `imgtype`, `imgname`, `uid`) VALUES
(13, 'http://localhost:4000/Uploads/Product/img_1676532475319.webp', 'image/webp', 'men_bracelet3.webp', 17),
(14, 'http://localhost:4000/Uploads/Product/img_1676532753151.webp', 'image/webp', 'ring3.webp', 17),
(15, 'http://localhost:4000/Uploads/Product/img_1676532842138.jpg', 'image/jpeg', 'slider3.jpg', 17),
(16, 'http://localhost:4000/Uploads/Product/img_1676533868966.webp', 'image/webp', 'ring2.webp', 17),
(17, 'http://localhost:4000/Uploads/Product/img_1676541222795.webp', 'image/webp', 'nosepin1.webp', 17),
(18, 'http://localhost:4000/Uploads/Product/img_1676559242882.webp', 'image/webp', 'Pendant.webp', 17),
(19, 'http://localhost:4000/Uploads/Product/img_1676559491245.webp', 'image/webp', 'ring3.webp', 17),
(20, 'http://localhost:4000/Uploads/Product/img_1681155009462.webp', 'image/webp', 'men_bracelet2.webp', 17),
(21, 'http://localhost:4000/Uploads/Product/img_1681155763936.webp', 'image/webp', 'nosepin1.webp', 17),
(22, 'http://localhost:4000/Uploads/Product/img_1681155773138.webp', 'image/webp', 'nosepin2.webp', 17),
(23, 'http://localhost:4000/Uploads/Product/img_1681155782021.webp', 'image/webp', 'nosepin3.webp', 17),
(24, 'http://localhost:4000/Uploads/Product/img_1681193440436.png', 'image/png', 'bracelet.png', 17),
(25, 'http://localhost:4000/Uploads/Product/img_1684566651305.jpeg', 'image/jpeg', 'images (78).jpeg', 17);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `logid` bigint(20) NOT NULL,
  `uname` varchar(100) DEFAULT NULL,
  `mob` varchar(12) DEFAULT NULL,
  `emailid` varchar(100) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `isstatus` tinyint(5) DEFAULT NULL,
  `otp` varchar(10) DEFAULT NULL,
  `role` varchar(10) DEFAULT 'user',
  `gender` varchar(10) NOT NULL DEFAULT '-'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`logid`, `uname`, `mob`, `emailid`, `passwd`, `isstatus`, `otp`, `role`, `gender`) VALUES
(17, 'abc', '1111111111', '123@gmail.com', 'MTIz', 0, '12', 'admin', 'female'),
(71, 'gauri Rajput', '4566666666', 'gaurirajput2001@gmail.com', 'Nzg5OTk5', 0, '0', 'user', 'female');

-- --------------------------------------------------------

--
-- Table structure for table `productmaster`
--

CREATE TABLE `productmaster` (
  `prodid` bigint(20) NOT NULL,
  `catgid` bigint(20) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `decr` text DEFAULT NULL,
  `offer` text DEFAULT NULL,
  `pricedetail` text DEFAULT NULL,
  `imgdata` text DEFAULT NULL,
  `isactive` tinyint(5) DEFAULT NULL,
  `type` varchar(10) NOT NULL,
  `flag` varchar(10) NOT NULL,
  `gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productmaster`
--

INSERT INTO `productmaster` (`prodid`, `catgid`, `title`, `decr`, `offer`, `pricedetail`, `imgdata`, `isactive`, `type`, `flag`, `gender`) VALUES
(26, 57, 'Diamond Flower Ring', '', '[{\"id\": 1676559444641, \"offer\": \"10% off \"}]', '[{\"id\": 1676559469689, \"fromwt\": \"100\", \"fromunit\": \"gm\", \"towt\": \"200\", \"tounit\": \"gm\", \"fromprice\": \"10000\", \"toprice\": \"50000\"}]', '[{\"imgid\": 14, \"imgpath\": \"http://localhost:4000/Uploads/Product/img_1676532753151.webp\", \"imgtype\": \"image/webp\", \"imgname\": \"ring3.webp\", \"uid\": 17, \"opacity1\": \"block\"}, {\"imgid\": 16, \"imgpath\": \"http://localhost:4000/Uploads/Product/img_1676533868966.webp\", \"imgtype\": \"image/webp\", \"imgname\": \"ring2.webp\", \"uid\": 17, \"opacity1\": \"block\"}]', 0, 'Diamond', 'New', 'Female'),
(27, 56, 'abc', '', '[]', '[]', '[{\"imgid\": 15, \"imgpath\": \"http://localhost:4000/Uploads/Product/img_1676532842138.jpg\", \"imgtype\": \"image/jpeg\", \"imgname\": \"slider3.jpg\", \"uid\": 17, \"opacity1\": \"block\"}]', 0, 'Silver', 'Trending', 'Male'),
(28, 61, 'Elegant Yellow Gold Dual Tone Pendant', 'Elegant Yellow gold Dual Tone Pendant', '[{\"id\": 1676559202128, \"offer\": \"15% off on making charges\"}]', '[{\"id\": 1676559232741, \"fromwt\": \"10\", \"fromunit\": \"gm\", \"towt\": \"50\", \"tounit\": \"gm\", \"fromprice\": \"1000\", \"toprice\": \"5000\"}]', '[{\"imgid\": 18, \"imgpath\": \"http://localhost:4000/Uploads/Product/img_1676559242882.webp\", \"imgtype\": \"image/webp\", \"imgname\": \"Pendant.webp\", \"uid\": 17, \"opacity1\": \"block\"}]', 0, 'Gold', 'Trending', 'Female'),
(29, 62, '925 Silver Minimalistic Graceful Bracelet For Men', 'Elevate your personal style every time you don this graceful fluid bracelet crafted in 925 silver', '[{\"id\": 1681155532216, \"offer\": \"50% off on maaking charges\"}, {\"id\": 1681155546035, \"offer\": \"15% off on SBI cards\"}]', '[{\"id\": 1681155576317, \"fromwt\": \"15\", \"fromunit\": \"gm\", \"towt\": \"20\", \"tounit\": \"gm\", \"fromprice\": \"4000\", \"toprice\": \"5000\"}]', '[{\"imgid\": 13, \"imgpath\": \"http://localhost:4000/Uploads/Product/img_1676532475319.webp\", \"imgtype\": \"image/webp\", \"imgname\": \"men_bracelet3.webp\", \"uid\": 17, \"opacity1\": \"block\"}, {\"imgid\": 20, \"imgpath\": \"http://localhost:4000/Uploads/Product/img_1681155009462.webp\", \"imgtype\": \"image/webp\", \"imgname\": \"men_bracelet2.webp\", \"uid\": 17, \"opacity1\": \"block\"}]', 0, 'Silver', 'Trending', 'Male'),
(30, 63, 'Graceful Floral Gold And Diamond Nose Pin', ' Graceful Floral Gold And Diamond Nose Pin', '[{\"id\": 1681155680675, \"offer\": \"15% off on Axis Bank debit cards\"}]', '[{\"id\": 1681155741950, \"fromwt\": \"10\", \"fromunit\": \"gm\", \"towt\": \"20\", \"tounit\": \"gm\", \"fromprice\": \"1000\", \"toprice\": \"5000\"}]', '[{\"imgid\": 21, \"imgpath\": \"http://localhost:4000/Uploads/Product/img_1681155763936.webp\", \"imgtype\": \"image/webp\", \"imgname\": \"nosepin1.webp\", \"uid\": 17, \"opacity1\": \"block\"}, {\"imgid\": 22, \"imgpath\": \"http://localhost:4000/Uploads/Product/img_1681155773138.webp\", \"imgtype\": \"image/webp\", \"imgname\": \"nosepin2.webp\", \"uid\": 17, \"opacity1\": \"block\"}, {\"imgid\": 23, \"imgpath\": \"http://localhost:4000/Uploads/Product/img_1681155782021.webp\", \"imgtype\": \"image/webp\", \"imgname\": \"nosepin3.webp\", \"uid\": 17, \"opacity1\": \"block\"}]', 0, 'Diamond', 'New', 'Female'),
(31, 62, 'Charming Beady Gold Bracelet', 'Charming Beady Gold Bracelet', '[{\"id\": 1681193540089, \"offer\": \"15% off on making charges\"}, {\"id\": 1681193554339, \"offer\": \"15% off on SBI cards\"}]', '[{\"id\": 1681193572905, \"fromwt\": \"15\", \"fromunit\": \"gm\", \"towt\": \"20\", \"tounit\": \"gm\", \"fromprice\": \"10000\", \"toprice\": \"15000\"}]', '[{\"imgid\": 24, \"imgpath\": \"http://localhost:4000/Uploads/Product/img_1681193440436.png\", \"imgtype\": \"image/png\", \"imgname\": \"bracelet.png\", \"uid\": 17, \"opacity1\": \"block\"}]', 0, 'Gold', 'Trending', 'Female');

-- --------------------------------------------------------

--
-- Table structure for table `smsmaster`
--

CREATE TABLE `smsmaster` (
  `smsid` bigint(20) NOT NULL,
  `sms` text DEFAULT NULL,
  `smstype` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `smsmaster`
--

INSERT INTO `smsmaster` (`smsid`, `sms`, `smstype`) VALUES
(3, ' Online shopping for Christmas specials from a great selection at Jewellery Store.n', 'Chrismas');

-- --------------------------------------------------------

--
-- Table structure for table `subcategorymaster`
--

CREATE TABLE `subcategorymaster` (
  `subcatgid` bigint(20) NOT NULL,
  `catgid` bigint(20) DEFAULT NULL,
  `subcatgname` varchar(50) DEFAULT NULL,
  `imgdata` text DEFAULT NULL,
  `isactive` tinyint(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subcategorymaster`
--

INSERT INTO `subcategorymaster` (`subcatgid`, `catgid`, `subcatgname`, `imgdata`, `isactive`) VALUES
(13, 0, 'Nose pin', '[{\"id\": \"G5tvh1ZmTbBHcVO06xUYk\", \"imglink\": \"Uploads/Subcategory/G5tvh1ZmTbBHcVO06xUYk1664259837397.jpeg\", \"type\": \"image\"}]', 0),
(14, 0, 'Necklace', '[{\"id\": \"47NpQcoaweUT2AhW7FSFg\", \"imglink\": \"Uploads/Subcategory/47NpQcoaweUT2AhW7FSFg1664292393742.png\", \"type\": \"image\"}]', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bannermaster`
--
ALTER TABLE `bannermaster`
  ADD PRIMARY KEY (`bid`);

--
-- Indexes for table `categorymaster`
--
ALTER TABLE `categorymaster`
  ADD PRIMARY KEY (`catgid`);

--
-- Indexes for table `companymaster`
--
ALTER TABLE `companymaster`
  ADD PRIMARY KEY (`cmpid`);

--
-- Indexes for table `customermaster`
--
ALTER TABLE `customermaster`
  ADD PRIMARY KEY (`custid`);

--
-- Indexes for table `customsetting`
--
ALTER TABLE `customsetting`
  ADD PRIMARY KEY (`custid`);

--
-- Indexes for table `enquirymaster`
--
ALTER TABLE `enquirymaster`
  ADD PRIMARY KEY (`enqid`);

--
-- Indexes for table `imageuploadmaster`
--
ALTER TABLE `imageuploadmaster`
  ADD PRIMARY KEY (`imgid`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`logid`);

--
-- Indexes for table `productmaster`
--
ALTER TABLE `productmaster`
  ADD PRIMARY KEY (`prodid`);

--
-- Indexes for table `smsmaster`
--
ALTER TABLE `smsmaster`
  ADD PRIMARY KEY (`smsid`);

--
-- Indexes for table `subcategorymaster`
--
ALTER TABLE `subcategorymaster`
  ADD PRIMARY KEY (`subcatgid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bannermaster`
--
ALTER TABLE `bannermaster`
  MODIFY `bid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `categorymaster`
--
ALTER TABLE `categorymaster`
  MODIFY `catgid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `companymaster`
--
ALTER TABLE `companymaster`
  MODIFY `cmpid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customermaster`
--
ALTER TABLE `customermaster`
  MODIFY `custid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customsetting`
--
ALTER TABLE `customsetting`
  MODIFY `custid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `enquirymaster`
--
ALTER TABLE `enquirymaster`
  MODIFY `enqid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `imageuploadmaster`
--
ALTER TABLE `imageuploadmaster`
  MODIFY `imgid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `logid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `productmaster`
--
ALTER TABLE `productmaster`
  MODIFY `prodid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `smsmaster`
--
ALTER TABLE `smsmaster`
  MODIFY `smsid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subcategorymaster`
--
ALTER TABLE `subcategorymaster`
  MODIFY `subcatgid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
