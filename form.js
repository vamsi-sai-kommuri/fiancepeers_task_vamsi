$(document).ready(function(){


function fileValidation() { 
    var fileInput =  
        document.getElementById('dataFile'); 
      
    var filePath = fileInput.value; 
  
    // Allowing file type 
    var allowedExtensions =  
            /(\.json)$/i; 
      
    if (!allowedExtensions.exec(filePath)) { 
        alert('Invalid file type'); 
        fileInput.value = ''; 
        return false; 
    }  
    else  
    { 
        $.getJSON(fileInput.files[0].name, function(data){
            console.log(data); 
            fetch('http://127.0.0.1:5000/storeData/', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
               
                .then(data => {
                   console.log('Success:', data);
                   location.href="display.html"
                })
                .catch((error) => {
                     console.error('Error:', error);
                     alert("File upload Error")
                });
            
        }).fail(function(){
            console.log("An error has occurred.");
        });

    }

}

$("#formUpload").on("click",function(){

    fileValidation()

})

})