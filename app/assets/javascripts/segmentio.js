var analytics=analytics||[];
(
  function(){
    var e=["identify","track","trackLink","trackForm","trackClick","trackSubmit","page","pageview","ab","alias","ready","group"],
    t=function(e){
      return function(){
        analytics.push([e].concat(Array.prototype.slice.call(arguments,0)))
      }
    };
  for(var n=0;n<e.length;n++)analytics[e[n]]=t(e[n])})(),analytics.load=function(e){
    var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"===document.location.protocol?"https://":"http://")+"d2dq2ahtl5zl1z.cloudfront.net/analytics.js/v1/"+e+"/analytics.min.js";
    var n=document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(t,n)
  };
  analytics.load('66w1mgqvve');
  // Accomodate turbolinks
  $(document).on('ready page:change', function() {
      console.log('page loaded');
      analytics.page();
      analytics.trackForm($('#new_subscriber'), 'Signed Up');
      analytics.trackForm($('#new_contact'), 'Contact Request');
  })
)