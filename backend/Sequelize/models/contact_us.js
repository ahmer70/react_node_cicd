module.exports=(sequelize,DataTypes)=>{

    let Contact_Us=sequelize.define("contact_us",{
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
            type:DataTypes.STRING(100),
            allowNull:false
        },
        subject:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        message:{
            type:DataTypes.STRING(1000),
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
        },
      

    },{
        timestamp: true,
        freezeTableName: true,
        updatedAt: false,
        createdAt: 'created',
    })
    return Contact_Us
}