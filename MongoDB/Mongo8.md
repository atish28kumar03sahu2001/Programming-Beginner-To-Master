## Indexes In MongoDB

1. what are indexes?

2. Benefits of indexes

3. unique, text index

4. when not to use indexes

5. Managing Indexes

## What Are Indexes

Indexes are specialized data structures that optimize data retrieval speed in MongoDB. Indexes store a fraction of data in a more searchable format. they enable MongoDB to locate data faster during queries. Indexes are separate from collections and multiple indexes can exist per collection.

## Benefits Of Indexes

1. Faster Querying: Indexes drastically accelerate data retrieval particularly for large collections. 

2. Efficient Sorting: Indexes facilitate rapid sorting based on specific fields.

3. Improved Aggregation: Aggregation operations become more efficient with optimized indexes.

4. Indexing on multiple Fields: Complex queries can be executed efficiently by utilizing multiple fields in indexes.

## explain()

use explain() method to understand query execution in details.

```javascript
db.userdetails.find({name:'name1'}).explain()
db.userdetails.find({name:'name1'}).explain("executionStats")
```

```javascript
db.userdetails.find({age:{$gte:20}}).explain()
db.userdetails.find({age:{$gte:20}}).explain('executionStats')
```

## Managing Indexes

```javascript
users.createIndex({email:1},{unique:true})

db.collection.dropIndex("index_name");

db.collection.getIndexes();
```

## Unique & Text Indexes

```javascript
db.collection.createIndex({field:1},{unique:true})
db.collection.find({$text:{$search:"keyword"}});
```
## When Not To Use Indexes

1. Indexes on rarely used fields indexing fields that are seldom used in queries can consume unnecessary space and resources.

2. Balancing Act indexing requires disk space and memory. Over indexing can lead to resource strain and impact overall performance.

3. Indexing Small collections in smaller collections the cost of index maintenance might outweigh e benefits gained from querying.

```javascript
db.userdetails.find({age:{$gte:20}}).explain('executionStats')
```

