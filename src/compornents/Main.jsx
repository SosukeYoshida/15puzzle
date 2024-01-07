import { Logout } from "./btns/Logout"
import { FieldSetBtn } from "./btns/FieldSetBtn"
import { useEffect, useState } from "react"
import { fieldApi } from "../api/fieldApi"
import { Field } from "./Field"
import { SettingBtn } from "./btns/SettingBtn"
import { Setting } from "./Setting"
import { clearGame } from "../feature/clearGame"

export const Main = ({ setIsLogin }) => {

    const [field, setField] = useState([]);
    const [initField, setInitField] = useState([]);
    const [isField, setIsField] = useState(false);
    const [isRandomField, setIsRandomField] = useState(false);
    const [isSetting, setIsSetting] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const [time, setTime] = useState(0);
    const [moveNum, setMoveNum] = useState(0);

    const getField = async () => {
        const data = await fieldApi();
        setField(data);

        //JSONを使って初期状態の配列を保持
        const defField = JSON.parse(JSON.stringify(data));
        setInitField(defField);
    }
    useEffect(() => {
        getField();
    }, []);

    useEffect(() => {
        if (isToggle) {
            return console.log("あああああ");
        }

    }, [isToggle]);


    const randomSetField = () => {
        const usedNum = new Set();
        let randomNum = 0;
        setField((prev) => {
            for (let i = 0; i < prev.length; i++) {
                for (let j = 0; j < prev[i].length; j++) {
                    if (prev[i][j] != 0) {
                        do {
                            randomNum = Math.floor(Math.random() * 16) + 1;
                        } while (usedNum.has(randomNum));
                        prev[i][j] = randomNum;
                        usedNum.add(randomNum);
                    }
                }
            }

            return [...prev];
        });

        //デバッグ用
        // setField([
        //     [0, 0, 0, 0, 0, 0],
        //     [0, 1, 2, 3, 4, 0],
        //     [0, 5, 6, 7, 8, 0],
        //     [0, 9, 10, 11, 12, 0],
        //     [0, 13, 14, 16, 15, 0],
        //     [0, 0, 0, 0, 0, 0],
        // ])
    }

    useEffect(() => {
        if (isRandomField) {
            randomSetField()
            setIsRandomField(false);
        }
    }, [isRandomField]);


    useEffect(() => {
        if (!isField) {
            setTime(0);
            setMoveNum(0);
        }
    }, [isField]);


    //ゲームクリア
    useEffect(() => {
        if (clearGame(initField, field) && isField) {
            //ローカルストレージで記録を保存しておく
            localStorage.setItem("time",time);
            localStorage.setItem("move",moveNum)
            setTime(0);
            setMoveNum(0);
        }
    }, [field]);

    return (
        <>
            {!isField && !isSetting &&
                < div className="home">
                    <div className="home-title">
                        Home
                    </div>
                    <div className="container text-center">
                        <div className="row mb-5">
                            <div className="col">
                                <Logout setIsLogin={setIsLogin}></Logout>
                            </div>
                            <div className="col">
                                <SettingBtn setIsSetting={setIsSetting} isSetting={isSetting}></SettingBtn>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <FieldSetBtn setIsField={setIsField} setIsRandomField={setIsRandomField}></FieldSetBtn>
                            </div>
                            <div className="col">
                                <div className="btn btn-outline-info home-btn">リザルト</div>
                            </div>
                        </div>
                    </div>
                </div >
            }
            {isField && <Field setIsField={setIsField} field={field} setField={setField}
                time={time} setTime={setTime} moveNum={moveNum} setMoveNum={setMoveNum} getField={getField} initField={initField}
                isField={isField} randomSetField={randomSetField}></Field>}
            {isSetting && <Setting setIsSetting={setIsSetting} setIsToggle={setIsToggle} isToggle={isToggle}></Setting>}
        </>
    )

}