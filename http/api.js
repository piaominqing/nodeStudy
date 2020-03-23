// /http /api.js
const http = require("http"); 
const fs = require("fs");
const app = http  
    .createServer((req, res) => {    
        const { method, url } = req;    
        console.log(url, method)  
        console.log('cookie',req.headers.cookie)
        if (method == "GET" && url == "/") {      
            fs.readFile("./index.html", (err, data) => {        
                res.setHeader("Content-Type", "text/html"); 
                res.end(data);      
            });    
        } else if (method === "POST" && url === "/api/save") {  
            // bodyparser 原理
            let reqData = [];  
            let size = 0;  
            req.on('data', data => {    
                console.log('>>>req on', data);    
                reqData.push(data);    
                size += data.length;  
            });  
            req.on('end', function () {    
                console.log('end')    
                const data = Buffer.concat(reqData, size);    
                console.log('data:', size, data.toString())    
                res.end(`formdata:${data.toString()}`)  
            }); 
        }else if (method == "GET" && url == "/api/users") {   
            res.setHeader('Access-Control-Allow-Credentials', 'true');    
            res.setHeader("Content-Type", "application/json");  
            res.setHeader('Set-Cookie', 'cookie1=va222;')
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')    
            res.end(JSON.stringify([{ name: "tom", age: 20 }]));    
        } else if (method == "OPTIONS" && url == "/api/users") { 
            res.setHeader('Access-Control-Allow-Credentials', 'true'); 
            res.writeHead(200, {"Access-Control-Allow-Origin": "http://localhost:3000",             
                                "Access-Control-Allow-Headers": "X-Token,Content-Type",
                                "Access-Control-Allow-Methods": "PUT"           
                            });           
            res.end(JSON.stringify([{ name: "tom", age: 20 }]));   
        }
    })  
    module.exports =app
