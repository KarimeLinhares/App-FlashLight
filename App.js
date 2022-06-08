import React, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity, Text, SafeAreaView, StatusBar} from "react-native";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";

const App = () => {
  const [toggle, setToggle] = useState(false); //change on/off

  // if toogle return true, change to eco-light, if not, change to eco-light-off

  // if toggle return true, change to logo-dio, if not, change to logo-dio-white

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  // change from one toggle to another

  useEffect(() => {
      Torch.switchState(toggle);  
    }, [toggle]);

    // Start flash cellphone

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    // when shaked (cellphone), change toggle

    return () => subscription.remove();

    // call function when dismantled component

  }, []);  

  return(
    <SafeAreaView style={toggle ? style.containerLight : style.container} >
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <View >
        <TouchableOpacity onPress={handleChangeToggle}>
          <Image 
          style={toggle ? style.lightOn : style.lightOff} 
          source={
            toggle 
              ? require("./src/icons/eco-light.png")
              : require("./src/icons/eco-light-off.png")
            
            } />

          <Image 
          style={toggle ? style.hello : style.bye} 
          source={
            toggle 
              ? require("./src/icons/bem-vindo.png")
              : require("./src/icons/ate-mais.png")
            
            } /> 

          <Image 
          style={style.logoDio} 
          source={
            toggle 
              ? require("./src/icons/logo-dio.png")
              : require("./src/icons/logo-dio-white.png")
            
            } />

          <Text
          style={toggle ? style.devblack : style.devwhite}
          >Developed by</Text>
          <Text
          style={toggle ? style.nameblack : style.namewhite}
          >Karime Linhares</Text>
          
        </TouchableOpacity>  
      </View>
    </SafeAreaView>
  );
};

export default App;



const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    },
    containerLight:{
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      },
    lightOn:{
      resizeMode: "contain",
      alignSelf: "center",
      width: 150,
      height: 150,
    },
    lightOff:{
      resizeMode: "contain",
      alignSelf: "center",
      tintColor: "white",
      width: 150,
      height: 150,
    },
    logoDio:{
      resizeMode: "contain",
      alignSelf: "center",
      width: 250,
      height: 250,
    },
    hello:{
      resizeMode: "contain",
      alignSelf: "center",
      width: 350,
     
    },
    bye:{
      resizeMode: "contain",
      alignSelf: "center",
      tintColor: "white",
      width: 350,
    },
    devblack:{
      alignSelf: "center",
    },
    nameblack:{
      alignSelf:"center",
    },
    devwhite:{
      alignSelf: "center",
      color: "white"
    },
    namewhite:{
      alignSelf: "center",
      color: "white",
    },
    barblack:{
      backgroundColor: "white",
      barStyle: "dark-content",
    },
    barwhite:{
      backgroundColor: "black",
      barStyle: "white-content",
    },


});

