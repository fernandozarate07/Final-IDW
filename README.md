# Final - Introducción al Desarrollo Web (IDW)

Este proyecto corresponde al trabajo final de la materia **Introducción al Desarrollo Web**. Es una aplicación de clima construida en JavaScript puro que sigue una arquitectura **MVC** y utiliza el **Patrón Observador** para mantener sincronizada la vista con los datos obtenidos desde una API externa.

---

## 🧠 Arquitectura general y patrón usado

El proyecto está estructurado con una arquitectura **MVC (Modelo - Vista - Controlador)** y utiliza el **Patrón Observador** para actualizar la interfaz de usuario en respuesta a cambios en los datos.

- **Modelo (`model.js`)**: Se encarga de obtener datos de la API, gestionar el estado y notificar a las vistas cuando hay cambios.
- **Vista (`vision.js`)**: Contiene las funciones responsables del renderizado de los datos en el DOM (interfaz).
- **Controlador (`controller.js`)**: Coordina la interacción del usuario, valida inputs, dispara peticiones al modelo y registra los observadores.

---

## 📁 Detalle por archivo

### `model.js` (Modelo + Observador + Loader)

#### Observadores:
- `observers`: Array que almacena funciones observadoras.
- `addObserver(observer)`: Añade una función observadora a la lista.
- `notify(data)`: Ejecuta cada observador con los nuevos datos.

#### Loader:
- `showLoader()` y `hideLoader()`: Muestran u ocultan el spinner de carga.

#### Datos:
- `getData(city)`: Realiza una llamada `fetch` a la API de clima para obtener datos en base a la ciudad ingresada. Muestra el loader mientras espera.
- `loadPage()`: Llama a `getData()` con la ciudad por defecto ("Buenos Aires") y notifica a los observadores con la respuesta.

---

### `vision.js` (Vista)

#### `renderMain(data)`:
Función observadora que actualiza la interfaz con los datos recibidos:
- Cambia el fondo de la página dependiendo del horario (día/noche).
- Muestra el nombre de la ciudad, la temperatura, el ícono climático y condiciones actuales.
- Actualiza la fecha y una breve descripción del pronóstico.

El renderizado se realiza manipulando directamente el DOM usando `querySelector` y modificando clases CSS e innerText.

---

### `controller.js` (Controlador)

- Ejecuta `loadPage()` al iniciar la app.
- Registra `renderMain` como observador mediante `addObserver(renderMain)`.
- Escucha el evento `submit` del formulario de búsqueda:
  - Valida que el input no esté vacío ni sea numérico.
  - Si es válido, llama a `getData(nameNewCity)` y, si la respuesta es exitosa, notifica con los nuevos datos.
  - Si ocurre un error (ej. ciudad inválida), muestra un mensaje en la interfaz.

---

## 🔄 Flujo de ejecución principal

### Arranque:
1. Se llama a `loadPage()`, que obtiene los datos de clima de la ciudad por defecto.
2. Los datos obtenidos se pasan a `notify(data)`.
3. Se ejecuta `renderMain(data)` para actualizar la UI con esos datos.

### Interacción del usuario:
1. El usuario ingresa una ciudad en el formulario y lo envía.
2. Se valida el input.
3. Se ejecuta `getData(nuevaCiudad)` si el input es válido.
4. Si se obtienen datos exitosamente, se ejecuta `notify(data)`.
5. Se actualiza la interfaz con `renderMain(data)`.

---

## ✅ Beneficios del uso del patrón observador

- **Separación de responsabilidades**: el modelo no necesita saber qué hace cada observador, solo los notifica.
- **Escalabilidad**: permite agregar más observadores sin modificar la lógica principal.
- **Flexibilidad**: el controlador se encarga solo de coordinar, no de renderizar ni de manejar datos directamente.
- **Código más limpio y mantenible**.

---

## 🧩 Diagrama de flujo

> Podés encontrar el diagrama en la carpeta `/docs` o adjunto en este repositorio como imagen: `mvc-flowchart.png`.

---

## 🌐 API utilizada

Visual Crossing Weather API  
[https://www.visualcrossing.com](https://www.visualcrossing.com)

---

## ✍️ Autor

Trabajo final realizado para la materia **Introducción al Desarrollo Web (IDW)** – 2025  
Alumno: **Fernando Anibal del Valle Zarate** 
Profesor/a:**Mg. María Isabel Masanet, Mg. Lic. Héctor Lépez** 
