function postToGoogle() {
    
        var name = $('#name').val();
        var phone = $('#phone').val();
        var college = $('#college').val();
        var collegecity= $("input[type='radio'][name='qs5']:checked").val();
        var email = $('#email').val();
        var coupoun = $('#coupoun').val();
        var year = $("input[type='radio'][name='qs6']:checked").val();
        
            $.ajax({
            url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSeM-VWeo4Q6dpytXA5dbe3S10KwtOeOWPNU8UPsk5eTxEUB8w/formResponse",
            data: {
                "entry.1735346271": name,
                 "entry.393911750": phone,
                  "entry.1827584616": email,
                  "entry.1041274008": college,
                  "entry.1677752873": collegecity,
                  "entry.1788395987": coupoun,
                  "entry.334726096":year 
                },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function() {
                    // window.open("URL");
                    alert("Thank you for sending us your details. Our team will get in touch with you shortly regarding the Smart Card. Just download the app first.");
                },
                 200: function() {
                    // window.location.href("Uhttps://www.redcarpetup.com/");
                //     window.open("URL");
                   alert("Thank you for sending us your details. Our team will get in touch with you shortly regarding the Smart Card. Just download the app first. ");
                 }
            }
        });
        
    }
     
    // $(document).ready(function(){
    //     $('#leadform').submit(function() {
    //         postToGoogle();
    //         return false;
    //     });
    // });
