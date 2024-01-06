import { useEffect } from "react"

export const emptyPosition = (field) => {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] == 16) {
                return { row: i, colmn: j }
                }
            }
        }
        
}