require 'jquery'
video = require './autoplayVideo'
modal = require 'modal'
require 'carousel'
carousel = require './carouselInit'
chosen = require 'chosen'

modal.init()

$ ->
  carousel()
  video()
