const router = require('express').Router();

//#region Posts Component 

const Postsuser = require('../components/posts.component');
const Posts = new Postsuser();

const Postscustomer=require('../components/customer.component');
const Postcus=new Postscustomer();


const Postsamount=require('../components/amount.component');
const Postam=new Postsamount();



const Postsloan=require('../components/loan.component');
const Postloan=new Postsloan();

const Postslogin=require('../components/login.component');
const Postlogin=new Postslogin();


const Postsout=require('../components/outstanding_days.component');
const Postout=new Postsout();


const Postsprincipal=require('../components/principal.component');
const Postprin=new Postsprincipal();

const Postcal=require('../components/calculation.component');
const Postc=new Postcal();


// แสดงข้อมูล หลาย row
router.get('/user', (req, res) => res.sendAsyncApi(Posts.selectAll()));
// แสดงข้อมูลแค่ row เดียว
router.get('/user/:em_id', (req, res) => res.sendAsyncApi(Posts.selectOne(req.params.em_id)));
// เพิ่มข้อมูล
router.post('/user', (req, res) => res.sendAsyncApi(Posts.create(req.body)));
// แก้ไขข้อมูล
router.put('/user/:em_id', (req, res) => res.sendAsyncApi(Posts.update(req.params.em_id, req.body)));
// ลบข้อมูล
router.delete('/user/:em_id', (req, res) => res.sendAsyncApi(Posts.delete(req.params.em_id)));
//#endregion



/////////////////////////////////////
// แสดงข้อมูล หลาย row
router.get('/customer', (req, res) => res.sendAsyncApi(Postcus.selectAll()));
// แสดงข้อมูลแค่ row เดียว
router.get('/customer/:cus_id', (req, res) => res.sendAsyncApi(Postcus.selectOne(req.params.cus_id)));
// เพิ่มข้อมูล
router.post('/customer', (req, res) => res.sendAsyncApi(Postcus.create(req.body)));
// แก้ไขข้อมูล
router.put('/customer/:cus_id', (req, res) => res.sendAsyncApi(Postcus.update(req.params.cus_id, req.body)));
// ลบข้อมูล
router.delete('/customer/:cus_id', (req, res) => res.sendAsyncApi(Postcus.delete(req.params.cus_id)));
//#endregion
module.exports = router;

///////////////////////////////////////////


// แสดงข้อมูล หลาย row
router.get('/amount_payable', (req, res) => res.sendAsyncApi(Postam.selectAll()));
// แสดงข้อมูลแค่ row เดียว
router.get('/amount_payable/:am_id', (req, res) => res.sendAsyncApi(Postam.selectOne(req.params.am_id)));
// เพิ่มข้อมูล
router.post('/amount_payable', (req, res) => res.sendAsyncApi(Postam.create(req.body)));
// แก้ไขข้อมูล
router.put('/amount_payable/:am_id', (req, res) => res.sendAsyncApi(Postam.update(req.params.am_id, req.body)));
// ลบข้อมูล
router.delete('/amount_payable/:am_id', (req, res) => res.sendAsyncApi(Postam.delete(req.params.am_id)));
//#endregion
module.exports = router;


///////////////////////////////////////////
// แสดงข้อมูล หลาย row
router.get('/deffer_revenue', (req, res) => res.sendAsyncApi(Postde.selectAll()));
// แสดงข้อมูลแค่ row เดียว
router.get('/deffer_revenue/:def_id', (req, res) => res.sendAsyncApi(Postde.selectOne(req.params.def_id)));
// เพิ่มข้อมูล
router.post('/deffer_revenue', (req, res) => res.sendAsyncApi(Postde.create(req.body)));
// แก้ไขข้อมูล
router.put('/deffer_revenue/:def_id', (req, res) => res.sendAsyncApi(Postde.update(req.params.def_id, req.body)));
// ลบข้อมูล
router.delete('/deffer_revenue/:def_id', (req, res) => res.sendAsyncApi(Postde.delete(req.params.def_id)));
//#endregion
module.exports = router;



///////////////////////////////////////////
// แสดงข้อมูล หลาย row
router.get('/loan', (req, res) => res.sendAsyncApi(Postloan.selectAll()));
// แสดงข้อมูลแค่ row เดียว
router.get('/loan/:loan_id', (req, res) => res.sendAsyncApi(Postloan.selectOne(req.params.loan_id)));
// เพิ่มข้อมูล
router.post('/loan', (req, res) => res.sendAsyncApi(Postloan.create(req.body)));
// แก้ไขข้อมูล
router.put('/loan/:loan_id', (req, res) => res.sendAsyncApi(Postloan.update(req.params.loan_id, req.body)));
// ลบข้อมูล
router.delete('/loan/:loan_id', (req, res) => res.sendAsyncApi(Postloan.delete(req.params.loan_id)));
//#endregion
module.exports = router;


