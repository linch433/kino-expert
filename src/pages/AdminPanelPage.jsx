import { useState, useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { firestore } from '../firebaseConfig';
import { PagePreLoader } from '../styles/PreLoader/PreLoader';
import UserBar from '../components/AdminPanel/UserBar';

const AdminPanelPage = () => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    await getDocs(collection(firestore, 'Users')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(newData);
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) return <PagePreLoader />;

  return (
    <div className='m-4'>
      <div className='text-3xl text-int-white-main mb-4'>List of users</div>
      <div className='grid md:grid-cols-2 md:gap-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {users?.map((user, id) => (
          <UserBar key={id} user={user} id={id} />
        ))}
      </div>
    </div>
  );
};

export default AdminPanelPage;
