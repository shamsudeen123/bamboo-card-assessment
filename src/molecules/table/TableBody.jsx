import React from 'react'

function TableBody({cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight, cellNine, cellTen}) {
    return (
        <tbody className='table-body'>
                    <tr>
                        {cellOne && <td>{cellOne}</td>}
                        {cellTwo &&<td>{cellTwo}</td>}
                        {cellThree && <td>{cellThree}</td>}
                        {cellFour && <td>{cellFour}</td>}
                        {cellFive &&<td>{cellFive}</td>}
                        {cellSix &&<td>{cellSix}</td>}
                        {cellSeven && <td>{cellSeven}</td>}
                        {cellEight && <td>{cellEight}</td>}
                        {cellNine &&<td>{cellNine}</td>}
                        {cellTen &&<td>{cellTen}</td>}
                    </tr>
            </tbody>
    )
}

export default TableBody
