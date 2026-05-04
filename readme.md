¿Qué es la normalización?
La normalización es un proceso de diseño de bases de datos que organiza la información en tablas para mejorar la integridad de los datos, reducir la redundancia (datos duplicados), evitar errores o inconsistencias y optimizar el rendimiento de las consultas.

Se basa en reglas llamadas formas normales, que indican cómo estructurar correctamente los datos.

¿Por qué es importante?
La normalización permite manejar grandes volúmenes de datos sin errores. Evita problemas como inconsistencias, pérdida de información y dependencias incorrectas entre datos.

En general, hace que la base de datos sea más ordenada, lógica y confiable.

Beneficios principales
- Evita anomalías (errores)
- Reduce datos duplicados
- Ahorra espacio de almacenamiento
- Mejora la eficiencia de consultas

Tipos de anomalías
La normalización ayuda a evitar tres errores principales:

- Inserción: no se pueden agregar datos porque faltan otros
- Eliminación: al borrar datos se pierde información importante
- Actualización: un dato se modifica en un lugar pero no en otro

Claves en la normalización
Las tablas utilizan claves para organizar la información:

- Primary key: identifica cada registro de forma única
- Foreign key: conecta tablas entre sí
- Composite key: combinación de varias columnas como clave

Estas claves permiten dividir tablas sin perder las relaciones entre los datos.

Formas normales:

Primera forma normal (1NF)
- No hay valores repetidos ni listas en una celda
- Los datos son atómicos (simples)

Segunda forma normal (2NF)
- Todos los atributos dependen completamente de la clave primaria
- Se eliminan dependencias parciales

Tercera forma normal (3NF)
- No existen dependencias entre columnas que no sean clave
- Se elimina la redundancia indirecta

Formas más avanzadas
Existen otras formas como BCNF, 4NF y 5NF, que eliminan dependencias más complejas.

Desventajas
- Genera más tablas, lo que puede complicar consultas
- Requiere mayor conocimiento técnico

Comparación con ejercicios de clase

En clase se trabajó con ejercicios donde se:
- Separaban tablas grandes en varias más pequeñas
- Identificaban claves primarias
- Eliminaban datos repetidos
- Organizaban información desordenada

El artículo explica la teoría detrás de esos ejercicios, incluyendo:
- Dependencias funcionales
- Tipos de anomalías
- Uso formal de las formas normales
- Justificación del proceso de normalización

| Ejercicios en clase | Artículo IBM |
|--------------------|-------------|
| Dividir tablas | Descomposición para evitar anomalías |
| Quitar duplicados | Reducción de redundancia |
| Identificar ID | Uso de primary keys |
| Relacionar tablas | Uso de foreign keys |
| Ordenar datos | Aplicación de formas normales |

