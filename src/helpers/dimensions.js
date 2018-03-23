import {
  Dimensions,
  PixelRatio
} from 'react-native'

const {
  height,
  width
} = Dimensions.get('window')

const getWidthSizeInWords = () => {
  const widthRatio = PixelRatio.getPixelSizeForLayoutSize(width)
  let widthSize = 'small'

  if (widthRatio > 640 && widthRatio < 1200) {
    widthSize = 'medium'
  }

  if (widthRatio > 1200) {
    widthSize = 'large'
  }

  return widthSize
}

const widthSizeInWords = getWidthSizeInWords()

export {
  height,
  width,
  widthSizeInWords
}
