import * as mongodb from 'mongodb';
const MongoClient: any = mongodb.MongoClient;

const MONGO_URL = process.env.MONGO_URL;

export const connectMongo = async () => {
    const mongoConnection = await MongoClient.connect(MONGO_URL, { useUnifiedTopology: true });
    const db: any = mongoConnection.db('sanctuary-db');
    return {Animals: db.collection('animals')};
}