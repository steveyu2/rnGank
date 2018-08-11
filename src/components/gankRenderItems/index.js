import React, {PureComponent} from 'react';
import { View, Text } from 'react-native';
import Fili from './fuli';
import Android from './android';

const components = {
  FULI ({ data, mainColor, navigation }) {
    return <Fili {...data} mainColor={mainColor} navigation={navigation}/>
  },
  ANDROID ({ data, mainColor, navigation }) {
    return <Android {...data} mainColor={mainColor} navigation={navigation}/>
  },
  IOS ({ data, mainColor, navigation }) {
    return <Android {...data} mainColor={mainColor} navigation={navigation}/>
  },
  LEISUREVIDEO ({ data, mainColor, navigation }) {
    return <Android {...data} mainColor={mainColor} navigation={navigation}/>
  },
  EXPAND ({ data, mainColor, navigation }) {
    return <Android {...data} mainColor={mainColor} navigation={navigation}/>
  },
  WEB ({ data, mainColor, navigation }) {
    return <Android {...data} mainColor={mainColor} navigation={navigation}/>
  },
  BLINDRECOMMEND ({ data, mainColor, navigation }) {
    return <Android {...data} mainColor={mainColor} navigation={navigation}/>
  },
  APP ({ data, mainColor, navigation }) {
    return <Android {...data} mainColor={mainColor} navigation={navigation}/>
  },
};

export default {
  bind: (that) => {
    return Object.keys(components)
            .map(v => [v, components[v].bind(that)])
            .reduce((a, b) => {
              a[b[0]] = b[1];
              return a;
            }, {});
  }
}