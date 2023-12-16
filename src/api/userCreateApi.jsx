import { path } from "./path"

export const userCreateApi = async (name, email, password) => {

    const res = await fetch(`${path}/auth/create/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, password: password })
    });
    const data = await res.json();
    return data;

}