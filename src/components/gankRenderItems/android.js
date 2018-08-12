import React, { PureComponent } from 'react';
import { View, Text, Platform, StyleSheet, Image } from 'react-native';
import { Badge, Avatar } from 'react-native-elements';
import {
  adaptUnits,
  SPACING,
  SCREEN_WIDTH,
  FONT_SIZE,
  SCREENS,
} from '../../commons/constants';
import Button from '../../components/button';
import { timeMsg, cutstr, randomColor } from '../../commons/util';
// import Lightbox from 'react-native-lightbox';
import i18n, { getLanguge } from '../../commons/i18n';
import theme from '../../commons/theme';

const WIDTH = SCREEN_WIDTH - SPACING * 2;
const BORDER_RADIUS = 5;

export default class Android extends PureComponent{
  constructor() {
    super();

    this._onPress = this._onPress.bind(this);
    this.randomColor = randomColor();
  }

  _onPress() {
    const {
      navigation,
      url,
    } = this.props;
    let {
    desc,
    } = this.props;
    desc = desc || i18n.unknown;
    desc = cutstr(desc, 25);
    navigation.navigate(SCREENS.S.WEBVIEW, { url, title: desc })
  }

  render() {
    const {
      source="",
      type="",
      mainColor="",
      url="",
      desc="",
    } = this.props;
    let {
      publishedAt="",
      who,
    } = this.props;

    who = who || i18n.unknown;
    publishedAt = timeMsg(publishedAt, { getLanguge, i18n }, '-');
    who = cutstr(who, 10);

    return (
      <View style={styles.container}>
        <View style={[styles.insideContainer, styles.raised, theme.gankContainerStyle]}>
          <Button noAction onPress={this._onPress}>
            <View style={[styles.TopWrap]}>
              <Avatar
                small
                rounded
                title={who[0]}
                overlayContainerStyle={{backgroundColor: theme.gankIconStyle.color || this.randomColor}}
              />
              <Text style={[styles.title, {color: theme.gankTextStyle.color || '#000'}]}>{desc}</Text>
            </View>
            <View style={[styles.bottomWrap, theme.gankBottomContainerStyle]}>
              <Text style={[{fontSize: FONT_SIZE.XXXS}, {color: theme.gankTextStyle.color || '#000'}]}>
                发布者:  
                <Text style={{fontSize: FONT_SIZE.XS }}>{who}</Text>
              </Text>
              <View style={styles.bottomRightWrap}>
                <Badge
                  value={type}
                  containerStyle={[styles.bottomRightBadge, {backgroundColor: theme.gankBadgeStyle.color || mainColor}]}
                  textStyle={styles.bottomRightBadgeText}
                />
                <Text style={[styles.bottomRightTime, {color: theme.gankTextStyle.color || '#000'}]}>{publishedAt}</Text>
              </View>
            </View>
          </Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: SPACING,
    paddingTop: SPACING / 2,
    paddingBottom: SPACING / 2,
  },
  insideContainer: {
    width: WIDTH,
    borderRadius: BORDER_RADIUS,
    backgroundColor: '#fff',
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, 0.4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        shadowColor: 'rgba(0,0,0, 0.05)',
        shadowOpacity: 0.1,
        shadowRadius: StyleSheet.hairlineWidth,
        shadowOffset: {
          height: StyleSheet.hairlineWidth - 0.2,
        },
        elevation: 1.4,
      },
    }),
  },
  title: {
    fontSize: FONT_SIZE.NR,
    paddingLeft: SPACING,
    textAlign: 'left',
    flex: 1,
  },
  TopWrap: {
    width: WIDTH,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    paddingTop: SPACING / 2,
    paddingBottom: SPACING / 2,
    paddingLeft: SPACING / 1.5,
    paddingRight: SPACING / 1.5,
  },
  bottomWrap: {
    height: adaptUnits(45, 'H'),
    width: WIDTH,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    paddingLeft: SPACING / 1.5,
    paddingRight: SPACING / 1.5,
  },
  bottomRightWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomRightBadge: {
    backgroundColor: '#000',
    paddingLeft: SPACING / 2.5,
    paddingRight: SPACING / 2.5,
    marginRight: SPACING / 3,
  },
  bottomRightBadgeText: {
    fontSize: FONT_SIZE.XXXXS
  },
  bottomRightTime: {
    marginLeft: SPACING / 2.5,
    fontSize: FONT_SIZE.XS
  }
});
