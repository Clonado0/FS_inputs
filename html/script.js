var type;
var title;
var button;
$(document).ready(function(){
  
    $(".container").hide();    
    $("#container-input").hide();    
    
    window.addEventListener('message', function(event){
        $('#container-input').html('')
        var data = event.data;
        type=data.action;
        title = data.title;
        button = data.button;
        
        if (data.action == "open") {
            $(".container").fadeIn(1000);
            $("#container-input").fadeIn(0);
            $('#container-input').append(
                `<div id="container-input" style="display: none;"></div>
            <h3 style="margin-left: 40%;">${title}</h3>      <input type="text" id="input"/>
            </div>
            `
            );
            $('#submit').text(button)
        }
    });


});

$("#submit").click(function (event) {
    console.log("test")
    $(".container").hide();    
    $("#container-input").hide();     
    if(type=="open")
    $.post('http://FS_inputs/sendinput', JSON.stringify({input:$("#input").val()}));
});


document.onkeyup = function (data) {
    if (data.which == 27) { // Escape key
        $(".container").hide();    
        $("#container-input").hide();  
        $.post('http://FS_inputs/closeui');
    }
};