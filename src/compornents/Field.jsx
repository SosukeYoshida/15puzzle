export const Field = ({ setIsField, field, setField }) => {

    let squareIndex = 1

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${field[0].length }, 120px)`, gridAutoRows: "120px" }}
                className="field">
                {field.map((row, rowIndex) => {
                    return row.map((column, columnIndex) => {
                        if (column > 0) {
                            return <div className="border square">
                                {squareIndex++}
                            </div>
                        }
                        else if(column==-1){
                            return <div className="bg-secondary border"></div>
                        }
                        else if(column==0){
                            return <div className="bg-white"></div>
                        }
                    })
                })}
            </div>
        </>
    )

}