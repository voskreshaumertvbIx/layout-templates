import Header from "./component/header/header";
import Navbar from "./component/navbar/navbar";
import Promocards from "./component/promocards/promocards";
import TopBar from "./component/Topbar/topbar";





const App: React.FC = () => {
  return (
    <>
    <TopBar/>
    <Header/>
    <Navbar/>
    <Promocards/>
    </>
  );
 
};

export default App;
