function getParam(name){var results = new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);if(results==null){return null} return decodeURI(results[1]) || 0;}
function last_path(url){var rmvparam = url.split('?')[0]; var path = rmvparam.substring(rmvparam.lastIndexOf('/') + 1); return path;}
function updateParam(uri,key,value) {var re = new RegExp("([?&])" + key + "=.*?(&|#|$)", "i");if( value === undefined || value === "") {if (uri.match(re)) {return uri.replace(re, '$1$2').replace(/[?&]$/, '').replaceAll(/([?&])&+/g, '$1').replace(/[?&]#/, '#');} else {return uri;}} else {if (uri.match(re)) {return uri.replace(re, '$1' + key + "=" + value + '$2');} else {var hash =  '';if( uri.indexOf('#') !== -1 ){hash = uri.replace(/.*#/, '#');uri = uri.replace(/#.*/, '');};var separator = uri.indexOf('?') !== -1 ? "&" : "?";return uri + separator + key + "=" + value + hash;}}}