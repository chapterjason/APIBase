import { Database } from '@apibase/database';

const database = new Database();
const databaseFile = './data/data.dat';

console.time('Test');

database.load(databaseFile);
for(var i = 0; i < 1; i++){
    database.push('/push/test', Math.random());
}
database.save(databaseFile);

console.timeEnd('Test');

console.log(Object.keys(database.get('/push/test')).length);