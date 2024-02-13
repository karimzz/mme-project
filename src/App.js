import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Utility/NavBar';
import SideBar from './Components/Utility/SideBar';
import LoginPage from './Pages/Auth/LoginPage';
import AllUsersPage from './Pages/Users/AllUsersPage';
import NotificationPage from './Pages/Notification/NotificationPage';
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
import CreateNewPassword from './Components/ForgetPassword/CreateNewPassword';
import ProductPage from './Pages/Product/ProductPage';
import SectionPage from './Pages/Section/SectionPage';
import CategoryPage from './Pages/Category/CategoryPage';
import ProductDetails from './Components/Product/ProductDetails';
import DefaultChat from './Components/Chat/DefaultChat';
import ConversionComponent from './Components/Chat/ConversionComponent';


function App() {

  // For Access Data in state
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
              <Route path='/' element={<h2>Default Page </h2>} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/users' element={ Auth ? <AllUsersPage />  : <LoginPage />  } />

              {/* Forget Password */}
              <Route path='/forgetpassword'>
                <Route index element={<ForgetPasswordSendCode />} />
                <Route path='verification' element={<VerificationPassword />} />
                <Route path='re-newpass' element={<CreateNewPassword />} />
              </Route>
              
              {/* Product  */}
              <Route path='/product'  element={ Auth ? <ProductPage /> : <LoginPage /> } />
              <Route path='/product/add' element={Auth ? <AddProduct /> : <LoginPage /> } />
              {/*<Route path='/product/edite' element={ Auth ? <EditProduct /> : <LoginPage /> } /> */}
              <Route path='/product/:id' element={ Auth ? <ProductDetails /> : <LoginPage /> } />

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
              <Route path='/offer' element={  Auth  ? <Offer /> : <LoginPage />   } />
              <Route path='/offer/add' element={   Auth  ? <AddOffer /> : <LoginPage /> } />
              <Route path='/offer/edit' element={  Auth  ? <EditOffer /> : <LoginPage /> } />

              {/* Category  */}
              <Route path='/category' element={ Auth ?  <CategoryPage /> : <LoginPage />} />

              {/* Section */}
              <Route path='/section' element={Auth ? <SectionPage /> : <LoginPage />} >
              
              </Route>

              {/* Request  */}
              <Route path='/request' element={ Auth  ? <RequestPage /> : <LoginPage /> }>
                  <Route index  element={ Auth  ? <RequestProcessList /> : <LoginPage /> }  />
                  <Route path='process'  element={ Auth  ? <RequestProcessList /> : <LoginPage /> } />
                  <Route path="canceled" element={ Auth  ? <RequestCanceledList /> : <LoginPage /> } />
                  <Route path='recieved' element={ Auth  ? <RequestRecievedList /> : <LoginPage /> } />
              </Route>
              
            </Routes>
        </div>
      </main>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
