import { Client, Account, Avatars, Databases, ID, Query } from 'react-native-appwrite';  // Importa desde react-native-appwrite

// Configuración de Appwrite
export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',  // Asegúrate que sea tu endpoint correcto
  projectId: '66c4e557001a9ec0797b',  // ID de tu proyecto
  databaseId: '66c50abb00176c112fca',
  userCollectionId: '66c50b970015c7f1fff7',
  videoCollectionId: '66c50c04001535e74997',
  storageId: '66c511c8000be9dc8590'
};

// Inicializa el cliente de Appwrite
const client = new Client();

client
  .setEndpoint(config.endpoint)  // Configura tu Appwrite Endpoint
  .setProject(config.projectId);  // Configura tu Project ID

// Asegúrate de inicializar las instancias correctamente
export const account = new Account(client);  // Inicializa correctamente Account
export const avatars = new Avatars(client);  // Inicializa Avatars
export const databases = new Databases(client);  // Inicializa Databases

// Revisar si hay una sesión activa
export const checkSession = async () => {
  try {
    const session = await account.get();  // Verifica si existe una sesión activa
    return session ? true : false;
  } catch (error) {
    console.log('No active session found.', error);
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
    const avatarUrl = avatars.getInitials(username);

    // Crear el nuevo documento de usuario en la base de datos
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        username,
        email,
        accountId: newAccount.$id,
        avatar: avatarUrl
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

// Iniciar sesión con credenciales válidas
export const signIn = async (email, password) => {
  try {
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
