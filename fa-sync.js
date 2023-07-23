const {readFileSync,writeFileSync}=require('fs')


//utf8 is the encoding 
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

console.log(first,second);

writeFileSync('./content/resultOfWriteSync.txt',`This file os the result of writeFileSync the lines are \n ${first} \n ${second}`,{flag:'a'})