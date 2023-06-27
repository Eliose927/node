const { readFile,writeFile }=require('fs')
console.log("Start")

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
   const first=result
   readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second=result
    writeFile('./content/result-aync.txt',`Here is the result: ${first}, ${second}`,
    (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("Donw with async task")
    })
    
   })
})
console.log("Starting next")
