 $( function() {
    $( "#btn-chat" ).click(function() {

        processUserInput();

    })

    $(document).keypress(function(e) {
        if(e.which == 13) {
            processUserInput();
        }
    });

  });

 function processUserInput() {

        var input = $("#btn-input").val();
        var template = _.template($("#myText").html());
        var html = template({text: input});
        $(".chat").append(html);

        var responseTemplate = _.template($("#response").html());
        var answer = robotResponse(input);
        var responseHtml = responseTemplate({text: answer});
        $(".chat").append(responseHtml);


        $("#btn-input").val("");

 }