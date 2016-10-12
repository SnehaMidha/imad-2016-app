//console.log('Loaded!');
//count code
var button=document.getElementById('counter');

button.onclick=function()
{
  //create a request object
  var request=new XMLHttpRequest()
  //Capture the response and store it in a variable
  request.onreadystatechange=function(){
    if(request.readyState===(XMLHttpRequest.DONE))
    {
       
      //do some action
      if(request.status===200)
      {
          var counter=request.responseText;
          var span=document.getElementById('count');
          span.innerHTML=counter.toString();
      }
  }
    };
    //make the request
  request.open('GET','http:snehamidha.imad.hasura-app.io/counter',true);
  request.send(null);
  //render the variable in correct span
  //counter=counter+1;
  //var span=document.getElementById('count');
  //span.innerHTML=counter.toString();
};