jQuery(function ($) {
    // Use chosenOptions from main
    var opts = window.chosenOptions || { width: '100%', search_contains: true };
  
    $('.chosen-select').each(function () {
      var $this = $(this);
      // don't initialize twice
      if ($this.data('chosen')) return;
      $this.chosen(opts);
    });
  
    $(document).on('chosen:showing_dropdown', '.chosen-select', function (e) {
      var chosenContainer = $(e.target).next('.chosen-container');
      var dropdown = chosenContainer.find('.chosen-drop');
      var dropdownTop = dropdown.offset().top - $(window).scrollTop();
      var dropdownHeight = dropdown.height();
      var viewportHeight = $(window).height();
      if (dropdownTop + dropdownHeight > viewportHeight) {
        chosenContainer.addClass('chosen-drop-up');
      }
    });
    $(document).on('chosen:hiding_dropdown', '.chosen-select', function (e) {
      $(e.target).next('.chosen-container').removeClass('chosen-drop-up');
    });
  });