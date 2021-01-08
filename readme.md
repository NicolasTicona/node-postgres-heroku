# Configuración
- Crear .env con un URI de conexión a tu base de datos local (DATABASE)
- Añadir NodeJs buildpack en heroku
- Instalar ADD-ON heroku-postgres para la base de datos 
- En el servidor local, crear un PROCFILE con el siguiente Dyno 
```sh
(web: node ./bin/www --port $PORT)
```
- Subir cambios a heroku (git push heroku master)
- Probar

