CREATE SCHEMA dg_solutions;

CREATE TABLE `usuario` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
	`dataNascimento` date NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
  CHARSET latin1,
  COLLATE latin1_general_ci;