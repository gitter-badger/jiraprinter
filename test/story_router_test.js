var express = require('express')
var sinon = require('sinon')
require('should')

var StoryRouter = require('../routes/story_router')

describe('StoryRouter', function () {
  var sr, router, _router

  beforeEach(function () {
    router = express.Router()
    _router = sinon.mock(router)
    sr = new StoryRouter({}, router)
    sr.stories = {
      get: function () {}
    }
  })

  afterEach(function () {
    _router.restore()
  })

  function verifyAll () {
    _router.verify()
  }

  describe('routes', function () {
    it('returns router', function (done) {
      _router.expects('get').withArgs('/')

      sr.routes().should.be.ok()
      verifyAll()
      done()
    })
  })
})
