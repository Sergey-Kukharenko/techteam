const defaults = {
  async: true,
  type: 'text/javascript',
}

const scriptInjecting = {
  inject: (url, options = {}) => {
    const _options = {
      ...defaults,
      ...options,
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script')

      script.type = _options.type
      script.async = _options.async
      script.src = url

      script.onload = function (event) {
        resolve(event)
      }
      script.onerror = function (error) {
        reject(error)
      }

      document.head.appendChild(script)
    })
  },

  // uninject: () => {}
  // reinject: () => {}
}

export { scriptInjecting }
