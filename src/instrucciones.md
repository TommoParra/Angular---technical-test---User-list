Prueba Angular:
Creación de un proyecto angular con un módulo que muestre un listado paginado de usuarios, 5 usuarios por página. Por cada usuario se mostrará: nombre de usuario, nombre, apellido1, apellido2 y correo electrónico.

En la parte superior del listado aparecerá un formulario de búsqueda que permitirá filtrar el listado por: nombre, apellidos y correo electrónico.

El listado de usuarios se obtendrá de una llamada POST, con los datos registrados en el formulario de búsqueda, a un API (este no está disponible por lo que se simulará la llamada) que devuelve un json como el siguiente (deben incluirse los usuarios necesarios para que exista la paginación):

{
    "usuarios": [
        {
            "id": 1,
            "email": "admin@yopmail.com",
            "name": "admin",
            "surname1": "admin",
            "surname2": "admin",
        },
        {
            "id": 2,
            "email": "admin2@yopmail.com",
            "name": "admin2",
            "surname1": "admin2",
            "surname2": "admin2",
        },
        ...
        {
            "id": x,
            "email": "adminx@yopmail.com",
            "name": "adminx",
            "surname1": "adminx",
            "surname2": "adminx",
        }
    ]
}

El proyecto debe hacerse llegar en un gitlab público, de manera que, se pueda clonar, instalar y arrancar el proyecto para verificar el funcionamiento.
