var enemy = document.getElementById('enemy');
var me = document.getElementById('me');
var w = 0;
var d = 0;
var l = 0;


const goo = document.getElementById('goo').addEventListener('click', function(){
  var min = 1 ;
  var max = 3 ;
  var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
  if(a === 1){
    enemy.textContent = ('✌️');
    me.textContent = ('あなたの勝ちです');
    w = w + 1;
    win.textContent = w;
  } else if (a === 2){
    enemy.textContent = ('️✊');
    me.textContent = ('あいこです');
    d = d + 1;
    draw.textContent = d;
  } else {
    enemy.textContent = ('✋️');
    me.textContent = ('あなたの負けです');
    l = l + 1;
    lose.textContent = l;
  }  

});

const tyoki = document.getElementById('tyoki').addEventListener('click', function(){
  var min = 1 ;
  var max = 3 ;

  var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
  if(a === 1){
    enemy.textContent = ('✋');
    me.textContent = ('あなたの勝ちです');
    w = w + 1;
    win.textContent = w;
  } else if (a === 2){
    enemy.textContent = ('✌️');
    me.textContent = ('あいこです');
    d = d + 1;
    draw.textContent = d;
  } else {
    enemy.textContent = ('✊️');
    me.textContent = ('あなたの負けです');
    l = l + 1;
    lose.textContent = l;
  }  

});

const par = document.getElementById('par').addEventListener('click', function(){
  var min = 1 ;
  var max = 3 ;

  var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
  if(a === 1){
    enemy.textContent = ('️✊');
    me.textContent = ('あなたの勝ちです');
    w = w + 1;
    win.textContent = w;
  } else if (a === 2){
    enemy.textContent = ('✋️');
    me.textContent = ('あいこです');
    d = d + 1;
    draw.textContent = d;
  } else {
    enemy.textContent = ('✌️');
    me.textContent = ('あなたの負けです');
    l = l + 1;
    lose.textContent = l;
  }  

const reset = document.getElementById('reset').addEventListener('click', function(){
  var min = 1 ;
  var max = 4 ;
  var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
  let animal;
  if(a === 1){
    animal = ('😺');
  } else if (a === 2){
    animal = ('🐶');
  } else if (a === 3){
    animal = ('🐰');
  } else {
    animal = ('🐼');
    
  }
  
  w = 0;
  d = 0;
  l = 0;
  lose.textContent = 0;
  win.textContent = 0;
  draw.textContent = 0;
  enemy.textContent = animal;
});

});