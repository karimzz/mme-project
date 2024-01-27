import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Utility/NavBar';
import SideBar from './Components/Utility/SideBar';
import LoginPage from './Pages/Auth/LoginPage';
import AllUsersPage from './Pages/Users/AllUsersPage';
import NotificationPage from './Pages/Notification/NotificationPage';
import Products from './Components/Product/Products';
import Service from './Components/Sevices/Service';
import AddService from './Components/Sevices/AddService';
import EditService from './Components/Sevices/EditService';
import ChatPage from './Pages/Chat/ChatPage';
import AddProduct from './Components/Product/AddProduct';
import EditProduct from './Components/Product/EditeProduct';
import Offer from './Components/Offer/Offer';
import AddOffer from './Components/Offer/AddOffer';
import EditOffer from './Components/Offer/EditOffer';
import RequestPage from './Pages/Request/RequestPage';
import RequestProcessList from './Components/Request/RequestProcessList';
import RequestCanceledList from './Components/Request/RequestCanceledList';
import RequestRecievedList from './Components/Request/RequestRecievedList';
import { useSelector } from 'react-redux';
import ForgetPasswordSendCode from './Components/ForgetPassword/ForgetPasswordSendCode';
import VerificationPassword from './Components/ForgetPassword/VerificationPassword';


function App() {

  const Auth = useSelector(state => state.AuthSlice.auth) ;





  return (
    <div>
    <BrowserRouter>

      <main>
        {Auth ? <SideBar /> : ""}
        
        <div className={`content ${!Auth ? "content-not-auth" : '' }`} style={{overflow : "hidden"}}>
          {Auth ? <NavBar />  : ""}
          
          {/* Route Here  */}
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/users' element={<AllUsersPage />} />
              {/* Forget Password */}
              <Route path='/forgetpassword'>
                <Route index element={<ForgetPasswordSendCode />} />
                <Route path='verification' element={<VerificationPassword />} />
              </Route>
              
              {/* Product  */}
              <Route path='/product'  element={<Products />} />
              <Route path='/product/add' element={<AddProduct />} />
              <Route path='/product/edite' element={<EditProduct />} />

              <Route path='/notification' element={<NotificationPage />} />
              <Route path='/message' element={<ChatPage />} />

              {/* Services  */}
              <Route path='/service' element={<Service/>}/>
              <Route path='/srvice/edit' element={<EditService/>}/>
              <Route path='/service/add' element={<AddService/>}/>

              {/*  Offer  */}
              <Route path='/offer' element={ <Offer /> } />
              <Route path='/offer/add' element={ <AddOffer /> } />
              <Route path='/offer/edit' element={ <EditOffer /> } />

              {/* Request  */}
              <Route path='/request' element={<RequestPage />}>
                  <Route index  element={<RequestProcessList />}/>
                  <Route path='process'  element={<RequestProcessList />} />
                  <Route path="canceled" element={<RequestCanceledList />} />
                  <Route path='recieved' element={<RequestRecievedList />} />
              </Route>
            </Routes>
        </div>
      </main>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
