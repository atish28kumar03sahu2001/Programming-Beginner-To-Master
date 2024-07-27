## Update Operations In MongoDB

1. updateOne() and updateMany()

2. Removing and renaming fields

3. Adding, removing items from array

4. Updating embedded documents

## updateOne() and updateMany()

```javascript
db.collectionName.updateOne(
	{filter},
	{$set:{existingField:newValue, newField:"newvalue",//...},}
);

db.collectionName.updateMany(
	{filter},
	{$set:{existingField:newValue,//...},}
);
```
**_if you write field name which is not exists then it will be created._**

## Removing and renaming fields

```javascript
db.employee.updateOne({_id: ObjectId('66a547af4648407472c4e49e')}, { $unset:{auth:'true'} })
db.employee.updateMany( {auth:'true'}, {$rename:{'age':'empage'}} )
```

## Updating Embedded Documents

```javascript
db.users.updateOne( {name:'name1'}, {$push:{'emppos':'Agent'}} )

db.users.updateOne( { name: 'name1' }, { $pop: { emppos: -1 } } )

db.users.updateOne( {name:'name3'}, {$set:{'auth':'false'}} )
```

## Delete Operations In MongoDB

in mongoDB the DELETE operations are used to remove documents from a collection. There are two main methods to perform deletion: deleteOne() and deleteMany().

