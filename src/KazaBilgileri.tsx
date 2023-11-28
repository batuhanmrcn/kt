import React, { useState } from 'react';
import {
  View,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  NativeModules,
  ImageBackground,
  Button
} from 'react-native';
import {Formik , Form , Field} from "formik";

import {useDispatch , useSelector} from 'react-redux';

// KAZA BİLGİLERİ EKRANI 

const kazaBilgileri = ({navigation}) => {

const dispatch = useDispatch();

    
  const initialFormValues = {
      kazaTarihi:'',
      kazaSaati :'',
      il : '',
      ilce : '',
      mahalle : '',
      cadde : '',
      semt : '',
      sokak : '',
      adSoyad : '',
      adres : '',
      telNo :'',

    };


    const handleSubmit = (values) => {
      
      // Perform any actions you need with the form values here
      dispatch({type : 'kazaTarihi' , payload : values.kazaTarihi}) //düzeltme
      dispatch({type : 'kazaSaati' , payload : values.kazaSaati}) 
      dispatch({type : 'il' , payload : values.il}) 
      dispatch({type : 'ilce' , payload : values.ilce}) 
      dispatch({type : 'mahalle' , payload : values.mahalle}) 
      dispatch({type : 'cadde' , payload : values.cadde}) 
      dispatch({type : 'semt' , payload : values.semt}) 
      dispatch({type : 'sokak' , payload : values.sokak}) 
      dispatch({type : 'adSoyad' , payload : values.adSoyad}) 
      dispatch({type : 'kazaTarihi' , payload : values.kazaTarihi}) 
      dispatch({type : 'adres' , payload : values.adres})
      dispatch({type : 'telNo' , payload : values.telNo})  

      
      
      console.log(values)
      
    };


    const carpismaYeriCizim = () => {
      console.log('Carpısma Yeri Çizmek için Buttona tıklandı')
    }
    const imzaCizim = () => {
      console.log('İmza Atmak için Buttona tıklandı')
    }
   


return(
  <SafeAreaView style={styles.container}>
      <ScrollView>

      <View style={styles.headerView}>
          <Text style={{fontSize:24, fontWeight:'bold',color : "black"}}>Kaza Bilgileri</Text>
      </View>

      <View style={styles.containerbottom}>
        
      <Formik initialValues={initialFormValues} onSubmit={(values) => handleSubmit(values)}>
      {({values,handleChange,handleSubmit}) => (
      <>
          <View style={styles.inputscontainer}>
              
              <Text style={styles.inputheader}>KAZA TARIHI VE SAATLERI</Text>
              <TextInput style={styles.inputContainer}  
               value={values.kazaTarihi}
               placeholder='Kaza Tarihi                                             9 Nov 2023'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('kazaTarihi')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.kazaSaati}
               placeholder='Kaza Saati                                    15:13'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('kazaSaati')}
              />

              <Text style={styles.inputheader}>KAZA YERİ</Text>

              <TextInput style={styles.inputContainer}  
               value={values.il}
               placeholder='İl'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('il')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.ilce}
               placeholder='İlçe'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('ilce')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.mahalle}
               placeholder='Mahalle'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('mahalle')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.cadde}
               placeholder='Cadde'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('cadde')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.semt}
               placeholder='Semt'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('semt')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.sokak}
               placeholder='Sokak'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('sokak')}
              />
                  
              <Text style={styles.inputheader}>GÖRGÜ TANIKLAR</Text>

              <TextInput style={styles.inputContainer}  
               value={values.adSoyad}
               placeholder='Adı Soyad'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('adSoyad')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.adres}
               placeholder='Adres'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('adres')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.telNo}
               placeholder='Tel No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('telNo')}
              />
              
              <Text style={styles.inputheader}>ÇARPIŞMA YERININ VE ANININ TASLAĞINI ÇIZIN</Text>
              <View style = {styles.headerView}>
                <Button title = 'Çiziminizi Yapmak İçin Tıklayın' onPress={carpismaYeriCizim} />
              </View>
              
          </View> 
          <View style = {styles.headerView}>
                <Button title = 'Girilen Bilgileri Tutanağa Ekle' onPress={handleSubmit} />
              </View>
      </>
    
    )}
    </Formik>
      </View>
      </ScrollView>
  </SafeAreaView>
);
}

export default kazaBilgileri;

const styles = StyleSheet.create({
container:{
  backgroundColor:'lightgray',
  flex:1
},
headerView:{
backgroundColor:'white',
alignItems:'center',
padding:10,
width:Dimensions.get('window').width/1.05,
alignSelf:'center',
borderRadius:10
},

containerbottom:{
  //justifyContent: 'center','
},
inputscontainer:{
  padding:10
},

buttonekle: {
  marginTop: 100,
   alignSelf: 'center',
   backgroundColor: 'purple',
   width: Dimensions.get('window').width/2,
   justifyContent: 'center',
   alignItems: 'center',
   height: 40,
   borderRadius: 20,
 },



inputContainer: {
  // flexDirection: 'row',

  backgroundColor:'white',
   borderRadius: 5,
   color : "black",
   paddingHorizontal: 10,
   paddingVertical: 10,
   borderBottomWidth:1,
   borderBottomColor:'gray'
 },

inputheader: {
  marginTop: 10,
  fontSize:18,
  color: 'gray',
  marginBottom: 10
},

});
