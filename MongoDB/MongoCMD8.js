db.users.updateOne(
	{
		name: 'name1'
	},
	{
		$set:{'age':118}
	}
)

db.employee.updateMany(
    {
        auth: 'true'
    },
    {
        $set: {
            age: 100
        }
    }
)

db.employee.updateOne(
	{_id: ObjectId('66a547af4648407472c4e49e')},
	{
		$unset:{auth:'true'}
	}
)

db.employee.updateMany(
	{auth:'true'},
	{$rename:{'age':'empage'}}
)


db.users.updateOne(
	{name:'name1'},
	{$push:{'emppos':'Agent'}}
)

db.users.updateOne(
    { name: 'name1' },
    { $pop: { emppos: -1 } }
)

db.users.updateOne(
	{name:'name3'},
	{$set:{'auth':'false'}}
)

db.users.deleteOne({emppos:[]})

db.users.deleteMany({'auth':'false'})