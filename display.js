
let template =`<tr>
                <th>id</th>
                <th>User ID</th>
                <th>title</th>
                <th>body</th>
                </tr>`
fetch('http://127.0.0.1:5000/getData/', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                  
                })
                .then(r=> r.json())
                .then(r => {
                    
                   for(i=0;i<r.length;i++){
                       console.log(i)
                        template+=`<tr>
                                    <td>${r[i]['id']}</td>
                                    <td>${r[i]['userId']}</td>
                                    <td>${r[i]['title']}</td>
                                    <td>${r[i]['body']}</td>
                                </tr>`
                   }

                   $("#customers").html(template)

                })
                .catch((error) => {
                     console.error('Error:', error);
});