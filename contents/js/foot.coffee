require 'jquery'
video = require './autoplayVideo'
require 'carousel'
carousel = require './carouselInit'
# chosen = require 'chosen'
retina = require 'retina'

if retina.Retina.isRetina()
  retina.Retina.init(window)

$ ->
  carousel()
  video()
