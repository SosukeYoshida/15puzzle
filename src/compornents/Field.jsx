import { emptyPosition } from "../feature/emptyPosition"

export const Field = ({ setIsField, field, setField }) => {


    const handleClick = (rowIndex, columnIndex, column) => {
        const movePosArray = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ]
        if (field[emptyPosition(field).row + movePosArray[0][0]][[emptyPosition(field).colmn + movePosArray[0][1]]] > 0) {
            setField((prevField) => {
                //    自分がクリックした要素と上の値が同じときに処理
                if (field[emptyPosition(field).row + movePosArray[0][0]][emptyPosition(field).colmn + movePosArray[0][1]] == column) {
                    // field[emptyPosition(field).row + movePosArray[0][0]][emptyPosition(field).colmn + movePosArray[0][1]] = -1;
                    // field[emptyPosition(field).row][emptyPosition(field).colmn] = column
                    console.log("あああああ");
                }
                console.log(field);
                return [...prevField]
            })
        } if (field[emptyPosition(field).row + movePosArray[1][0]][[emptyPosition(field).colmn + movePosArray[1][1]]] > 0) {
            console.log("いいいいいい");
        } if (field[emptyPosition(field).row + movePosArray[2][0]][[emptyPosition(field).colmn + movePosArray[2][1]]] > 0) {
            console.log("うううううう");
        } if (field[emptyPosition(field).row + movePosArray[3][0]][[emptyPosition(field).colmn + movePosArray[3][1]]] > 0) {
            console.log("ええええええ");
        }

    }

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${field[0].length}, 120px)`, gridAutoRows: "120px" }}
                className="field">
                {field.map((row, rowIndex) => {
                    return row.map((column, columnIndex) => {
                        if (column > 0) {
                            return <div className="border square" onClick={() => { handleClick(rowIndex, columnIndex, column) }} >
                                {column}
                            </div>
                        }
                        else if (column == -1) {
                            return <div className="bg-secondary border"></div>
                        }
                        else if (column == 0) {
                            return <div className="bg-white"></div>
                        }
                    })
                })}
            </div>
        </>
    )

}