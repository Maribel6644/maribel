1. ¿Qué es una transacción? ¿Para qué se usan?
Una transacción es un conjunto de operaciones en una base de datos que se ejecutan como una sola unidad.
Se usan para garantizar la integridad de los datos: o todas las operaciones se completan correctamente (commit) o ninguna se aplica (rollback) en caso de error.

2. ¿Cómo puedo evitar que el comando para crear una tabla no falle si es que la tabla ya está creada?
CREATE TABLE IF NOT EXISTS nombre_tabla (...);

3. ¿Qué es un trigger o disparador? Da dos ejemplos de cuándo es bueno usarlos.
Un trigger (disparador) es una acción automática que ejecuta la base de datos cuando ocurre un evento (como `INSERT`, `UPDATE` o `DELETE`) en una tabla.

Ejemplos:
 * Registrar cambios en una tabla (auditoría), por ejemplo guardar quién modificó un registro.
 * Validar o ajustar datos automáticamente, como actualizar un campo (ej. total) después de insertar un registro.

4. ¿Qué es SQL Injection? ¿Qué implicaciones tiene? Busca 3 noticias de talla mundial relacionadas con esto, escribe un párrafo de cada una de ellas y escribe el enlace a la noticia.
SQL Injection (SQLi) es un ataque en el que un atacante introduce código SQL malicioso en los campos de entrada de una aplicación para manipular la base de datos. Esto puede permitir acceder, robar, modificar o eliminar datos sin autorización. 
Puede provocar robo de información sensible, pérdida de datos, acceso no autorizado a sistemas y daños económicos o reputacionales para las organizaciones. 

Noticias 
   1. Vulnerabilidad en sistema de seguridad aérea (TSA, 2024)
   Investigadores descubrieron una falla de SQL Injection en el sistema FlyCASS utilizado por aerolíneas para validar tripulación ante la TSA. Aprovechando esta vulnerabilidad, era posible crear registros falsos de pilotos y potencialmente acceder a áreas restringidas de aeropuertos. Esto evidenció riesgos graves en sistemas críticos de seguridad. 
🔗 [https://www.theverge.com/2024/9/8/24239026/airline-security-bug-tsa-security-database-sql-injection-hack]

   2. Ataque masivo a MOVEit (2023, impacto global)
   Un ataque de SQL Injection explotó una vulnerabilidad en el software MOVEit, utilizado por empresas y gobiernos. Como resultado, se robaron datos de casi 100 millones de personas en todo el mundo, afectando bancos, hospitales y universidades. Este caso mostró cómo una sola falla puede escalar a una brecha global. 
🔗 [https://en.wikipedia.org/wiki/SQL_injection]

   3. Vulnerabilidad crítica en FortiWeb (2025)
   Se detectó una vulnerabilidad de SQL Injection (CVE-2025-25257) en el firewall FortiWeb que permitía ejecutar comandos SQL sin autenticación. Esto podía dar acceso completo a sistemas y datos sensibles, representando una amenaza grave para empresas a nivel mundial y aumentando el número de ciberataques. 
🔗 [https://socprime.com/es/blog/cve-2025-25257-sql-injection-vulnerability/]

5. ¿Qué es un ORM y qué diferencias existen con escribir sentencias de SQL comunes?
Un ORM (Object-Relational Mapping) es una herramienta que permite interactuar con una base de datos usando objetos y código del lenguaje de programación en lugar de escribir SQL directamente.
Diferencias con SQL:
 * ORM:usas clases y métodos (más fácil y abstracto).
 * SQL:escribes consultas directamente (más control y eficiencia).
 * ORM:reduce errores y facilita mantenimiento.
 * SQL:suele ser más rápido y flexible para consultas complejas.
