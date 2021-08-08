import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../theme/appTheme'

interface PropsCalcButtton{
    text: string,
    color?: string,
    isLarge?: boolean,
    onPress: () => void
}

export const CalcButton: React.FC<PropsCalcButtton> = ({text, color = "#2d2d2d", isLarge = false, onPress}) => {
    return (
        <TouchableOpacity 
            style={{ 
                ...styles.btn,
                backgroundColor: color,
                width: isLarge ? 180 : 80
            }} 
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text style={{
                ...styles.btnText,
                color: (color === "#9b9b9b") ? 'black' : 'white'
            }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}
