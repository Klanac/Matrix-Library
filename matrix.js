export function mul(a, b){
    if(Array.isArray(a) && Array.isArray(b)){
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
    }else if(Array.isArray(a) && !Array.isArray(b) || !Array.isArray(a) && Array.isArray(b)){
        if(Array.isArray(a)){
            var matrix = a;
            var number = b;
        }else{
            var matrix = b;
            var number = a;
        }
    
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                matrix[i][j] *= number;
            }
        }
        return matrix;
    }else{
        return a * b;
    }
}

export function sum(a,b){
    if(Array.isArray(a) && Array.isArray(b)){
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
    }else if(!Array.isArray(a) && Array.isArray(b) || Array.isArray(a) && !Array.isArray(b)){
        if(Array.isArray(a)){
            var matrix = a;
            var number = b;
        }else{
            var matrix = b;
            var number = a;
        }
        var result = [];
        var result_row = [];
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                result_row.push(number);
            }
            result.push(result_row);
            result_row = [];
        }

        if(Array.isArray(a)){
            b = result;
        }else{
            a = result;
        }

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

    }else{
        return a+b;
    }
}

export function sub(a,b){
    if(Array.isArray(a) && Array.isArray(b)){
        return subOrder(a,b);
    }else if(!Array.isArray(a) && Array.isArray(b) || Array.isArray(a) && !Array.isArray(b)){
        if(Array.isArray(a)){
            var matrix = a;
            var number = b;
        }else{
            var matrix = b;
            var number = a;
        }
        var result = [];
        var result_row = [];
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                result_row.push(number);
            }
            result.push(result_row);
            result_row = [];
        }

        if(Array.isArray(a)){
            b = result;
        }else{
            a = result;
        }

        return subOrder(a,b);
    }else{
        return a-b;
    }
}

function subOrder(a,b){
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

export function trans(matrix){
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

export function det(matrix) {

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