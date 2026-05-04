SELECT P.nombre AS pais, COUNT(U.id) AS total_usuarios
FROM Usuarios U
JOIN Paises P ON U.pais_id = P.id
GROUP BY P.nombre;

![Pregunta 1](imagenes/ej1.png)

SELECT Pe.titulo, COUNT(PA.actor_id) AS total_actores
FROM Peliculas Pe
JOIN PeliculaActor PA ON Pe.id = PA.pelicula_id
GROUP BY Pe.titulo;

![Pregunta 2](imagenes/ej2.png)

SELECT Pe.titulo
FROM Peliculas Pe
JOIN PeliculaActor PA ON Pe.id = PA.pelicula_id
GROUP BY Pe.titulo
HAVING COUNT(PA.actor_id) >= 2;

![Pregunta 3](imagenes/ej3.png)

SELECT strftime('%Y', fecha_registro) AS año, COUNT(*) AS total
FROM Usuarios
GROUP BY año;

![Pregunta 4](imagenes/ej4.png)

SELECT P.nombre AS pais,
       strftime('%Y', U.fecha_registro) AS año,
       COUNT(*) AS total
FROM Usuarios U
JOIN Paises P ON U.pais_id = P.id
GROUP BY P.nombre, año;

![Pregunta 5](imagenes/ej5.png)

SELECT A.nombre AS actor, Pe.titulo AS pelicula
FROM Actores A
JOIN PeliculaActor PA ON A.id = PA.actor_id
JOIN Peliculas Pe ON PA.pelicula_id = Pe.id;

![Pregunta 6](imagenes/ej6.png)

SELECT A.nombre
FROM Actores A
JOIN PeliculaActor PA ON A.id = PA.actor_id
JOIN Peliculas Pe ON PA.pelicula_id = Pe.id
WHERE Pe.titulo = 'Los Juegos del Hambre';

![Pregunta 7](imagenes/ej7.png)

SELECT U.nombre, SUM(R.minutos_vistos) AS total_minutos
FROM Usuarios U
JOIN Reproducciones R ON U.id = R.usuario_id
GROUP BY U.nombre;

![Pregunta 8](imagenes/ej8.png)

SELECT Pe.titulo
FROM Peliculas Pe
LEFT JOIN Reproducciones R ON Pe.id = R.pelicula_id
WHERE R.id IS NULL;

![Pregunta 9](imagenes/ej9.png)

SELECT DISTINCT A.nombre
FROM Actores A
JOIN PeliculaActor PA ON A.id = PA.actor_id
JOIN Peliculas Pe ON PA.pelicula_id = Pe.id
JOIN Reproducciones R ON Pe.id = R.pelicula_id
JOIN Usuarios U ON R.usuario_id = U.id
JOIN Paises P ON U.pais_id = P.id
WHERE P.nombre = 'España';

![Pregunta 10](imagenes/ej10.png)
