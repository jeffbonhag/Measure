/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

var Measure = React.createClass({
  getInitialState: function() {
                     var coffee = 0;
                     var water = coffee * 17.42;
                     return {coffee: "" + coffee, water: "" + water};
                   },
  render: function() {
    return (
      <View style={styles.container}>
      <Text>
        Coffee (g):
      </Text>
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(coffee) => this.setState({coffee})}
                    value={this.state.coffee}
                      />
       <Text>
        Water (g): {this.state.water}
      </Text>
        <Text style={styles.welcome}>
          Belcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
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
});

AppRegistry.registerComponent('Measure', () => Measure);
