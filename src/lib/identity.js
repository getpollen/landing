import * as _ from 'lodash'

const ID_KEY = 'userId'
const EMAIL_KEY = 'userEmail'

const uuid = _.memoize(() => {
  let d = Date.now()
  if (
    typeof performance !== 'undefined' &&
    typeof performance.now === 'function'
  ) {
    d += performance.now()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = ((d + Math.random() * 16) % 16) | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
})

const fake = (name, dummy) => {
  return function() {
    if (typeof window === 'undefined') {
      return dummy || _.noop
    }
    return window[name] || dummy || _.noop
  }
}

const localStorage = fake('localStorage', {
  setItem: _.noop,
  getItem: _.noop
})
const gtag = fake('gtag')
const FS = fake('FS', {
  identify: _.noop
})

const loadId = () => {
  let id = localStorage().getItem(ID_KEY)
  if (!id) {
    id = uuid()
    localStorage().setItem(ID_KEY, id)
  }
  return id
}

const loadEmail = () => localStorage().getItem(EMAIL_KEY)

export const saveEmail = email => {
  localStorage().setItem(EMAIL_KEY, email)
  FS.identify(loadId(), { email })
}

export const user = () => {
  return {
    id: loadId(),
    email: loadEmail()
  }
}
