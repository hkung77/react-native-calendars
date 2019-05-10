import { StyleSheet } from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.period';
export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  const FILLER_HEIGHT = appStyle.baseDayHeight || 34;

  return StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center',
      marginLeft: -1,
    },
    base: {
      //borderWidth: 1,
      width: appStyle.baseDayWidth || 38,
      height: FILLER_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fillers: {
      position: 'absolute',
      height: FILLER_HEIGHT,
      flexDirection: 'row',
      left: 0,
      right: 0,
    },
    leftFiller: {
      height: FILLER_HEIGHT,
      flex: 1,
    },
    rightFiller: {
      height: FILLER_HEIGHT,
      flex: 1,
    },
    text: {
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: '300',
      color: appStyle.dayTextColor || '#2d4150',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor,
    },
    todayText: {
      fontWeight: '500',
      color: theme.todayTextColor || appStyle.dayTextColor,
      //color: appStyle.textLinkColor
    },
    disabledText: {
      color: appStyle.textDisabledColor,
    },
    quickAction: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#c1e4fe',
    },
    quickActionText: {
      marginTop: 6,
      color: appStyle.textColor,
    },
    firstQuickAction: {
      backgroundColor: appStyle.textLinkColor,
    },
    firstQuickActionText: {
      color: 'white',
    },
    naText: {
      color: '#b6c1cd',
    },
    ...(theme[STYLESHEET_ID] || {}),
  });
}
