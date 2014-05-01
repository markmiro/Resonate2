$(function () {

    $(".email-form").submit(function(e) {
        e.preventDefault();
        alert($(".email-form").serialize());
        $.ajax({
                type: "GET",
                url: "send-mail.php",
                data: $(".email-form").serialize(),
                success:function(response) {
                        alert("Thanks for signing up!");
                    },
                error: function () { alert("There was an error signing you up. Please make sure all your information is correct.") }
           });
       
    });


});