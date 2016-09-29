//counter program
var button = document.getElementById('counter');
var counter=0;
button.onclick = function(){
  
  //Make a request to the counter endpoint
  var request = new XMLHttpRequest();
  //capture the endpoint and store it in a variable
  request.onreadystatechange = function(){
    if (request.readystate === XMLHttpRequest.DONE) {
        //take some action
        if(request.status === 200) {
            
        }
    } 
    //not done yet
  };
  //render the variable in the correct span
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
  
};