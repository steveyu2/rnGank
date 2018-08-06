import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';
import * as randomAction from '../logics/random/action'; 
import * as appointTypeAction from '../logics/appointType/action'; 
import { SCREENS } from '../commons/constants';
import { RANDOM } from '../commons/actionTypes';
import { gankio } from '../commons/Api';
import { FONT_SIZE } from '../commons/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
});

class rnGank extends Component {
  componentDidMount() {
    const {
      fetchRandomData,
      fetchAppointTypeData,
    } = this.props;
    // fetchRandomData(gankio.type.ANDROID);
    // fetchAppointTypeData(gankio.type.IOS);
  }
  render() {
    const { userSetting, navigation: { navigate } } = this.props;
    const { mainColor,  } = userSetting;

    return (
      <View style={styles.container}>
        <View style={{ width: '80%', height: 40, backgroundColor: mainColor.value, margin: 20 }}></View>
        <Text style={{ fontSize: FONT_SIZE.HG, margin: 7 }}>huge size ABC abc {FONT_SIZE.HG}</Text>
        <Text style={{ fontSize: FONT_SIZE.LG, margin: 7 }}>large size ABC abc {FONT_SIZE.LG}</Text>
        <Text style={{ fontSize: FONT_SIZE.MD, margin: 7 }}>middle size ABC abc {FONT_SIZE.MD}</Text>
        <Text style={{ fontSize: FONT_SIZE.NM, margin: 7 }}>normal size ABC abc {FONT_SIZE.NM}</Text>
        <Text style={{ fontSize: FONT_SIZE.SM, margin: 7 }}>small size ABC abc {FONT_SIZE.SM}</Text>
        <Text style={{ fontSize: FONT_SIZE.XS, margin: 7 }}>xsmall size ABC abc  {FONT_SIZE.XS}</Text>
        <Button 
          title={SCREENS.S.HOME}
          icon={{name: 'home', type: 'entypo', color: "#fff"}}
          onPress={() => navigate(SCREENS.S.HOME) }
          buttonStyle={{margin: 10}}
          />
        <Button
          title={SCREENS.S.WEBVIEW}
          icon={{name: 'blur-on', type: 'mat​​erial-community'}}
          onPress={() => navigate(SCREENS.S.WEBVIEW) }
          buttonStyle={{margin: 10}}
          />
      </View>
    );
  }
}

export default connect(
  state => {
    return {
      ...state,
    };
  },
  {
    ...randomAction,
    ...appointTypeAction,
  }
)(rnGank);