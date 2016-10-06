var urlBuilder = require('lib/url-builder')

module.exports = function (multiForum) {
  var forum = multiForum ? '/:forum' : '/'
  urlBuilder.register('admin', forum + 'admin')
  urlBuilder.register('admin.section', forum + 'admin/:section')
  urlBuilder.register('admin.section.wild', forum + 'admin/:section/*')
  urlBuilder.register('admin.topics', forum + 'admin/topics')
  urlBuilder.register('admin.topics.create', forum + 'dmin/topics/create')
  urlBuilder.register('admin.topics.id', forum + 'admin/topics/:id')
  urlBuilder.register('admin.tags', forum + 'admin/tags')
  urlBuilder.register('admin.tags.create', forum + 'admin/tags/create')
  urlBuilder.register('admin.tags.id', forum + 'admin/tags/:id')
  urlBuilder.register('admin.users', forum + 'admin/users')
  urlBuilder.register('admin.users.create', forum + 'admin/users/create')
  urlBuilder.register('admin.users.id', forum + 'admin/users/:id')
  urlBuilder.register('admin.permissions', forum + 'admin/permissions')
}
