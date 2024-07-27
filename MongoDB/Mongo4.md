## Read Operation In MongoDB

1. Reading Documents In MongoDB

2. Comparison Operator

3. Logical Operators

4. Cursors In MongoDB

5. Elements Operators

## Finding Documents In MongoDB

`db.collection-name.find({key:value})`

`db.collection-name.findOne({key:value})`

```javascript
db.UserDetail.find()
db.UserDetail.find({'age':'21'})
db.UserDetail.findOne({'age':'24'})
```

## Importing JSON in MongoDB

`mongoimport jsonfile.json -d database-name -c collection-name`

```javascript
//Normal Json File
mongoimport jsonfile.json -d shop -c collectionname

//Array of an object type JSON file
mongoimport jsonfile.json -d shop -c collectionname --jsonArray
```

The above syntax `--jsonArray` accepts the import of data expressed with multiple mongoDB documents within a single JSON Array.

**_mongoimport and mongoexport are command-line utilities that are part of the MongoDB Database Tools. These tools are used for importing data into MongoDB(using mongoimport) and exporting data from mongoDB (using mongoexport). Limited to imports of 16 MB or smaller._**

## Export JSON File

`mongoexport -d database-name -c collection-name -o path-name`
