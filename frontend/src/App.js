import { lazy, Suspense } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserProvider from './service/userService';
import AccountProvider from './service/accountService';
import Loader from './components/Loader';

const Interface = lazy(() => import('./components/Interface'));

function App() {

  const clientId = '246648691460-bsj1rub53iami1btvii0577h1on2je01.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Interface/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
