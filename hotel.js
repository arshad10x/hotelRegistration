function RegisterClick() {
  document.getElementById("lblName").innerHTML =
  document.getElementById("txtName").value;
  document.getElementById("lblMobile").innerHTML =
  document.getElementById("txtMobile").value;
  document.getElementById("lblDate").innerHTML =
  document.getElementById("txtDate").value;
  document.getElementById("lblDays").innerHTML =
  document.getElementById("txtDays").value;
  document.getElementById("lblPerson").innerHTML =
  document.getElementById("txtPerson").value;
}

var Days=document.getElementById("txtDays").value;

var roomType="";
var amenitiesType="";
var roomCost=0;
var amenitiesCost=0;
var total=0;

var deluxe=document.getElementById("optDeluxe");
var suite=document.getElementById("optSuite");

if(deluxe.checked){
    roomType=deluxe.value;
    roomCost=Days*2000;
}
if(suite.checked){
    roomType=suite.value;
    roomCost=Days*4000;
}
var Ac=document.getElementById("optAC");
var Locker=document.getElementById("optLocker");

if(Ac.checked){
    amenitiesType+=Ac.value+"<br>";
    amenitiesCost=Days*1000;
    roomCost+=amenitiesCost;
}
if(Locker.checked) {
    amenitiesType+=Locker.value+"<br>";
    amenitiesCost=Days*300;
    roomCost+=amenitiesCost;
}

var Persons = document.getElementById("txtPersons").value;
if(Persons<=2){
    total = roomCost;
}
if(Persons>2){
    total = ((Persons-2)*1000)* Days + roomCost;

}

var advanceAmount =  document.getElementById("txtAdvance").value;
            var button = document.getElementById("Register");
            if(advanceAmount==""){
              document.write(`<h1>Advance Mandarory</h1>`.fontcolor('red')) 
            }

document.getElementById("lblRoom").innerHTML=roomType;
document.getElementById("lblAmenites").innerHTML=amenitiesType;
document.getElementById("lblTotal").innerHTML=total;
document.getElementById("lblAdvance").innerHTML=advanceAmount;
document.getElementById("lblBalance").innerHTML=total-advanceAmount;