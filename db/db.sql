-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-05-2022 a las 13:49:08
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `disney-s-characters`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `image` varchar(500) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` int(8) NOT NULL,
  `weight` decimal(6,2) NOT NULL,
  `history` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `characters`
--

INSERT INTO `characters` (`id`, `image`, `name`, `age`, `weight`, `history`) VALUES
(1, 'https://static.wikia.nocookie.net/disney/images/5/5e/Profile_-_Peter_Pan.jpeg/revision/latest?cb=20190312151341', 'Peter Pan', 22, '0.00', 'Peter Pan is the titular protagonist of Disney\'s 1953 animated feature film of the same name. Peter travels from the enchanted isle of Neverland all the way to London just to hear Wendy Darling spin tales about him and his adventures. While his ego may seem inflated at times, even his arch-nemesis Captain Hook knows that Peter\'s no ordinary boy. He can fly without wings and match Hook\'s cutlass with nothing more than a dagger. He is also the undisputed leader of the Lost Boys and allows no break'),
(2, 'https://static.wikia.nocookie.net/disney/images/5/5e/Profile_-_Peter_Pan.jpeg/revision/latest?cb=20190312151341', 'Peter Pan', 20, '0.00', 'Peter Pan is the titular protagonist of Disney\'s 1953 animated feature film of the same name. Peter travels from the enchanted isle of Neverland all the way to London just to hear Wendy Darling spin tales about him and his adventures. While his ego may seem inflated at times, even his arch-nemesis Captain Hook knows that Peter\'s no ordinary boy. He can fly without wings and match Hook\'s cutlass with nothing more than a dagger. He is also the undisputed leader of the Lost Boys and allows no break');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genre`
--

INSERT INTO `genre` (`id`, `name`, `image`) VALUES
(1, 'Animacion', '1'),
(2, 'Corto', '1'),
(3, 'Comedia', '1'),
(4, 'Familiar', '1'),
(5, 'Del Oeste', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `image` varchar(500) NOT NULL,
  `title` varchar(50) NOT NULL,
  `created` date NOT NULL,
  `rating` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `image`, `title`, `created`, `rating`) VALUES
(1, 'https://static.wikia.nocookie.net/disney/images/c/ca/Gallopingaucho.jpg/revision/latest?cb=20131127195003&path-prefix=es', 'The Gallopin Gaucho', '1928-08-07', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moviescharacters`
--

CREATE TABLE `moviescharacters` (
  `id` int(11) NOT NULL,
  `id_movies` int(11) DEFAULT NULL,
  `id_genre` int(11) DEFAULT NULL,
  `id_characters` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moviesgenres`
--

CREATE TABLE `moviesgenres` (
  `id` int(11) NOT NULL,
  `id_characters` int(11) DEFAULT NULL,
  `id_movies` int(11) DEFAULT NULL,
  `id_genre` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pege`
--

CREATE TABLE `pege` (
  `id_movies` int(11) NOT NULL,
  `id_genre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pege`
--

INSERT INTO `pege` (`id_movies`, `id_genre`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pepe`
--

CREATE TABLE `pepe` (
  `id_characters` int(11) NOT NULL,
  `id_movies` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pepe`
--

INSERT INTO `pepe` (`id_characters`, `id_movies`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'usuario', '$2a$08$5dBEsamms'),
(2, 'user', '$2a$08$5dBEsamms'),
(3, 'javier', '$2a$08$5dBEsamms'),
(4, 'javier', '$2a$08$5j.LEbdCF'),
(5, 'javier1', '$2a$08$VRkmm8xRi');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `moviescharacters`
--
ALTER TABLE `moviescharacters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_movies` (`id_movies`),
  ADD KEY `id_genre` (`id_genre`),
  ADD KEY `id_characters` (`id_characters`);

--
-- Indices de la tabla `moviesgenres`
--
ALTER TABLE `moviesgenres`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_characters` (`id_characters`),
  ADD KEY `id_movies` (`id_movies`),
  ADD KEY `id_genre` (`id_genre`);

--
-- Indices de la tabla `pege`
--
ALTER TABLE `pege`
  ADD PRIMARY KEY (`id_movies`,`id_genre`),
  ADD KEY `id_peliculas` (`id_movies`,`id_genre`),
  ADD KEY `id_generos` (`id_genre`);

--
-- Indices de la tabla `pepe`
--
ALTER TABLE `pepe`
  ADD PRIMARY KEY (`id_characters`,`id_movies`),
  ADD KEY `id_personajes` (`id_characters`,`id_movies`),
  ADD KEY `id_peliculas` (`id_movies`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `moviescharacters`
--
ALTER TABLE `moviescharacters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `moviesgenres`
--
ALTER TABLE `moviesgenres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `moviescharacters`
--
ALTER TABLE `moviescharacters`
  ADD CONSTRAINT `moviescharacters_ibfk_1` FOREIGN KEY (`id_movies`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `moviescharacters_ibfk_2` FOREIGN KEY (`id_genre`) REFERENCES `genre` (`id`),
  ADD CONSTRAINT `moviescharacters_ibfk_3` FOREIGN KEY (`id_characters`) REFERENCES `characters` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `moviesgenres`
--
ALTER TABLE `moviesgenres`
  ADD CONSTRAINT `moviesgenres_ibfk_1` FOREIGN KEY (`id_characters`) REFERENCES `characters` (`id`),
  ADD CONSTRAINT `moviesgenres_ibfk_2` FOREIGN KEY (`id_movies`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `moviesgenres_ibfk_3` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `pege`
--
ALTER TABLE `pege`
  ADD CONSTRAINT `pege_ibfk_1` FOREIGN KEY (`id_movies`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pege_ibfk_2` FOREIGN KEY (`id_genre`) REFERENCES `genre` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pepe`
--
ALTER TABLE `pepe`
  ADD CONSTRAINT `pepe_ibfk_1` FOREIGN KEY (`id_characters`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pepe_ibfk_2` FOREIGN KEY (`id_movies`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
