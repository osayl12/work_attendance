SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `work_attendance`
--

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `id_number` varchar(9) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- הוצאת מידע עבור טבלה `employees`
--

INSERT INTO `employees` (`id`, `id_number`, `name`) VALUES
(1, '123456789', 'ישראל ישראלי'),
(2, '987654321', 'שרה כהן'),
(3, '111111111', 'יוסי כהן'),
(4, '222222222', 'מיכל לוי'),
(5, '333333333', 'דוד מזרחי'),
(6, '444444444', 'רחל פרץ'),
(7, '555555555', 'אבי גולן'),
(8, '666666666', 'נועה שפירא'),
(9, '777777777', 'משה אברהם'),
(10, '888888888', 'תמר בן דוד'),
(11, '999999999', 'אלון רוזן'),
(12, '101010101', 'שירה אזולאי');

--
-- אינדקסים לטבלה `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_number` (`id_number`);

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

