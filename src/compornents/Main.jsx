import { Logout } from "./btns/Logout"
import { FieldSetBtn } from "./btns/FieldSetBtn"
import { useEffect, useState } from "react"
import { fieldApi } from "../api/fieldApi"
import { Field } from "./Field"
import { SettingBtn } from "./btns/SettingBtn"
import { Setting } from "./Setting"

export const Main = ({ setIsLogin }) => {

    const [isField, setIsField] = useState(false);
    const [field, setField] = useState([]);
    const [isSetting, setIsSetting] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const getField = async () => {
        const data = await fieldApi();
        setField(data)
        console.log(data);
    }
    useEffect(() => {
        getField();
    }, []);
    
    useEffect(()=>{
    if(isToggle){
    return console.log("あああああ");
    }
    return console.log("いいいいい");
    
    },[isToggle]);


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
                                <FieldSetBtn setIsField={setIsField}></FieldSetBtn>
                            </div>
                            <div className="col">
                                <div className="btn btn-outline-info home-btn">リザルト</div>
                            </div>
                        </div>
                    </div>
                </div >
            }
            {isField && <Field setIsField={setIsField} field={field} setField={setField}></Field>}
            {isSetting && <Setting setIsSetting={setIsSetting} setIsToggle={setIsToggle} isToggle={isToggle}></Setting>}
        </>
    )

}