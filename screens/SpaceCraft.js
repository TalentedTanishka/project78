import React , {Component} from 'react';
import { StyleSheet, Text, View , SafeAreaView , Platform , StatusBar,TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class SpaceCraft extends Component
{
    render()
    {
        return(
            <View style={styles.container}>
                 <ImageBackground
                style={styles.backgroundImage}
                source={require("../assets/space_craft.gif")}
                >
                <SafeAreaView style={styles.anroid_Safe_Area}>
               
                    

              </SafeAreaView>
              </ImageBackground>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    anroid_Safe_Area :{
        marginTop : Platform.OS === "android"?StatusBar.currentHeight:0
    },
    title_bar:{
        flex : 0.15,
        justifyContent:"center",
        alignItems:"center"
    },
    title_text:{
       fontSize:50,
       fontWeight:"bold",
       color:"white"
       
    },
   button_text:{
       fontSize:30,
       fontWeight:"bold",
       color:"yellow",
       //marginTop:75,
       //paddingLeft:30
   },
   button_style:{
       //flex:0.25,
       width:300,
       height:90,
       borderRadius:30,
       backgroundColor:"green",
       alignItems:"center",
       justifyContent:"center",
       alignSelf:"center",
       alignContent:"center",
       marginTop:20,
     
   },
   knowMore: {
    //paddingLeft: 30,
    color: "red",
    fontSize: 15
},
bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1
},
iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: -100,
    top: 40
},
backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
},
})