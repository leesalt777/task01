//console.log("Мой скрипт")
const change=document.getElementById("change")
change.addEventListener("click", my_fun)
function my_fun() {
    console.log("Мой скрипт запущен")
if (document.getElementsByTagName('div')[2].innerHTML==='Морская'){
document.getElementsByTagName("div")[2].innerHTML="Morskaya"
document.getElementsByTagName ("div") [3].innerHTML= "Marina"
document.getElementsByTagName ("div") [4]. innerHTML= "Andreevna"
document.getElementsByTagName ("div") [5]. innerHTML= "Female &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01.01.1965"
document.getElementsByTagName ("div") [6]. innerHTML= "Moskovskaya obl."
document.body.style.backgroundImage="url('eng_pas.jpg')"
document.getElementsByTagName("div")[0].innerHTML="&nbsp"
document.getElementsByTagName("div")[1].innerHTML="&nbsp"
document.getElementsByClassName('png')[0].style.marginLeft='10px'
document.getElementsByClassName('png')[0].style.marginTop='-130px'



 
 

}
else{
if (document.getElementsByTagName("div")[2].innerHTML=== "Morskaya"){
document.getElementsByTagName("div")[2].innerHTML="Морская"
document.getElementsByTagName("div")[3].innerHTML="Марина"
document. getElementsByTagName("div")[4].innerHTML="Андреевна"
document. getElementsByTagName("div")[5].innerHTML="жен. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01.01.1965"
document. getElementsByTagName("div")[6].innerHTML="Московская обл"
document.body.style.backgroundImage="url('pasport_shablon.png')"
document.getElementsByClassName('fio')[0].style.marginLeft='200px'
            document.getElementsByClassName('fio')[0].style.marginTop='250px'
            document.getElementsByClassName('png')[0].style.marginLeft='35px'
            document.getElementsByClassName('png')[0].style.marginTop='-160px'
            document.getElementsByTagName('div')[0].innerHTML='Выдан УМВД России по Нижегородской области'
            document.getElementsByTagName('div')[1].innerHTML="20/05/2000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 434-2340"
}
}//else
}//fun
function sum(){
    let a=10;
    let b=20;
    s=a+b;
    console.log("сумм =", sum)
    console.log(s)
}