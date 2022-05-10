const { Schema, model, types } = require('mongoose');
const moment = require('moment');


const ReactSchema = new Schema(
    {
        reactID: {
            type: Schema.types.objectId,
            defult: () => new types.objectId()

        },

        reactBody: {
            type: String,
            required: true,
            maxlenght: 320


        },
        username: {
            type: String,
            required: true


        },

        createAt: {
            type: Date.now,
            get: (createAtValue) => moment(createAtValue).format('MMM DD, YYYY [at] hh:mm a')
        }
        },
        {
        toJSON: {
            getters: true
        }

    }
);

const ThoughtsSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtValue) => moment(createdAtValue).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionsSchema]
    },
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }
)

ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thoughts model using the Thoughts Schema
const Thoughts = model('Thoughts', ThoughtsSchema);
