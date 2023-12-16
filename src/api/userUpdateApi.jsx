import { path } from "./path"

export const userUpdateApi = async (user_id, name, email) => {

    const res = await fetch(`${path}/postUser/${user_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
            // 他の必要なヘッダー（例: Authorization）をここに追加
        },
        body: JSON.stringify({ name: name, email: email })
    });
    const data = await res.json();
    return data;

    return (
        <>

        </>
    )

}