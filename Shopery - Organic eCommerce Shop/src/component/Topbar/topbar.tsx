import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import ListIcon from "../icons/list/listIcon";


const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between h-[42px] text-BodyTiny font-regular text-gray-600">
      <div className="flex h-full w-full items-center">
        <img className="mr-2" src="/img/icon/mappin.png" alt="map pin" />
        <p>
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
      </div>

      <div className="flex items-center space-x-4 w-[300px]">
        <p className="flex items-center">Eng <ListIcon /></p>
        <p className="flex items-center">USD <ListIcon /></p>
        <div className="h-4 border-l border-gray-300 mx-4"></div>
        <div className="flex space-x-4">
          <button onClick={()=>navigate(ROUTES.login)} className="hover:underline">Sign In</button>
          <button onClick={()=>navigate(ROUTES.register)} className="hover:underline">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
