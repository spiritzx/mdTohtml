var express = require('express');
var router = express.Router();
const fs = require('fs')
const marked = require('marked')
//1.实时监视note.md文件的变化

/* GET users listing. */
router.get('/', function(req, res, next) {
  let htmlStr = "code";
  fs.readFile('./note.md', 'utf8', (err, markContent) => {
    if (err) {
      throw err
    } else {
      //转化好的html字符串
      htmlStr = marked(markContent.toString());
      res.render("md", { body: htmlStr });
    }
  })
});
module.exports = router;
