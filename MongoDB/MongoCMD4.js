db.datalist.find(
	{
		'quantity':{$gte:100}
	}
).count()

db.datalist.find(
	{
		'quantity':{$gte:100}
	}
).limit(5)

db.datalist.find(
	{
		'quantity':{$gte:100}
	}
).skip(15)

db.datalist.find(
	{
		'quantity':{$gte:100}
	}
).sort({quantity: 1}).limit(5)

db.datalist.find(
	{
		'quantity':{$gte:100}
	}
).sort({quantity: -1}).limit(5)