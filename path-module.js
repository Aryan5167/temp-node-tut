const path=require('path');

console.log(path.sep); // returns path seperator for the system


//joins sequence of path segments using the platform specific seperator and returns a normalised resulting path
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath)

console.log(path.resolve(__dirname,'content','subfolder','test.txt'));