///////////////////////////////////////////
// แสดงข้อมูล หลาย row
router.get('/login', (req, res) => res.sendAsyncApi(Postlogin.selectAll()));
// แสดงข้อมูลแค่ row เดียว
router.get('/login/:login_id', (req, res) => res.sendAsyncApi(Postlogin.selectOne(req.params.login_id)));
// เพิ่มข้อมูล
router.post('/login', (req, res) => res.sendAsyncApi(Postlogin.create(req.body)));
// แก้ไขข้อมูล
router.put('/login/:login_id', (req, res) => res.sendAsyncApi(Postlogin.update(req.params.login_id, req.body)));
// ลบข้อมูล
router.delete('/login/:login_id', (req, res) => res.sendAsyncApi(Postlogin.delete(req.params.login_id)));
//#endregion
module.exports = router;







///////////////////////////////////////////
// แสดงข้อมูล หลาย row
router.get('/outstanding_days', (req, res) => res.sendAsyncApi(Postout.selectAll()));
// แสดงข้อมูลแค่ row เดียว
router.get('/outstanding_days/:out_id', (req, res) => res.sendAsyncApi(Postout.selectOne(req.params.out_id)));
// เพิ่มข้อมูล
router.post('/outstanding_days', (req, res) => res.sendAsyncApi(Postout.create(req.body)));
// แก้ไขข้อมูล
router.put('/outstanding_days/:out_id', (req, res) => res.sendAsyncApi(Postout.update(req.params.out_id, req.body)));
// ลบข้อมูล
router.delete('/outstanding_days/:out_id', (req, res) => res.sendAsyncApi(Postout.delete(req.params.out_id)));
//#endregion
module.exports = router;





///////////////////////////////////////////
// แสดงข้อมูล หลาย row
router.get('/principal', (req, res) => res.sendAsyncApi(Postprin.selectAll()));
// แสดงข้อมูลแค่ row เดียว
router.get('/principal/:pri_id', (req, res) => res.sendAsyncApi(Postprin.selectOne(req.params.pri_id)));
// เพิ่มข้อมูล
router.post('/principal', (req, res) => res.sendAsyncApi(Postprin.create(req.body)));
// แก้ไขข้อมูล
router.put('/principal/:pri_id', (req, res) => res.sendAsyncApi(Postprin.update(req.params.pri_id, req.body)));
// ลบข้อมูล
router.delete('/principal/:pri_id', (req, res) => res.sendAsyncApi(Postprin.delete(req.params.pri_id)));
//#endregion
module.exports = router;



///////////////////////////////////////////
// แสดงข้อมูล หลาย row
router.get('/rate', (req, res) => res.sendAsyncApi(Postrate.selectAll()));
// แสดงข้อมูลแค่ row เดียว
router.get('/rate/:rate_id', (req, res) => res.sendAsyncApi(Postrate.selectOne(req.params.rate_id)));
// เพิ่มข้อมูล
router.post('/rate', (req, res) => res.sendAsyncApi(Postrate.create(req.body)));
// แก้ไขข้อมูล
router.put('/rate/:rate_id', (req, res) => res.sendAsyncApi(Postrate.update(req.params.rate_id, req.body)));
// ลบข้อมูล
router.delete('/rate/:rate_id', (req, res) => res.sendAsyncApi(Postrate.delete(req.params.rate_id)));
//#endregion
module.exports = router;


///////////////////////////////////////////////

// แสดงข้อมูล หลาย row
router.get('/calculation', (req, res) => res.sendAsyncApi(Postc.selectAll()));
// แสดงข้อมูลแค่ row เดียว
router.get('/calculation/:cal_id', (req, res) => res.sendAsyncApi(Postc.selectOne(req.params.cal_id)));
// เพิ่มข้อมูล
router.post('/calculation', (req, res) => res.sendAsyncApi(Postc.create(req.body)));
// แก้ไขข้อมูล
router.put('/calculation/:cal_id', (req, res) => res.sendAsyncApi(Postc.update(req.params.cal_id, req.body)));
// ลบข้อมูล
router.delete('/calculation/:cal_id', (req, res) => res.sendAsyncApi(Postc.delete(req.params.cal_id)));
//#endregion
module.exports = router;

///////////////////////////////////////////////





