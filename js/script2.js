
$(document).ready(function(){
    $("select.country").change(function(){
        var selectedCountry = $(".country option:selected").val();
        alert("You have selected the country - " + selectedCountry);
    });
});
function selectAwards(select)
{
  var $ul = $(select).prev('ul');

  if ($ul.find('input[value=' + $(select).val() + ']').length == 0)
    $ul.append('<li onclick="$(this).remove();">' +
      '<input type="hidden" name="ingredients[]" value="' +
      $(select).val() + '" /> ' +
      $(select).find('option[selected]').text() + '</li>');
}
