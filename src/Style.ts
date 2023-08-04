import { StyleSheet } from 'react-native'

 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
    display: {
      flex: 3,
      alignItems: "flex-end",
      justifyContent: "center",
      paddingRight:10
  
    },
    displayText: {
      fontSize: 50,
      fontWeight: "700",
      textAlign: "right",
      padding: 5
    },
    results: {
      flex: 2,
      alignItems: "flex-end",
      justifyContent: "center",
      paddingRight:10
    },
    resultText: {
      fontSize: 30,
      fontWeight: "700",
      padding: 5,
      color:"lightgrey"
  
    },
    buttons: {
      flex: 7,
      flexDirection: 'row',
      
    },
    numbers: {
      flex: 3,
      marginLeft:5
    },
    operations: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: 'center'
  
    },
    numbersrow: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    },
    number: {
      borderRadius: 20,
      padding: 35,
      fontSize:20,
      fontWeight:'700',
      backgroundColor: "whitesmoke"
    },
    operation: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      width: 60,
      height: 60,
      backgroundColor: "skyblue",
    },
    operationText :{
      color:"white",
      fontWeight:"800",
      fontSize:20,
    },
    lineStyle:{
      borderWidth: 0.5,
      borderColor:'whitesmoke',
      margin:10,
  }
  });