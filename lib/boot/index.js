var path = require('path')
var express = require('express')
var t = require('t-component')
var translations = require('lib/translations')
var config = require('lib/config')

var app = module.exports = express()

/**
 * Set `views` directory for module
 */

app.set('views', __dirname)

/**
 * Set `view engine` to `jade`.
 */

app.set('view engine', 'jade')

/**
 * middleware for favicon
 */

app.use(express.favicon(path.join(__dirname, '/assets/favicon.ico')))

/*
 * Register Models and Launch Mongoose
 */

require('lib/models')(app)

/**
 * Set `app` configure settings
 */

require('lib/setup')(app)

/*
 * PassportJS Auth Strategies and Routes
 */

require('lib/auth')(app)

/*
 * Register routes aliases
 */

require('lib/boot/routes')(config.multiForum)

/*
 * Load /ext folder
 */

app.use(require('lib/ext'))

/*
 * Twitter card routes
 */

app.use('/twitter-card', require('lib/twitter-card'))

/*
 * Facebook card routes
 */

app.use('/facebook-card', require('lib/facebook-card'))

/*
 * Load v2 api endpoints
 */

app.use('/api/v2', require('lib/api-v2/boot'))

/*
 * Load api endpoints
 */

app.use(require('lib/api/boot'))

/*
 * RSS routes
 */

app.use('/rss', require('lib/rss'))

/**
 * Load localization dictionaries to translation application
 */

translations.help(t)

/**
 * Init `t-component` component with parameter locale
 */

t.lang(config.locale)

/**
 * Set native `express` router middleware
 */

app.use(app.router)

// Here we should have our own error handler!

/**
 * Set native `express` error handler
 */

app.use(express.errorHandler())

/**
 * Load Styleguide
 */
if (config.env !== 'production') {
  app.use(require('lib/styleguide'))
}

/**
 * Front End Pages
 */

app.use(require('lib/browser-update'))
app.use(require('lib/settings/boot'))
app.use(require('lib/admin/boot'))
app.use(require('lib/site/boot'))
app.use(require('lib/404'))
