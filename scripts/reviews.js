var str="";
//on or off campus radio buttons
str+="<div class='onoff'>Rating on or off campus?<br>";
str+="<input type='radio' id='on' name='onoff' value='on'>";
str+="<label for='on'>on campus</label><br>";
str+="<input type='radio' id='off' name='onoff' value='off'>";
str+="<label for='off'>off campus</label>";
str+="</div>";

//dorms for on-campus option
var dorms = ["Court at Professors Row","1023 Beacon Street","1025 Beacon Street",
"1047 Beacon Street","Bush Hall","Carmichael Hall","Hill Hall","Hodgdon Hall",
"Houston Hall","Metcalf Hall","Miller Hall","Richardson House","Tilton Hall",
"Wilson House","Simpson House","West Hall","Simpson/Carpenter House",
"Harleston Hall","Haskell Hall","Lewis Hall","Stratton Hall","Wren Hall",
"Hillside Apartments","Latin Way","Sophia Gordon Hall","Community Houseing (CoHo)",
"9-11 Sunset Road","10 Winthrop Street","Fairmount House","McCollester House",
"Tousey House","159 College Ave","122 Powder House Blvd.","126 Powder House Blvd.",
"11 Teele Avenue", "97 Curtis St","102 Curtis St","146 Curtis St","80 Packard Ave",
"14 Whitfield Rd","44 Teele Ave","50 Sawyer Ave"]

str+="<div class = 'dorm'>";
str+="<label for='dorms' id='dormsLabel'>Choose which dorm: </label>";
str+="<select id='dorms' name='dorms'>";
str+="<option value ='' disabled selected>Select a dorm</option>";
for (i = 0; i < dorms.length-1; i++) {
    str+="<option value='"+i+"'>"+dorms[i]+"</option>";
}
str+="</select>";  
str+="</div>";

str+="<div class='address'>";
str+="<label for='offAddress' id='AddressLabel'>";
str+="What's the address of your off-campus housing? </label>";
str+="<input type='text' id = 'offAddress' placeholder='Address'>";
str+="</div>";

document.getElementById("tophalf").innerHTML = str;

$(document).ready(function() {
    $('.dorm').hide();
    $('.address').hide();

    $("#rating").on("input", function() {
        var sliderValue = $(this).val();
        $('.slidervalue').text(sliderValue + "/5");
    });

    var selected= false;
    $('#on').on('change', function() {
        $('.dorm').show();
        $('.address').hide();
        selected=true;
    });
    $('#off').on('change', function() {
        $('.dorm').hide();
        $('.address').show();
        selected = true;
    });

    $('#reviewform').submit(function(event) {
        if (!selected) {
            alert("Please select on or off-campus housing");
            event.preventDefault();
        } else if ($('#on').is(":checked") && document.getElementById("dorms").value == "") {
            alert("Please select a dorm");
            event.preventDefault();
        } else if ($('#off').is(":checked") && $("#offAddress").val() == "") {
            alert("Please input an off-campus housing address");
            event.preventDefault();
        } else {
            alert("Form submitted! We'll review your rating before posting it on the website.");
        }
    });
});
