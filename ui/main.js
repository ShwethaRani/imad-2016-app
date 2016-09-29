//counter program
var button = document.getElementById('counter');
button.onclick = function(){
  
  //Create the request
  var request = new XMLHttpRequest();
  //capture the endpoint and store it in a variable
  request.onreadystatechange = function(){
    if (request.readystate === XMLHttpRequest.DONE) {
        //take some action
        if(request.status === 200) {
            var counter = request.responseText;
             var span=document.getElementById('count');
             span.innerHTML=counter.toString();
        }
    } 
    //not done yet
  };
  
  //Make the request
  request.open("GET",'http://shwetharani.imad.hasura-app.io/counter',true);
  request.send(null);
};

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //Make the request to the server and send the name  
  
  //Capture a list of names to render it as a list
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for(var i=0;i<names.list;i++)
    {
        list <- '<li>'+ names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};