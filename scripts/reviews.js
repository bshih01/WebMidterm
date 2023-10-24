//on or off campus radio buttons
document.write("<div class='onoff'>Rating on or off campus?<br>");
document.write("<input type='radio' id='on' name='onoff' value='on'>");
document.write("<label for='on'>on campus</label><br>");
document.write("<input type='radio' id='off' name='onoff' value='off'>");
document.write("<label for='off'>off campus</label>");
document.write("</div>");

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

document.write("<div class = 'dorm'>");
document.write("<label for='dorms' id='dormsLabel'>Choose which dorm: </label>");
document.write("<select id='dorms' name='dorms'>");
for (i = 0; i < dorms.length-1; i++) {
    document.write("<option value='"+i+"'>"+dorms[i]+"</option>")
}
document.write("</select>");  
document.write("</div>");

document.write("<div class='address'>");
document.write("<label for='offAddress' id='AddressLabel'>");
document.write("What's the address of your off-campus housing? </label>");
document.write("<input type='text' id = 'offAddress' placeholder='Address'>");
document.write("</div>");

$(document).ready(function() {
    $('.dorm').hide();

    $('.address').hide();

    $('#on').on('change', function() {
        $('.dorm').show();
        $('.address').hide();
    });
    $('#off').on('change', function() {
        $('.dorm').hide();
        $('.address').show();
 
    });

    $('#reviewform').submit(function() {
        alert("Form submitted! We'll review your rating before posting it on the website.");
    });
});

