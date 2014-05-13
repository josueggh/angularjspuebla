AngularJS - Comunidad PHP
===============

## Directorios
*   **playground** : Colección de los demos presentados
*   **crud** : Ejemplo de CRUD (Create , Read, Update , Delete)
*   **docs** : Presentación PPT, Keynote y archivo PDF con el tutorial
*   **demos** : Demos generados de manera independiente al playground
*   **server** : Colección de documentos PHP necesarios para el demo de CRUD


## Ejecutando el playground
Para ejecutar el playground y los demos que solo requieren de Javascript se puede hacer de la siguiente manera:

	python -m SimpleHTTPServer

Para poder ejecutar todos los demos incluyendo el de CRUD, si se cuenta con PHP 5.4 > se puede ejecutar 
	
	php -S 127.0.0.1:8000

En caso de no contar con PHP 5.4 > , se necesita configurar un VirtualHost en nuestro servidor web.


**Apache :**
```puppet
<VirtualHost *:80>
    ServerAdmin admin@localhost
    DocumentRoot "RUTA DEL DIRECTORIO"
    ServerName NOMBRE DEL HOST
    <Directory />
    	Options FollowSymLinks
    	AllowOverride None
    	Order deny,allow
    	Deny from all
    </Directory>
    ErrorLog "logs/mexicoshowroom.com-error_log"
    CustomLog "logs/mexicoshowroom.com-access_log" common
</VirtualHost>
```

**Nginx :**
```puppet
server {

        listen   80; 
        root RUTA DEL DIRACTORIO;
        index index.html index.htm;

        server_name NOMBRE DEL HOST;
}
```

## License

The MIT License (MIT)

Copyright (c) 2014 Josue G Gutierrez Hernandez josue.ggh@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.