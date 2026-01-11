function returnMsg(){
    let userName=document.getElementById('name').value
    let email=document.getElementById('email').value
    let phone=document.getElementById('number').value
    let message=document.getElementById('message').value
    if(userName==="" || email==="" || phone==="" || message==="" ){
        result.textContent = '⚠️ Please fill up all fields';
        result.style.color = 'red';
        result.style.fontSize='20px'
    }
    else{
        result.textContent = '✅ Data saved successfully';
        result.style.color = '#fff';
        result.style.fontSize='20px'
    }
  
    

}