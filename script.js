var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$.expr[":"].contains = $.expr.createPseudo(function(arg) {
  return function( elem ) {
      return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
  };
});
      $("#search").on("keyup", function() {
  var value = $(this).val();
  if(value!='') {
     $(".command-div").hide();
  }else{
    $(".command-div").show();
}
$('.command-div:contains("'+value+'")').show(); 
});

const threshold = .1
            const options = {
                root: null,
                rootMargin: '0px',
                threshold
            }

            const handleIntersect = function (entries, observer) {
                entries.forEach(function (entry) {
                if (entry.intersectionRatio > threshold) {
                    entry.target.classList.remove('revealShow')
                        observer.unobserve(entry.target)
                    }
                })
            }

            document.documentElement.classList.add('revealShowLoaded')

            window.addEventListener("DOMContentLoaded", function () {
                const observer = new IntersectionObserver(handleIntersect, options)
                const targets = document.querySelectorAll('.revealShow')
                targets.forEach(function (target) {
                    observer.observe(target)
            })
            })

function myFunction() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        }
        var myVar;

        function myFunctionn() {
          myVar = setTimeout(showPage, 2000);
        }
        
        function showPage() {
          document.getElementById("loader").style.display = "none";
          document.getElementById("myDiv").style.display = "block";
        }

        $(document).ready(function() {
          $('#showmenu').click(function() {
                  $('.hidden-menu').slideToggle("fast");
          });
      });

}
/*
     FILE ARCHIVED ON 09:38:53 Nov 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:58:55 May 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.
     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 3.582
  captures_list: 314.697
  CDXLines.iter: 19.705 (3)
  exclusion.robots: 0.201
  exclusion.robots.policy: 0.186
  esindex: 0.012
  PetaboxLoader3.datanode: 205.51 (4)
  PetaboxLoader3.resolve: 106.978 (2)
  LoadShardBlock: 287.223 (3)
  load_resource: 52.174
*/
