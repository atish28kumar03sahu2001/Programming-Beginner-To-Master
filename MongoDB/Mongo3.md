## Insert Operation In MongoDB

1. Inserting Documents In MongoDB

2. When To Use Quotes & When Not To?

3. Ordered & Unordered Inserts

4. Case Sensitivity In MongoDB

## Inserting Documents In MongoDB

```javascript
db.<collection-name>.insertOne({
  field1: value1,
  field2: value2,
....
})
```

```javascript
db.<collection-name>.insertMany([
  {field1: value1, field2: value2,.....},
  {field1: value1, field2: value2,.....},
.....
])
```

## When To Use Quotes & When Not To?

1. Special Characters if a field name contains special characters or spaces or starts with a numeric digit, using quotes is necessary.

2. Reserved Words if a field name is a reserved keyword in MongoDB, use quotes to distinguish it from the reserved keyword.

## Ordered & Unordered Inserts

When executing bulk write operations, "ordered" and "unordered" determine the batch behavior.

Ordered Inserts is a default behavior is ordered where MongoDB stops on the first error. `db.<collection-name>.insertMany([doc1, doc2,...])`

Unordered inserts when executing bulk writing operations with unordered flag, MongoDB processing after encountering an error. `db.<collection-name>.insertMany([doc1, doc2,...]),{ordered: false}`db

## Case Sensitivity In MongoDB

1. Collection names are case-sensitive.

2. field names within documents are also case-sensitive

```javascript
db.product.insertOne({name:'name1',age:'30'});
db.Product.insertOne({name:'name1',age:'30'});

//The above code will show error
```
