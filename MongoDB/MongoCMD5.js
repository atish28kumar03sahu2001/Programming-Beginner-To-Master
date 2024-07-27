db.datalist.find(
	{
		$and: [{'price':19.99},{'category':'Home'}]
	}
)

db.datalist.find(
	{
		$or: [{'category':'Electronic'},{'category':'Home'}]
	}
)

db.datalist.find(
	{
		'price':{$not:{$eq:20.00}}
	}
)

db.datalist.find(
	{
		$nor: [{'category':'Electronic'},{'category':'Home'}]
	}
)

db.datalist.find(
	{
		$nor: [{'category':'Electronic'},{'category':'Home'}]
	}
).count()

db.datalist.find(
	{
		$expr:{
			$gte: [{$add:['$quantity','$price']},200.00]
		}
	}
)