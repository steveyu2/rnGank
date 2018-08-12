import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
// import ScrollableTabBar from './ScrollableTabBar';
import { FONT_SIZE, adaptUnits, TAB_HEIGHT} from '../commons/constants';
import theme from '../commons/theme';

class MyScrollableTabBar extends PureComponent{

  render() {
    const {
      mainColor,
      children,
      tabHeight = TAB_HEIGHT,
      // tabStyle,
    } = this.props;

    let addStyle=[]

    if(theme.tabContainerStyle.backgroundColor) {
      addStyle=[
        {borderColor: theme.tabContainerStyle.backgroundColor}
      ];
    }

    return (
      <ScrollableTabView
        tabBarBackgroundColor={theme.tabContainerStyle.backgroundColor || "#fff"}
        tabBarInactiveTextColor={theme.text.color || "#999"}
        tabBarActiveTextColor={theme.lightText.color || mainColor}
        tabBarTextStyle={{fontSize: FONT_SIZE.NM}}
        initialPage={0}
        tabBarUnderlineStyle={[styles.underline, {backgroundColor: theme.lightText.color || mainColor}]}
        prerenderingSiblingsNumber={0} 
        renderTabBar={
          _props => (
            <ScrollableTabBar
              style={[{height: tabHeight}, ...addStyle]}
              tabStyle={[styles.tab, {height: tabHeight}, theme.tabContainerStyle]}
              {..._props}
              />
          )}
        {...this.props}
      >
      {children}
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  TabViewContainer: {
    height: adaptUnits(20, 'H'),
    padding: 0,
  },
  underline: {
    height: adaptUnits(3, 'H'),
  },
  tab: {
    backgroundColor: '#fff',
    paddingLeft: adaptUnits(35, 'W'),
    paddingRight: adaptUnits(35, 'W'),
  }
});

export default MyScrollableTabBar;