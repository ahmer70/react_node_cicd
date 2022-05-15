module.exports=(sequelize,DataTypes)=>{

    let HomePage=sequelize.define("homepage",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        address:{
            type:DataTypes.STRING(255),
            allowNull:false
        },
     
        email:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        phoneNumber:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        
        twitter:{
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
        pinterest:{
            type:DataTypes.STRING(100),
            allowNull:true 
        },
        linkedin:{
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
    return HomePage
}