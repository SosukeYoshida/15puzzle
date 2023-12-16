
export const FieldSetBtn = ({setIsField }) => {

const handleGetFieldClick=()=>{
setIsField(true);
}

    return (
        <div className="fieldSet btn btn-outline-success home-btn" onClick={handleGetFieldClick}>
            パズル画面へ
        </div>
    )

}