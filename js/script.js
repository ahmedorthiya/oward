const qParts = document.getElementsByClassName("question");


const qPartsArray = Array.from(qParts);
for(let i = 0; i < qPartsArray.length; i++){
      const childs = Array.from(qPartsArray[i].childNodes);
     childs.map(childItem=>{
         
        
          if(childItem.className === 'question--qpart'){

             
              childItem.onclick = ()=>{
                  
               const sibling =  childItem.nextElementSibling;
               
               if(sibling.style.display === "none"){
                   sibling.style.display = "block";
               }else if(sibling.style.display === "block"){
                sibling.style.display = "none";
               }else{
                   // for first click when display = "" 
                sibling.style.display = "block";
               }
              }
              
             
          }
     })
}




