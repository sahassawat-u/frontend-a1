
$(document).ready(function(){
    var is1st_time = true;
    $( "#username" ).addClass('NoOutline');
    $( "#username" ).focus(function() {
        var id = $(this).val();
        if(is1st_time){
            is1st_time=false;
            $(this).addClass('FirstEntry')
            $(this).css({ "border": '#0080FF 1px solid'});
        }
        else if(isValid(id)){
            $(this).css({ "box-shadow": '0 0 0px 3px rgb(204, 230, 245)'});
        }
        else{
            $(this).css({ "box-shadow": '0 0 0px 3px rgb(231, 201, 201)'});
        }
    });
    $( "#username" ).focusout(function() {
        var id = $(this).val();
        $(this).css({ "box-shadow": 'none'});
        if(isValid(id)){
            $(this).css({ "border": '#0080FF 1px solid'});
            $('#result').html('');
        }
        else{
            $(this).css({ "border": '#FF0000 1px solid'});
            $('#result').html('A valid email is required'.fontcolor("red"));
            $('#result').addClass('invalidMessage');
        }
    });
    $('button.subscribe-button').click(function(){
        var id = $('#username').val();
        if(isValid(id))location.replace('succeed.html')
    })

    var isValid = function(id){
        return /[a-zA-z0-9._]+@[a-zA-Z]+\.[a-zA-z]{2,4}/.test(id)
    }
});