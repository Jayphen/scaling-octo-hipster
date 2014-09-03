module.exports = ->
  $("#invitation-form").on 'submit', (e) ->
    e.preventDefault()
    $this = $(this)
    $errorContainer = $this.find('.errors')
    $successContainer = $this.parents('.modal-content').find('.invitation-success')
    $formWrap = $('.invitation-form-wrap')
    $submitBtn = $this.find('input[type=submit]')
    postData = "#{$this.serialize()}&signup=1"

    showError = (data, msg) ->
      window.location.hash = '#invitation-form'
      $errorContainer.removeClass 'u-hide'
      showMsg = if typeof(msg) != 'undefined' then msg else data
      $errorContainer.find('p')
        .text(showMsg)
      $submitBtn.fadeTo('fast', 1).prop('disabled', false)

    $.post "http://peerbrief.com/wp-content/plugins/peerbrief/signup-script.php", postData, (data) ->
      $submitBtn.fadeTo('fast', 0.5).prop('disabled', true)
      # If there's an error.
      # Really should be using HTTP headers for this

      if data == 'Email address is already in use.'
        showError(data, 'That email address has already been used!')
      else if data.indexOf('ERROR') != -1
        showError(data)
      else
        $formWrap.fadeOut ->
          $successContainer.fadeIn().removeClass('u-hide')

    .fail (data) ->
      console.log "Fail: #{data}"
