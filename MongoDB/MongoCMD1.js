mongod --version

//To Check Version Of MongoDB

mongosh

//To Initialize MongoDB Shell

show dbs & show databases

//Display The Available Databases in your MongoDB server.

use <database-name>

//Create and use the particular Database.

use users

db.dropDatabase(); { ok: 1, dropped: 'users' }

//Delete The Database.

db.createCollection('Collection-name') { ok: 1}

//create a collection inside a database.

show collections

//show all the collections that are created inside a database.

db.<Collection-Name>.drop()

//Delete a collection from a database.

//You won't see a database listed in the output of the show dbs command until that database contains at least one collection with data in it.




