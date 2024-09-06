import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  email: string;
  username: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface UserContextType {
  userLogin: (username: string, password: string) => void;
  data: User;
  loading: boolean;
  error: string;
  userLogout: () => void;
  isLogged: boolean;
}

export const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export function UserStorage({ children }: UserProviderProps) {
  const [data, setData] = useState<User | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const userLogout = useCallback(
    async function () {
      navigate('/');
      setData(null);
      setError('');
      setLoading(false);
      setIsLogged(false);
      window.localStorage.removeItem('access_token');
    },
    [navigate],
  );

  async function userLogin(username: string, password: string): Promise<void> {
    try {
      setError('');
      setLoading(true);
      const { data } = await api.post('auth/login', {
        username,
        password,
      });
      window.localStorage.setItem('access_token', data.access_token);
      await getUser(data.access_token);
      navigate('/conta');
    } catch (error: any) {
      setError(error.response.data.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  async function getUser(token: string): Promise<void> {
    try {
      setLoading(true);
      const { data } = await api.get('auth/validate-token', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data);
      setIsLogged(true);
    } catch (error: any) {
      userLogout();
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('access_token');
      if (token) {
        getUser(token);
      }
    }
    autoLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{ userLogin, data, loading, error, userLogout, isLogged }}
    >
      {children}
    </UserContext.Provider>
  );
}
