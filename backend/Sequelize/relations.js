module.exports = function (db) {

    db.Users.belongsTo(db.Coupons, {
        foreignKey: 'coupon_id',
        targetKey: 'name',
        as: 'coupon'
    });
   

}