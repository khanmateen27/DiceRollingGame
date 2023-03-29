import { useState } from "react"
import { Pressable } from "react-native"
import { View , Image , StyleSheet , Text} from "react-native"
import DiceOne from "./assets/dice1.png"
import DiceTwo from "./assets/dice2.png"
import DiceThree from "./assets/dice3.png"
import DiceFour from "./assets/dice4.png"
import DiceFive from "./assets/dice5.png"
import DiceSix from "./assets/dice6.png"

const App = ()=>{
  //dice One
  let [diceOne , setDiceOne] = useState(DiceOne);
  //dice Two
  let [diceTwo , setDiceTwo] = useState(DiceOne);
  //player One Score
  let [playerOneScore , setPlayerOneScore] = useState(0);
  //player Two Score
  let [playerTwoScore , setPlayerTwoScore] = useState(0);

  const playBtnHandler = ()=>{
  var randomNumber = Math.floor(Math.random()*6)+1
  if(randomNumber == 1){
    setDiceOne(DiceOne);
  }
  else if(randomNumber == 2){
    setDiceOne(DiceTwo)
  }
  else if(randomNumber == 3){
    setDiceOne(DiceThree)
  }
  else if(randomNumber == 4){
    setDiceOne(DiceFour)
  }
  else if(randomNumber == 5){
    setDiceOne(DiceFive)
  }
  else{
    setDiceOne(DiceSix)
  }
  //dice Two
  let randomNum = Math.floor(Math.random()*6)+1
  if(randomNum == 1){
    setDiceTwo(DiceOne);
  }
  else if(randomNum == 2){
    setDiceTwo(DiceTwo)
  }
  else if(randomNum == 3){
    setDiceTwo(DiceThree)
  }
  else if(randomNum == 4){
    setDiceTwo(DiceFour)
  }
  else if(randomNum == 5){
    setDiceTwo(DiceFive)
  }
  else{
    setDiceTwo(DiceSix)
  }
  //equal 
  if(randomNum == 1 && randomNumber == 1 || randomNum == 2 && randomNumber == 2 || randomNum == 3 && randomNumber ==3  || randomNum == 4 && randomNumber == 4 || randomNum == 5 && randomNumber == 5 || randomNum == 6 && randomNumber == 6){
    console.log("equal");
  }
  //player One Wins
  if(randomNum < randomNumber){
    setPlayerOneScore(playerOneScore+1);
  }
  //player Two Wins
  if(randomNum > randomNumber){
    setPlayerTwoScore(playerTwoScore+1);
  }
}
  return <View style={style.container}>
    <Text style={style.heading}>Dice Rolling App</Text>
    <Text style={style.txt}>Player 1</Text>
    <Text>Score : {playerOneScore}</Text>
    <Image source={diceOne} style={style.diceOne}/>
    <Pressable onPress={playBtnHandler}><Text style={style.btnOne}>Roll the Dice!</Text></Pressable>
    <Text style={style.txt}>Player 2</Text>
    <Text>Score : {playerTwoScore}</Text>
    <Image source={diceTwo} style={style.diceTwo}/>
  </View>
}

export default App

const style = StyleSheet.create({
  container : {
    flex : 1 ,
    alignItems : "center" ,
    justifyContent:"center",
    // marginTop : 20
  } ,
  diceOne : {
    margin : 10 ,
    width : 120 ,
    height : 120 ,
  } ,
  btnOne : {
    backgroundColor : "#2980b9" ,
    color : "white" ,
    borderRadius : 5 ,
    padding : 10 , 
    margin : 80 , 
    width : "50%" ,
    textAlign : "center"
  } ,
  diceTwo : {
    width : 120 ,
    height : 120 ,
    marginVertical : 10
  } ,
  txt : {
    fontSize : 20 
  } ,
  heading : {
    fontSize : 30 ,
    fontWeight : "bold" ,
    color : "#2c3e50"
  }
})