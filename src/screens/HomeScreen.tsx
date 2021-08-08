import React from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { Operations } from '../interfaces/operations'
import styles from '../theme/appTheme'
import { useCalculadora } from '../hooks/useCalculadora';


export const HomeScreen = () => {

    const { 
        prevResult,
        displayedNumber,
        makeNumber,
        handleDelete,
        handleOperation,
        handleReset,
        handleResult,
        changeSymbol
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>

            { (prevResult !== "0") && <Text style={styles.resultadoPeque}>{prevResult}</Text>}
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{displayedNumber}</Text>

            <View style={styles.buttonsContainer}>
                <CalcButton text="C" color="#9b9b9b" onPress={handleReset}/>
                <CalcButton text="+/-" color="#9b9b9b" onPress={ changeSymbol }/>
                <CalcButton text="del" color="#9b9b9b" onPress={handleDelete}/>
                <CalcButton text="/" color="#ff9427" onPress={() => handleOperation(Operations.divide)}/>
            </View>
            <View style={styles.buttonsContainer}>
                <CalcButton text="7" onPress={() => makeNumber('7')}/>
                <CalcButton text="8" onPress={() => makeNumber('8')}/>
                <CalcButton text="9" onPress={() => makeNumber('9')}/>
                <CalcButton text="X" color="#ff9427" onPress={() => handleOperation(Operations.multiply)}/>
            </View>
            <View style={styles.buttonsContainer}>
                <CalcButton text="4" onPress={() => makeNumber('4')}/>
                <CalcButton text="5" onPress={() => makeNumber('5')}/>
                <CalcButton text="6" onPress={() => makeNumber('6')}/>
                <CalcButton text="-" color="#ff9427" onPress={() => handleOperation(Operations.minus)}/>
            </View>
            <View style={styles.buttonsContainer}>
                <CalcButton text="1" onPress={() => makeNumber('1')}/>
                <CalcButton text="2" onPress={() => makeNumber('2')}/>
                <CalcButton text="3" onPress={() => makeNumber('3')}/>
                <CalcButton text="+" color="#ff9427" onPress={() => handleOperation(Operations.add)}/>
            </View>
            <View style={styles.buttonsContainer}>
                <CalcButton text="0"  isLarge onPress={() => makeNumber('0')}/>
                <CalcButton text="." onPress={() => makeNumber('.')}/>
                <CalcButton text="=" color="#ff9427" onPress={handleResult} />
            </View>
        </View>
    )
}
