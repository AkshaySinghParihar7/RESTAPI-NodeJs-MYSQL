module.exports = (sequelize,DataTypes) => {
    const  Plan = sequelize.define("plan",{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        feature:{
            type: DataTypes.TEXT,
        },
        isactive:{
            type: DataTypes.BOOLEAN,
        },
        trialdays:{
            type: DataTypes.INTEGER,
        },
        isdelete:{
            type: DataTypes.BOOLEAN,
        },
        duration:{
            type: DataTypes.STRING,
        }
    });

    return Plan;
}