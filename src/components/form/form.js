import React, { useState } from 'react'
import styled from 'styled-components'
import { checkChangeTables } from '../helpers/checkChange'

const Forma = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const TextArea = styled.textarea`
    margin:10px 0;
    border-radius: 10px;
    border: 2px solid blue;
    outline: none;
    padding:5px;
`

const Button = styled.button`
    padding:15px 30px;
    color: white;
    background: blue;
    border-radius: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
        background:#03a9f4;
    }
`

const Form = ({setLetter}) => {
    const [table, setTable] = useState({
        tableYesterday: '',
        tableToday: ''
    })

    const SubmitForm =  (event) => {
        event.preventDefault()
        setLetter(checkChangeTables(table))
    }

    const onChangeTable = (event) => {
        const tableDay = {...table}
        tableDay[event.target.name] = event.target.value
        setTable(tableDay)
    }
    return (
        <Forma onSubmit={(e) => SubmitForm(e) }>
            <TextArea  value={table.tableYesterday} name = 'tableYesterday' onChange={(e) => onChangeTable(e)} placeholder="Введите данные первой таблицы" id="" cols="60" rows="10"></TextArea>
            <TextArea value={table.tableToday} name = 'tableToday' onChange={(e) => onChangeTable(e)} placeholder="Введите данные второй таблицы" id="" cols="60" rows="10"></TextArea>
            <Button >Отправить</Button>
        </Forma>
    )
}
export default Form