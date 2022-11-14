const ftp = require('basic-ftp');

const realizarTransferencia = () => {
 const host = 'mi.hostname.com';
 const user = 'miUserName';
 const password = 'xxxxxxxx';
 const port = '21';
 const localDir = './public/';
 const serverDir = '/public_html/';

 // creando objeto
 const client = new ftp.Client();

 return client.access({ host: host, user: user, password: password, secure: true})
 .then( () => console.log('Conexión establecida con éxito: ', host) )
 .then( () => { 
  const progress = {};
  client.trackProgress( ({name, bytesOverall, bytes}) => {
   bytes === 0 ? console.log('Comenzando a transferir: %s', name) : '';
   if(bytes > 0){
    if( !progress.hasOwnProperty(bytes) ){
     progress[bytes] = ''
     let suma = 0;
     let keys = Object.keys(progress).map( key => {
      suma += parseInt(key);
     })
     suma === bytesOverall ? 
      console.log('Transferencia completa: %s (%s bytes)', name, bytes) : '';
    }
   }
  })
 })
 .then( () => client.ensureDir(serverDir) )
 .then( () => client.uploadFromDir(localDir, serverDir) )
 .then( () => client.close() )
 .then( () => console.log('TRANSFERENCIA COMPLETA') )
 .catch( err => {
  console.log(err);
  console.log('OOPPS, TENEMOS PROBLEMAS');
  client.close()
 })
}

realizarTransferencia() // ejecutar;