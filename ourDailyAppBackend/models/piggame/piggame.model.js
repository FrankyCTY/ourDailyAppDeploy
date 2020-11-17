const mongoose = require("mongoose");

const piggameSchema = new mongoose.Schema(
    {
        activePlayer: {
            type: Number,
            default: 1,
        },
        diceNumber: {
            type: Number
        },
        creator: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
        player2Id: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
        player1: {
          currentScore: {
            type: Number,
            default: 0,
          },
          totalScore: {
            type: Number,
            default: 0,
          },
        },
        player2: {
          currentScore: {
            type: Number,
            default: 0,
          },
          totalScore: {
            type: Number,
            default: 0,
          },
        },
        prev_scores: {
          type: [Number],
          default: [0, 0],
        },
        strikes: {
            type: Number,
            default: 0,
        },
        winner: {
            type: String,
            default: "none",
        },
        createdAt: {
            type: Date,
            default: new Date(),
        }
    },
    {
        toJSON: {
          virtuals: true,
        },
        toObject: {
          virtuals: true,
        },
    }
);


const Piggame = mongoose.model("Piggame", piggameSchema);

module.exports = Piggame;