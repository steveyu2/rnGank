import React, { PureComponent } from 'react';
import { View, Text, Platform, StyleSheet, Image } from 'react-native';
import { Badge } from 'react-native-elements';
import {
  adaptUnits,
  SPACING,
  SCREEN_WIDTH,
  FONT_SIZE,
  SCREENS,
} from '../../commons/constants';
import Button from '../../components/button';
import { timeMsg, cutstr } from '../../commons/util';
import i18n, { getLanguge } from '../../commons/i18n';
import theme from '../../commons/theme';
// import Lightbox from 'react-native-lightbox';

const WIDTH = SCREEN_WIDTH - SPACING * 2;
const IMAGE_HEIGHT = WIDTH / 2;
const BORDER_RADIUS = 5;

export default class fuli extends PureComponent{
  constructor() {
    super();

    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    const {
      navigation,
      url,
    } = this.props;
    navigation.navigate(SCREENS.S.WEBVIEW, { url, viewImage: true, title: '福利' })
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
      who=i18n.unknown,
    } = this.props;

    publishedAt = timeMsg(publishedAt, { getLanguge, i18n }, '-');
    who = cutstr(who, 10);

    return (
      <View style={styles.container}>
        <View style={[styles.insideContainer, styles.raised]}>
          <Button noAction onPress={this._onPress}>
            <Image 
                source={{ uri: url }} 
                borderTopLeftRadius={BORDER_RADIUS}
                borderTopRightRadius={BORDER_RADIUS}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                resizeMode="cover"
                style={styles.image}
            />
            <View style={[styles.bottomWrap, theme.gankBottomContainerStyle]}>
              <Text style={[{fontSize: FONT_SIZE.XXXS}, {color: theme.gankTextStyle.color || '#000'}]}>
                发布者:  
                <Text style={{fontSize: FONT_SIZE.XS }}>{who}</Text>
              </Text>
              <View style={styles.bottomRightWrap}>
                <Badge
                  value={desc}
                  containerStyle={[styles.bottomRightBadge, {backgroundColor: theme.gankBadgeStyle.color || mainColor}]}
                  textStyle={styles.bottomRightBadgeText}
                />
                <Badge
                  value={type}
                  containerStyle={[styles.bottomRightBadge, {backgroundColor: theme.gankBadgeStyle.color || mainColor}]}
                  textStyle={styles.bottomRightBadgeText}
                />
                <Text style={[styles.bottomRightTime, {color: theme.gankTextStyle.color || '#000'}]}>{publishedAt}</Text>
              </View>
            </View>
            {/* <View style={styles.bottomWrap}>
              <Text style={{fontSize: FONT_SIZE.XXXS }}>
                发布者: 
                <Text style={{fontSize: FONT_SIZE.XS }}>{who}</Text>
              </Text>
              <View style={styles.bottomRightWrap}>
                <Badge
                  value={desc}
                  containerStyle={[styles.bottomRightBadge, {backgroundColor: mainColor}]}
                  textStyle={styles.bottomRightBadgeText}
                />
                <Badge
                  value={type}
                  containerStyle={[styles.bottomRightBadge, {backgroundColor: mainColor}]}
                  textStyle={styles.bottomRightBadgeText}
                />
                <Text style={styles.bottomRightTime}>{publishedAt}</Text>
              </View>
            </View> */}
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
  image: {
    width: WIDTH,
    height: IMAGE_HEIGHT,
  },
  imageFullWrap: {
    
  },
  imageFull: {
    width: '100%',
    height: 300,
    // flex: 1,
  },
  bottomWrap: {
    height: adaptUnits(50, 'H'),
    width: WIDTH,
    backgroundColor: '#fff',
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
