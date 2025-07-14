import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Mock authentication
    setUser({
      id: '1',
      name: 'Gaurika Sharma',
      role: 'Brand Owner',
      email: 'gaurika@walmart.com',
      avatar: 'https://media.lordicon.com/icons/wired/flat/269-avatar-female.svg'
    });
  }, []);

  return { user };
};