import React from 'react'

export default function button() {

    const prevPage = () => {
         setDataPage(dataPage => dataPage = '?page=1' );
    }

    const nextPage = () => {
        setDataPage(dataPage => dataPage = '?page=2' );
    }

    return (
        <div>
            <button onClick={() => prevPage()}>BACK</button>
            <button onClick={() => nextPage()}>NEXT</button>
        </div>
    )
}
