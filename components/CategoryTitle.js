import { Pressable, StyleSheet, Text, View,Platform } from "react-native";
import React from "react";

function CategoryTitle({ title, color,onPress }) {
  // console.log(title);
  return (
    <View style={styles.gridItem}>
      <Pressable android_ripple={{color:'#ccc'}} onPress={onPress} style={({pressed})=> [styles.btn, pressed ? styles.btnPressed : null]}>
        <View style={[styles.innerContainer,{backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryTitle;

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:12,
        // this is important to show the shadow in ios
        backgroundColor:'white',
        elevation:8,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:8,
        shadowOffset:{width:0, height:2},
        overflow:Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    btn:{
        flex:1,
    },
    btnPressed:{
        opacity: 0.5
    },
    innerContainer:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:12,
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }
});
