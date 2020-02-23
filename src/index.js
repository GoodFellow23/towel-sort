
// You should implement your task here.

module.exports = function towelSort (matrix) {      
    
    return  !matrix ? [] : [].concat(matrix.flatMap((item, idx) => idx%2==0 ? item : item.reverse()));
}


