const  Sequelize  = require("sequelize");

const sequelize=new Sequelize('iam_online','root','root',{
host:"localhost",
dialect:"mysql",
pool:{
    max:5,
    min:0,
    acquire:30000,
    idle:10000
},
    logging:false

}) 

let db={
 
}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.Reviews=require('./models/reviews')(sequelize,Sequelize)
db.Teams=require('./models/teams')(sequelize,Sequelize)
db.Contact_Us=require('./models/contact_us')(sequelize,Sequelize)
db.HomePage=require('./models/homepage')(sequelize,Sequelize)
db.FAQS=require('./models/faqs')(sequelize,Sequelize)
db.Products=require('./models/products')(sequelize,Sequelize)
db.Coupons=require('./models/coupons')(sequelize,Sequelize)
db.Users=require('./models/users')(sequelize,Sequelize)

// require('./relations')(db);
module.exports=db;
