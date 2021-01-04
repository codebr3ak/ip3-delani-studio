//    what we do section
$('.main').click(function () {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});
$("#work1")
    .mouseenter(function () {
        $("#overlay").show("slow");
    })
    .mouseleave(function () {
        $("#overlay").hide("slow");
});

$("#work2")
    .mouseenter(function () {
        $("#overlay2").show("slow");
    })
    .mouseleave(function () {
        $("#overlay2").hide("slow");
    });

    $("#work3")
    .mouseenter(function () {
        $("#overlay3").show("slow");
    })
    .mouseleave(function () {
        $("#overlay3").hide("slow");
    });

    $("#work4")
    .mouseenter(function () {
        $("#overlay4").show("slow");
    })
    .mouseleave(function () {
        $("#overlay4").hide("slow");
    });
    
    $("#work5")
    .mouseenter(function () {
        $("#overlay5").show("slow");
    })
    .mouseleave(function () {
        $("#overlay5").hide("slow");
    });

    $("#work6")
    .mouseenter(function () {
        $("#overlay6").show("slow");
    })
    .mouseleave(function () {
        $("#overlay6").hide("slow");
    });

    $("#work7")
    .mouseenter(function () {
        $("#overlay7").show("slow");
    })
    .mouseleave(function () {
        $("#overlay7").hide("slow");
    });

    $("#work8")
    .mouseenter(function () {
        $("#overlay8").show("slow");
    })
    .mouseleave(function () {
        $("#overlay8").hide("slow");
    });


//portifolio section 
// giving feedback to the customer
$("button").click(function () {
  var client = document.getElementById('nameDetail').value;
  alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
  .preventDefault();
});


//    reset my form button
$("button").on('click', function () {
  $('form').each(function () {
    this.reset();
  });
});
