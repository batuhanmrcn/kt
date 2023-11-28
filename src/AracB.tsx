
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

const AracB = ({navigation}) => {
    
const dispatch = useDispatch();

//bu sayfaya da AracA sayfasında yapılan düzeltmeleri yaptım

  const initialFormValues = {
      adSoyadB:'',
      tcB:'',
      belgeNoB :'',
      alindigiYerB :'',
      adresB : '',
      cepTelB :'',
      sasiNoB : '',
      markaModelB : '',
      plakaB : '',
      kullanimSekliB : '',
      sigortalininAdSoyadB :'',
      tcVergiNoB : '',
      sigortaUnvanB : '',
      acenteNoB :'',
      tramerBelgeNoB : '',
      hizDurumuB : '',
      frenUzunluguB : '',
      yesilKartNoB : '',
      ulkeB : '',
      pasaportB : '',
      surucuGorusB: '',
    };



    const handleSubmit = (values) => {
      // Perform any actions you need with the form values here
      dispatch({type : 'adSoyadB' , payload : values.adSoyadB}) //düzeltme
      dispatch({type : 'tcB' , payload : values.tcB})
      dispatch({type : 'belgeNoB' , payload : values.belgeNoB})
      dispatch({type : 'alindigiYerB' , payload : values.alindigiYerB})
      dispatch({type : 'adresB' , payload : values.adresB})
      dispatch({type : 'cepTelB' , payload : values.cepTelB})
      dispatch({type : 'sasiNoB' , payload : values.sasiNoB})
      dispatch({type : 'plakaB' , payload : values.plakaB})
      dispatch({type : 'markaModelB' , payload : values.markaModelB})
      dispatch({type : 'kullanimSekliB' , payload : values.kullanimSekliB})
      dispatch({type : 'sigortalininAdSoyadB' , payload : values.sigortalininAdSoyadB})
      dispatch({type : 'tcVergiNoB' , payload : values.tcVergiNoB})
      dispatch({type : 'sigortaUnvanB' , payload : values.sigortaUnvanB})
      dispatch({type : 'acenteNoB' , payload : values.acenteNoB})
      dispatch({type : 'tramerBelgeNoB' , payload : values.tramerBelgeNoB})
      dispatch({type : 'hizDurumuB' , payload : values.hizDurumuB})
      dispatch({type : 'frenUzunluguB' , payload : values.frenUzunluguB})
      dispatch({type : 'yesilKartNoB' , payload : values.yesilKartNoB})
      dispatch({type : 'ulkeB' , payload : values.ulkeB})
      dispatch({type : 'pasaportB' , payload : values.pasaportb})
      dispatch({type : 'surucuGorusB' , payload : values.surucuGorusB})
      console.log(values.adSoyadB , values.tcB); //ekleme yapılacak
    };

    
    const darbeCizimB = () => {
      console.log('Darbe Çizmek için Buttona tıklandı')
    }
    const imzaCizimB = () => {
      console.log('İmza Atmak için Buttona tıklandı')
    }
    const tutanakEkleButton = () => {
      console.log('Girilen Bilgileri Tutanağa Eklemek İçin Buttona Basıldı')
    }

    // geçici TextInput içerisi def str tanımladım 
    const defaultValue = "Poliçenin Başlangıç Bitiş Tarihi"
    const defaultValue2 = "Başlangıç                                                   Bitiş"
    const defaultValue3 = "6Nov 2023                                                   6Nov 2023"

return(
  <SafeAreaView style={styles.container}>
      <ScrollView>

      <View style={styles.headerView}>
          <Text style={{fontSize:24, fontWeight:'bold',color : "black"}}>Araç B</Text>
      </View>

      <View style={styles.containerbottom}>
      <Formik initialValues={initialFormValues} onSubmit={(values) => handleSubmit(values)}>
      {({values,handleChange,handleSubmit}) => (
      <>
          <View style={styles.inputscontainer}>
              
              <Text style={styles.inputheader}>Sürücü BILGILERI</Text>
              <TextInput style={styles.inputContainer}  
               value={values.adSoyadB}
               placeholder='Adı Soyadı (Zorunlu Alan)'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('adSoyadB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.tcB}
               placeholder='TC Kimlik No (Zorunlu Alan)                                    11 karakter'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('tcB')}
              />
               <TextInput style={styles.inputContainer}  
               value={values.belgeNoB}
               placeholder='Sürücü Belge No ve Sınıf'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('belgeNoB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.alindigiYerB}
               placeholder='Alındığı Yer'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('alindigiYerB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.adresB}
               placeholder='Adres'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('adresB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.cepTelB}
               placeholder='Cep Telefonu'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('cepTelB')}
              />


              <Text style={styles.inputheader}>Araç BILGILERI</Text>

              <TextInput style={styles.inputContainer}  
               value={values.sasiNoB}
               placeholder='Şasi No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('sasiNoB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.markaModelB}
               placeholder='Marka ve Modeli'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('markaModelB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.plakaB}
               placeholder='Plaka'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('plakaB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.kullanimSekliB}
               placeholder='Kullanım Şekli'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('kullanimSekliB')}
              />

              <Text style={styles.inputheader}>TRAFIK SIGORTASI POLIÇE BILGILERI</Text>

              <TextInput style={styles.inputContainer}  
               value={values.sasiNoB}
               placeholder='Sigortalının Adı Soyadı'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('sasiNoB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.tcVergiNoB}
               placeholder='TC Kimlik/Vergi No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('tcVergiNoB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.sigortaUnvanB}
               placeholder='Sigorta Şirketinin Unvanı'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('sigortaUnvanB')}
              />
                <TextInput style={styles.inputContainer}  
               value={values.acenteNoB}
               placeholder='Acente No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('acenteNoB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.tramerBelgeNoB}
               placeholder='TRAMER Belge No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('tramerBelgeNoB')}
              />
              
              <TextInput style={styles.inputContainer}  //geçici
               value={defaultValue} 
              />
              <TextInput style={styles.inputContainer}  
               value={defaultValue2} 
              />
              <TextInput style={styles.inputContainer}  
               value={defaultValue3} //buraya kadar
              /> 

              <Text style={styles.inputheader}>ARAÇ HIZ DURUMU</Text>
              <TextInput style={styles.inputContainer}  
               value={values.hizDurumuB}
               placeholder='Hız Durumu (km/s)'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('hizDurumuB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.frenUzunluguB}
               placeholder='Tespit Edildi İse Fren İzi Uzunluğu'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('frenUzunluguB')}
              />
              
              <Text style={styles.inputheader}>ARAÇ YEŞİL KART (GREEN CARD) BELGESINE SAHIPSE DOLDURULACAK BÖLÜM</Text>
              <TextInput style={styles.inputContainer}  
               value={values.yesilKartNoB}
               placeholder='Yeşil Kart No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('yesilKartNoB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.ulkeB}
               placeholder='Ülke'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('ulkeB')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.pasaportB}
               placeholder='Pasaport'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('pasaportB')}
              />

              <Text style={styles.inputheader}>SÜRÜCÜ GÖRÜŞLERİ ARAÇ B</Text>
              <TextInput style={styles.inputContainer} 
                value={values.surucuGorusB}
                  multiline = {true}  //Bir alt satıra geçmek için
              />

              <Text style={styles.inputheader}>ARACIN DARBE ALDIĞI YERİ ÇIZIN</Text>
              <View style = {styles.headerView}>
                <Button title = 'Çiziminizi Yapmak İçin Tıklayınız' onPress={darbeCizimB} />
              </View>
              

              <Text style={styles.inputheader}>B SÜRÜCÜSÜNÜN İMZASI</Text>
              <View style = {styles.headerView}>
                <Button title = 'İmzanızı Atmak İçin Tıklayınız' onPress={imzaCizimB} />
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

export default AracB;

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
