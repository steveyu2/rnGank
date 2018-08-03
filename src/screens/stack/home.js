import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SCREENS } from '../../commons/constants';

// import { connect } from 'react-redux';
// import * as randomAction from './logics/random/action'; 
// import * as appointTypeAction from './logics/appointType/action'; 
// import { RANDOM } from './commons/actionTypes';
// import { gankio } from './commons/Api';
// import { FONT_SIZE } from './commons/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

class Home extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    header: '',
  });

  constructor() {
    super()
  }

  render() {
    const { navigation: { navigate } } = this.props;

    return (
      <View style={styles.container}>
        <Text h2>Heading 2</Text>
        <Button 
          title={SCREENS.S.WEBVIEW}
          icon={{name: 'home', color: "#fff"}}
          onPress={() => navigate(SCREENS.S.WEBVIEW) }
          buttonStyle={{margin: 10}}
          />
      </View>
    );
  }
}

export default Home;