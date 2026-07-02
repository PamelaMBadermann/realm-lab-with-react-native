import Realm from 'realm';

 var db = new Realm({
     path: 'ProdutosDB.realm',
     schema: [
         {
             name: 'Produto',
             primaryKey: 'codigo',
             properties: {
                 codigo: 'int', nome: 'string', quantidade: 'int',
         },
         },
     ],
     });

 export default db;
                     