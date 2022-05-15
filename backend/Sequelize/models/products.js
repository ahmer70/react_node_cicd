module.exports=(sequelize,DataTypes)=>{

    let Products=sequelize.define("products",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        short_name:{
            type:DataTypes.STRING(50),
            allowNull:true
        },
     
        long_name:{
            type:DataTypes.STRING(100),
            allowNull:true
        },
        short_drip:{
            type:DataTypes.STRING(500),
            allowNull:true
        },
        long_drip:{
            type:DataTypes.STRING(1000),
            allowNull:true
        },
        image1:{
            type:DataTypes.TEXT('long'),
            allowNull:false
        },
        image2:{
            type:DataTypes.TEXT('long'),
            allowNull:false
        },
        isDel:{
            type:DataTypes.CHAR(1),
            allowNull:false,
            defaultValue:"F"
        },
        created:{
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue:DataTypes.NOW()
        }
       

    },{
        timestamp: true,
        freezeTableName: true,
        updatedAt: false,
        createdAt: 'created',
    })
    return Products
}