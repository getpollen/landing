const getScript = src =>
  new Promise((resolve, reject) => {
    const head = document.getElementsByTagName('head')[0],
      script = document.createElement('script')
    script.async = true
    script.src = src
    script.onload = script.onreadystatechange = () => {
      if (!script.readyState || /loaded|complete/.test(script.readyState)) {
        script.onload = script.onreadystatechange = null
        if (head && script.parentNode) {
          head.removeChild(script)
        }
        resolve(script)
      }
    }
    head.insertBefore(script, head.firstChild)
  })

export default getScript
