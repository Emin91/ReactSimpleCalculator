import React, { Component } from 'react';
import {View,Text,TouchableOpacity,TextInput,} from 'react-native'
import {styles} from './styles'
import { parse } from '@babel/parser';


export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number1: "",
            number2: "",
            result: "",
            operators: "",
        }
    }

    calc(operators) {
        switch (operators) {
            case "+":
                this.setState({result: parseFloat(this.state.number1) + parseFloat(this.state.number2)})
                return this.state.result
            case "-":
                this.setState({result: parseFloat(this.state.number1) - parseFloat(this.state.number2)})
                return this.state.result
            case "*":
                this.setState({result: parseFloat(this.state.number1) * parseFloat(this.state.number2)})
                return this.state.result
            case "/":
                this.setState({result: parseFloat(this.state.number1) / parseFloat(this.state.number2)})
                return this.state.result    
            default:
                return 0    
        }
    }

    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 2}}></View>
                <View style={styles.viewInput}>
                    <TextInput 
                        style={styles.textInput} 
                        keyboardType={'numeric'}
                        onChangeText={(number1)=>this.setState({number1})}
                        value={this.state.number1}
                        >     
                    </TextInput>
                </View>
                <View style={styles.viewInputTwo}>
                    <TextInput 
                        style={styles.textInput} 
                        keyboardType={'numeric'}
                        onChangeText={(number2)=>this.setState({number2})}
                        value={this.state.number2}
                        >
                    </TextInput>
                </View>
                <View style={styles.viewBtn}>
                    {/* <TouchableOpacity 
                        style={styles.btnStyle}
                        onPress={()=> this.calc("minus")}
                        >
                        <Text style={styles.btnTextStyle}>Click for result</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity 
                            style={styles.touchableBtnLeft}
                            onPress={()=> this.calc("+")}>
                            <Text>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={styles.touchableBtn}
                            onPress={()=> this.calc("-")}>
                            <Text>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={styles.touchableBtn}
                            onPress={()=> this.calc("*")}>
                            <Text>*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={styles.touchableBtnRight}
                            onPress={()=> this.calc("/")}>
                            <Text>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewResult}>
                     <Text 
                     style={styles.resultText}
                     >{this.state.result}</Text>
                </View>
                <View style={{flex: 7}}>
                </View>
            </View>
        )
    }
}
