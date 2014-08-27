CSSModal = require 'modal'
require 'froogaloop'

module.exports = ->
  video = {}
  played = false
  player = {}

  playVid = ->
    video = $(CSSModal.activeElement).find('#hiw-vid').get(0)
    if video
      player = $f(video)
      player.api 'play'
      played = true

  pauseVid = ->
    if played
      player.api 'pause'

  init = (modal) ->
    CSSModal = modal
    CSSModal.init()

    CSSModal.on 'cssmodal:show', document, playVid
    CSSModal.on 'cssmodal:hide', document, pauseVid

  $ ->
    init(CSSModal)
