module.exports=(sequelize,DataTypes)=>{

    let Teams=sequelize.define("teams",{
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
        designation:{
            type:DataTypes.STRING(100),
            allowNull:true
        },
        facebook:{
            type:DataTypes.STRING(100),
            allowNull:true 
        },
        instagram:{
            type:DataTypes.STRING(100),
            allowNull:true 
        },
        twitter:{
            type:DataTypes.STRING(100),
            allowNull:true 
        },
        behance:{
            type:DataTypes.STRING(100),
            allowNull:true 
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
    return Teams
}