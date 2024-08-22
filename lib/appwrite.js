import { Account, Avatars, Client, Databases, ID} from "react-native-appwrite";

export const appwriteConfig ={
  endpoint:'https://cloud.appwrite.io/v1',
  platform:'co.edu.sena.aora',
  projectId:'66c4e557001a9ec0797b',
  databaseId:'66c50abb00176c112fca',
  userCollectionId: '66c50b970015c7f1fff7',
  videoCollectionId: '66c50c04001535e74997',
  storageId: '66c511c8000be9dc8590'
}

//constancia para cliente
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export async function createUser(email, password, username) {
  try {      
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
  
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username)

    await signIn(email,password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar:avatarUrl

      }
    );

      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }
export async function signIn(email, password) {
  try{
    const session = await account.createEmailPasswordSession(
      email, password)
      return session;
    
  }catch (error) {
    throw new Error(error);

  }
  
}