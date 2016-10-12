//console.log('Loaded!');
//count code
var button=document.getElementbyId('counter');
var counter=0;
button.onclick=function()
{
  //make a request to the counter end point
  
  //Capture the response and store it in a variable
  
  
  //render the variable in correct span
  counter=counter+1;
  var span=document.getElementbyId('count');
  span.innerHTML=count.toString();
};