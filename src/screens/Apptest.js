import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon, ButtonGroup } from 'react-native-elements';
import * as randomAction from '../logics/random/action'; 
import * as appointTypeAction from '../logics/appointType/action'; 
import * as userSettingAction from '../logics/userSetting/action'; 
import { SCREENS } from '../commons/constants';
import { RANDOM } from '../commons/actionTypes';
import { gankio } from '../commons/Api';
import { FONT_SIZE } from '../commons/constants';
import i18n from '../commons/i18n';
import theme from '../commons/theme';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
});

class rnGank extends Component {
  constructor() {
    super();

    this.state = {
      selectedLangugeIndex: 0,
      selectedThemeIndex: 0,
    }
    
    this.selectedLanguge = ['zh', 'en', 'jp'];
    this.selectedTheme = ['normal', 'night'];

    this.handleUpdateLangugeIndex = this.handleUpdateLangugeIndex.bind(this);
    this.handleUpdateThemeIndex = this.handleUpdateThemeIndex.bind(this);
  }
  componentDidMount() {
    const {
      fetchRandomData,
      fetchAppointTypeData,
    } = this.props;
    // fetchRandomData(gankio.type.ANDROID);
    // fetchAppointTypeData(gankio.type.IOS);
  }
  // 修改语言
  handleUpdateLangugeIndex(selectedLangugeIndex) {
    this.setState({ selectedLangugeIndex })
    this.props.setUserSetting({ languge: this.selectedLanguge[selectedLangugeIndex] })
  }
  // 修改主题
  handleUpdateThemeIndex(selectedThemeIndex) {
    this.setState({ selectedThemeIndex })
    this.props.setUserSetting({ themeName: this.selectedTheme[selectedThemeIndex] })
  }

  render() {
    const { userSetting, navigation: { navigate } } = this.props;
    const { mainColor, languge, themeName } = userSetting;
    const { selectedLangugeIndex, selectedThemeIndex } = this.state;

    return (
      <View style={styles.container}>
        <View style={{ width: '80%', height: 40, backgroundColor: mainColor, margin: 20 }}></View>
        <Text style={{ fontSize: FONT_SIZE.HG, margin: 7 }}>huge size ABC abc {FONT_SIZE.HG}</Text>
        <Text style={{ fontSize: FONT_SIZE.LG, margin: 7 }}>large size ABC abc {FONT_SIZE.LG}</Text>
        <Text style={{ fontSize: FONT_SIZE.MD, margin: 7 }}>middle size ABC abc {FONT_SIZE.MD}</Text>
        <Text style={{ fontSize: FONT_SIZE.NM, margin: 7 }}>normal size ABC abc {FONT_SIZE.NM}</Text>
        <Text style={{ fontSize: FONT_SIZE.SM, margin: 7 }}>small size ABC abc {FONT_SIZE.SM}</Text>
        <Text style={{ fontSize: FONT_SIZE.XS, margin: 7 }}>xsmall size ABC abc  {FONT_SIZE.XS}</Text>

        <Text style={[{ fontSize: FONT_SIZE.MD, margin: 7 }, theme.test]}>{i18n.randomRecommendation}</Text>
        <Text style={[{ fontSize: FONT_SIZE.MD, margin: 7 }, theme.test]}>languge: {languge}</Text>
        <Text style={[{ fontSize: FONT_SIZE.MD, margin: 7 }, theme.test]}>theme: {themeName}</Text>
        <ButtonGroup
          onPress={this.handleUpdateLangugeIndex}
          selectedIndex={selectedLangugeIndex}
          buttons={this.selectedLanguge}
          containerStyle={{height: 30}}
        />
        <ButtonGroup
          onPress={this.handleUpdateThemeIndex}
          selectedIndex={selectedThemeIndex}
          buttons={this.selectedTheme}
          containerStyle={{height: 30}}
        />
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
    ...userSettingAction,
  }
)(rnGank);