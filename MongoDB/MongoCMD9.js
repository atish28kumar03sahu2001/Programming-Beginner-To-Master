db.userdetails.find({age:{$gte:20}}).explain()

db.userdetails.find({age:{$gte:20}}).explain('executionStats')

db.userdetails.find({name:'name1'}).explain()

db.userdetails.find({name:'name1'}).explain("executionStats")

db.ecom.aggregate(
	[
		{$match:{productName:"Product A"}}
	]
)


db.ecom.aggregate([
  {
    $group: {
      _id: "$company.companyName",
      totalPrice: { $sum: "$productPrice" }
    }
  }
])

db.ecom.aggregate([
	{
		$match:{productPrice:{$gt:20.00}}
	},
	{
		$group:{
			_id:"$company.companyName",
			totalProducts: {$sum:"$productPrice"}
		}
	}
])

db.ecom.aggregate([
	{$match:{productQuantity:100}},
	{
		$group:{
			_id: "$company.companyName",
			pricetotal:{$sum:'$productPrice'},
			priceAvg:{$avg:'$productPrice'}
		}
	}
])

db.ecom.aggregate([
	{
		$match:{productPrice:{$gt:20.00}}
	},
	{
		$group:{
			_id:"$company.companyName",
			totalProducts: {$sum:"$productPrice"}
		}
	},
	{$sort:{total:1}}  //1ascending -1descending
])

db.ecom.aggregate([
	{
		$project:{
			name:1, discount:{$subtract:['$productPrice',5]}
		}
	}
])


db.ecom.aggregate(
	[
		{$match:{productPrice:{$lt:20.00}}},
		{
			$group: {
				_id:'$productPrice',
				allcolors:{$push:'$colors'}
			}
		}
	]
)

db.ecom.aggregate(
	[
		{$match:{productPrice:{$lt:20.00}}},
		{$unwind:'$colors'},
		{
			$group: {
				_id:'$productPrice',
				allcolors:{$push:'$colors'}
			}
		}
	]
)

db.ecom.aggregate([
  { $match: { productPrice: { $lt: 20.00 } } },
  { $unwind: "$colors" },
  {
    $group: {
      _id: "$productPrice",
      allcolors: { $addToSet: "$colors" }
    }
  },
  {
    $project: {
      _id: 1,
      colors: "$allcolors",
      colorlength: { $size: "$allcolors" }
    }
  }
])

db.ecom.aggregate([
  { $match: { productPrice: { $lt: 20.00 } } },
  { $unwind: "$colors" },
  {
    $group: {
      _id: "$productPrice",
      allcolors: { $addToSet: "$colors" }
    }
  },
  {
    $project: {
      _id: 1,
      colors: "$allcolors",
      colorlength: { $size: "$allcolors" }
    }
  },
 {$skip:1}
])

db.ecom.aggregate([
  { $match: { productPrice: { $lt: 20.00 } } },
  { $unwind: "$colors" },
  {
    $group: {
      _id: "$productPrice",
      allcolors: { $addToSet: "$colors" }
    }
  },
  {
    $project: {
      _id: 1,
      colors: "$allcolors",
      colorlength: { $size: "$allcolors" }
    }
  },
 {$limit:1}
])

db.ecom.aggregate([
  {
    "$addFields": {
      "filteredColors": {
        "$filter": {
          "input": "$colors",
          "as": "color",
          "cond": { "$in": ["$$color", ["Red", "Blue"]] }
        }
      }
    }
  }
])

db.ecom.aggregate([
  {
    "$match": {
      "$expr": {
        "$gt": [
          {
            "$size": {
              "$filter": {
                "input": "$colors",
                "as": "color",
                "cond": { "$in": ["$$color", ["Red", "Blue"]] }
              }
            }
          },
          0
        ]
      }
    }
  }
])

db.ecom.aggregate([
  {
    "$match": {
      "$expr": {
        "$gt": [
          {
            "$size": {
              "$filter": {
                "input": "$colors",
                "as": "color",
                "cond": { "$in": ["$$color", ["Red", "Blue"]] }
              }
            }
          },
          0
        ]
      }
    }
  },
  {
    "$count": "matchingProducts"
  }
])
