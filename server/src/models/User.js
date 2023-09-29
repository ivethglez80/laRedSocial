const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define(
        "User",
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            email:{
                type: DataTypes.STRING,
                unique: true
            },
            phone:{
                type: DataTypes.STRING,
                allowNull: false
            },
            created:{
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        },
    {timestamps: false}
    )
}