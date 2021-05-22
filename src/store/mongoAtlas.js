const {MongoClient, ObjectId} = require("mongodb");

const { config } = require("../../config");

const user = encodeURIComponent(config.AtlasUser);
const password = encodeURIComponent(config.AtlasPasword);
const dbName = config.AtlasDBName;

const mongoUri = `mongodb+srv://${user}:${password}@cluster0.0pgxi.mongodb.net/${dbName}?retryWrites=true&w=majority`;

class mongoAtlas{
      constructor(){
            this.client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true});
            this.dbname = dbName;
      }
      connect(){
            if(!mongoAtlas.connection){
                  mongoAtlas.connection = new Promise((resolve, reject) => {
                        this.client.connect(err => {
                              if(err){
                                    reject(err);
                              }
                              console.log("Connected succesfully to mongoAtlas")
                              resolve(this.client.db(this.dbName));
                        });
                  });
            }
            return mongoAtlas.connection;
      }
      listAll(collection,query){
            return this.connect().then(db => {
                  return db.collection(collection).find(query).toArray();
            })
      }
}
module.exports = mongoAtlas