module.exports = function main(s) {
         var inArray=new Array();
    	 for(var i=0;i<s.length;i++){
    		    inArray[i]=s.charAt(i);
    	 }
    	 var outArray=new Array();
    	 outArray=figure();
    	 var resultArray=new Array();
    	 resultArray[0]="";
    	 resultArray[1]="";
    	 resultArray[2]="";
    	 for(var i=0;i<inArray.length;i++){
	    for(var j=0;j<3;j++){
	    	resultArray[j]+=outArray[inArray[i]][j]+" ";
	    }      
    	 }
         resultArray[0]+="\n";
    	 resultArray[1]+="\n";
    	 resultArray[2]+="\n";
    	 var result=resultArray[0]+resultArray[1]+resultArray[2];
    	 return result;
     }

function figure(){
    	 var outArray=new Array();
	     outArray[0]=new Array();
    	     outArray[0][0]="._.";
    	     outArray[0][1]="|.|";
    	     outArray[0][2]="|_|";
	     outArray[1]=new Array();
    	     outArray[1][0]="...";
    	     outArray[1][1]="..|";
    	     outArray[1][2]="..|";
    	 outArray[2]=new Array();
    	     outArray[2][0]="._.";
    	     outArray[2][1]="._|";
    	     outArray[2][2]="|_.";
    	 outArray[3]=new Array();
    	     outArray[3][0]="._.";
    	     outArray[3][1]="._|";
    	     outArray[3][2]="._|";
    	 outArray[4]=new Array();
    	     outArray[4][0]="...";
    	     outArray[4][1]="|_|";
    	     outArray[4][2]="..|";
    	 outArray[5]=new Array();
    	     outArray[5][0]="._.";
    	     outArray[5][1]="|_.";
    	     outArray[5][2]="._|";
    	 outArray[6]=new Array();
    	     outArray[6][0]="._.";
    	     outArray[6][1]="|_.";
    	     outArray[6][2]="|_|";
    	 outArray[7]=new Array();
    	     outArray[7][0]="._.";
    	     outArray[7][1]="..|";
    	     outArray[7][2]="..|";
    	 outArray[8]=new Array();
    	     outArray[8][0]="._.";
    	     outArray[8][1]="|_|";
    	     outArray[8][2]="|_|";
    	 outArray[9]=new Array();
    	     outArray[9][0]="._.";
    	     outArray[9][1]="|_|";
    	     outArray[9][2]="..|";
    	 return outArray;
     }