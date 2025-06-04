let lis = document.querySelectorAll(".navbar-expand-lg .navbar-nav .nav-link");

lis.forEach((ele)=>{

    ele.addEventListener("click",function(){
    
        lis.forEach((el)=>{
    
            el.classList.remove("active");
    
        })
    
        ele.classList.add("active");
    
    })

})




let li = document.querySelectorAll(".our-work ul li");

li.forEach((ele)=>{

    ele.addEventListener("click",function(){
    
        li.forEach((el)=>{
    
            el.classList.remove("active");
    
        })
    
        ele.classList.add("active");
    
    })

})