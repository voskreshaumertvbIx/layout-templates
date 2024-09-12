import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import ListIcon from "../../assets/icons/listIcon";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-[42px] justify-between text-BodyTiny font-regular text-gray-600">
      <div className="flex h-full w-full items-center">
        <img className="mr-2" src="/img/icon/mappin.png" alt="map pin" />
        <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
      </div>

      <div className="flex w-[300px] items-center space-x-4">
        <p className="flex items-center">
          Eng <ListIcon />
        </p>
        <p className="flex items-center">
          USD <ListIcon />
        </p>
        <div className="mx-4 h-4 border-l border-gray-300"></div>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate(ROUTES.login)}
            className="hover:underline"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate(ROUTES.register)}
            className="hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
