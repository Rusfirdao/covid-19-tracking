$(function(){

    $.getJSON(".../data/dashboard.json",function(result){
        console.log(result);
        $("#earning").html(result.earning);

    });
})