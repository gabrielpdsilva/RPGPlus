import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

/*
It is used functions (not classes) on some tutorials, functions
are necessary to navigate between screens, as you can see below.
When the button is pressed, it goes to Details Screen. Still, you
can't declare other functions in here, what I see as a problem for now.
Therefore, I will keep using classes on the other screens for a while.

I'm gonna take a look at this link later
https://itnext.io/react-component-class-vs-stateless-component-e3797c7d23ab

*/
const TestScreen = ({navigation}) => {   
   
    return(
        <View>
            <Text>Details = function</Text>
            <Button onPress={() => navigation.navigate("Details")} title="Go to Details"/>
            <Text>Sketch Screen = Class</Text>
            <Button onPress={() => navigation.navigate("Sketch")} title="Go to SketchScreen"/>
        </View>
    );
}

export default TestScreen;