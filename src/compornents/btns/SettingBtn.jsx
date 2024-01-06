export const SettingBtn = ({ setIsSetting, }) => {

    const handleBtnClick = () => {
        setIsSetting(true)
    }

    return (
        <>
            <div className="btn btn-outline-primary home-btn" onClick={handleBtnClick} >設定</div>
        </>
    )

}