import React from 'react'
import { useEffect, useState } from 'react';
import app from '../firebaseConfig'
import { getDatabase, ref, get } from 'firebase/database';

function read() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const db = app.firestore();
    const fetchData = async () => {
    try {
      const db = getDatabase(app);
      const dbRef = ref(db, 'responses');
      const snapshot = await get(dbRef);
      const result = snapshot.docs.map(doc => doc.data());
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default read