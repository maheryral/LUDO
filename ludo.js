
var rang=[]
function jeux(joueuract){
  var liste=_$id('liste')
  var table=liste.querySelector('table')
  
  var rehetra=_$('rehetra')
  for (let i = 0; i < rehetra.length; i++) {
    rehetra[i].style.animation='none'
  }
 
  if(rang.length==3){
    liste.style.display='block'
    let i=1;
    for (let j = 0; j < rang.length; j++) {
     var tr=_$cre('tr')
     var td=_$cre('td')
      td.textContent=i+'-'+rang[j]
     tr.appendChild(td)
     table.appendChild(tr)
     i++
    }
    var tr=_$cre('tr')
     var td=_$cre('td')
      td.textContent=4+'-'+'farany'
     tr.appendChild(td)
     table.appendChild(tr)
  
  }
  else {
    let tonga=_$('tonga'+joueuract)
      if(tonga.length==4){
       if(joueuract=='mena'){
         joueuract='mavo'
       }
       else if(joueuract=='mavo'){
         joueuract='maintso'
       }
       else if(joueuract=='maintso'){
        joueuract='manga'
      }
      else if(joueuract=='manga'){
        joueuract='mena'
      }

      }
   let idde=_$cre('div')
   idde.id='de'
   document.body.appendChild(idde)
   let deimg=_$cre('img')
   idde.appendChild(deimg)
   
   var tran=_$id('trano'+joueuract)

   tran.style.animation='pika 700ms infinite'
   if(joueuract=='mena'){
     idde.style.opacity='80%'
      idde.style.position='absolute'
      idde.style.left='500px'
      idde.style.top='50px'

   }
   else if(joueuract=='mavo'){
     idde.style.position='absolute'
     idde.style.left='1150px'
     idde.style.top='50px'
   }
   else if(joueuract=='maintso'){
      idde.style.position='absolute'
      idde.style.left='1150px';
      idde.style.top='520px'
    }
    else if(joueuract=='manga'){
      idde.style.position='absolute'
      idde.style.left='500px';
      idde.style.top='520px'
    }
   idde.addEventListener('click', dee)
   function dee(){
    const de=Math.floor(Math.random()*(7-1))+1
    
    if(de==1){
     deimg.src='de/de1.jpg'
    }
    else if(de==2){
     deimg.src='de/de2.jpg'
    }
    else if(de==3){
     deimg.src='de/de3.jpg'
    }
    else if(de==4){
     deimg.src='de/de4.jpg'
    }
    else if(de==5){
     deimg.src='de/de5.jpg'
    }
    else if(de==6){
     deimg.src='de/de6.jpg'
    }
    idde.removeEventListener('click',dee)
    joueur1(de,true,joueuract)
    
  }
  }
      
   
  

}
function joueur1(de,jeux1,act){
 
   var divmena=_$('div'+act)
   
     if(( divmena.length==1) && (parseInt(divmena[0].dataset.index)+de>57)){
      setTimeout(() => {
            var idde=_$id('de')
            document.body.removeChild(idde)
            if(act=='mena'){
              jeux('mavo')
            }
             
             else if(act=='mavo'){
               jeux('maintso')
             }
             else if(act=='maintso'){
              jeux('manga')
            }
            else if(act=='manga'){
              jeux('mena')
            }
         }, 300);
     }
    else{
       
    function tranome1(){
      var tranomena=_$id('trano'+act)
            
      var idde=_$id('de')
      document.body.removeChild(idde)
      var route=_$('route'+act)
      var mena1=_$(act+1)
      let j=0;   
       while (j<mena1.length) {
          if(mena1[j].querySelector('div')){
            
            mena1[j].removeChild(mena1[j].querySelector('div'))
            var divmena=_$cre('div')
           
            divmena.className='div'+act
            divmena.dataset.index=1
            
              route[0].appendChild(divmena)
  
             
           
            
    
            j= mena1.length + 1
          } 
          else{
             j=j+1
             
          } 
       }
       var divmenamena= _$('div'+act)
       
       tranomena.removeEventListener('click',tranome1)
       var divmenamena=_$('div'+act)
       for (let i = 0; i < divmenamena.length; i++) {
        divmenamena[i].removeEventListener('click',funcdivmena)
       
        }
       for (let i = 0; i < divmenamena.length; i++) {
         
         var pardiv= divmenamena[i].parentNode
         
         var newmena=_$cre('div')
         newmena.className='div'+act
         newmena.style.transform='scale(1,1)'
         newmena.dataset.index=divmenamena[i].dataset.index
         pardiv.appendChild(newmena)
         pardiv.removeChild(divmenamena[i])
       }
       
      jeux(act)
       
      
    }
    
    var divmenamena=_$('div'+act)
            for (let i = 0; i < divmenamena.length; i++) {
             if(parseInt(divmenamena[i].dataset.index)+de<=57){
              divmenamena[i].style.animation='cible 1s infinite'
             }
             
             
              
            }
            
     var mena1=_$(act+1)
     var incomplet=true
     for (let j=0;j<mena1.length;j++) {
           if(mena1[j].querySelectorAll('div').length!=0){
              incomplet=false
           }
       }     
    // if(divmenamena.length!=0) {
      
    //    if((parseInt(divmenamena[0].dataset.index)+de>57 && divmenamena.length==1)){
    //     alert(parseInt(divmenamena[0].dataset.index)+de)
         
    //   setTimeout(() => {
    //     var idde=_$id('de')
    //     document.body.removeChild(idde)
    //     if(act=='mena'){
    //       jeux('mavo')
    //     }
         
    //      else if(act=='mavo'){
    //        jeux('maintso')
    //      }
    //      else if(act=='maintso'){
    //       jeux('manga')
    //     }
    //     else if(act=='manga'){
    //       jeux('mena')
    //     }
    //  }, 300);
    // }

    // }
   
    
    var divmena =_$('div'+act)
   
     var complet=true
    
     for (let j=0;j<mena1.length;j++) {
         if(mena1[j].querySelectorAll('div').length==0){
            complet=false
         }
     }
     if(jeux1==true) {
    
        if(de==6){
          if(complet==true || (complet==false && divmena.length==0) ){
            setTimeout(() => {
              tranome1()
            }, 400);
           
  
          }
          else{
            var classdivmena =_$("div"+act)
            var tranomena=_$id('trano'+act)
            tranomena.addEventListener('click',tranome1 )
          }
           
                 
          var classdivmena =_$("div"+act)
           
            for (let k = 0; k < classdivmena.length; k++) {
              classdivmena[k].addEventListener('click',funcdivmena)
              function funcdivmena(){
                if((parseInt(classdivmena[k].dataset.index)+de>51) && (parseInt(classdivmena[k].dataset.index)+de<57)){
                 
                  if(parseInt(classdivmena[k].dataset.index)>51){
                    var avfin=0
                    var pos=parseInt(this.parentNode.id)+de - avfin
                    var init=0
                  }
                  else{
                    if(act=='mena'){
                      var avfin=52
                      var fin=101
                    }
                    else if(act=='mavo'){
                      var avfin=13
                      var fin=201
                    }
                    else if(act=='maintso'){
                      var avfin=26
                      var fin=301
                    }
                    else if(act=='manga'){
                      var avfin=39
                      var fin=401
                    }
                   
                    var pos=parseInt(this.parentNode.id)+de - avfin + fin
                    
                    var init=0
                    
                  }
                  
                }
                // else if(parseInt(classdivmena[k].parentNode.id)+de==57){
  
                // }
                else{
                  
                  if(((parseInt(this.parentNode.id) + de)>51) && act!='mena'){
                    var pos=parseInt(this.parentNode.id)+de - 52
                    var avfin=52
                    var init=0
                  }
                  else{
                    var pos=parseInt(this.parentNode.id) + de
                    var avfin=52
                    var init=0
                  }
                }
               
               parcours(this,act,avfin-1,init,parseInt(this.parentNode.id),pos,tranome1,parseInt(this.dataset.index),de)
               
               
      
               
               
              }
           }
          
           
         }
         else if((de!=6 && complet==true) || (complet==false && divmena.length==0)){
          
           setTimeout(() => {
              var idde=_$id('de')
              document.body.removeChild(idde)
              if(act=='mena'){
                jeux('mavo')
              }
               
               else if(act=='mavo'){
                 jeux('maintso')
               }
               else if(act=='maintso'){
                jeux('manga')
              }
              else if(act=='manga'){
                jeux('mena')
              }
           }, 300);
          
        }
        else if(de!=6 && complet==false){
          
          var tranomena=_$id('trano'+act)
           var classdivmena =_$("div"+act)
           
          // if((classdivmena.length==1) && (parseInt(classdivmena[0].dataset.index)+de>57)){
          //  alert('okok')
          //   if(act=='mena'){
          //     jeux('mavo')
          //   }
             
          //    else if(act=='mavo'){
          //      jeux('maintso')
          //    }
          //    else if(act=='maintso'){
          //     jeux('manga')
          //   }
          //   else if(act=='manga'){
          //     jeux('mena')
          //   }
          // }
           
           tranomena.removeEventListener('click',tranome1)
           if(classdivmena.length>1){
            for (let k = 0; k < classdivmena.length; k++) {
              classdivmena[k].addEventListener('click',funcdivmena)
              function funcdivmena(){
               
                if(parseInt(classdivmena[k].dataset.index)+de>51  && (parseInt(classdivmena[k].dataset.index)+de<57)){
                  if(parseInt(classdivmena[k].dataset.index)>51){
                    var avfin=0
                    var pos=parseInt(this.parentNode.id)+de - avfin
                    var init=0
                  }
                 else{
                  if(act=='mena'){
                    var avfin=52
                    var fin=101
                    
                  }
                  else if(act=='mavo'){
                    var avfin=13
                    var fin=201
                  }
                  else if(act=='maintso'){
                    var avfin=26
                    var fin=301
                  }
                  else if(act=='manga'){
                    var avfin=39
                    var fin=401
                  }
                 
                  var pos=parseInt(this.parentNode.id)+de - avfin + fin
                  
                  var init=0
  
                 }
               
                }
                else{
                  if(((parseInt(this.parentNode.id) + de)>51) && act!='mena'){
                    var pos=parseInt(this.parentNode.id)+de - 52
                    var avfin=52
                    var init=0
                    
                  }
                  else{
                    var pos=parseInt(this.parentNode.id) + de
                    var avfin=52
                    var init=0
                    
                  }
                }
                
               parcours(this,act,avfin-1,init,parseInt(this.parentNode.id),pos,tranome1,parseInt(this.dataset.index),de)
              
      
               
               
              }
           }
      
           }
           else if(classdivmena.length==1){
            //  if(parseInt(classdivmena[0].dataset.index)+de>57){
            //   if(act=='mena'){
            //         jeux('mavo')
            //       }
                   
            //        else if(act=='mavo'){
            //          jeux('maintso')
            //        }
            //        else if(act=='maintso'){
            //         jeux('manga')
            //       }
            //       else if(act=='manga'){
            //         jeux('mena')
            //       }
            //  }
             
              autom(act,de,tranome1)
             
            
            
            }
        
        }
        
    
      
       
       }


    }
   
  
  
 

}


