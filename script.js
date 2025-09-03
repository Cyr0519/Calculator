let listbuttons=[...document.querySelectorAll('button')]
let datakeylist=listbuttons.map(button=>button.dataset.key)
let ecran= document.querySelector('.screen')


  document.addEventListener('keydown',(e)=>{
  const valeur=e.keyCode.toString();
  calculer(valeur)
})

document.addEventListener('click',(e)=>{
  const valeur=e.target.dataset.key;
  calculer(valeur)
 
})

function calculer(valeur) {
  if (datakeylist.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent="";
        break;
      
      case "13":
        const calcul= eval(ecran.textContent)
        ecran.textContent= calcul
        break;

        default:
        const i=datakeylist.indexOf(valeur)
        const bouton=listbuttons[i]
        ecran.textContent+=bouton.innerText
        break;
    }
  }
}


