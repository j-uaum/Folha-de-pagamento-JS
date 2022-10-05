
function pag(){
      
      let nome = document.getElementById('nome1').value
    let ano = parseInt(document.getElementById('ano1').value)
    let horas = parseInt(document.getElementById('horas1').value)
    let vhora = parseInt(document.getElementById('vhora1').value)
    let mes = document.getElementById('mes1').value
    let res1 = document.getElementById('res1')
    let res2 = document.getElementById('res2')
    let res3 = document.getElementById('res3')
    let res4 = document.getElementById('res4')
    let res5 = document.getElementById('res5')
    let res6 = document.getElementById('res6')
    let res7 = document.getElementById('res7')
    let res8 = document.getElementById('res8')
    let h1 = document.getElementById('tt')
    
  
 

  
 let salariob = horas * vhora

 function ir (){

   if (salariob < 1903.98) {
      return "nao ha deducao fiscal";
 
   } else if (salariob >= 1903.98 && salariob < 2826.65) {
       
           return salariob * 0.075 - 142.80;
 
       } else if (salariob >= 2826.65 && salariob < 3751.05) {
    
               return salariob * 0.15 - 354.80 ;
 
           } else if (salariob >= 3751.05 && salariob < 4664.68) {
 
                   return salariob * 0.225 - 636.13;
 
               } else {
               return salariob * 0.275 - 869.36 ;
             }
                
  

}
   
function inss (){

  if (salariob < 1212.00) {
    return salariob * 0.075;

 } else if (salariob >= 1212.01 && salariob < 2427.35) {
     
         return salariob * 0.09 - 18.18;

     } else if (salariob >= 2427.36 && salariob < 3641.03) {
  
             return salariob * 0.12 - 91.01 ;

         } else if (salariob >= 3641.04 && salariob < 7087.22) {

                 return salariob * 0.14 - 163.00;

             } else {
              return salariob * 0.14 - 163.00;
           }
              





}

function fgts(){


  if (salariob < 1903.98) {
    return "nao ha deducao fiscal";

 } else if (salariob >= 1903.98 && salariob < 2826.65) {
     
         return salariob * 0.075 - 142.80;

     } else if (salariob >= 2826.65 && salariob < 3751.05) {
  
             return salariob * 0.15 - 354.80 ;

         } else if (salariob >= 3751.05 && salariob < 4664.68) {

                 return salariob * 0.225 - 636.13;

             } else {
             return salariob * 0.275 - 869.36 ;
           }
              




}



  let a = ir()
  let b = inss()
  let c = fgts()
  let salarioliq = salariob - a - b -c


h1.innerHTML = `Resultado vvv`
 res1.innerHTML = `Funcionario: ${nome}`
 res2.innerHTML = `Mês: ${mes}`
 res3.innerHTML = `Ano: ${ano}`
 res4.innerHTML = `Salario bruto: ${salariob} Reais`
 res5.innerHTML = `Imposto de renda: ${a} Reais`
 res6.innerHTML = `INSS: ${b.toFixed(4)}`
 res7.innerHTML = `FGTS: ${c}`
 res8.innerHTML = `Salario Liquido: ${salarioliq} Reais`






   }


