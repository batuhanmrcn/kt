import React, { useState, useEffect,useRef } from 'react';
import { View, StyleSheet, Text, TextInput, Button, SafeAreaView, TouchableOpacity, Dimensions, } from 'react-native';
import {useSelector} from 'react-redux'; 

const MainMenu2 = ({navigation}) => {
    //herbiri için selector testi yapıldı
  const adSoyad = useSelector((state) => state.adSoyadA); //selector test
  const tc = useSelector((state) => state.tc); 
  const belgeNo = useSelector((state) => state.belgeNo); 
  const alindigiYer = useSelector((state) => state.alindigiYerA); 
  const adres = useSelector((state) => state.adresA); 
  const cepTel = useSelector((state) => state.cepTelA); 
  const sasiNo = useSelector((state) => state.sasiNoA); 
  const markaMoodel = useSelector((state) => state.markaModelA); 
  const plaka = useSelector((state) => state.plakaA); 
  const kullanimSekli = useSelector((state) => state.kullanimSekliA); 
  const sigortalininAdSoyad = useSelector((state) => state.sigortalininAdSoyadA); 
  const tcVergiNo = useSelector((state) => state.tcVergiNoA); 
  const sigortaUnvan = useSelector((state) => state.sigortaUnvanA); 
  const acenteNo= useSelector((state) => state.acenteNoA); 
  const tramerBelgeNo= useSelector((state) => state.tramerBelgeNoA); 
  const hizDurumu = useSelector((state) => state.hizDurumuA); 
  const frenUzunlugu = useSelector((state) => state.frenUzunluguA); 
  const yesilKartNo = useSelector((state) => state.yesilKartNoA); 
  const ulke = useSelector((state) => state.ulkeA); 
  const pasaport = useSelector((state) => state.pasaportA); 
  const surucuGorus = useSelector((state) => state.surucuGorusA); 



  const handleSubmit = () => {
    console.log(adSoyad,tc,belgeNo,alindigiYer,adres,cepTel,sasiNo,markaMoodel,plaka,kullanimSekli,sigortalininAdSoyad,tcVergiNo,sigortaUnvan
    ,acenteNo,tramerBelgeNo,hizDurumu,frenUzunlugu,yesilKartNo,ulke,pasaport,surucuGorus) //selector test

  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate("KazaBilgileri")}>
                <Text style={styles.buttonText}>Kaza Bilgileri</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate("AracA")}>
                <Text style={styles.buttonText}>Araç A</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate("AracB")}>
                <Text style={styles.buttonText}>Araç B</Text>
            </TouchableOpacity>

                        
            <TouchableOpacity style={styles.buttonView2} onPress={handleSubmit}>    
                <Text style={styles.buttonText}>Tutanağı Oluştur</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center'
  },
  innerContainer: {
    alignSelf:'center',
    justifyContent:'center',
    gap:40
  },
  buttonView:{
    backgroundColor:'blue',
    padding:30,
    borderRadius:60,
    alignItems:'center'
  },
  buttonView2:{
    backgroundColor:'orange',
    padding:30,
    borderRadius:60,
    alignItems:'center'
  },
  buttonText:{
    color:'white',
    fontSize:38
  }
});

export default MainMenu2;