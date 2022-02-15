const successCallback = (app, controller) => {
  return (req, res, next) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type'),
        'Authorization': req.get('Authorization'),
        Referer: req.get('referer'),
				'User-Agent': req.get('User-Agent'),
				"x-no-compression": req.get('x-no-compression')
      }
    }
    controller(app, httpRequest)
      .then(httpResponse => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers)
        }
        if (httpResponse.cookies) {
          httpResponse.cookies.forEach(cookie => {
            res.cookie(cookie.key, cookie.value, cookie.options)
          })
        }
        res.type('json')
        res.status(httpResponse.statusCode).send(httpResponse.body)
      })
      .catch((error) => {
        next(error)
      })
  }
}

export default successCallback
