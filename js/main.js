$(document).ready(function() {
	
    $("button#th").click(function() {
        $("div#tehsilim").show(500);
        $("div#sheherim").hide();
        $("div#cv").hide();
        $("div#elaqe").hide();
        $("div#layihelerim").hide();
    })
    $("button#sh").click(function() {
        $("div#tehsilim").hide();
        $("div#haqqimda").hide();
        $("div#layihelerim").hide();
        $("div#cv").hide();
        $("div#elaqe").hide();
        $("div#sheherim").show(500);
    })
    $("button#hq").click(function() {

        $("div#tehsilim").hide();
        $("div#sheherim").hide();
        $("div#sertfikatlarim").hide();
        $("div#layihelerim").hide();
        $("div#cv").hide();
        $("div#elaqe").hide();
        $("div#haqqimda").show(500);
    })
    $("button#ly").click(function() {

        $("div#tehsilim").hide();
        $("div#sheherim").hide();
        $("div#haqqimda").hide();
        $("div#sertfikatlarim").hide();
        $("div#cv").hide();
        $("div#elaqe").hide();
        $("div#layihelerim").show(500);
    })
    $("button#sr").click(function() {

        $("div#tehsilim").hide();
        $("div#sheherim").hide();
        $("div#haqqimda").hide();
        $("div#layihelerim").hide();
        $("div#cv").hide();
        $("div#elaqe").hide();
        $("div#sertfikatlarim").show(500);
    })
    $("button#cv").click(function() {

        $("div#tehsilim").hide();
        $("div#sheherim").hide();
        $("div#haqqimda").hide();
        $("div#layihelerim").hide();
        $("div#sertfikatlarim").hide();
        $("div#elaqe").hide();
        $("div#cv").show(500);
    })
    $("button#el").click(function() {

        $("div#tehsilim").hide();
        $("div#sheherim").hide();
        $("div#haqqimda").hide();
        $("div#layihelerim").hide();
        $("div#sertfikatlarim").hide();
        $("div#cv").hide();
        $("div#elaqe").show(500);
    })



                
    })