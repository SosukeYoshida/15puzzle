import { useRef, useState } from "react";
import { userCreateApi } from "../api/userCreateApi";

export const CreateUser = ({ setIsCreateUser }) => {

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const [message, setMessage] = useState("");

    const handleCreateUserClick = () => {
        setIsCreateUser(false);
    }

    const postCreateUser = async () => {
        const data = await userCreateApi(name.current.value, email.current.value, password.current.value);
        if (data.success) {
            setMessage(data.message);
        }
        console.log(data);
    }

    return (
        < div className="create-user">
            <div className="create-title">アカウント登録</div>

            <div className="mt-5 mb-4">
                <label className="form-label">アカウント名</label>
                <input type="text" name="name" placeholder="username" className="form-control" ref={name} />
            </div>

            <div className="mt-5 mb-4">
                <label className="form-label">メールアドレス</label>
                <input type="email" name="email" placeholder="email" className="form-control" ref={email} />
            </div>

            <div className="mt-5 mb-4">
                <label className="form-label">パスワード</label>
                <input type="password" name="password" placeholder="password" className="form-control" ref={password} />
            </div>

            <button className="btn btn-outline-info" onClick={postCreateUser} >アカウント登録</button>
            <div className="d-flex justify-content-end">
                <div className="create-user-btn btn btn-outline-danger" onClick={handleCreateUserClick} >戻る</div>
            </div>

            {message && <div className="mt-3 alert alert-primary">{message}</div>}
        </div>
    )

}