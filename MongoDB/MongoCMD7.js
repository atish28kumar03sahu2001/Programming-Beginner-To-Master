db.datalist.find(
	{
		'colorarray':{$size:2}
	},
	{colorarray:1,_id:0}
)

db.datalist.find(
	{
		'colorarray':{$size:2}
	},
	{name:1,_id:0}
)

db.datalist.find(
	{'companyname.location':'Las Vegas'}
)

db.datalist.find(
	{
		'category':{$all:['Home']}
	}
)

db.datalist.find({
    colorarray: {
        $elemMatch: {
            $in: ["Red", "Black"]
        }
    }
});

