var phonegapReady = function(){
    new jQuery.nd2Toast({message:"we are in phonegap"});
};
jQuery(document).ready(function(){
document.addEventListener("deviceready", phonegapReady, false);
});
