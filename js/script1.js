function findselectedg() {
    var result = document.querySelector('input[name="childreng"]:checked').value;
    if(result=="Yes"){

        document.getElementById("inputtextg").setAttribute('disabled', true);
    }
    else{
        document.getElementById("inputtextg").removeAttribute('disabled');
    }
}
function findselecteda() {
    var result = document.querySelector('input[name="childrena"]:checked').value;
    if(result=="Yes"){

        document.getElementById("inputtexta").setAttribute('disabled', true);
    }
    else{
        document.getElementById("inputtexta").removeAttribute('disabled');
    }
}
function findselectedb() {
    var result = document.querySelector('input[name="childrenb"]:checked').value;
    if(result=="Yes"){

        document.getElementById("inputtextb").setAttribute('disabled', true);
    }
    else{
        document.getElementById("inputtextb").removeAttribute('disabled');
    }
}
function findselectedc() {
    var result = document.querySelector('input[name="childrenc"]:checked').value;
    if(result=="Yes"){

        document.getElementById("inputtextc").setAttribute('disabled', true);
    }
    else{
        document.getElementById("inputtextc").removeAttribute('disabled');
    }
}

function findselected() {
    var result = document.querySelector('input[name="children"]:checked').value;
    if(result=="Yes"){

        document.getElementById("inputtext").setAttribute('disabled', true);
    }
    else{
        document.getElementById("inputtext").removeAttribute('disabled');
    }
}

$(document).ready(function () {

    // This is a callback function,
    //     fires when a different section slides in
    $('#myCarousel').bind('slide.bs.carousel', function (e) {

        // Smooth Scrolls to Top
        $("html, body").animate({scrollTop: 0}, "slow");
    });


    // Listens for that checkbox and toggles the permanent address section.
    $('#permanentAddrCheck').on('change', function () {

        $('#permanent-address-wrap').slideToggle();

        // TODO: another function to copy the input values from current address to permanent address

    })

    // Instead of integrating any function on that next btn,
    // I made a Input type submit for every section and
    // and replace the a.nextButton to a label target towards that submit button

    // and made this listener which will fire on submit of first two forms
    // so If the validation goes through it will slide to the next section
    // else redirect to the invalid input.
    $('#section1, #section2').on('submit', function (e) {
        e.preventDefault();
        $('#myCarousel').carousel('next');
    })

});
