import React , {Component} from 'react';
import { StyleSheet, Text, View , SafeAreaView , Platform , StatusBar,TouchableOpacity,ImageBackground,Image,TextInput} from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';


export default class StarMap extends Component
{

    constructor(props)
    {
        super(props)

        this.state={
           latitude:'',
           longitude:''
        }
    }


    render()
    {
       //Ma'am i have written this code to give me the star map but is is not working
        const {longitude,latitude} = this.state;
        const path =  axios.get('https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdata=false&showposition=false')
       
       
        return(
            <View style={styles.container}>
                
                <SafeAreaView style={styles.anroid_Safe_Area}>
<View>
<WebView
                   scalesPageToFit={true}
                   source={{uri: path}}
                   style={{marginBottom:20 , marginTop:20}}
                   />
</View>
                  

                   <TextInput
                   style={{borderWidth:1 , height:40 , borderColor:"grey"}}
                   placeholder= "Enter the latitude"
                   onChangeText={(text)=>{
                       this.setState=({
                          latitude:text
                       })
                   }}
                   value={this.state.latitude}
                   />
                   
                   <TextInput
                   style={{borderWidth:1 , height:40 , borderColor:"grey"}}
                   placeholder= "Enter the longitude"
                   onChangeText={(text)=>{
                       this.setState=({
                          longitude:text
                       })
                   }}
                   value={this.state.longitude}
                   />

                   
              </SafeAreaView>
              
             
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
    //flex:0.25,
    width:1000,
    height:700,
    borderRadius:30,
    backgroundColor:"green",
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
    alignContent:"center",
    marginTop:20,
},
})