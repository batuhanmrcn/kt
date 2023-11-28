import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, SafeAreaView, TouchableOpacity, Dimensions, } from 'react-native';

const MainMenu = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>ONLINE KAZA TUTANAĞI</Text>
      </View>
      
      <View style={styles.buttonView}> 
        <TouchableOpacity style={styles.formButton} onPress={() => navigation.navigate("MainMenu2")} >
          <Text style={{color:'white',fontSize:32}}>Formu Doldur</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.formNasil}>
          <Text style={{color:'white',fontSize:32}}>Nasıl Kullanılır?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={{color:'blue', alignSelf:'center',fontSize:18}}>Hakkında</Text>
      </TouchableOpacity>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  headerView:{
    alignSelf:'center',
    marginTop:100
  },
  headerText:{
    fontSize:24
  },
  buttonView:{

    height: Dimensions.get('window').height/2,
    width: Dimensions.get('window').width,
    justifyContent:'center',
    alignItems:'center',
    gap:30
  },
  formButton:{
    backgroundColor:'blue',
    padding:20,
    borderRadius:50
  },
  formNasil:{
    backgroundColor:'gray',
    padding:20,
    borderRadius:50
  }
 
});

export default MainMenu;