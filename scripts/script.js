$(function() {
    console.log("document is ready!");


    $('input[type=button]').click(function(){
        document.getElementById("result").value=this.value ;


    });
});