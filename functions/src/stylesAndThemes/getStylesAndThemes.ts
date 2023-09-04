import * as admin from 'firebase-admin';

const db = admin.firestore();

export const getStylesAndThemes = async () => {
    const stylesSnapshot = await db.collection('Styles').get();
    const themesSnapshot = await db.collection('Themes').get();

    const styles = stylesSnapshot.docs.map(doc => doc.data());
    const themes = themesSnapshot.docs.map(doc => doc.data());

    return { styles, themes };
};
