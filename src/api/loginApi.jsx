import { path } from "./path";

export const loginApi = async (name, password) => {
    console.log(name,password);
    const res = await fetch(`${path}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // 他の必要なヘッダー（例: Authorization）をここに追加
        },
        body: JSON.stringify({ name: name, password: password })
    });
    const data = await res.json();
    return data;
}