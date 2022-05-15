module.exports=(sequelize,DataTypes)=>{

    let Users=sequelize.define("users",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
     
        email:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        password:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        pageName:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        coupon:{
            type:DataTypes.STRING(100),
           
            allowNull:false
        },
        institution:{
            type:DataTypes.STRING(100),
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
    return Users
}