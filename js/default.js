for(var i=1;i<100;i++){
  var li=document.createElement('li');
  if(i%3==0){
    if(i%5==0){
        li.textContent=FizzBuzz;
    }
    else{
         li.textContent=Fizz;
    }
  }
  else if(i%5==0){
            li.textContent=Buzz;
  }
    else{
        li.textContent=i;
    }
  
    document.createElementById('list').appendChild(li);
}

  

document.getElementById('from').onsubmit=function(){
  window.alert(document.getElementById('from').word.value);
};
