## Aggregation In MongoDB

The aggregation framework is a powerful feature in MongoDB that allows you to process and analyze the data in a highly flexible and efficient manner. It provides a set of pipeline stages that enable you to perform data transformations, group data, and perform various calculations on collections.

In MongoDB aggregation framework $match, $group, and $unwind are referred to as aggregation operators. they are used as stages in the aggregation pipeline to perform specific operations on the data.

## What Is Aggregation

Aggregation is the process of performing transformations on documents and combining them to produce computed results.

pipeline stages where aggregation consist of multiple pipeline stages each performing a specific operation on the input data.

## Benefits

1. Aggregating Data: Complex Calculations and Operations are possible.

2. Advanced Transformations: Data can be combined, reshaped and computed for insights.

3. Efficient Processing: Aggregation handles large datasets efficiently.

### $match

the $match stage is similar to the query used as the first argument in find(). it filters documents based on specified conditions. `{$match:{<query>}}`

### $group

the $group stages groups documents by specified fields and performs aggregate operations on grouped data. the $group stage groups documents by specified fields and performs aggregation function. it is lie reduce method in JAVASCRIPT. when dealing with $group stage we need to pass $asign for our existing field not the one we are going to create.

### $project

the project stage reshapes documents, includes or excludes fields and performs operations on fields. `{$project:{<field1>:<expression1>,....}}`

### $push

the $push stage adds elements to an array field within documents. `{$push:<expression>}`


### $unwind

The $unwind stage deconstructs an array field and produces multiple documents.

### $addToSet

the $addToSet stage adds elements to an array field while preventing duplicates.

**_we can't use $size inside the group because $size operator is not allowed directly within $group stage. instead, you can use it in combination with other aggregation operators or in separate pipeline stages._**

### $limit & $skip

The $limit and $skip stages are useful to pagination, limiting and skipping results.

### $filter

the $filter stage filters elements of an array based on specify conditions.
