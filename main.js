function buttonOne(num){
  let url = new URL( 'http://127.0.0.1:5500/index.html' )
  const usp = new URLSearchParams()

  usp.append('lesson', num); 
}

var querystring = "?lesson=1"; 

document.getElementById("lesson1").addEventListener(click, buttonOne("1"));