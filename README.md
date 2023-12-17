# 📚 Matrix Library

The library was created for the purpose of web development for quick and easy calculations with matrices and numbers. The matrix is ​​capable of any operations, and the instructions describe in detail what each one does and how it works.

# 📄 License

This library is available under the MIT license.

# 📖 HOW TO USE

## IMPORTING LIBRARY

import { mul, sum, sub, sumNum, subNum, mulNum, trans, det } from "path";

Paste the code at the beginning of the file in which you intend to use the functions. Instead of path, write where the main Matrix.js file is located.

## FUNCTIONS

- **mul(a,b)** -> Multiply matrices in the order a \* b.
- **sum(a,b)** -> Summing matrices a + b.
- **sub(a,b)** -> Subtracts matrices a - b.
- **mulNum(number,matrix)** -> Multiply a number with each element of the matrix.
- **sumNum(number,matrix)** -> Converts a number to a matrix and adds to the matrix.
- **subNum(number,matrix,order)** -> Converts a number to a matrix and subtracts it from the matrix. Order determines the order of subtraction.
  - order = 0 -> A(number) - B(matrix)
  - order = 1 -> B(matrix) - A(number)
- **trans(matrix)** -> Transposes a matrix.
- **det(matrix)** -> Determines the determinant of a matrix.

# ❗**IMPORTNAT**❗

All functions return an array in which each element represents its row, except for the det() function, which returns only a number.

# Thank you for using Matrix Library!
