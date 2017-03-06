function findselectedg() {
    var result = $('input[name="childreng"]:checked');
    if(result){
        $("#inputtextg").setAttribute('disabled', true);
    }
    else{
        $("#inputtextg").removeAttribute('disabled');
    }
}
function findselecteda() {
    var result = $('input[name="childrena"]:checked');
    if(result){

        $("#inputtexta").setAttribute('disabled', true);
    }
    else{
        $("#inputtexta").removeAttribute('disabled');
    }
}
function findselectedb() {
    var result = $('input[name="childrenb"]:checked');
    if(result){

        $("#inputtextb").setAttribute('disabled', true);
    }
    else{
        $("#inputtextb").removeAttribute('disabled');
    }
}
function findselectedc() {
    var result = $('input[name="childrenc"]:checked');
    if(result){

        $("#inputtextc").setAttribute('disabled', true);
    }
    else{
        $("#inputtextc").removeAttribute('disabled');
    }
}

function findselected() {
    var result = $('input[name="children"]:checked');
    if(result){

        $("#inputtext").setAttribute('disabled', true);
    }
    else{
        $("#inputtext").removeAttribute('disabled');
    }
}
$( document ).ready(function () {

    $('#myCarousel').bind('slide.bs.carousel', function (e) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        console.log('slide event!');
    });


    $('#permanentAddrCheck').on('change', function () {
        console.log('click');
        $('#permanent-address-wrap').slideToggle();
    })
});
