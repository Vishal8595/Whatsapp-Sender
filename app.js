
var url;


$("button").click(function(){
   


   var mobileNo= $("#hero-field").val();

 var url="https://wa.me/+91"+mobileNo+"";


//  console.log(mobileNo);

if (mobileNo=="") {
  
  alert("Please Enter Valid Mobile Number")

} else {
  
  location.replace(url)

}







});




