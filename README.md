# Zara Challenge

## Configuración del Proyecto
React + Vite

/src
  /components
  /context
  /hooks
  /pages
    /Home
    /PhoneDetail
    /Cart
  /services
  /utils


Dependencies: Axios
DevDependencies: Vitest, React testing library

## 1. Vista Listado de Teléfonos

[X] cuadrícula con tarjetas que muestren los primeros 20 teléfonos: 
 - Cada tarjeta deberá incluir imagen, nombre, marca y precio base.

[X] Implementar un buscador en tiempo real que filtre los teléfonos por nombre o marca:
 - Usar filtrado por API

[X] El buscador debe incluir un indicador con el número de resultados encontrados.

[X] Implementar una barra de navegación que contenga:
 - Un icono con un enlace al panel de inicio.
 - Un icono que muestre la cantidad de teléfonos en el carrito.
 - El carrito debe de ser persistente, se puede manejar su estado haciendo
uso de localStorage.

[X] Al hacer clic en un teléfono, deberá redirigir a la vista de detalle del mismo.

## 2. Vista Detalle de Teléfono
Mostrar detalles del teléfono seleccionado, incluyendo:
[X] Nombre y marca del dispositivo

[X] Imagen grande del móvil, con capacidad de cambiar dinámicamente según el color
seleccionado.

[X] Selectores para almacenamiento y color, con actualización en tiempo real del precio.

[X] Especificaciones técnicas detalladas, precio base y variaciones según almacenamiento.

[X] Un botón "Añadir al carrito" que solo se activará cuando se hayan seleccionado color y
almacenamiento.

[X] Una sección de "Productos similares" en la parte inferior.

## 3. Vista de Carrito
Mostrar los teléfonos añadidos al carrito, con:

[X] Imagen, nombre, especificaciones seleccionadas (almacenamiento / color) y precio
individual.

[X] Implementar un botón para eliminar productos individuales del carrito.

[X] Mostrar el precio total de la compra.

[X] Un botón de "Continuar comprando" que redirija a la vista principal.


## STACK TECNOLOGICO
- Frontend: React 18 y CSS
- Gestión de Estado: React Context API.
- Autenticación: Manejo del parámetro x-api-key en las peticiones.