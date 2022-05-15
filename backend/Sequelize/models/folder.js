module.exports=(sequelize,DataTypes)=>{

    let Folder=sequelize.define("folder",{
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
     
        description:{
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
        }
       

    },{
        timestamp: true,
        freezeTableName: true,
        updatedAt: false,
        createdAt: 'created',
    })
    return FAQS
}