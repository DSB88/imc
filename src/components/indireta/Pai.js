import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Filho from './Filho'
import estilo from '../estilo'

export default props => {

    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)


    function exibirValor(numero,texto) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
            <Text style={estilo.txtG}>{texto}{num}</Text>
            <Filho
                min={10}
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}