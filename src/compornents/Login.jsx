import { useRef, useState } from "react";
import { loginApi } from "../api/loginApi"
import { CreateUser } from "./CreateUser";

export const Login = ({ setIsLogin, isLogin }) => {
    const [isCreateUser, setIsCreateUser] = useState(false);
    const username = useRef(null);
    const password = useRef(null);
    const postLogin = async () => {
        // console.log(username.current.value, password.current.value);
        const data = await loginApi(username.current.value, password.current.value);
        if (data.success) {
            setIsLogin(true);
            localStorage.setItem("name", data.name);
            localStorage.setItem("email", data.email);
            localStorage.setItem("user_id", data.id);
            localStorage.setItem("token", data.token);
        }
    }

    const createUser = () => {
        setIsCreateUser(true);
    }

    return (
        <>
            {!isCreateUser ?
                < div className="login">
                    <div className="login-title">ログイン</div>

                    <div className="mt-5 mb-4">
                        <label className="form-label">アカウント名</label>
                        <input type="text" name="name" placeholder="username" className="form-control" ref={username} />
                    </div>

                    <div className="mt-5 mb-4">
                        <label className="form-label">パスワード</label>
                        <input type="password" name="password" placeholder="password" className="form-control" ref={password} />
                    </div>

                    <button className="btn btn-outline-primary" onClick={postLogin} >Login</button>
                    <div className="d-flex justify-content-end">
                        <div className="create-user-btn btn btn-outline-info" onClick={createUser} >アカウント登録</div>
                    </div>
                </div > : <CreateUser setIsCreateUser={setIsCreateUser}></CreateUser>
            }
        </>
    )

}