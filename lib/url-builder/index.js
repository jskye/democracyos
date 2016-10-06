var urls = {}

module.exports.register = function urlBuilderRegister (label, path) { urls[label] = path }

module.exports.for = function urlBuilderFor (label, params) {
  var url = urls[label]
  if (!url) throw new Error('Unknown label for urlBuilder ' + label)
  if (params) {
    Object.keys(params).forEach(function (param) {
      var pExp = new RegExp(':' + param, 'g')
      url = url.replace(pExp, params[param])
    })
  }
  return url
}
