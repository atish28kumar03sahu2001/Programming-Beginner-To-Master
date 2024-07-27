## Comparison Operator

1. `$eq` = equal to operator

2. `$ne` = not equal to operator

3. `$gt` = greater than operator

4. `$gte` = greater than equal operator

5. `$lt` = less than operator

6. `$lte` = less than equal operator

7. `$in` = in operator

8. `$nin` = not in operator

## Logical Operator

1. `$and` = Performs a logical AND operation on an array of expressions, where all expressions must be true for the document to match.

2. `$or` = performs a logical OR operation of an array of expressions, where at least one expression must be true for the document to match.

3. `$not` = performs a logical NOT operation on the specified expression, inverting the result.

4. `$nor` = performs a logical NOR operation on an array of expression where none of the expressions must be true for the document to match.

## Cursors In MongoDB

1. count()

2. limit()

3. skip()

4. sort() `1 for Ascending Order -1 for Descending Order`

## Complex Expression

the `$expr` operator allows using aggregation expression within a query. Useful when you need to compare fields from the same document in a more complex manner.

## Elements Operators

1. `$exists`: `$exists` matches documents that have a specific field regardless of its value.

2. `$type`: `$type` the $type operator filters documents based on the BSON data type of a field.

3. `$size`: `$size` the `$size` operator matches documents where the size of an array field matches a specified value.

BSON (Binary JSON) types are specific data types used by MongoDB to represent data. Each BSON type is associated with a numerical value, which is used internally by MongoDB to identify the data type. Here is a list of BSON types with their corresponding numerical values:

1. **Double**: `1`
2. **String**: `2`
3. **Object**: `3`
4. **Array**: `4`
5. **Binary data**: `5`
6. **Undefined (deprecated)**: `6`
7. **ObjectId**: `7`
8. **Boolean**: `8`
9. **Date**: `9`
10. **Null**: `10`
11. **Regular Expression**: `11`
12. **DBPointer (deprecated)**: `12`
13. **JavaScript**: `13`
14. **Symbol (deprecated)**: `14`
15. **JavaScript (with scope)**: `15`
16. **32-bit integer**: `16`
17. **Timestamp**: `17`
18. **64-bit integer**: `18`
19. **Decimal128**: `19`
20. **Min key**: `-1`
21. **Max key**: `127`
