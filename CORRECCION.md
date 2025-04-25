

✅ Correcciones en `index.html`

#### 1. **Mejoras de Accesibilidad (a11y)
- Se añadieron atributos `aria-label`, `role="banner"`, `role="main"`, `role="contentinfo"` y `role="alert"` para facilitar la navegación con lectores de pantalla.
- Se especificó el idioma del documento (`<html lang="es">`).
- Se usaron elementos `section` para segmentar lógicamente el contenido, especialmente estados como "loading" y "error".

2. **Optimización de Navegación
- Se eliminaron enlaces con `href="#"` sin funcionalidad real, y ahora están controlados mediante JavaScript (`preventDefault()`).
- Se permite mostrar/ocultar secciones (Inicio, Mapa) de forma dinámica con clases (`.map-section--active`).

 3. **Manejo de botones
- Todos los botones usan `type="button"` para evitar comportamientos inesperados dentro de formularios.

 4. **Separación de responsabilidades
- Se trasladó toda la lógica interactiva a un archivo externo `app.js`.
- Se preparó el HTML para conectar correctamente con estilos y scripts (`styles.css`, `app.js`, Leaflet).

 5. **Inclusión de recursos básicos
- Se agregó una línea para el favicon (`favicon.ico`).
- Se cargó el CSS de Leaflet y el script de Leaflet correctamente desde CDN.
- Se añadió `<script src="app.js" defer>` al final del `body`.

---

 Funcionalidades del `app.js`

1. **Navegación entre secciones*
   - Cambiar entre Inicio y Mapa sin recargar la página.

2. Control de estados de carga y error
   - Simula la carga de datos y muestra mensajes si hay un error.

3. Botón “Actualizar” y “Intentar nuevamente”
   - Simula la recarga de información meteorológica.

4. Selector de ubicación
   - Permite marcar como activa la ciudad seleccionada (clase `.location-list__item--active`).

5. Tabs de datos históricos
   - Simula el cambio de período (semana, mes, año) con clases activas.

6. Mapa interactivo con Leaflet
   - Se muestra un mapa base centrado en Buenos Aires usando OpenStreetMap.


