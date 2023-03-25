import { useAuthValue } from './AuthProvider';

function ChildOfAuthProvider() {
  const { currentUser } = useAuthValue();
}

export default ChildOfAuthProvider;