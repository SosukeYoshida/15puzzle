import { useEffect, useState } from "react"
import { emptyPosition } from "../feature/emptyPosition"
import { Timer } from "./Timer";
import { SumMove } from "./SumMove";
import { clearGame } from "../feature/clearGame";

export const Field = ({ setIsField, field, setField, time, setTime, moveNum, setMoveNum, initField, isField, randomSetField }) => {

    const [isStart, setIsStart] = useState(false);
    const [clearMessage, setClearMessage] = useState("");

    const handleClick = (rowIndex, columnIndex, column) => {
        //NewGameボタンが押されているなら
        if (isStart) {
            const movePosArray = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
            ]
            const newField = [...field];
            const emptyPos = emptyPosition(newField);
            if (newField[emptyPos.row + movePosArray[0][0]][emptyPos.colmn + movePosArray[0][1]] > 0) {
                //    自分がクリックした番号と空マスから見て上の値が同じときに処理
                if (newField[emptyPos.row + movePosArray[0][0]][emptyPos.colmn + movePosArray[0][1]] == column) {
                    setField((prevField) => {
                        prevField[emptyPos.row][emptyPos.colmn] = column
                        prevField[emptyPos.row - 1][emptyPos.colmn] = 16;
                        return [...prevField]
                    })
                    sumMoveCount()
                }
            } if (newField[emptyPos.row + movePosArray[1][0]][emptyPos.colmn + movePosArray[1][1]] > 0) {
                //    自分がクリックした番号と空マスから見て右の値が同じときに処理
                if (newField[emptyPos.row + movePosArray[1][0]][emptyPos.colmn + movePosArray[1][1]] == column) {
                    setField((prevField) => {
                        prevField[emptyPos.row][emptyPos.colmn] = column
                        prevField[emptyPos.row][emptyPos.colmn + 1] = 16;
                        return [...prevField]
                    })
                    sumMoveCount()
                }
            }
            if (newField[emptyPos.row + movePosArray[2][0]][emptyPos.colmn + movePosArray[2][1]] > 0) {
                //    自分がクリックした番号と空マスから見て下の値が同じときに処理
                if (newField[emptyPos.row + movePosArray[2][0]][emptyPos.colmn + movePosArray[2][1]] == column) {
                    setField((prevField) => {
                        prevField[emptyPos.row][emptyPos.colmn] = column
                        prevField[emptyPos.row + 1][emptyPos.colmn] = 16;
                        return [...prevField]
                    })
                    sumMoveCount()
                }
            }
            if (newField[emptyPos.row + movePosArray[3][0]][emptyPos.colmn + movePosArray[3][1]] > 0) {
                if (newField[emptyPos.row + movePosArray[3][0]][emptyPos.colmn + movePosArray[3][1]] == column) {
                    setField((prevField) => {
                        prevField[emptyPos.row][emptyPos.colmn] = column
                        prevField[emptyPos.row][emptyPos.colmn - 1] = 16;
                        return [...prevField]
                    })
                    sumMoveCount()
                }
            }
        }
    }

    //移動回数＋１
    const sumMoveCount = () => {
        setMoveNum((prevMove) => {
            return prevMove + 1
        });
    }

    //ゲームクリアのメッセージと動作終了の処理、
    useEffect(() => {
        if (clearGame(initField, field) && isStart) {
            setClearMessage("ゲームクリア");
            setIsStart(false);
            randomSetField();
        }
    }, [field]);

    useEffect(() => {
        if(isStart){
        setClearMessage("");
        }
    }, [isStart]);

    return (
        <div className="container">
            <div className="btns">
                <div className="start-btn" onClick={() => { setIsStart(true) }}>NewGame</div>
                <div className="btn btn-outline-primary back-btn" onClick={() => { setIsField(false) }} >戻る</div>
            </div>
            {clearMessage && <div className="clear text-danger">{clearMessage}</div>}
            {isStart ?
                <div className="measure">
                    <Timer time={time} setTime={setTime} isStart={isStart}></Timer>
                    <SumMove moveNum={moveNum}></SumMove>
                </div>
                : ""}
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${field[0].length - 2}, 120px)`, gridAutoRows: "120px" }}
                className="field">
                {field.map((row, rowIndex) => {
                    return row.map((column, columnIndex) => {
                        if (column > 0 && column !== 16) {
                            return <div className="border square" onClick={() => { handleClick(rowIndex, columnIndex, column) }} >
                                {column}
                            </div>
                        }
                        else if (column == 16) {
                            return <div className="bg-secondary border"></div>
                        }
                        // else if (column == 0) {
                        //     return <div className="bg-white"></div>
                        // }
                    })
                })}
            </div>
        </div>
    )

}