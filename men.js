let vazifainput=document.getElementById("vazifainput");
let vazifabtn=document.getElementById("vazifabtn");
let vazifalist=document.getElementById("vazifalist");
console.log(vazifabtn,vazifainput,vazifalist)

vazifabtn.addEventListener("click",function(){
    let qiymat = vazifainput.value;

    let li =document.createElement("li");
    li.textContent = qiymat;

    let tugma=document.createElement("buttton");
    tugma.textContent = "ochirish"
    li.appendChild(tugma)
    tugma.onclick=function(){
        li.remove()
    }

    vazifalist.appendChild(li)

  

    vazifainput.value=""
    alert="biror narsa yozing"
   
})
//bmi
let vazn = document.getElementById("vazn")
let boy = document.getElementById("boy")
let natija = document.getElementById("natija")
let holati = document.getElementById("holati")
btn.getElementById("btn")



function hisobla() {

   let boyValue = boy.value
   let vaznValue = vazn.value

   let bmi = vaznValue / (boyValue * boyValue);
   natija.innerHTML = bmi


   if (bmi < 18.5) {
      holati.innerHTML = "ozgin";
   } else if (bmi <= 18.5 && bmi < 24.9) {
      holati.innerHTML = "meyyorda"
   } else if (bmi <= 25 && bmi < 29.9) {
      holati.innerHTML = "ortiqcha vazn"
   } else if (bmi >= 30) {
      holati.innerHTML = "semiz"


   } else {
      holati.innerHTML = "maslaxatim ozing"

   }

}

btn.addEventListener("click", hisobla)

 document.getElementById("natija").innerText = bmi.toFixed(2);
document.getElementById("holati").innerText = holati;


