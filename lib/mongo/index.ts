const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;
// MONGODB_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.eyz7i1x.mongodb.net/`;
export const connectionString = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.eyz7i1x.mongodb.net/blog`;
