import React, { lazy, Suspense } from "react";
import {useEffect,useState} from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
// import Lottie from "lottie-react";
// import loti_loading from '../LotiAnimation/loti_loading.json';
import Loader from '../components/Doctor/Loader/Loader'
// import LoginPage from "../pages/LoginPages";
// import SignupPage from "../pages/SignupPage";
// import ProtectedRoutes from "../utils/ProtectedRoute";
// import PublicRoutes from "../utils/PublicRoutes";
// import ProfilePage from "../pages/ProfilePage";
// import AdminLogin from "../components/AdminLogin/AdminLogin";
// import AdminHomePage from "../pages/AdminHomePage";
// import AdminEditPage from "../pages/AdminEditPage";
// import CreateUserPage from "../pages/CreateUserPage";
// import AdminProtectedRoutes from "../utils/AdminProtectedRoute";
// import AdminPublicRoute from "../utils/AdminPublicRoute";
// import NewHome from "../components/Home/NewHome";
import UserProtectedRoutes  from '../utils/UserProctedRout'
import UserPublicRoutes from '../utils/UserPublicRoute'
const LoginPage = lazy(() => import("../pages/Doctor/LoginPages"));
const ProtectedRoutes = lazy(() => import("../utils/ProtectedRoute"));
const PublicRoutes = lazy(() => import("../utils/PublicRoutes"));
const ProfilePage = lazy(() => import("../pages/Doctor/ProfilePage"));
const HomePages = lazy(() => import("../pages/Doctor/HomePages"));
const Appointmentpage = lazy(() => import("../pages/Doctor/Appointmentpage"));
const MyClientpage = lazy(() => import("../pages/Doctor/MyClientpage"));
const DoctorTimeSlotpage = lazy(() => import("../pages/Doctor/DoctorTimeSlotpage"));
const EarningsPage = lazy(() => import("../pages/Doctor/EarningsPage"));
const MessagesPage = lazy(() => import("../pages/Doctor/MessagesPage"));
const Chat = lazy(() => import("../pages/Doctor/Chat"));
const Room =lazy(()=> import ("../pages/Doctor/Room"))
const RoomEnter = lazy(()=> import ("../pages/Doctor/JoinRoomPage"))
const UserLoginPage = lazy(() => import("../pages/User/UserLoginPage"));
const UserHomePage = lazy(() => import("../pages/User/UserHomepage"));
const UserDoctorListpage = lazy(() => import("../pages/User/UserDoctorListpage"));
const DoctorProfilepage = lazy(() => import("../pages/User/DoctorProfilepage"));
const SignupPage = lazy(()=> import("../pages/User/UserSignuppage"))
const DoctorSlotpages = lazy(()=> import("../pages/User/DoctorSlotpages"))
const UserChatpage=lazy(()=> import ("../pages/User/UserChatpage"))
const UserMessagepage=lazy(()=> import ("../pages/User/UserMessagepage"))
const UserProfile=lazy(()=> import ("../pages/User/Profilepage"))
const Followingpage=lazy(()=> import ("../pages/User/Following"))
const ChatZego = lazy(()=> import("../pages/Doctor/Chatpages"))
const UserRoom =lazy(()=>import("../pages/User/Room"))
{/* <Lottie className='h-screen' animationData={loti_loading} loop={true} /> */}
const MainRoutes = () => {
  const [showRoutes,setShowRoutes]=useState(false)
  useEffect(() => {

    const timer = setTimeout(() => {
      setShowRoutes(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    showRoutes ?
    <div>
      
      <Router>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route exact path="/" element={<HomePages />} />
              <Route path="/prof" element={<ProfilePage />} />
              <Route path="/logout" element={<LoginPage />} />
              <Route path="/Appointment" element={<Appointmentpage />} />
              <Route path="/Myclient" element={<MyClientpage />} />
              <Route path="/DoctorTimeSlot" element={<DoctorTimeSlotpage />} />
              <Route path="/EarningsPage" element={<EarningsPage />} />
              <Route path="/MessagesPage" element={<MessagesPage />} />
              <Route path="/Chattt" element={<Chat />} />
              <Route path="/enterRoom" element={<RoomEnter />} />
              <Route path="/room/:value" element={<Room />} />
              <Route path="/zegochat" element={<ChatZego />} />
            </Route>
            <Route element={<UserPublicRoutes  />}>
              <Route path="/userlogin" element={<UserLoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              
            </Route>
            <Route element={< UserProtectedRoutes/>}>
              <Route path="/userhome" element={<UserHomePage />} />
              <Route path="/DoctorList" element={<UserDoctorListpage />} />
              <Route path="/profile/:id" element={<DoctorProfilepage />} />
              <Route path="/slots/:id" element={<DoctorSlotpages />} />
              <Route path="/chat" element={<UserChatpage />} />
              <Route path="/message/:id" element={<UserMessagepage />} />
              <Route path="/user/room/:value" element={<UserRoom />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/following" element={<Followingpage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
      
    </div>
    :
    <Loader/>
  );
};

export default MainRoutes;
