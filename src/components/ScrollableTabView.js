import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
// import ScrollableTabBar from './ScrollableTabBar';
import { FONT_SIZE, adaptUnits, TAB_HEIGHT} from '../commons/constants';

class MyScrollableTabBar extends PureComponent{

  render() {
    const {
      mainColor,
      children,
    } = this.props;
  
    return (
      <ScrollableTabView
        tabBarBackgroundColor={"#fff" }
        tabBarInactiveTextColor="#999"
        tabBarActiveTextColor={mainColor}
        tabBarTextStyle={{fontSize: FONT_SIZE.NM}}
        initialPage={0}
        tabBarUnderlineStyle={[styles.underline, {backgroundColor: mainColor}]}
        prerenderingSiblingsNumber={0} 
        renderTabBar={
          _props => (
            <ScrollableTabBar
              style={{height: TAB_HEIGHT}}
              tabStyle={[styles.tab, {height: TAB_HEIGHT}]}
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