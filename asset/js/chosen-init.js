(function () {
    function initChosen() {
      if (typeof jQuery === 'undefined' || !jQuery.fn || !jQuery.fn.chosen) return;
      jQuery('#search-facets select.chosen-select').chosen({
        width: '100%',
        search_contains: true
      });
    }
  
    document.addEventListener('DOMContentLoaded', initChosen);
  })();