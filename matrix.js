function mul(a, b){
    var result = [];
    var result_row = [];
    
    var sum = 0;
    if(a[0].length === b.length){
        for(let k = 0; k < a.length; k++){
            for(let i = 0; i < b[0].length; i++){
                for(let j = 0; j < b.length; j++){
                    sum += a[k][j] * b[j][i];
                }
                result_row.push(sum);
                sum = 0;
            }
            result.push(result_row);
            result_row = [];
        }
    } else {
        return "Error occurred during multiplication!";
    }

    return result;
}

function sum(a,b){
    var result = [];
    var result_row = [];
    var sum = 0;
    if(a[0].length === b[0].length && a.length === b.length) {
        for(let i = 0; i < a.length; i++){
            for(let j = 0; j < a[0].length; j++){
                sum = a[i][j] + b[i][j];
                result_row.push(sum);
            }
            result.push(result_row);
            result_row = [];
        }
    }else{
        return "Matrices cannot be summed!";
    }

    return result;
}

function sub(a,b){
    var result = [];
    var result_row = [];
    var sum = 0;
    if(a[0].length === b[0].length && a.length === b.length) {
        for(let i = 0; i < a.length; i++){
            for(let j = 0; j < a[0].length; j++){
                sum = a[i][j] - b[i][j];
                result_row.push(sum);
            }
            result.push(result_row);
            result_row = [];
        }
    }else{
        return "Matrices cannot be subtracted!";
    }

    return result;
}

function mulNum(number,matrix,order){
    var a = [];
    var c = number;
    var b = matrix;
    var result_row = [];
    
    for(let i = 0; i < matrix[0].length; i++){
        for(let j = 0; j < matrix.length; j++){
            result_row.push(c);
        }
        a.push(result_row);
        result_row = [];
    }

    if(order === 0){
        return mul(a,b);
    }else if(order === 1){
        return mul(b,a);
    }else{
        return "Matrices cannot be multiplied in that order because they are not compatible with each other. Try changing the order or content of the matrices."
    }
}

function sumNum(number,matrix){
    var a = [];
    var c = number;
    var b = matrix;
    var result_row = [];
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            result_row.push(c);
        }
        a.push(result_row);
        result_row = [];
    }

    return sum(a,b);
}

function subNum(number,matrix,order){
    var a = [];
    var c = number;
    var b = matrix;
    var result_row = [];
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            result_row.push(c);
        }
        a.push(result_row);
        result_row = [];
    }

    if(order === 0){
        return sub(a,b);
    }else if(order === 1){
        return sub(b,a);
    }
}

function trans(matrix){
    var result = [];
    var result_row = [];

    for(let i = 0; i < matrix[0].length; i++){
        for(let j = 0; j < matrix.length; j++){
            result_row.push(matrix[j][i]);
        }
        result.push(result_row);
        result_row = [];
    }

    return result;
}

function det(matrix) {

    const rows = matrix.length;

    const columns = matrix[0].length;

    if (rows !== columns) {
        throw new Error('The matrix must be square.');
    }

    if (rows === 1) {
        return matrix[0][0];
    }

    let det = 0;
    for (let j = 0; j < columns; j++) {
        det += matrix[0][j] * cofactor(matrix, 0, j);
    }

    return det;
}

function cofactor(matrix, row, column) {
    const submatrix = matrix
        .map(row => row.slice(0)) 
        .filter((_, i) => i !== row) 
        .map(subred => subred.filter((_, j) => j !== column)); 

    const character = (row + column) % 2 === 0 ? 1 : -1;

    return character * det(submatrix);
}

module.exports = { mul, sum, sub, sumNum, subNum, mulNum, trans, det };