## Projection

to include specific fields use projection with a value of 1 for the fields you want. To exclude fields, use projection with a value of 0 for the fields you want to exclude. You can not include and exclude fields simultaneously in the same query projection.

## Embedded Documents

Query documents inside embedded documents using dot notation. 

## $all VS $elemMatch

The `$all` operator selects the documents where the value of a field is an array that contains all the specified elements.

The `$elemMatch` operator matches documents that contain an array field with at least one element that matches all the specified query criteria.

