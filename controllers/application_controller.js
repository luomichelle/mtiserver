var express = require('express');
var router  = express.Router();
var app = express();
var server = require('http').Server(app);


router.get('/', function(req, res) { 
	res.redirect('/chinese');
});

router.get('/index', function(req,res) {
  res.render('en/index', {
    layout: 'main-registration'
  });
});

router.get('/about', function(req,res) {
  res.render('en/about', {
    layout: 'main-registration'
  });
});

router.get('/services', function(req,res) {
  res.render('en/services', {
    layout: 'main-registration'
  });
});

router.get('/contact', function(req,res) {
  res.render('en/contact', {
    layout: 'main-registration'
  });
});
router.get('/projectone', function(req,res) {
  res.render('en/projectone', {
    layout: 'main-registration'
  });
});
router.get('/projecttwo', function(req,res) {
  res.render('en/projecttwo', {
    layout: 'main-registration'
  });
});
router.get('/projectthree', function(req,res) {
  res.render('en/projectthree', {
    layout: 'main-registration'
  });
});
router.get('/projectfour', function(req,res) {
  res.render('en/projectfour', {
    layout: 'main-registration'
  });
});
router.get('/projectfive', function(req,res) {
  res.render('en/projectfive', {
    layout: 'main-registration'
  });
});
router.get('/projectsix', function(req,res) {
  res.render('en/projectsix', {
    layout: 'main-registration'
  });
});

router.get('/album', function(req,res) {
  res.render('en/albums', {
    layout: 'main-registration'
  });
});


//===========================chineseeee

router.get('/chinese', function(req,res) {
  res.render('cn/index', {
    layout: 'cn-registration'
  });
});




router.get('/cnabout', function(req,res) {
  res.render('cn/about', {
    layout: 'cn-registration'
  });
});

router.get('/lasvegasnews', function(req,res) {
  res.render('cn/lasvegasnews', {
    layout: 'cn-registration'
  });
});

router.get('/lasvegasgov', function(req,res) {
  res.render('cn/lasvegasgov', {
    layout: 'cn-registration'
  });
});


router.get('/cnservices', function(req,res) {
  res.render('cn/services', {
    layout: 'cn-registration'
  });
});

router.get('/cncontact', function(req,res) {
  res.render('cn/contact', {
    layout: 'cn-registration'
  });
});
router.get('/cnprojectone', function(req,res) {
  res.render('cn/projectone', {
    layout: 'cn-registration'
  });
});
router.get('/cnprojecttwo', function(req,res) {
  res.render('cn/projecttwo', {
    layout: 'cn-registration'
  });
});
router.get('/cnprojectthree', function(req,res) {
  res.render('cn/projectthree', {
    layout: 'cn-registration'
  });
});
router.get('/cnprojectfour', function(req,res) {
  res.render('cn/projectfour', {
    layout: 'cn-registration'
  });
});
router.get('/cnprojectfive', function(req,res) {
  res.render('cn/projectfive', {
    layout: 'cn-registration'
  });
});
router.get('/cnprojectsix', function(req,res) {
  res.render('cn/projectsix', {
    layout: 'cn-registration'
  });
});
router.get('/cnprojectseven', function(req,res) {
  res.render('cn/projectseven', {
    layout: 'cn-registration'
  });
});
router.get('/cnprojecteight', function(req,res) {
  res.render('cn/projecteight', {
    layout: 'cn-registration'
  });
});
router.get('/cnprojectnine', function(req,res) {
  res.render('cn/projectnine', {
    layout: 'cn-registration'
  });
});
router.get('/cnprojectten', function(req,res) {
  res.render('cn/projectten', {
    layout: 'cn-registration'
  });
});
//subpages:
router.get('/cnprojectone-page2', function(req,res) {
  res.render('cn/projectone-page2', {
    layout: 'cn-registration'
  });
});

router.get('/cnprojectone-page3', function(req,res) {
  res.render('cn/projectone-page3', {
    layout: 'cn-registration'
  });
});

router.get('/cnprojecttwo-page2', function(req,res) {
  res.render('cn/projecttwo-page2', {
    layout: 'cn-registration'
  });
});

router.get('/cnlasvegaseducation', function(req,res) {
  res.render('cn/cnlasvegaseducation', {
    layout: 'cn-registration'
  });
});

router.get('/cnlasvegasetravel', function(req,res) {
  res.render('cn/cnlasvegasetravel', {
    layout: 'cn-registration'
  });
});

router.get('/investinlv', function(req,res) {
  res.render('cn/investinlv', {
    layout: 'cn-registration'
  });
});

router.get('/cnlasvegashotel', function(req,res) {
  res.render('cn/cnlasvegashotel', {
    layout: 'cn-registration'
  });
});

router.get('/cnalbum', function(req,res) {
  res.render('cn/albums', {
    layout: 'cn-registration'
  });
});
module.exports = router;
