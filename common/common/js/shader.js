const Shader = function(){
    this.shaderSource = "deneme";

    this.file = function(path){
        return new Promise(function(resolve, reject){
            var rfile = new XMLHttpRequest();
            rfile.open("GET", path, true);
            rfile.onreadystatechange = function(){
                if(rfile.readyState === rfile.DONE){
                    if(rfile.status === 200){
                        resolve(rfile.responseText);
                    }
                }
            }
            rfile.send();
        });   
    }

    this.get = function(path){
        var self = this;
        return new Promise(async function(resolve, reject){
            if(path){
                self.shaderSource = await self.file(path);
                resolve(self.shaderSource);
            }else{
                reject(Error("no file"));
            }
        });
    }
}