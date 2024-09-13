import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config  ={
  endpoint:'https://cloud.appwrite.io/v1',
  platform:'co.edu.sena.aora',
  projectId:'66c4e557001a9ec0797b',
  databaseId:'66c50abb00176c112fca',
  userCollectionId: '66c50b970015c7f1fff7',
  videoCollectionId: '66c50c04001535e74997',
  storageId: '66c511c8000be9dc8590'
}

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId)  // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Revisar si hay una sesión activa
export const checkSession = async () => {
  try {
    const session = await account.get();  // Revisa si existe alguna sesión activa
    return session ? true : false;  // Devuelve true si existe, false si no
  } catch (error) {
    console.log('No active session found.');
    return false;
  }
};

// Crear un nuevo usuario
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    // Generar avatar (obligatorio según la base de datos)
    const avatarUrl = avatars.getInitials(username); // Crear un avatar básico

    // Crear el nuevo documento de usuario en la base de datos
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        username,
        email,
        accountId: newAccount.$id,
        avatar: avatarUrl // Añadir el avatar
      }
    );

    // Iniciar sesión después de crear el usuario
    await signIn(email, password);  

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

// Iniciar sesión solo con credenciales válidas
export const signIn = async (email, password) => {
  try {
    // Verifica si ya existe una sesión activa
    const hasSession = await checkSession();
    if (hasSession) {
      console.log('Session already active, logging out first...');
      await account.deleteSession('current');  // Cerrar la sesión activa
    }

    // Crear una nueva sesión
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtener el usuario actual
export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );

    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};