import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/Auth/LoginPage';
import AllUsersPage from './Pages/Users/AllUsersPage';
import NotificationPage from './Pages/Notification/NotificationPage';
import Service from './Components/Sevices/Service';
import AddService from './Components/Sevices/AddService';
import EditService from './Components/Sevices/EditService';
import ChatPage from './Pages/Chat/ChatPage';
import RequestPage from './Pages/Request/RequestPage';
import RequestProcessList from './Components/Request/RequestProcessList';
import RequestCanceledList from './Components/Request/RequestCanceledList';
import RequestRecievedList from './Components/Request/RequestRecievedList';
import {  useSelector } from 'react-redux';
import ForgetPasswordSendCode from './Components/ForgetPassword/ForgetPasswordSendCode';
import VerificationPassword from './Components/ForgetPassword/VerificationPassword';
import CreateNewPassword from './Components/ForgetPassword/CreateNewPassword';
import ProductPage from './Pages/Product/ProductPage';
import SectionPage from './Pages/Section/SectionPage';
import CategoryPage from './Pages/Category/CategoryPage';
import ProductDetails from './Components/Product/ProductDetails';
import DefaultChat from './Components/Chat/DefaultChat';
import ConversionComponent from './Components/Chat/ConversionComponent';
import SharedComponent from './Components/Utility/SharedComponent';
import OfferPage from './Pages/Offer/OfferPage';



function App() {

  // For Access Data in state
  const Auth = useSelector(state => state.AuthSlice.auth) ;

 
  return (
    <div>
    <BrowserRouter>
      
          
          {/* Route Here  */}
            <Routes>

            {/* Collect All route */}
            <Route path='/' element={Auth ? <SharedComponent /> : <LoginPage /> }>

              <Route index element={<h2>Default Page </h2>} />
              <Route path='/users' element={ Auth ? <AllUsersPage />  : <LoginPage />  } />

              {/* Forget Password */}
              <Route path='/forgetpassword'>
                <Route index element={<ForgetPasswordSendCode />} />
                <Route path='verification' element={<VerificationPassword />} />
                <Route path='re-newpass' element={<CreateNewPassword />} />
              </Route>
              
              {/* Product  */}
              <Route path= "/product">
                <Route index element={<ProductPage />} />
                <Route path=':id' element={<ProductDetails />} />
              </Route>

              {/* Notification */}
              <Route path='/notification' element={ Auth ? <NotificationPage /> : <LoginPage /> } />

              {/* Chat  */}
              <Route path='/message' element={ Auth ? <ChatPage /> : <LoginPage /> }>
                <Route index element={Auth ? <DefaultChat /> : <LoginPage />}></Route>
                <Route path=':id' element={Auth ? <ConversionComponent /> : <LoginPage />}></Route>
              </Route>

              {/* Services  */}
              <Route path='/service' element={ Auth ? <Service/> : <LoginPage />  }/>
              <Route path='/srvice/edit' element={ Auth  ? <EditService/> : <LoginPage /> }/>
              <Route path='/service/add' element={  Auth  ? <AddService/> : <LoginPage /> }/>

              {/*  Offer  */}
              <Route path='/offer' element={  Auth  ? <OfferPage /> : <LoginPage />   } />

              {/* Category  */}
              <Route path='/category' element={ Auth ?  <CategoryPage /> : <LoginPage />} />

              {/* Section */}
              <Route path='/section' element={Auth ? <SectionPage /> : <LoginPage />} >
              
              </Route>

              {/* Request  */}
              <Route path='/request' element={ Auth  ? <RequestPage /> : <LoginPage /> }>
                  <Route index  element={ Auth  ? <RequestProcessList /> : <LoginPage /> }  />
                  <Route path="canceled" element={ Auth  ? <RequestCanceledList /> : <LoginPage /> } />
                  <Route path='recieved' element={ Auth  ? <RequestRecievedList /> : <LoginPage /> } />
              </Route>



            </Route>  

            <Route path='/login' element={<LoginPage />} />
            </Routes>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
