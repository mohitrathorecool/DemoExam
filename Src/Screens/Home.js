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
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import WebApi from '../WebApi';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Home extends Component
 
{
  state = {
    loading : false,
    name: '',
    model: '',
    brand: '',
    image:'',
    Features:'', 
    description:'' 
  };

  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }
  onSubmit()
  {
  
     
    if(this.state.model == '')
    {
      alert('Enter Model Name')
      return;
    }
    this.callApi();
    
    
  }

  callApi=async()=>{


  var data = new URLSearchParams();
  data.append('name', this.state.name);
  data.append('model', this.state.model);
  data.append('brand', this.state.brand);
  data.append('image', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk0TfGRbOBx1xWmVvC4z5QXxyNWHlFo57y0Q&usqp=CAU');
  data.append('Features', this.state.Features);
 
    // this.setState({loading:true, loadingTitle:'please Wait', loadingMessage:'Loading...'});
    await WebApi.api_postdata('POST', data.toString())
          .then(response => response.json())
          .then(json => {
            
                console.log('Response from formData===>', json);
                alert('Data Entered Succesfully');
                  this.setState({loading:false});
                 
              })
              .catch(error => {
                   console.log('error==>' , error);
                    this.setState({
                      loading:false
                      //alert:true, alertMessage:'Opps! ' + error, alertSuccess:false
                    });
                });
  }
  render() 
	{
	
		return (
      <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />

        <View style={styles.body}>
        <View style={styles.inputboxview} >
      <Text style={styles.inputtext}>Name</Text>
      <TextInput
                      style={styles.input}
                      placeholderTextColor="#adb4bc"
                      returnKeyType="next"
                      autoCapitalize="none"
                      value = {this.state.name}
                      autoCorrect={false}
                      keyboardType="default"
                      onChangeText={value => this.onChangeText("name", value)}  />
        </View>
        
        <View style={styles.inputboxview} >
      <Text style={styles.inputtext}>Model</Text>
      <TextInput
                      style={styles.input}
                      placeholderTextColor="#adb4bc"
                      returnKeyType="next"
                      autoCapitalize="none"
                      value = {this.state.model}
                      autoCorrect={false}
                      keyboardType="default"
                      onChangeText={value => this.onChangeText("model", value)}  />
        </View>
        
        <View style={styles.inputboxview} >
      <Text style={styles.inputtext}>Brand</Text>
      <TextInput
                      style={styles.input}
                      placeholderTextColor="#adb4bc"
                      returnKeyType="next"
                      autoCapitalize="none"
                      value = {this.state.brand}
                      autoCorrect={false}
                      keyboardType="default"
                      onChangeText={value => this.onChangeText("brand", value)}  />
        </View>
        
       
        <View style={styles.inputboxview} >
      <Text style={styles.inputtext}>Features</Text>
      <TextInput
                      style={styles.input}
                      placeholderTextColor="#adb4bc"
                      returnKeyType="next"
                      autoCapitalize="none"
                      value = {this.state.Features}
                      autoCorrect={false}
                      keyboardType="default"
                      onChangeText={value => this.onChangeText("Features", value)}  />
        </View>

        <View style={styles.inputboxview} >
      <Text style={styles.inputtext}>Description</Text>
      <TextInput
                      style={styles.input}
                      placeholderTextColor="#adb4bc"
                      returnKeyType="next"
                      autoCapitalize="none"
                      value = {this.state.description}
                      autoCorrect={false}
                      keyboardType="default"
                      onChangeText={value => this.onChangeText("description", value)}  />
        </View>


        <TouchableOpacity  onPress={() => this.onSubmit()}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>


        <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Listing')}>
          <Text style={styles.button}>Get All Data</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop : 10,
    marginBottom:10,
    marginStart:2, 
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

export default Home;
