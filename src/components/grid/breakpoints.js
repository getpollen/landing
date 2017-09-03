import * as _ from 'lodash/fp'

const DESKTOP = 992
const TABLET = 768
const PHONE = 576

const pickSetting = (size, settings, defaultSetting = {}) => {
  if (size < PHONE && settings.xs) {
    return settings.xs
  } else if (size < TABLET && settings.sm) {
    return settings.sm
  } else if (size < DESKTOP && settings.md) {
    return settings.md
  } else {
    return settings.lg || defaultSetting
  }
}

export default pickSetting
