# Session Storage vs Local Storage

## ¿Qué es Session Storage?

Session Storage es un mecanismo del navegador que permite guardar información en forma de pares clave-valor.  
Los datos se mantienen disponibles mientras la pestaña del navegador esté abierta.

Cuando la pestaña se cierra, los datos se eliminan automáticamente.

### Métodos principales

Guardar información:

```javascript
sessionStorage.setItem("token", "12345")