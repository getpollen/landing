const config = {
  apiKey: 'AIzaSyCYqAm9zXM1Gl4wthTp39kMFdpAzuOm4-o',
  authDomain: 'pollen-landing.firebaseapp.com',
  databaseUrl: 'https://pollen-landing.firebaseio.com',
  storageBucket: 'pollen-landing.appspot.com'
}

export const uuid = () => {
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
}

export const update = (method, url, data) => {
  const xhr = new XMLHttpRequest()
  const dataString = JSON.stringify(data)
  xhr.open('POST', `https://pollen-landing.firebaseio.com/${url}.json`, true)
  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8')
  xhr.setRequestHeader('X-HTTP-Method-Override', method)
  const promise = new Promise((resolve, reject) => {
    xhr.onerror = reject
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        resolve(xhr)
      }
    }
  })
  xhr.send(dataString)
  return promise
}
