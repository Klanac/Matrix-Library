# 📚 Matrix Library
The library was created for the purpose of web development for quick and easy calculations with matrices and numbers. The matrix is ​​capable of any operations, and the instructions describe in detail what each one does and how it works.

# 📄 License
This library is available under the MIT license.

# 📖 HOW TO USE
## IMPORTING LIBRARY
var { mul, zbr, oduz, zbrBr, oduzBr, mulBr } = require('path');

Paste the code at the beginning of the file in which you intend to use the functions. Instead of path, write where the main Matrix.js file is located.

## FUNCTIONS
- **mul(a,b)** -> Multiply matrices in the order a * b.
- **sum(a,b)** -> Summing matrices a + b.
- **sub(a,b)** -> Subtracts matrices a - b.
- **mulNum(number,matrix,order)** -> Converts a number to a matrix so that it can be multiplied by a matrix. Since matrix multiplication is not commutative, order determines the order of multiplication.
  - order = 0 -> A(in the beginning is number) * B(matrix)
  - order = 1 -> B(matrix) * A(in the beginning is number)
- **sumNum(number,matrix)** -> Converts a number to a matrix and adds to the matrix.
- **subNum(number,matrix,order)** -> Converts a number to a matrix and subtracts it from the matrix. The order variable is the order and the same syntax as for mulNum() applies.
- **trans(matrix)** -> Transposes a matrix.
- **det(matrix)** -> Determines the determinant of a matrix.

# ❗**IMPORTNAT**❗
All functions return an array in which each element represents its row, except for the det() function, which returns only a number.

# Thank you for using Matrix Library!
