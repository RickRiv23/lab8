const express = require("express");
const app = express();
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static("assets"));


//routes
app.get("/", function(req, res){
    
    //console.log(req.query.q1);
    // let score = 0;
    // let f1, f2, f3, f4, f5;
    // f1 = f2 = f3 = f4 = f5 = "Wrong!";
    
    // if (req.query.q1.toLowerCase() == "sacramento") {
    //     score += 20;
    //     f1 = "You got it!";
    // }
    //res.render("index", {"score": score, "feedback1":f1});
    
    res.render("index.ejs");
} );


app.get("/gradeQuiz", function(req,res){
    
    //console.log(req.query.q1);
    let score = 0;
    let f1, f2, f3, f4, f5, f6, f7, f8;
    f1 = f2 = f3 = f4 = f5 = f6 = f7 = f8 = "Wrong!";
    
    console.log(req.query.q2 );
    
    if (req.query.q1.toLowerCase() == "sacramento") {
        score += 12.5;
        f1 = "Right!";
    }
    if (req.query.q2 == "mo") {
        score += 12.5;
        f2 = "Right!";
    }
    if (req.query.q3a=="false" && req.query.q3b=="false"
     && req.query.q3c=="true" && req.query.q3d=="true" ) {
        score += 12.5;
        f3 = "Right!";
    }
    if (req.query.q4 == "Rhode Island") {
        score += 12.5;
        f4 = "Right!";
    }
   if (req.query.q5 == "seal2") {
        score += 12.5;
        f5 = "Right!";
    }
    if (req.query.q6 == 50) {
        score += 12.5;
        f6 = "Right!";
    }
   if (req.query.q7 == "US") {
        score += 12.5;
        f7 = "Right!";
    }
   if (req.query.q8 == "Olympia") {
        score += 12.5;
        f8 = "Right!";
    }
    
    
    
    res.send( {
        "score": score,
        "fback1":f1,
        "fback2":f2,
        "fback3":f3,
        "fback4":f4,
        "fback5":f5,
        "fback6":f6,
        "fback7":f7,
        "fback8":f8
    });
    
    
    
});


//running server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})