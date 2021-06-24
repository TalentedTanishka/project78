import React , {Component} from 'react';
import { StyleSheet, Text, View , SafeAreaView , Platform , StatusBar,TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component
{
    render()
    {
        return(
            <View style={styles.container}>
                 <ImageBackground
                style={styles.backgroundImage}
                source={require("../assets/stars.gif")}
                >
                    
               
                
               
<View>
<Image
                    style={{width : 150,height:150,marginLeft:100,marginTop:20}}
                    source={require("../assets/rocket.gif")}
                    />
                    <View style={styles.title_bar}>
                <Text style={styles.title_text}>
                Stellar App
                </Text>
                </View>
               
                </View>

                <TouchableOpacity style={styles.button_style} onPress={()=>{
                    this.props.navigation.navigate("SpaceCraft")
                }}>
                    <Text style={styles.button_text}>
                       Space Craft
                    </Text>
                    <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        1
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/space_crafts.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity  style={styles.button_style} onPress={()=>{
                    this.props.navigation.navigate("StarMap")
                }}>
                    <Text style={styles.button_text}>
                    Star Map
                    </Text>
                    <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        2
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/star_map.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity  style={styles.button_style} onPress={()=>{
                    this.props.navigation.navigate("DailyPic")
                }}>
                    <Text style={styles.button_text}>
                    Daily Pictures
                    </Text>
                    <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        3
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/daily_pictures.png")}
                    />
                </TouchableOpacity>
                
             
              </ImageBackground>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    anroidSafeArea :{
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
       color:"white",
       
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
       width:250,
       height:90,
       borderRadius:30,
       backgroundColor:"green",
       alignItems:"center",
       justifyContent:"center",
       alignSelf:"center",
       alignContent:"center",
       marginTop:50,
     
   },
   knowMore: {
    //paddingLeft: 30,
    color: "red",
    fontSize: 15
},
bgDigit: {
    position: "absolute",
    color: "rgba(180, 180, 180, 0.70)",
    fontSize: 80,
    right: 250,
    bottom: -10,
    zIndex: -1
},
iconImage: {
    position: "absolute",
    height: 130,
    width: 100,
    resizeMode: "contain",
    right: -55,
    top: 20
},
backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
},
})