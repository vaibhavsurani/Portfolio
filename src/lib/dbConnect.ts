import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// Define a type for our cached connection object
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Create a typed global variable to hold the cache
const globalWithMongoose = global as typeof globalThis & {
  mongoose_cache: MongooseCache;
};


let cached = globalWithMongoose.mongoose_cache;

if (!cached) {
  cached = globalWithMongoose.mongoose_cache = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log('Using cached database connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log('Creating new database connection');
    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }
  
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    // If the connection fails, reset the promise so we can try again
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;

