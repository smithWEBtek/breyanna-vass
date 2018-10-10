$(function(){
    $("a.load_package").on("click", function(e) { 
        $.ajax({
            method: "GET",
            url: this.href,
        }).done(function(response){
          alert()
        })
        e.preventDefault();
    })
})
