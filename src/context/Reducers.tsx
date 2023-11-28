export default function (state: any, action: { type: any; payload: any; }){
    switch (action.type) {
                                                        //onBoard yazdığım yerleri düzelttim.
        case 'adSoyadA':
            return {...state, adSoyadA: action.payload}; //Düzeltme

        case 'tcA':
            return {...state, tcA: action.payload};
        
            case 'belgeNoA':
            return {...state, belgeNoA: action.payload};

            case 'alindigiYerA':
            return {...state, alindigiYerA: action.payload};

            case 'cepTelA':
            return {...state, cepTelA: action.payload};
            
            case 'sasiNoA':
            return {...state, sasiNoA: action.payload};
            
            case 'markaModelA':
            return {...state, markaModelA: action.payload};
            
            case 'plakaA':
            return {...state, plakaA: action.payload};
            
            case 'kullanimSekliA':
            return {...state, kullanimSekliA: action.payload};

            case 'sigortalininAdSoyadA':
            return {...state, sigortalininAdSoyadA: action.payload};

            case 'tcVergiNoA':
            return {...state, tcVergiNoA: action.payload};

            case 'sigortaUnvanA':
            return {...state, sigortaUnvanA: action.payload};
            
            case 'acenteNoA':
            return {...state, acenteNoA: action.payload};

            case 'tramerBelgeNoA':
            return {...state, tramerBelgeNoA: action.payload};

            case 'hizDurumuA':
            return {...state, hizDurumuA: action.payload};

            case 'frenUzunluguA':
            return {...state, frenUzunluguA: action.payload};

            case 'yesilKartNoA':
            return {...state, yesilKartNoA: action.payload};

            case 'ulkeA':
            return {...state, ulkeA: action.payload};

            case 'pasaportA':
            return {...state, pasaportA: action.payload};

            case 'surucuGorusA':
            return {...state, surucuGorusA: action.payload};



            case 'adsoyadB':
            return {...state, adsoyadB: action.payload};
            
            case 'tcB':
            return {...state, tcB: action.payload};

            case 'belgeNoB':
            return {...state, belgeNoB: action.payload};

            case 'alindigiYerB':
            return {...state, alindigiYerB: action.payload};

            case 'adresB':
            return {...state, adresB: action.payload};

            case 'cepTelB':
            return {...state, cepTelB: action.payload};

            case 'sasiNoB':
            return {...state, sasiNoB: action.payload};

            case 'markaModelB':
            return {...state, markaModelB: action.payload};

            case 'plakaB':
            return {...state, plakaB: action.payload};

            case 'surucuGorusA':
            return {...state, surucuGorusA: action.payload};

            case 'kullanimSekliB':
            return {...state, kullanimSekliB: action.payload};

            case 'sigortalininAdSoyadB':
            return {...state, sigortalininAdSoyadB: action.payload};

            
            case 'tcVergiNoB':
            return {...state, tcVergiNoB: action.payload};

            case 'sigortaUnvanB':
            return {...state, sigortaUnvanB: action.payload};


            case 'acenteNoB':
            return {...state, acenteNoB: action.payload};

            case 'tramerBelgeNoB':
            return {...state, tramerBelgeNoB: action.payload};

            case 'hizDurumuB':
            return {...state, hizDurumuB: action.payload};

            case 'frenUzunluguB':
            return {...state, frenUzunluguB: action.payload};

            case 'yesilKartNoB':
            return {...state, yesilKartNoB: action.payload};

            case 'ulkeB':
            return {...state, ulkeB: action.payload};

            case 'pasaportB':
            return {...state, pasaportB: action.payload};

            case 'surucuGorusB':
            return {...state, surucuGorusB: action.payload};


            
            
            case 'kazaTarihi':
            return {...state, kazaTarihi: action.payload};

            case 'kazaSaati':
            return {...state, kazaSaati: action.payload};

            case 'il':
            return {...state, il: action.payload};

            case 'ilce':
            return {...state, ilce: action.payload};

            case 'mahalle':
            return {...state, mahalle: action.payload};

            case 'cadde':
            return {...state, cadde: action.payload};

            case 'semt':
            return {...state, semt: action.payload};

            case 'sokak':
            return {...state, sokak: action.payload};

            case 'adSoyad':
            return {...state, adSoyad: action.payload};

            case 'adres':
            return {...state, adres: action.payload};

            case 'telNo':
            return {...state, telNo: action.payload};

        default:
            return state;

    }
}
