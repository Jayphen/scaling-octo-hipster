require 'jquery'
video = require './autoplayVideo'
CSSModal = require 'modal'
require 'carousel'
carousel = require './carouselInit'
chosen = require 'chosen'
retina = require 'retina'

if retina.Retina.isRetina()
  retina.Retina.init(window)

$ ->
  carousel()
  video()
