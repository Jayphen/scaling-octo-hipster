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

  $("[data-ga=click]").on 'click', ->
    $this = $(this)
    category = $this.data('ga-category')
    label = $this.data('ga-label')
    if typeof(window.ga) is not 'undefined'
      ga('send', 'event', category, 'Click', label)
    else
      console.log JSON.stringify $this.data(), null, ' '
