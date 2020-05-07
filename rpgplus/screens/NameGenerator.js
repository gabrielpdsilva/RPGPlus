import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Picker,
  ToastAndroid,
  Clipboard
} from 'react-native';

/*
Name Generator algorithm by RyanGoslingsBugle

https://teasnake.wordpress.com/2016/03/03/how-to-build-a-simple-javascript-name-generator/
*/

export default class NameGenerator extends Component {
	constructor(props){
		super(props);
		this.state={
      pickerValue:'cyberpunk',
      name: ''
			
		}
		
  };

  //still finishing
/*  =====================================

var options ={
    "1": "Home",
    "2": "Food",
    "3": "Car",
    "4": "Bank",
};

<Picker
    style={{your_style}}
    mode="dropdown"
    selectedValue={this.state.selected}
    onValueChange={()=>{}}>
    {Object.keys(options).map((key) => {
        return (<Picker.Item label={this.props.options[key]} value={key} key={key}/>) //if you have a bunch of keys value pair
    })}
</Picker>

-------------

2) When you have an array of values

var options =["Home","Savings","Car","GirlFriend"];

<Picker
    style={{your_style}}
    mode="dropdown"
    selectedValue={this.state.selected}
    onValueChange={()=>{}}> //add your function to handle picker state change
    {options.map((item, index) => {
        return (<Picker.Item label={item} value={index} key={index}/>) 
    })}
</Picker>


  =====================================*/

  //generateName function
  generateName = (firstName, lastName) => {
    
    //generates a random name based on the firstName and
    //lastName that the user has used
    let finalName = firstName[Math.floor(Math.random() * firstName.length)] + " " + lastName[Math.floor(Math.random() * lastName.length)];

    //set the state of the name
    this.setState({name: finalName});

  }

  //function that will execute on click
  buttonOnClickListener = (category) => {
    let firstName;
    let lastName;

    switch(category){
      case "cyberpunk":

        firstName = ["Alpha", "Zero"];
        lastName = ["Zeke","dr0id"];

      break;
  
      case "lovecraft":
        firstName = ["Edmund","Francis","Carla","Xavier"];
        lastName = ["Newton", "Kennedy"];
        
      break;
  
      case "medieval":

        firstName = ["Aynur","Asriel","Baldor","Hannah","Vannet"];
        lastName = ["the Great","Iron Heart","Turambar", "Valstar", "Yelenna", "The Great One"];
        
      break;
  
      case "vampire":
        firstName = ["Victoria","Anna","Richard"];
        lastName = ["Valerius","Stohess"];

      break;
  
      default:
        alert("No options.");
     }

     this.generateName(firstName, lastName);

  }

  //copy to clipboard function
  copyToClipboard = () => {

    //if user touches a region without name yet
    if(this.state.name == '') {
        return;
    }
    //copy the name to clipboard
    Clipboard.setString(this.state.name);

    //make a toast with the name
    ToastAndroid.show(this.state.name + " copied to your clipboard", ToastAndroid.SHORT);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Name Generator 2.0</Text>
        <Text style={styles.texts}>Press the button to generate random names, you can copy it to your clipboard by clicking on it.</Text>

        <Picker
          style={{width:'80%'}}
          selectedValue={this.state.pickerValue}
          onValueChange={(itemValue, itemIndex) => this.setState({pickerValue: itemValue})}
        >
		
            <Picker.Item label="Cyberpunk" value="cyberpunk"/>
            <Picker.Item label="Lovecraft Mythos" value="lovecraft"/>
            <Picker.Item label="Medieval" value="medieval"/>
            <Picker.Item label="Vampire the Masquerade" value="vampire" />
		
		</Picker>

        <TouchableOpacity onPress={this.copyToClipboard}>
          <Text style={styles.texts}>{this.state.name}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => this.buttonOnClickListener(this.state.pickerValue)}>
          <Text style={styles.buttonText}>GENERATE!</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  texts: {
      margin: 15,
      fontSize: 15

  },
  buttonText: {
      color: '#ffffff',
      textAlign: 'center'
  },
  button: {
      padding:10,
    backgroundColor: '#202646',
    borderRadius:5
  }
});