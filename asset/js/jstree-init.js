jQuery(function($){
    $('.thesaurus-tree').each(function(){
      var $el = $(this);
      try {
        if (!$el.data('jstree-initialized')) {
          $el.jstree({ 'core': { 'themes': { 'dots': false, 'icons': false } } });
          
          $el.on('select_node.jstree', function (e, data) {
            var href = data.node && data.node.a_attr && data.node.a_attr.href;
            if (href && href !== '#') {
              window.location.href = href;
            }
          });

          $el.data('jstree-initialized', true);
        }
      } catch (e) {
        if (window.console) console.error('jstree init failed', e);
      }
    }); 
});



