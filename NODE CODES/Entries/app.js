//const routes = require('./routes/index');
const dpd1 = require('../Apps/Amazon/Period Table/controllers/login.js');
const dpd2 = require('../Apps/BetScrape/indexbet')
const dpd3 = require('../Apps/TimeTable/routes/timetable')
const dpd4 = require('../Apps/Learner/routerL')

const mergedeep=require('../Manifest/merger')()

mergedeep(dpd1,dpd2) 
mergedeep(dpd1,dpd3)
mergedeep(dpd1,dpd4)
//const https = require("https");

//const dpd=require('./dependencies.js')
// dpd.app.use(express.static(__dirname ));
__dirname=__dirname.slice(0,__dirname.lastIndexOf(dpd1.path.sep))
console.log('__dirname = '+ __dirname)
//dpd1.app.use(dpd1.express.static(__dirname ));
dpd1.app.set('views', [dpd1.path.join(__dirname, '/Apps/Amazon/views'),
                       dpd1.path.join(__dirname, '/Apps/BetScrape/views'),
                       dpd1.path.join(__dirname, '/Apps/TimeTable/views'),
                       dpd1.path.join(__dirname, '/Apps/Learner/views')]);
dpd1.app.set('view engine', 'pug');
const routes = dpd1.router; 
dpd1.app.use('/', [routes]);
//process.chdir('..')
console.log(process.cwd())
module.exports = dpd1;