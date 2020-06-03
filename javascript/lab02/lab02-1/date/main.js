var today=new Date();
var dd=today.getDate();
var mm=today.getMonth();
var yyyy=today.getFullYear();

if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}
today=dd+'-'+mm+'-'+yyyy;
console.log(today);
today=dd+'/'+mm+'/'+yyyy;
console.log(today);

