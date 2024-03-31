import { useDispatch } from 'react-redux';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';


function App() {



  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Listen for incoming messages from the server
  //   socket.on('message', (message) => {
  //     dispatch(receiveMessage(message));
  //   });

  //   return () => {
  //     // Clean up socket connection on component unmount
  //     socket.disconnect();
  //   };
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Join/>}></Route>
        <Route path='/chat' element={<Chat/>}></Route>
      </Routes>
    </div>
  );
}

export default App
