require 'jquery'
video = require './autoplayVideo'
require 'carousel'
carousel = require './carouselInit'
retina = require 'retina'
# chosen = require 'chosen'

if retina.Retina.isRetina()
  retina.Retina.init(window)

$ ->
  carousel()
  video()
