var li=document.createElement('li');
li.textContent='アイテム';
document.getElementById('list').appendChild(li);

document.getElementById('from').onsubmit=function(){
  window.alert(document.getElementById('from').word.value);
};
