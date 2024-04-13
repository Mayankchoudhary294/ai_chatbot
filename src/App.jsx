import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './components/LoginComponent';
import {Routes, Route} from "react-router-dom";
import ChatInterface from "./components/ChatInterface";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginComponent />} />
          <Route path="/chat" element={<ChatInterface />} />
      </Routes>
  );
}

export default App;
