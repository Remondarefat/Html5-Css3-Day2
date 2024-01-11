self.onmessage=function(){
    let result=2;
    for(let i =1 ; i<30 ; i++){
        result*=i;
    }
    self.postMessage(result);
}