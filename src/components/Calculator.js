import React,{useState} from 'react';
import {Button, Container,Current,Previous,Screen} from './Styled';
function Calculator() {
    const [previous,setPrevious] = useState('')
    const [current,setCurrent] = useState('')  // current=variable and setCurrent= function to set current
    const [operation,setOperation] = useState('')
    const appendValue=(el)=>{
        const value = el.target.getAttribute('data')
        if(value==='.' && current.includes('.')) return
        setCurrent(current+value)
    }
    const handleDelete =() =>{
        setCurrent(String(current.slice(0,-1)))
    }
    const handleAllClear = () =>{
        setCurrent('')
        setPrevious('')
        setOperation('')
    }
    const handleOperation = (el) =>{
        if(current==='') return
        if(previous !== ''){
            let value=compute();
            setPrevious(value)
        }
        else{
            setPrevious(current)
        }
        setCurrent('')
        setOperation(el.target.getAttribute('data'))
    }
    const handleEqual =() =>{
        let value=compute();
        if(value=== undefined || value=== null) return
        setCurrent(value)
        setPrevious('')
        setOperation('')
    }
    const compute =() =>{
        let result
        let previousnumber = parseFloat(previous)
        let currentnumber = parseFloat(current)
        if(isNaN(previousnumber) || isNaN(currentnumber)) return
        switch(operation){
            case '÷':
                result=previousnumber/currentnumber;
                break;
            case '×':
                result= previousnumber*currentnumber;
                break;
            case '+':
               result= previousnumber + currentnumber;
               break;
            case '-':
               result= previousnumber - currentnumber;
              break;   
            default:
                return
        }
        return String(result)
    }
    return (
        <Container>
            <Screen>
                <Previous>{previous} {operation}</Previous>
                <Current>{current}</Current>
            </Screen>

            <Button onClick={handleAllClear} gridSpan={2} control >AC</Button>
            <Button control onClick={handleDelete}>DEL</Button>
            <Button data ={'÷'} onClick={handleOperation} operation>÷</Button>
            <Button data ={'7'} onClick={appendValue}>7</Button>
            <Button data ={'8'} onClick={appendValue}>8</Button>
            <Button data ={'9'} onClick={appendValue}>9</Button>
            <Button data ={'×'} onClick={handleOperation} operation>×</Button>
            <Button data ={'4'} onClick={appendValue}>4</Button>
            <Button data ={'5'} onClick={appendValue}>5</Button>
            <Button data ={'6'} onClick={appendValue}>6</Button>
            <Button data ={'+'} onClick={handleOperation} operation>+</Button>
            <Button data ={'1'} onClick={appendValue}>1</Button>
            <Button data ={'2'} onClick={appendValue}>2</Button>
            <Button data ={'3'} onClick={appendValue}>3</Button>
            <Button data ={'-'} onClick={handleOperation} operation>-</Button>
            <Button data={'.'} period onClick={appendValue}>.</Button>
            <Button data ={'0'} onClick={appendValue}>0</Button>
            <Button gridSpan={2} equals onClick={handleEqual}>=</Button>
            

            
        </Container>
    )
}

export default Calculator;
