module.exports=(sequelize,DataTypes)=>{

    let Reviews=sequelize.define("reviews",{
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
     
        img:{
            type:DataTypes.TEXT('long'),
            allowNull:true
        },
        message:{
            type:DataTypes.STRING(1000),
            allowNull:true
        },
        userType:{
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
    return Reviews
}