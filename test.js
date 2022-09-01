function runProgram(input){
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    let arr=[]
    for(let i=0;i<tc;i++){
        let num=+input[line++];
       
        //arr.push(value)
        // console.log(arr)
        checkSkew(num)
    }
    
}
function  checkSkew(num){
    let oddC=0;
    let evenC=0;
    
   
    for(let i=0;i<num;i++){
        
     if(i%2===0){
       evenC++
   }
   else{
       oddC++
   }  
       
 
    }
    if(evenC>oddC){
        console.log("Even Skewed")
    }
    else if(evenC===oddC){
        console.log("Not Skewed")
    }
    else{
        console.log("Odd Skewed")
    }
     
}


 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}