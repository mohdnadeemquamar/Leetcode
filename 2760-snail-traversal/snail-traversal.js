/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    // Validate that the grid dimensions match the array length exactly
    if (rowsCount * colsCount !== this.length) {
        return [];
    }

    // Initialize an empty 2D matrix with dimensions rowsCount x colsCount
    const result = Array.from({ length: rowsCount }, () => new Array(colsCount));

    for (let i = 0; i < this.length; i++) {
        const col = Math.floor(i / rowsCount);
        let row;

        // Even columns fill top-to-bottom; odd columns fill bottom-to-top
        if (col % 2 === 0) {
            row = i % rowsCount;
        } else {
            row = rowsCount - 1 - (i % rowsCount);
        }

        result[row][col] = this[i];
    }

    return result;
};

/**
 * Example usage:
 * const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
 * nums.snail(5, 4);
 * 
 * Result:
 * [
 *   [19, 17, 16, 15],
 *   [10,  1, 14,  4],
 *   [ 3,  2, 12, 20],
 *   [ 7,  5, 18, 11],
 *   [ 9,  8,  6, 13]
 * ]
 */
/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */