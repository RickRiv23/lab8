const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


//routes
app.get("/", function(req, res){
    res.render("index.ejs");
    
} );

app.get("/gradeQuiz", function(req, res){
    let score = 0;
    let f1, f2, f3, f4, f5;
    f1 = f2 = f3 = f4 = f5 = "Wrong!";
    
    if (req.query.q1.toLowerCase() == "sacramento") {
        score += 20;
        f1 = "You got it!";
    }
    
    if(req.query.q2 == "mo"){
        score += 20;
        f2 = "You got it!";
    }
    
    res.send({"score":score, "feedback1":f1, "feedback2":f2});
});




//running server
app.listen(process.env.PORT || 8080, process.env.IP, function(){
    console.log("Express server is running...");
})