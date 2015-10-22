-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: Jul 22, 2014 as 01:25 PM
-- Versão do Servidor: 5.5.8
-- Versão do PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `selects_dinamicos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `departamentos`
--

CREATE TABLE IF NOT EXISTS `departamentos` (
  `departamentos_id` int(11) NOT NULL AUTO_INCREMENT,
  `departamentos_nome` varchar(255) NOT NULL,
  PRIMARY KEY (`departamentos_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Extraindo dados da tabela `departamentos`
--

INSERT INTO `departamentos` (`departamentos_id`, `departamentos_nome`) VALUES
(1, 'INFORMÁTICA'),
(2, 'TELEFONIA'),
(3, 'ELETRODOMÉSTICOS'),
(4, 'GAMES');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE IF NOT EXISTS `produtos` (
  `produtos_id` int(11) NOT NULL AUTO_INCREMENT,
  `produtos_id_departamento` int(11) NOT NULL,
  `produtos_nome` varchar(255) NOT NULL,
  PRIMARY KEY (`produtos_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`produtos_id`, `produtos_id_departamento`, `produtos_nome`) VALUES
(1, 1, 'MOUSE'),
(2, 1, 'TECLADO'),
(3, 1, 'MONITOR'),
(4, 1, 'HD'),
(5, 1, 'MEMÓRIA'),
(6, 1, 'FONTE'),
(7, 2, 'BATERIA'),
(8, 2, 'CABO DE DADOS'),
(9, 2, 'DISPLAY'),
(10, 3, 'FOGÃO'),
(11, 3, 'GELADEIRA'),
(12, 3, 'LAVADORA DE ROUPAS'),
(13, 4, 'PLAYSTATION'),
(14, 4, 'WII'),
(15, 4, 'XBOX');
