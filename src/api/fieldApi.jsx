import { path } from "./path";

export const fieldApi = async () => {
    const res = await fetch(`${path}/fields`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization":`Bearer ${localStorage.getItem("token")}`
            // 他の必要なヘッダー（例: Authorization）をここに追加
        },
    });
    const data = await res.json();
    return data;
}