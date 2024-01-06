
export const FieldSetBtn = ({ setIsField, setIsRandomField }) => {

    const handleGetFieldClick = () => {
        setIsField(true);
        setIsRandomField(true);
    }

    return (
        <div className="fieldSet btn btn-outline-success home-btn" onClick={handleGetFieldClick}>
            パズル画面へ
        </div>
    )

}