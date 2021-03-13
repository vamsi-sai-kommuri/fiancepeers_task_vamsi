
$(document).ready(function(){
    $("#loginBtn").on("click",function(){

        let usr = $("#usr").val()
        let pwd = $("#pwd").val()


        fetch('http://127.0.0.1:5000/checkLogin/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({'usr':usr,'pwd':pwd}),
    
            })
            .then(r=> r.json())
            .then(r => {
                
                if(r["status"]){

                    location.href = "form.html"
                }else{

                    alert("invalid credentials")
                }

           

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    })

})

