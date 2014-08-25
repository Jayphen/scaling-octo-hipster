require 'jquery'
video = require './autoplayVideo'
modal = require 'modal'
require 'carousel'
carousel = require './carouselInit'
chosen = require 'chosen'
retina = require 'retina'

modal.init()

if retina.Retina.isRetina()
  retina.Retina.init(window)

$ ->
  carousel()
  video()
