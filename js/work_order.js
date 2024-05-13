function submitFunction(){
    var form = document.getElementById("work_order_form");
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    const json = JSON.stringify(obj);
    window.location.href = 'nav.html';
}


$(document).ready(function(){
    $('.add-btn').on('click',function(e){
        console.log('checking');
        e.preventDefault();
        submitFunction();
    })
});