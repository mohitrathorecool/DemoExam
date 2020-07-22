/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
  Text
} from 'react-native';

import WebApi from '../WebApi';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Listing extends Component
 
{
  state = {
    loading : false,
    name: '',
    ArrayListing: [{"id":"1","name":"Mohit","model":"Samsung","brand":"M 31","image":"https://www.stc.com.kw/sites/stc/Samsung_Galaxy_M31_Device_Banner_Image_En.jpg","Features":"6 gb ram 128 gb "}]
   
  };

 componentDidMount()
 {
  this.callApi();
 }

  callApi=async()=>{

   // this.setState({loading:true, loadingTitle:'please Wait', loadingMessage:'Loading...'});
    await WebApi.api_get_list('GET', '')
          .then(response => response.json())
          .then(json => {
            
                console.log('Response from formData===>', json);
              
                this.setState({
                  ArrayListing: json
                });
                 
              })
              .catch(error => {
                   console.log('error==>' , error);
                    this.setState({
                      loading:false
                      //alert:true, alertMessage:'Opps! ' + error, alertSuccess:false
                    });
                });
  }
  _renderItem(item) {
    return (
    
      <View style={{ flexDirection: 'column',padding:10,alignItems:'center' ,margin:2,backgroundColor:'#50e1e1e1'}}>

        <Image
          style={{ width: 100, height: 70 }}
          source={{ uri: item.image }}
        />
        <Text style={{fontSize:22,fontWeight:'bold'}}>{item.model}</Text>
        <Text style={{fontSize:18}}>{item.brand}</Text>
        <Text style={{fontSize:18}}>{item.Features}</Text>
      </View>
     
    )
  }
  render() 
	{
	
		return (
      <SafeAreaView>
    
        <Header />

        <View style={styles.body}>
        <FlatList
              style={{flexGrow:0,  position: 'absolute',
              backgroundColor:'#fff',width:'100%'}}
              renderItem={(item, index) => this._renderItem(item.item)}
              data={this.state.ArrayListing}
              numColumns={1}
              bounces={false}
            />
        
        

        </View>
    
    </SafeAreaView>
		);
	}
           
 }
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
 
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  inputboxview :{
    margin : 2, 
    padding :1,
    width:'99%',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor:'#FFEFD5'
  },  
  input: {
   backgroundColor:'#fff',
    borderWidth: 1,
    paddingStart:5,
    borderColor:'#1133ee',
    padding:0,
    width:'50%',
    fontSize:14,
    height:30,
    marginRight:0.5,
    flexDirection:'row',
  },
  inputliketext: {
    backgroundColor:'#fff',
     borderWidth: 1,
     borderColor:'#1133ee',
     padding:5,
     flex:1,
     fontSize:12,
     marginRight:0.5,
   },
  inputtext: {
    padding:5,
    width:'50%',
    fontSize:13,
    flex:1, 
  },
  button: {
    backgroundColor: 'brown',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
   marginLeft:0,
   marginRight:0,
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  }
});

export default Listing;
