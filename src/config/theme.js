import color from 'color'

import { Platform, StatusBar } from 'react-native'

import { scale } from '../helpers/scalling'

export default {
  // Utils functions
  scale: size => {
    return scale(size)
  },
  darken: (c, value = 0.2) => {
    return color(c)
      .darken(value)
      .toString()
  },
  lighten: (c, value = 0.2) => {
    return color(c)
      .lighten(value)
      .toString()
  },
  rotate: (c, value = 180) => {
    return color(c)
      .rotate(value)
      .toString()
  },

  // Colors
  get black () {
    return '#000'
  },

  get blackLight () {
    return '#333'
  },

  get blackLighter () {
    return '#666'
  },

  get white () {
    return '#FFF'
  },

  get whiteDarken () {
    return '#FAFAFA'
  },

  get whiteDark () {
    return '#F5F5F5'
  },

  get gray () {
    return '#CCC'
  },

  get grayLight () {
    return '#EEEE'
  },

  get grayLighter () {
    return '#EFEFEF'
  },

  get blueDark () {
    return '#2968C7'
  },

  get blueDarken () {
    return '#639CE4'
  },

  get blue () {
    return '#148cF0'
  },

  get blueLighten () {
    return '#00CFFF'
  },

  get blueLight () {
    return '#62E0FD'
  },

  get yellow () {
    return '#f9bf1c'
  },

  get green () {
    return '#6CC644'
  },

  get red () {
    return '#ed1c24'
  },

  get orange () {
    return '#EC5E19'
  },

  get purple () {
    return '#451295'
  },

  get purpleLight () {
    return '#4A0094'
  },

  get linkedinPrimary () {
    return '#0077b5'
  },

  get twitterPrimary () {
    return '#1da1f2'
  },

  get instagramPrimary () {
    return '#fd1d1d'
  },

  // Theme colors
  get colorPrimary () {
    return this.purple
  },
  get hoverColorPrimary () {
    return this.darken(this.colorPrimary)
  },

  get colorSecondary () {
    return this.orange
  },
  get hoverColorSecondary () {
    return this.darken(this.colorSecondary)
  },

  // Types background
  get primaryBackground () {
    return this.colorPrimary
  },
  get infoBackground () {
    return this.blue
  },
  get warningBackground () {
    return this.orange
  },
  get successBackground () {
    return this.green
  },
  get dangerBackground () {
    return this.red
  },
  get disabledBackground () {
    return '#ECECEC'
  },

  get primaryColor () {
    return this.white
  },
  get infoColor () {
    return this.white
  },
  get warningColor () {
    return this.white
  },
  get successColor () {
    return this.white
  },
  get dangerColor () {
    return this.white
  },
  get linkColor () {
    return this.colorPrimary
  },

  // Gradients
  get gradientBlueStart () {
    return '#230B4C'
  },
  get gradientBlueEnd () {
    return '#1DB6FD'
  },

  get gradientPurpleStart () {
    return '#33016B'
  },
  get gradientPurpleEnd () {
    return '#7B29C7'
  },

  get gradientBlueLightStart () {
    return '#2968C7'
  },
  get gradientBlueLightEnd () {
    return '#1DB6FD'
  },

  // Body
  get bodyBackground () {
    return '#FFFFFF'
  },

  // Status bar
  get statusBarHeight () {
    return Platform.OS === 'ios' ? 20 : StatusBar.HEIGHT
  },
  get whiteStatusBar () {
    return this.darken(this.white, 0.1)
  },

  get primaryStatusBar () {
    return this.darken(this.colorPrimary)
  },

  get darkStatusBar () {
    return '#000'
  },

  // Gutter
  get gutter () {
    return this.scale(15)
  },

  // Base values
  get baseBorderRadius () {
    return 6
  },

  get baseBorderColor () {
    return '#C8CCCE'
  },

  get basePlaceholderColor () {
    return '#999999'
  },

  get baseFontSize () {
    return this.scale(14)
  },

  get extraSmallFontSize () {
    return this.scale(10)
  },

  get smallFontSize () {
    return this.scale(12)
  },

  get mediumFontSize () {
    return this.scale(16)
  },

  get bigFontSize () {
    return this.scale(18)
  },

  get largeFontSize () {
    return this.scale(24)
  },

  get extraLargeFontSize () {
    return this.scale(28)
  },

  // Text
  get textPrimary () {
    return '#272c30'
  },

  get textSecondary () {
    return '#8F9295'
  },

  /**
   * Input label
   */
  get inputBackgroundColor () {
    return this.white
  },

  get inputDisabledBackgroundColor () {
    return this.disabledBackground
  },

  get inputPlaceholderColor () {
    return this.gray
  },

  get inputDisabledPlaceholderColor () {
    return this.lighten(this.basePlaceholderColor, 0.2)
  },

  get inputLabelColor () {
    return '#230B4C'
  },

  get inputLabelColorSecondary () {
    return '#999'
  },

  get inputLabelFontSize () {
    return this.bigFontSize
  },

  get inputSelectionColor () {
    return this.colorSecondary
  },

  get inputBorderWidth () {
    return 1
  },

  get inputborderRadius () {
    return this.gutter * 2
  },

  get inputBorderColor () {
    // TODO:
    return '#9997B3'
    // return this.blueLight
  },

  get inputDisabledBorderColor () {
    return this.lighten(this.inputBorderColor)
  },

  get inputColor () {
    return '#555555'
  },

  // Tag select
  get tagBorderRadius () {
    return 3
  },

  get tagBackgroundColor () {
    return this.darken('#F7F7F7', 0.025)
  },

  get searchBarBorderRadius () {
    return Platform.OS === 'ios' ? 5 : 2
  },

  // Back button
  get backButtonIconSize () {
    return this.scale(32)
  },

  // No Results
  get noResultsIconColor () {
    return this.bodyBackground
  },

  get noResultsIconFontSize () {
    return this.scale(72)
  },

  get noResultsTextColor () {
    return this.colorPrimary
  },

  get noResultsTextFontSize () {
    return this.scale(24)
  },

  // Tab bar icon
  get tabBarIconColor () {
    return '#BEBDBE'
  },
  get tabBarActiveIconColor () {
    return this.colorPrimary
  },
  get tabBarIconFontSize () {
    return 28
  },

  // AppLogo
  get appLogoSize () {
    return this.scale(112)
  },

  // Alert
  get alertWarningBackgroundColor () {
    return '#fff3cd'
  },

  get alertWarningColor () {
    return '#856404'
  },

  get alertWarningBorderColor () {
    return '#ffeeba'
  },

  get alertInfoBackgroundColor () {
    return '#cce5ff'
  },

  get alertInfoColor () {
    return '#004085'
  },

  get alertInfoBorderColor () {
    return '#b8daff'
  },

  get alertSuccessBackgroundColor () {
    return '#d4edda'
  },

  get alertSuccessColor () {
    return '#155724'
  },

  get alertSuccessBorderColor () {
    return '#c3e6cb'
  },

  // Circles
  get mainCircleWidth () {
    return this.scale(220)
  },

  get outterCircleWidth () {
    return this.scale(70)
  },

  get innerCircleWidth () {
    return this.scale(45)
  }
}
