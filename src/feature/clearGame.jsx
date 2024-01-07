/**
 * 
 * @param {Array} initField 
 * @param {Array} field 
 * @returns 
 */
export const clearGame = (initField, field) => {
    //配列の数が異なっているならfalse、同じならtrue
    if (initField.length !== field.length) {
        return false;
    } else {
        //配列の値が初期の状態と同じになったらtrue、それ以外false
        return field.every((row, rowIndex) => {
           return row.every((column, columnIndex) => {
                return initField[rowIndex][columnIndex] === field[rowIndex][columnIndex]
            })
        });
    }
}