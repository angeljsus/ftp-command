# Transferencia FTP
### Requerimientos
Instalar el módulo [basic-ftp](https://www.npmjs.com/package/basic-ftp):
```sh
npm install basic-ftp --save-dev
```
### Configuración
Modificar las propiedades de la conexión declaradas dentro de la función `realizarTransferencia()`, también las rutas de la carpeta local que contiene los archivos a transferir y la del servidor que es donde se almacenarán los archivos recibidos:
```js
// ./transfer.js
const realizarTransferencia = () => {
  const host = 'mi.hostname.com';
  const user = 'miUserName';
  const password = 'xxxxxxxx';
  const port = '21';
  const localDir = './public/'; // carpeta local contenedora de los archivos a transferir
  const serverDir = '/public_html'; // carpeta donde almacenará los archivos transferidos
  //...
}
```
**NOTA:** La constante `localDir` debe indicar la ruta de raíz con "." ya que de lo contrario no encontrará la ruta y marcará error. El valor de la constante `serverDir` no debe indicar la ruta con "." ya que creará la carpeta y dentro otra con el mismo nombre, ejemplo: `/public_html/public_html`

Agregar el comando para realizar la ejecución del código via npm dentro de nuestro `package.json` :
```js
  "scripts": {
    "transfer": "node ./transfer.js"
  },
```

Ejecutar la transferencia por medio de consola:
```sh
npm run transfer
```