const inputs = document.getElementsByClassName('input-field');
const submit_btn=document.getElementById('submit')

function validate(){
    let firstname=document.getElementById("FirstName")
    let lastname=document.getElementById("LastName")    
    let email=document.getElementById("email") 
    let password=document.getElementById("password") 
    //First Name validation
    if(firstname.value.trim() === ''){
      let er = inputs[0].querySelector(".error")

       if(er.classList.contains("hidden")){
        er.classList.remove("hidden")
       }
       

    }else{
        let er = inputs[0].querySelector(".error")
       er.classList.add("hidden")
    }

    //Last Name validation
    if(lastname.value.trim() === ''){
        let er = inputs[1].querySelector(".error")
 
        if(er.classList.contains("hidden")){
         er.classList.remove("hidden")
        }
        
 
     }else{
        let er = inputs[1].querySelector(".error")
        er.classList.add("hidden")
     }

    //Email Address validation
    let input_box= inputs[2].querySelector(".input-box")

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
      let er = inputs[2].querySelector(".error")       
      if(!er.classList.contains("hidden")){       
      
       er.classList.remove("hidden")
      }
      
       let text = er.querySelector('span')
       
       input_box.classList.add("red-text")
       text.innerText="Email is not in correct format"
      
   }
   else{
    input_box.classList.remove("red-text")
   }
     

     if(email.value.trim() === ''){
        let er = inputs[2].querySelector(".error")
        let text = er.querySelector('span')      
       text.innerText="Email cannot be empty"
        if(er.classList.contains("hidden")){
         er.classList.remove("hidden")
        }
        
 
     }
     else{
         let er = inputs[2].querySelector(".error")
         if(!er.classList.contains("hidden")){
         er.classList.add("hidden")
         }
         input_box.classList.remove("red-text")
     }    
    
     
     

     //Password validation
     if(password.value.trim() === ''){
        let  er = inputs[3].querySelector(".error")
        if(er.classList.contains("hidden")){
         er.classList.remove("hidden")
        }
        
 
     }else{
        let er = inputs[3].querySelector(".error")
        er.classList.add("hidden")
     }


    console.log(firstname.value.trim())
    console.log(lastname)
    console.log(email)
    console.log(password)
    console.log(inputs)

}

submit_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    validate();
})
