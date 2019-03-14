/*
* Created by shate@ya.ru on 09.03.2019
*/
document.addEventListener('DOMContentLoaded', function () {
    
    const btnloadResponse = document.getElementById('loadResponse');
    const refactor = (obj) =>{
        try{
            let query = '';
            for (var prop in obj) {
                query += `&${prop}=${obj[prop]}`;
            }
            return query;
        }
        catch (err){
            console.error( error.message)
        }

    }
    
    if(btnloadResponse){
        btnloadResponse.addEventListener('click', function (e) {
            const responses = document.getElementById('jsResponses');
            let responsesHtml = responses.innerHTML;
            const obj = {action:"getContent", id:this.dataset.id}
            e.preventDefault();
            const xhr = new XMLHttpRequest();
            xhr.open('POST', "../getResponse.php", false);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(refactor(obj));
            if(xhr.readyState !== 4) return;

            if (xhr.status != 200) {
                console.log (xhr.status + ': ' + xhr.statusText)

            }
            else {

                responses.innerHTML = responsesHtml + xhr.responseText;
            }
        })
    }

});

