$(function () {

    // $(".email-form").submit(function(e) {
    //     e.preventDefault();
    //     alert($(".email-form").serialize());
    //     $.ajax({
    //             type: "GET",
    //             url: "send-mail.php",
    //             data: $(".email-form").serialize(),
    //             success:function(response) { alert("Thanks for signing up!"); },
    //             error: function () { alert("There was an error signing you up. Please make sure all your information is correct.") }
    //        });
       
    // });

    $('.header').height(Math.max($(window).height(), $('.header').height()));


    $(".email-form").submit(function(e) {
        e.preventDefault();
        
        var firstName = $(".name-field").val();
        var email = $(".email-field").val();
        
        
        // alert('Submitting ' + firstName + ' email: ' + email);
        
        var xmlhttp;
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
        else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                 alert('Thanks for signing up');
            }
          else {
            alert('Oops! Something went wrong. Try again...');
          }
          }
        xmlhttp.open("GET","http://www.surplusbidder.com/send-mail.php?e=" + email + "&f=" + firstName ,true);
        xmlhttp.send();

               
         });



});