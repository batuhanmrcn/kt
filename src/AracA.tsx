
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

const AracA = ({navigation}) => {
    
  const dispatch = useDispatch();


  const initialFormValues = {
      adSoyadA:'', //düzeltme
      tcA:'',
      belgeNoA:'',
      alindigiYerA:'',
      adresA : '',
      cepTelA:'',
      sasiNoA: '',
      markaModelA : '',
      plakaA : '',
      kullanimSekliA : '',
      sigortalininAdSoyadA :'',
      tcVergiNoA : '',
      sigortaUnvanA : '',
      acenteNoA :'',
      tramerBelgeNoA : '',
      hizDurumuA : '',
      frenUzunluguA : '',
      yesilKartNoA : '',
      ulkeA : '',
      pasaportA : '',
      surucuGorusA : '',
    };

    const handleSubmit = (values) => {
      // Perform any actions you need with the form values here     
      //Her yeri aşağıda düzeltme örneğindeki gibi düzelttim
      dispatch({type : 'adSoyadA' , payload : values.adSoyadA}) //düzeltme
      dispatch({type : 'tcA' , payload : values.tcA})
      dispatch({type : 'belgeNoA' , payload : values.belgeNoA})
      dispatch({type : 'alindigiYerA' , payload : values.alindigiYerA})
      dispatch({type : 'adresA' , payload : values.adresA})
      dispatch({type : 'cepTelA' , payload : values.cepTelA})
      dispatch({type : 'sasiNoA' , payload : values.sasiNoA})
      dispatch({type : 'plakaA' , payload : values.plakaA})
      dispatch({type : 'markaModelA' , payload : values.markaModelA})
      dispatch({type : 'kullanimSekliA' , payload : values.kullanimSekliA})
      dispatch({type : 'sigortalininAdSoyadA' , payload : values.sigortalininAdSoyadA})
      dispatch({type : 'tcVergiNoA' , payload : values.tcVergiNoA})
      dispatch({type : 'sigortaUnvanA' , payload : values.sigortaUnvanA})
      dispatch({type : 'acenteNoA' , payload : values.acenteNoA})
      dispatch({type : 'tramerBelgeNoA' , payload : values.tramerBelgeNoA})
      dispatch({type : 'hizDurumuA' , payload : values.hizDurumuA})
      dispatch({type : 'frenUzunluguA' , payload : values.frenUzunluguA})
      dispatch({type : 'yesilKartNoA' , payload : values.yesilKartNoA})
      dispatch({type : 'ulkeA' , payload : values.ulkeA})
      dispatch({type : 'pasaportA' , payload : values.pasaportA})
      dispatch({type : 'surucuGorusA' , payload : values.surucuGorusA})

      
      console.log(values.adSoyadA,values.tcA)
      
      

    };


    const darbeCizimA = () => {
      console.log('Darbe Çizmek için Buttona tıklandı')
    }
    const imzaCizimA = () => {
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
          <Text style={{fontSize:24, fontWeight:'bold',color : "black"}}>Araç A</Text>
      </View>

      <View style={styles.containerbottom}>
      <Formik initialValues={initialFormValues} onSubmit={(values) => handleSubmit(values)}>
      {({values,handleChange,handleSubmit}) => (
      <>
          <View style={styles.inputscontainer}>
              
              <Text style={styles.inputheader}>Sürücü BILGILERI</Text>
              <TextInput style={styles.inputContainer}  
               value={values.adSoyadA}
               placeholder='Adı Soyadı (Zorunlu Alan)'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('adSoyadA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.tcA}
               placeholder='TC Kimlik No (Zorunlu Alan)                                    11 karakter'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('tcA')} 
              />
               <TextInput style={styles.inputContainer}  
               value={values.belgeNoA}
               placeholder='Sürücü Belge No ve Sınıf'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('belgeNoA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.alindigiYerA}
               placeholder='Alındığı Yer'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('alindigiYerA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.adresA}
               placeholder='Adres'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('adresA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.cepTelA}
               placeholder='Cep Telefonu'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('cepTelA')}
              />


              <Text style={styles.inputheader}>Araç BILGILERI</Text>

              <TextInput style={styles.inputContainer}  
               value={values.sasiNoA}
               placeholder='Şasi No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('sasiNoA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.markaModelA}
               placeholder='Marka ve Modeli'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('markaModelA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.plakaA}
               placeholder='Plaka'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('plakaA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.kullanimSekliA}
               placeholder='Kullanım Şekli'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('kullanimSekliA')}
              />

              <Text style={styles.inputheader}>TRAFIK SIGORTASI POLIÇE BILGILERI</Text>

              <TextInput style={styles.inputContainer}  
               value={values.sasiNoA}
               placeholder='Sigortalının Adı Soyadı'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('sasiNoA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.tcVergiNoA}
               placeholder='TC Kimlik/Vergi No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('tcVergiNoA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.sigortaUnvanA}
               placeholder='Sigorta Şirketinin Unvanı'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('sigortaUnvanA')}
              />
                <TextInput style={styles.inputContainer}  
               value={values.acenteNoA}
               placeholder='Acente No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('acenteNoA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.tramerBelgeNoA}
               placeholder='TRAMER Belge No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('tramerBelgeNoA')}
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
               value={values.hizDurumuA}
               placeholder='Hız Durumu (km/s)'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('hizDurumuA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.frenUzunluguA}
               placeholder='Tespit Edildi İse Fren İzi Uzunluğu'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('frenUzunluguA')}
              />
              
              <Text style={styles.inputheader}>ARAÇ YEŞİL KART (GREEN CARD) BELGESINE SAHIPSE DOLDURULACAK BÖLÜM</Text>
              <TextInput style={styles.inputContainer}  
               value={values.yesilKartNoA}
               placeholder='Yeşil Kart No'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('yesilKartNoA')}     
              />
              <TextInput style={styles.inputContainer}  
               value={values.ulkeA}
               placeholder='Ülke'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('ulkeA')}
              />
              <TextInput style={styles.inputContainer}  
               value={values.pasaportA}
               placeholder='Pasaport'
               placeholderTextColor={'gray'}
               onChangeText={handleChange('pasaportA')}
              />

              <Text style={styles.inputheader}>SÜRÜCÜ GÖRÜŞLERİ ARAÇ A</Text>
              <TextInput style={styles.inputContainer} 
                    value={values.surucuGorusA}
                  multiline = {true}  //Bir alt satıra geçmek için
              />

              <Text style={styles.inputheader}>ARACIN DARBE ALDIĞI YERİ ÇIZIN</Text>
              <View style = {styles.headerView}>
                <Button title = 'Çiziminizi Yapmak İçin Tıklayınız' onPress={darbeCizimA} />
              </View>
              

              <Text style={styles.inputheader}>A SÜRÜCÜSÜNÜN İMZASI</Text>
              <View style = {styles.headerView}>
                <Button title = 'İmzanızı Atmak İçin Tıklayınız' onPress={imzaCizimA} />
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

export default AracA;

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
