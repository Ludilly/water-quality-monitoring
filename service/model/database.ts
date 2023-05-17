import mongoose from 'mongoose';

let connection: typeof mongoose;

const mongoConnect = 'mongodb://mongodb:27017'

export const connectDatabase = async () => {
  mongoose.set('runValidators', true);

  connection = await mongoose.connect(mongoConnect);
};

export const disconnectDatabase = async () => {
  if (connection) {
    await connection.disconnect();
  }
};
