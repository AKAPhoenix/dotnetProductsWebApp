const dpd=require('../../../Entries/dependencies.js')
const router=dpd.router;
const path=dpd.path;
const https=dpd.https;
const request=dpd.request;
const cheerio = dpd.cheerio;
const puppeteer = dpd.puppeteer;
const axios=dpd.axios;

router.get('/make',(req,res)=>{
    res.render('timetable')
})