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

  // console.log(users);

  return (
    <>
      <div className='text-2xl'>Users</div>
      {users?.map((user, id) => (
        <UserBar key={id} username={user.displayName} id={id} />
      ))}
    </>
  );
};

export default AdminPanelPage;
