import React from'react'

const Table = ({dataSet, headInfo}) => {
    const buildTable = () => {
        if(!dataSet || dataSet.length === 0) {
            return 
        }
        let row = dataSet.length
        let column = dataSet[0].length
        return (
            <table>
                <thead>
                    {headInfo.map((hi, key) => {
                        return(
                            <th key={key}>{hi}</th>
                        )
                    })}
                </thead>
                {dataSet.map((data) => {
                    return  data.map((d, key) => {
                        return (
                            <td key={key}>{d}</td>
                        )
                    })
                })}
            </table>
        )

    }
    return (
        <div>{buildTable()}</div>
    )
}
export default Table