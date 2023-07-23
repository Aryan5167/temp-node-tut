const {readFile,writeFile}=require('fs')


readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
   const first=result;
   readFile('./content/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const second=result;
    writeFile('./content/resultOfWriteAsync.txt',`Here is the result of writeFile asynchronous \n ${first} 
    \n ${second}`,{flag: 'a'},(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result)
    })
   })
})