var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    if(req.url=="/"){
        var mypage = fs.readFileSync("home.html","utf8");
        res.end(mypage);
    }
    else if(req.url=="/about"){
        var myPage = fs.readFileSync("about.html","utf8");
        res.end(myPage);
    }
    else if(req.url=="/contact"){
        var myPage = fs.readFileSync("contact.html","utf8");
        res.end(myPage);
    }
    else if(req.url=="/terms"){
        var myPage = fs.readFileSync("terms.html","utf8");
        res.end(myPage);
    }
});


server.listen(4000);
console.log("server run success");

// Assyncronous

// var server = http.createServer(function(req,res){
//     if(req.url=="/"){
//         fs.readFile("home.html", function(error,data){
//             if(data){
//                 res.end(data);
//             }
//         });
//     }
//     else if(req.url=="/about"){
//         fs.readFile("about.html",function(error,data){
//             if(data){
//                 res.end(data);
//             }
//         });
//     }
//     else if(req.url=="/contact"){
//         fs.readFile("contact.html",function(error,data){
//             if(data){
//                 res.end(data);
//             }
//         });
//     }
//     else if(req.url=="/terms"){
//         fs.readFile("terms.html",function(error,data){
//             if(data){
//                 res.end(data);
//             }
//         })
//     }
// })

// server.listen(4000);
// console.log("server run success");