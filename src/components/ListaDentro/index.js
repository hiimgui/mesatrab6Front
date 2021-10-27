import React from 'react'

export const Li = ({nome, trazer, children }) => {
    return (
        <li>{nome} {children} {trazer}</li>
    )
}

export default Li;