function _$(elt){
   return document.getElementsByClassName(elt);
}
function _$id(elt){
    return document.getElementById(elt);
 }
 function _$cre(elt){
   return document.createElement(elt);
}
function parcours(classdivmena,act,avfin,init,or,iddesti,tranome1,data,de){
   classdivmena.parentNode.removeChild(classdivmena)
   
  if(init<de){
   
    if(or==avfin){
      if(data==51){
        if(act=='mena'){
          var or=100
        }
        else if(act=='mavo'){
          var or=200
        }
        else if(act=='maintso'){
          var or=300
        }
        else if(act=='manga'){
          var or=400
        }
        
      }
      else{
        or=-1;
      }
      
    }
    
    if(parseInt(data)+1==57){
      let arriv=_$id('arriv'+act)
      let divmena=_$cre('div')
      divmena.className='tonga'+act 
       
             
      arriv.appendChild(divmena)
      setTimeout(() => {
      
        data=data+1
       
        init=init+1
        or=or+1
        
        parcours(divmena,act,avfin,init,or,iddesti,tranome1,data,de)
        
      }, 300);
      
    }
    
    else{
      
      let divmena=_$cre('div')
      divmena.className='div'+act
      
      let desti=_$id(parseInt(or)+1)
       divmena.style.animation='cible 1s infinite'
      
      desti.appendChild(divmena)
      
      setTimeout(() => {
      
        data=data+1
       
        init=init+1
        or=or+1
        
        parcours(divmena,act,avfin,init,or,iddesti,tranome1,data,de)
        
      }, 300);
    }
    
   
     
  }
  
  else{
    
    var tranomena=_$id('trano'+act)
    tranomena.removeEventListener('click',tranome1)
    
    var desti=_$id(iddesti)
    
    if(data<=51){
      var divdesti=desti.querySelectorAll('div')
      for (let i = 0; i< divdesti.length; i++) {
        if(desti.className!='trano' && desti.className!='routemanga' && desti.className!='routemena' && desti.className!='routemaintso' && desti.className!='routemavo'){
          if(divdesti[i].className!='div'+act){
            if(divdesti[i].className=='divmavo'){
                desti.removeChild(divdesti[i])
                var mavo1=_$('mavo1')
                let j=0;
                while (j<mavo1.length) {
                 if(mavo1[j].querySelector('div')==null){
                   mavo1[j].innerHTML='<div></div>'
                   j=mavo1.length+1
                 }
                 else{
                   j=j+1
                 }
             }
   
            }
            else if(divdesti[i].className=='divmanga'){
               desti.removeChild(divdesti[i])
               var manga1=_$('manga1')
               let j=0;
                while (j<manga1.length) {
                 if(manga1[j].querySelector('div')==null){
                   manga1[j].innerHTML='<div></div>'
                   j=manga1.length+1
                 }
                 else{
                   j=j+1
                 }
             }
   
           }
           else if(divdesti[i].className=='divmaintso'){
            desti.removeChild(divdesti[i])
            var maintso1=_$('maintso1')
            let j=0;
            while (j<maintso1.length) {
             if(maintso1[j].querySelector('div')==null){
               maintso1[j].innerHTML='<div></div>'
               j=maintso1.length+1
             }
             else{
               j=j+1
             }
         }
   
        }
        else if(divdesti[i].className=='divmena'){
          desti.removeChild(divdesti[i])
          var mena1=_$('mena1')
          let j=0;
                while (j<mena1.length) {
                 if(mena1[j].querySelector('div')==null){
                   mena1[j].innerHTML='<div></div>'
                   j=mena1.length+1
                 }
                 else{
                   j=j+1
                 }
             }
   
      }
       de=6
         }
        }
        
       
      }

    }
   
    if(parseInt(data)<57){
      
      let divmena=_$cre('div')
      divmena.className='div'+act 
      divmena.dataset.index=parseInt(data)  
             
      desti.appendChild(divmena)
       var divmenamena=_$('div'+act)
        var lengdiv=divmenamena.length
        for (let i = 0; i < lengdiv; i++) {
          
          var newmena=_$cre('div')
          newmena.className='divi'
          newmena.style.transform='scale(1.5,1.5)'
          newmena.dataset.index=divmenamena[i].dataset.index
          divmenamena[i].parentNode.appendChild(newmena)
          
          
          
          
        }
        
        
        for(let i=0;i<lengdiv; i++){
         
         
          divmenamena[0].parentNode.removeChild(divmenamena[0])
          
        }
        var newmena=_$('divi')
        for(let i=0;i<lengdiv; i++){
        
          newmena[0].className='div'+act
         
          
        }
        
        var idde = _$id('de')
                  
        document.body.removeChild(idde)
        
        if(de==6){
          jeux(act)
        }
        else{
          if(act=='mena'){
            jeux('mavo')
          }
           
           else if(act=='mavo'){
             jeux('maintso')
           }
           else if(act=='maintso'){
            jeux('manga')
          }
          else if(act=='manga'){
            jeux('mena')
          }
      
        }
    }
    else if (parseInt(data)==57){
      
      let arriv=_$id('arriv'+act)
      let divmena=_$cre('div')
      divmena.className='tonga'+act 
      divmena.dataset.index=57  
      divmena.style.transform='scale(1.5,1.5)'      
      arriv.appendChild(divmena)
      var divmenamena=_$('div'+act)
      var lengdiv=divmenamena.length
      for (let i = 0; i < lengdiv; i++) {
        
        var newmena=_$cre('div')
        newmena.className='divi'
        newmena.style.transform='scale(1.5,1.5)'
        newmena.dataset.index=divmenamena[i].dataset.index
        divmenamena[i].parentNode.appendChild(newmena)
        
        
        
        
      }
      
      
      for(let i=0;i<lengdiv; i++){
       
       
        divmenamena[0].parentNode.removeChild(divmenamena[0])
        
      }
      var newmena=_$('divi')
      for(let i=0;i<lengdiv; i++){
      
        newmena[0].className='div'+act
       
        
      }
      
      var idde = _$id('de')
                
      document.body.removeChild(idde)
      let tranobe=_$id('trano'+act)
      let tonga=_$('tonga'+act)
      if(tonga.length==4){
        
        if(rang.length==0){
          tranobe.innerHTML='<img class="mpandresy"src="joueur/de.png">'

        }
        else if(rang.length==1){
          tranobe.innerHTML='<img class="mpandresy"src="joueur/de.png">'

        }
        else if(rang.length==2){
          tranobe.innerHTML='<img class="mpandresy"src="joueur/de.png">'

        }
       
        
        rang[rang.length]=act
       
      }
      jeux(act)
    }
           
            
           

           
           
  }
}
function autom(act,de,tranome1){
 
  var classdivmena =_$("div"+act)
  if(parseInt(classdivmena[0].dataset.index)+de>51  && parseInt(classdivmena[0].parentNode.id)<100) {
     
    
      if(act=='mena'){
        var avfin=52
        var fin=101
      }
      else if(act=='mavo'){
        var avfin=13
        var fin=201
      }
      else if(act=='maintso'){
        var avfin=26
        var fin=301
      }
      else if(act=='manga'){
        var   avfin=39
        var fin=401
      }
      var pos=parseInt(classdivmena[0].parentNode.id)+de - avfin + fin
     
      var init=0

   
    
  }
  // else if(parseInt(classdivmena[0].dataset.index)+de>51 && parseInt(classdivmena[0].parentNode.id)>100){
  //   var avfin=0
  //   var pos=parseInt(this.parentNode.id)+de - avfin
  //   var init=0
  // }
  else{
    if(((parseInt(classdivmena[0].parentNode.id) + de)>51) && act!='mena' && classdivmena[0].dataset.index<51){
      var pos=parseInt(classdivmena[0].parentNode.id)+de - 52
      var avfin=52
      var init=0
    }
    else{
      
      var pos=parseInt(classdivmena[0].parentNode.id) + de
      var avfin=52
      var init=0
    }

  }
  
  parcours(classdivmena[0],act,avfin-1,init,parseInt(classdivmena[0].parentNode.id),pos,tranome1,parseInt(classdivmena[0].dataset.index),de)
 }
//  _$id('audio').Play()
jeux('mena')





 
   
 
   
