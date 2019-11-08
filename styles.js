import {StyleSheet, Dimensions} from 'react-native'

const {width: WIDTH} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b3b3b',
    },
    viewInput: {
        flex: 1,
        marginTop: 15,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewInputTwo: {
        flex: 1,
        marginTop: 15,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewBtn: {
        flex: 1.5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        //backgroundColor: 'red',
    },  
    viewResult: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    textInput: {
        width: WIDTH - 30,
        height: 50,
        fontSize: 25,
        borderRadius: 15,
        paddingLeft: 40,
        backgroundColor: '#141414',
        color: 'white'
    },
    btnStyle: {
        width: WIDTH - 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'green',
    },
    btnTextStyle: {
        fontSize: 30,
        color: 'white',
    },
    resultText: {
        color: 'white',
        fontSize: 30,
    },
    touchableBtn: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#3b3b3b',
        alignItems: 'center',
        backgroundColor: '#02b0e0',
    },
    touchableBtnLeft: {
        flex: 1,
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderWidth: 2,
        borderColor: '#3b3b3b',
        alignItems: 'center',
        backgroundColor: '#02b0e0',
    },
    touchableBtnRight: {
        flex: 1,
        justifyContent: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 2,
        borderColor: '#3b3b3b',
        alignItems: 'center',
        backgroundColor: '#02b0e0',
    },
});

export default styles;