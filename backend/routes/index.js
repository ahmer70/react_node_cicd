const Reviews=require('./reviews')
const FAQS=require('./faqs')
const Teams=require('./teams')
const Products=require('./products')
const ContactUS=require('./contact_us')
const Coupons=require('./coupons')
const Users=require('./users')

module.exports=function(app){

    app.use('/api/reviews',Reviews);
    app.use('/api/faqs',FAQS);
    app.use('/api/teams',Teams);
    app.use('/api/products',Products);
    app.use('/api/contact_us',ContactUS);
    app.use('/api/coupons',Coupons);
    app.use('/api/users',Users);

}
