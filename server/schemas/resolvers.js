const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    matchups: async () => {
      return await Matchup.find({});
    },
    matchup: async (parent, { id }) => {
      return await Matchup.findOne({_id: id});
    },
    tech: async () => {
      // const params = username ? { username } : {};
      return await Tech.find({});
    },
  },

  Mutation: {
    createMatchup: async (parent, { tech1, tech2 }) => {
      const matchup = await Matchup.create({tech1, tech2});
      return matchup;
    },
    createVote: async (parent, { techNum, matchupId}) => {
      const matchup = await Matchup.findOneAndUpdate(
        { _id: matchupId},
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return matchup
    },
  },
};

//w

module.exports = resolvers
