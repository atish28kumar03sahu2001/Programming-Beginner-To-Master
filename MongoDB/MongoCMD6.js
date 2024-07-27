db.datalist.find({
    'category': { $type: 'string' }
})

db.datalist.find({
    'price': { $type: 'number' }
})

db.datalist.find({
	'colorarray':{$size:2}
})

db.datalist.find({
	'category':{$exists:'Home'}
})

db.datalist.find({
	'category':{$exists:'Home'}
}).count()