import { MongoClient } from "mongodb";
let client;
const connect = async () => {
  client = new MongoClient(process.env.MONGO_DB_URI);

  console.log("connecting...");
  await client.connect();
  console.log("connected");
};

export const getAllProjects = async () => {
  try {
    await connect();

    const database = client.db("portfolio");
    const collection = database.collection("projects");

    const projects = await collection.find({}).toArray();
    // console.log(projects);
    return projects;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
export const getAllSkills = async () => {
  try {
    await connect();

    const database = client.db("portfolio");
    const collection = database.collection("skills");

    const skills = await collection.find({}).toArray();
    return skills;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
