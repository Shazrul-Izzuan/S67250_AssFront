$(function(){

    $('#btnLogin').click(function(){
        location.href='login.html';
    });

    $('#frmRegister').submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        var email = $('#email').val();
        var name = $('#name').val();
        var password1 = $('#password1').val();
        var password2 = $('#password2').val();

        if (!enoughLength(password1,password2)){
            alert("Password must have minimum of 8 characters!");
        }else{
            if (!match(password1,password2)){
                alert('Password not match!');
            }else{
                //further the processing
                var datalist="email="+email+"&name="+name+"&password="+password1;
                $.ajax({
                    type: "post",
                    url: 'https://bengkel.odaje.biz/register.php',
                    data: datalist,
                    cache: false,
                    success: function(mydata){
                        if(mydata.status===-1){
                              alert(mydata.msg);
                        }else{
                            alert(mydata.msg);
                            location.href='login.html';
                        }
                          
                    },
                    error: function(e){
                        console.log("Ajax error");
                        alert("Please contact admin!");

                    }

                });
            }
        }


    });


    function match(p1,p2){
        return (p1==p2?true:false);
    }

    function enoughLength(p1,p2){
        // return (p1.length > 7 && p2.length > 7)
        if (p1.length > 7 && p2.length > 7){
            return true;
        }
        return false;
    }
})