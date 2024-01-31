window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(reponse => {
        return reponse.json()
    }).then(response=>{
        console.log("Website called function API.");
        count = reponse.count;
        document.getElementbyID("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
    }