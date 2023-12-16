export const Logout = ({ setIsLogin }) => {

    const handleLogoutClick = () => {
        setIsLogin(false);
        localStorage.removeItem("token");
    }

    return (
        <div className="logout btn btn-outline-danger home-btn" onClick={handleLogoutClick} >
            ログアウト
        </div>
    )

}