import Header from '../Components/Header'; 
import { Outlet } from 'react-router-dom'; 

const CitizenLayout = () => {
    return (
        <div>
            <Header name="User Account" homeLink="/CitizenLogin"/>
            <Outlet /> 
        </div>
    );
};

export default CitizenLayout;
