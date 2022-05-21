/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


(function() {
  // Add custom code below this line

  var css_to_show='';
  var query_strings;

  // Show/hide duplicated filter section
  $(".custom_type p").css('display', 'none');
  $(".custom_type ul").css('display', 'none');

  $(".custom_type p:first-of-type").css('display', 'block');
  $(".custom_type ul:first-of-type").css('display', 'block');

  // Hide empty filters
  if($(".custom_size ul li").length==0){
    $(".custom_size").css('display', 'none');
  }
  if($(".custom_color ul li").length==0){
    $(".custom_color").css('display', 'none');
  }
  if($(".custom_type ul li").length==0){
    $(".custom_type").css('display', 'none');
  }
  if($(".custom_occasion ul li").length==0){
    $(".custom_occasion").css('display', 'none');
  }


  if (window.location.search !='' && window.location.search.indexOf('custom')>-1){
    $(".product-grid .product-item").css("display", 'none');
    
    $( ".collection__sidebar form.custom input:checkbox" ).each(function(){
      
        if(window.location.search.indexOf($(this).val())>-1){
          $( this ).attr( 'checked', true );
          css_to_show = css_to_show +',' + $(this).val()
                        
        }
        
        
    });
    console.log(css_to_show);
    
    
      query_strings = css_to_show.split(',')
      for (i = 0; i < query_strings.length; i++) {
        console.log(query_strings[i]);  
        a=query_strings[i].split('_')
        
        // Add show/hide attributes to products
        $(".product-grid .product-item").each(function(){
          if (css_to_show.indexOf('Size')==-1) $(this).attr('size_show', 'true');
          if (css_to_show.indexOf('Color')==-1) $(this).attr('color_show', 'true');
          if (css_to_show.indexOf('Occasion')==-1) $(this).attr('occasion_show', 'true');
          if (css_to_show.indexOf('Type')==-1) $(this).attr('type_show', 'true');

          if ($(this).hasClass(query_strings[i])) {
            switch(a[0]) {
              case 'Color':
                $(this).attr('color_show', 'true');
               break;
              case 'Size':
                $(this).attr('size_show', 'true');
               break;
              case 'Occasion':
                $(this).attr('occasion_show', 'true');
              break;
              case 'Type':
                $(this).attr('type_show', 'true');
                break;
              default:
              // code to be executed if n is different from case 1 and 2
            }   
          }
        });

        // Display product 
        $(".product-grid .product-item").each(function(){
          if ($(this).attr('color_show')=='true' && $(this).attr('size_show')=='true' && $(this).attr('type_show')=='true' && $(this).attr('occasion_show')=='true'){
            $(this).attr('show', 'show');
            $(this).css('display', 'block')
          }
        
        })

        // Display product number
        $(".collection__sidebar__head h3").text($('[show=show]').length+" "+'ITEMS')
        
      }
    
  }

  $(".active__filters__remove").click(function(){
    window.location.href = $(this).attr('href');
  })
  $(".active__filters__clear").click(function(){
    window.location.href = $(this).attr('href');
  })
  $(".no-results a.btn").click(function(){
    window.location.href = $(this).attr('href');
  })

  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
  };
  
  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
})();


