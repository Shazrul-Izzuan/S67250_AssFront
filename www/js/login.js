$(function(){

    $('#btnRegister').click(function(){
        location.href='register.html';
    });

    $('#frmLogin').submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        alert('submit login form');
    });


})