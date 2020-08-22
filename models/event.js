var Sequelize = require('sequelize');
// creating seeds by using sequalize and describing the information the organiser added for the details
module.exports = function(sequelize, DataTypes) {
    const Event = sequelize.define("Event", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 500]
            }
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Cleanup"
        },
        venue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateTime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Event;
};
