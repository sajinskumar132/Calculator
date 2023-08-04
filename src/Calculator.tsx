import { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { styles } from "./Style"
function Calculator() {
    const [UserInputString, SetUserInputString] = useState("")
    const [Result, SetResult] = useState("")
    const onButtonclick = (text: string) => {
        SetUserInputString(UserInputString + text)
        finalResult(UserInputString + text, false)
    }
    const finalResult = (result: string, IsEqualClicked: boolean) => {
        const regex = /^(\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*)$/;

        const isValidExpression = (result: string) => {
            return regex.test(result);
        }
        if (isValidExpression(result)) {
            let Results = eval(result)
            if (IsEqualClicked) {
                SetResult("")
                SetUserInputString(Results)
            } else {
                SetResult(Results)
            }

        }
    }
    const ClearAll = () => {
        SetUserInputString("")
        SetResult("")
    }
    const LastElementRemove = () => {
        let currentValue = UserInputString.slice(0, -1)
        SetUserInputString(currentValue)
        SetResult("")
    }
    return (
        <View style={styles.container} >
            <View style={styles.display}><Text style={styles.displayText}>{UserInputString}</Text></View>
            <View style={styles.results}><Text style={styles.resultText}>{Result}</Text></View>
            <View style={styles.lineStyle} />
            <View style={styles.buttons}>
                <View style={styles.numbers}>
                    <View style={styles.numbersrow}>
                        <TouchableOpacity onPress={() => { onButtonclick('1') }}>
                            <Text style={styles.number}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { onButtonclick('2') }}>
                            <Text style={styles.number}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { onButtonclick('3') }}>
                            <Text style={styles.number}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numbersrow}>
                        <TouchableOpacity onPress={() => { onButtonclick('4') }}>
                            <Text style={styles.number}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { onButtonclick('5') }}>
                            <Text style={styles.number}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { onButtonclick('6') }}>
                            <Text style={styles.number}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numbersrow}>
                        <TouchableOpacity onPress={() => { onButtonclick('7') }}>
                            <Text style={styles.number}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.number} onPress={() => { onButtonclick('8') }}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.number} onPress={() => { onButtonclick('9') }}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numbersrow}>
                        <TouchableOpacity>
                            <Text style={styles.number} onPress={() => { onButtonclick('0') }}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.number} onPress={() => { onButtonclick('.') }}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.number} onPress={() => { finalResult(UserInputString, true) }}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.operations}>
                    <TouchableOpacity onPress={() => { LastElementRemove() }}>
                        <View style={styles.operation}>
                            <Icon name="delete" size={25} color={'white'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { ClearAll() }}>
                        <View style={styles.operation}>
                            <Text style={styles.operationText} >AC</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onButtonclick('+') }}>
                        <View style={styles.operation}>
                            <Text style={styles.operationText} >+</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onButtonclick('-') }}>
                        <View style={styles.operation}>
                            <Text style={styles.operationText} >-</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onButtonclick('/') }}>
                        <View style={styles.operation}>
                            <Text style={styles.operationText} >/</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onButtonclick('*') }}>
                        <View style={styles.operation}>
                            <Text style={styles.operationText} >x</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Calculator

