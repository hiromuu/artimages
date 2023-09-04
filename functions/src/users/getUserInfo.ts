import * as admin from 'firebase-admin';

const db = admin.firestore();

export const getUserInfo = async (data, context) => {
    const userId = context.auth?.uid;
    if (!userId) {
        throw new Error('User is not authenticated.');
    }

    const userDoc = await db.collection('Users').doc(userId).get();
    if (!userDoc.exists) {
        throw new Error('User not found.');
    }

    return userDoc.data();
};
