var tanya = true;
while(tanya){

var p =prompt(" pilih : batu , gunting kertas");
  
  var comp = Math.random();
  
  
    if(comp < 0.34){
      comp ="batu";
      
    }else if(comp >=0.34 && comp <=0.67){
      comp = "gunting";
      
    }else{
      comp = "kertas";
      
    }
    var hasil ="";
  if( p == comp){
    hasil="seri";
  }else if(comp =="batu" || comp == "BATU"){
    hasil =(comp =="gunting") ? "MENANG" : "KALAH";
  }else if( comp=="gunting" || comp == "GUNTING"){
    hasil =(comp =="kertas")? "MENANG": "KALAH";
  }else if(comp == "kertas" || comp == "KERTAS"){
    hasil =(comp == "batu")? "MENANG" : "KALAH";
  }else{
    console.log("yang anda masukan bukan item");
  }
  alert(" kamu memilih "+" "+p+" "+"\nkomputer memilih"+" "+comp+" "+"\njawaban :"+" "+hasil);

  tanya=confirm("ulangi lagi ??");
}
alert("permainan selesai !");