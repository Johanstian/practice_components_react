import React from 'react'

export const MySecondComponent = () => {

    const books = [
        "Harry Potter y la Piedra Filosofal",
        "Harry Potter y la Cámara Secreta",
        "Harry Potter y el Prisionero de Azkaban",
        "Harry Potter y el Cáliz de Fuego",
        "Harry Potter y la Órden del Fénix",
        "Harry Potter y el Misterio del Príncipe",
        "Harry Potter y las Reliquias de la Muerte",
    ]

    return (
        <>
            <h1>MySecondComponent</h1>
            <div>
                <ul>
                    {
                        books.map((book, index) => {
                            return <li key={ index }>{ book }</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}
