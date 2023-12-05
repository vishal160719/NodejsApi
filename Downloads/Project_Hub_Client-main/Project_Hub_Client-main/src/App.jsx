import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';

const Projectlist = lazy(() => import('./pages/Projectlist'));
const Chart = lazy(() => import('./pages/Chart'));
const SeProject = lazy(() => import('./pages/SE/SeProject'));
const TeProject = lazy(() => import('./pages/TE/TeProject'));
const BeProject = lazy(() => import('./pages/BE/BeProject'));
const SeGroup = lazy(() => import('./pages/SE/SeGroup'));
const TeGroup = lazy(() => import('./pages/TE/TeGroup'));
const BeGroup = lazy(() => import('./pages/BE/BeGroup'));
const SeStudent = lazy(() => import('./pages/SE/SeStudent'));
const TeStudent = lazy(() => import('./pages/TE/TeStudent'));
const BeStudent = lazy(() => import('./pages/BE/BeStudent'));
const Semproject = lazy(() => import('./pages/Semproject'));
const Creategroup = lazy(() => import('./pages/Creategroup'));
const Addproject = lazy(() => import('./pages/Addproject'));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<DefaultLayout />}>
          <Route index element={<ECommerce />} />
          <Route
            path="/projectlist"
            element={
              <Suspense fallback={<Loader />}>
                <Projectlist />
              </Suspense>
            }
          />
          <Route
            path="/semproject"
            element={
              <Suspense fallback={<Loader />}>
                <Semproject />
              </Suspense>
            }
          />
          <Route
            path="/secondyear/project"
            element={
              <Suspense fallback={<Loader />}>
                <SeProject />
              </Suspense>
            }
          />
          <Route
            path="/secondyear/grouplist"
            element={
              <Suspense fallback={<Loader />}>
                <SeGroup />
              </Suspense>
            }
          />
          <Route
            path="/secondyear/studentlist"
            element={
              <Suspense fallback={<Loader />}>
                <SeStudent />
              </Suspense>
            }
          />
          <Route
            path="/thirdyear/projectlist"
            element={
              <Suspense fallback={<Loader />}>
                <TeProject />
              </Suspense>
            }
          />
          <Route
            path="/thirdyear/grouplist"
            element={
              <Suspense fallback={<Loader />}>
                <TeGroup />
              </Suspense>
            }
          />
          <Route
            path="/thirdyear/studentlist"
            element={
              <Suspense fallback={<Loader />}>
                <TeStudent />
              </Suspense>
            }
          />
          <Route
            path="/fourthyear/projectlist"
            element={
              <Suspense fallback={<Loader />}>
                <BeProject />
              </Suspense>
            }
          />
          <Route
            path="/fourthyear/grouplist"
            element={
              <Suspense fallback={<Loader />}>
                <BeGroup />
              </Suspense>
            }
          />
          <Route
            path="/fourthyear/studentlist"
            element={
              <Suspense fallback={<Loader />}>
                <BeStudent />
              </Suspense>
            }
          />
          <Route
            path="/addproject"
            element={
              <Suspense fallback={<Loader />}>
                <Addproject />
              </Suspense>
            }
          />
          <Route
            path="/creategroup"
            element={
              <Suspense fallback={<Loader />}>
                <Creategroup />
              </Suspense>
            }
          />
          <Route
            path="/chart"
            element={
              <Suspense fallback={<Loader />}>
                <Chart />
              </Suspense>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <Suspense fallback={<Loader />}>
                <Alerts />
              </Suspense>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <Suspense fallback={<Loader />}>
                <Buttons />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
