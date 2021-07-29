var express = require('express');
var router = express.Router();
app = express()
var matrixEig = require('matrix-eig');

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());



// var matrix = [[0, 1],[-2, -3]]
// var result = matrixEig.eig(matrix);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
  var matrix = [[0, 1],[-2, -3]];
  var result = matrixEig.eig(matrix);
  var val = result.eigenvalues.real
console.log(typeof(matrix));
});

//eigenvalues
router.get('/values', function(req, res, next){
  res.render('values');
});
// var matrix = [[0, 1],[-2, -3]]
router.post('/eigen', function(req,res){
      var mat2 = req.body.eigen;
      var mat3 = JSON.parse(mat2)
      var result = matrixEig.eig(mat3);
      var eigenvalue = result.eigenvalues.real;
      var eigenvector = result.eigenvectors.right;
      res.render('eigen', {mat2:mat2, eigenvalue:eigenvalue, eigenvector:eigenvector});
      console.log("worked"+ typeof(mat3));
      console.log('eigenvalue'+eigenvalue);
    });

router.get('/determinant', function(req, res, next){
  res.render('determinant');
  // console.log('matrix', req.bodyParser.matrix);
});

router.post('/det', function(req,res){
      var mat = req.body.matrix;
      var mat = JSON.parse(mat)
      function det(M) {
        return (M[0][0]*M[1][1])-(M[0][1]*M[1][0]);
     };
     
     var dets = det(mat);
      // // res.send("New employee has been added  = "+mat);
      res.render('det', {mat:mat, dets:dets})

    });



  
router.get('/trac', function(req, res, next){
  res.render('trac');
});

router.post('/trace', function(req,res){
  var tra = req.body.matrix;
  var tra = JSON.parse(tra);

  function findTrace(mat, n)
{
    var sum = 0;
    for(var i = 0; i < n; i++)
        sum += mat[i][i];
         
    return sum;
}
    var trac = findTrace(tra, 2)
    res.render('trace', {tra:tra, trac:trac})
}
)

module.exports = router;
