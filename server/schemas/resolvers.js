const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  getMe: async (parent, { username }) => {
    return User.findOne({ username }).populate('savedBooks');
  },


  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { userID, authors, description, title, bookId, image, link }) => {
      return User.findOneAndUpdate(
        { _id: userID },
        {
          $addToSet: { savedBooks: { authors, description, title, bookId, image, link } },
          bookCount = savedBooks.length,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeBook: async (parent, { userID, bookId }) => {
      return User.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { savedBooks: { bookId: bookId } } },
        { new: true }
      );
  },
},
};

module.exports = resolvers;
