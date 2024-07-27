db.datalist.find(
	{
		'price': {$eq:10.99}
	}
)

db.datalist.find(
	{
		'category':{$ne:'Home'}
	}
)

db.datalist.find(
	{
		'category':{$ne:'Home'}
	}
).count()

db.datalist.find(
	{
		'quantity':{$gt:60}
	}
)

db.datalist.find(
	{
		'quantity':{$gt:60}
	}
).count()

db.datalist.find(
	{
		'quantity':{$gte:100}
	}
)

db.datalist.find(
	{
		'quantity':{$gte:100}
	}
).count()

db.datalist.find(
	{
		'price':{$lt:20.00}
	}
)

db.datalist.find(
	{
		'price':{$lt:20.00}
	}
).count()

db.datalist.find(
	{
		'price':{$lte:20.00}
	}
)

db.datalist.find(
	{
		'price':{$lte:20.00}
	}
).count()

db.datalist.find(
	{
		'price':{$in:[30.00,20.00]}
	}
)

db.datalist.find(
	{
		'price':{$in:[30.00,20.00]}
	}
).count()

db.datalist.find(
	{
		'price':{$nin:[50.00,60.00,70.00,80.00]}
	}
)

db.datalist.find(
	{
		'price':{$nin:[50.00,60.00,70.00,80.00]}
	}
).count()