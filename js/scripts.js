$(document).ready(function() {
            $('#fullpage').fullpage({
                anchors: ['donate-now', 'donation-provides', 'make-difference'],
                scrollOverflow: true
            });
        });


// TIMER ######################################
function countdown(minutes, seconds) {
    var endTime, hours, mins, msLeft, time;

    function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer() {
        msLeft = endTime - (+new Date);
        if (msLeft < 1000) {
            countdown(2, 0);
        } else {
            time = new Date(msLeft);
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            //element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
            $("#minutes").text(twoDigits(mins));
            $("#seconds").text(twoDigits(time.getUTCSeconds()));
            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
    }

    //element = document.getElementById(elementName);
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
}

countdown(2, 0);

// Scroll Horizontal ######################################

$(window).load(function() {
    
    $("#flexiselDemo5").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,         
        autoPlay: {
            enable: false,
            interval: 4000,
            pauseOnHover: true
        }        
    });
    
       
});



/*
window.addEventListener("orientationchange", function() {                   
    
    if (window.matchMedia("(orientation: landscape)").matches) {
       $('#fullpage').hide();
       $('#landscape-error').show();
     }

    if (window.matchMedia("(orientation: portrait)").matches) {
       window.location.reload(true);
     } 



}, false);

*/


