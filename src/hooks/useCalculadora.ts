import { useRef, useState } from "react";
import { Operations } from "../interfaces/operations";

export const useCalculadora = () => {
    const [displayedNumber, setDisplayedNumber] = useState('0');
    const [prevResult, setPrevResult] = useState('0');

    const lastOperation = useRef<Operations>();

    const handleReset = () => {
        setDisplayedNumber("0");
        setPrevResult("0");
    };

    const makeNumber = (numText: string) => {

        //Validate if its 0 already the current result and we input 0
        if(numText === "0" && (displayedNumber === "0" || displayedNumber === "-0")) return;

        //Validate if its a point, not be able to put more than one and be able to put a point when its 0
        if(numText === "."){
            if(displayedNumber === "0"){
                setDisplayedNumber("0" + numText);
                return;
            }else if(displayedNumber.includes(".")) return;
        }

        //If its 0 at first, we put the number pressed
        if(displayedNumber === "0") return setDisplayedNumber(numText);

        //If it passes all of our conditions its ok
        setDisplayedNumber(displayedNumber + numText);
    };

    const changeSymbol = () => {

        if(displayedNumber === "0") return;

        if(displayedNumber.includes("-")){
            setDisplayedNumber(displayedNumber.substr(1));
        }else{
            setDisplayedNumber("-" + displayedNumber)
        }
    };

    const handleDelete = () => {
        if(displayedNumber === "0") return;

        if(displayedNumber.length === 1 || displayedNumber === "-0") return setDisplayedNumber("0");

        setDisplayedNumber(displayedNumber.substr(0, displayedNumber.length - 1))
    }

    const handleOperation = (operation: Operations) => {

        if(displayedNumber.endsWith(".")){
            setPrevResult(displayedNumber.slice(0, -1));
        }else{
            setPrevResult(displayedNumber);
        }

        setDisplayedNumber("0");

        lastOperation.current = operation;

    };

    const handleResult = () => {

        let result = 0;
        const firstNumber = Number( prevResult );
        const secondNumber = Number( displayedNumber );

        switch(lastOperation.current){
            case Operations.add:
                result = firstNumber + secondNumber;
                break;
            case Operations.minus:
                result = firstNumber - secondNumber;
                break;
            case Operations.multiply:
                result = firstNumber * secondNumber;
                break;
            case Operations.divide:
                result = firstNumber / secondNumber;
                break;
            default:
                return;
        }

        setPrevResult("0");
        setDisplayedNumber(`${result}`);
    }

    return {
        displayedNumber,
        prevResult,
        makeNumber,
        handleDelete,
        handleOperation,
        handleReset,
        handleResult,
        changeSymbol
    }
}
