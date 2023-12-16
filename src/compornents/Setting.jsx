import { useEffect, useRef, useState } from "react";
import { userUpdateApi } from "../api/userUpdateApi"

export const Setting = ({ setIsSetting, setIsToggle, isToggle }) => {

    const name = useRef(null);
    const email = useRef(null);
    const [message, setMessage] = useState("");
    // 編集api
    const handleClickPostData = async () => {
        // console.log("あああ");
        const data = await userUpdateApi(localStorage.getItem("user_id"), name.current.value, email.current.value);
        if (data.success) {
            setMessage(data.message);
            localStorage.setItem("name", name.current.value);
            localStorage.setItem("email", email.current.value);
        }
    }
    // 戻るボタン
    const homeBack = () => {
        setIsSetting(false)
    }
    // トグルボタン切り替え
    const handleToggleClick = () => {
        if (!isToggle) {
            setIsToggle(true);
        } else {
            setIsToggle(false);
        }
    }

    return (
        <>
            <div className="setting">

                <div className="btn btn-outline-primary mb-5"  onClick={homeBack} >戻る</div>

                <div className="game-setting">
                    <div className="game-setting-title mb-4">
                        ゲーム難易度設定（普通、簡単）
                    </div >
                    <div className={`toggle-switch ${isToggle ? "active":""} `} onClick={handleToggleClick}>
                        <div className="toggle-internal"></div>
                    </div>
                </div>

                <div className="user-setting">
                    <div className="user-setting-title">
                        ユーザー設定
                    </div>
                    <div className="mt-3 mb-4">
                        <label className="form-label">アカウント名</label>
                        <input type="text" className="form-control" name="name" ref={name} defaultValue={localStorage.getItem("name")} />
                    </div>

                    <div className="mt-5 mb-4">
                        <label className="form-label">メールアドレス</label>
                        <input type="email" className="form-control" name="email" ref={email} defaultValue={localStorage.getItem("email")} />
                    </div>

                    <div className="d-flex ">
                        <div className="btn btn-outline-success" onClick={handleClickPostData}>編集</div>
                    </div>

                    {message && <div className="alert alert-success">{message}</div>}
                </div>

            </div>
        </>
    )

}