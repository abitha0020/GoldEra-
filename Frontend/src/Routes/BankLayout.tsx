// NavbarLayout.js
import Header from '../Components/Header'; 
import { Outlet } from 'react-router-dom'; 

const BankLayout = () => {
    return (
        <div>
            <Header name="ABC Bank" homeLink="/BankHome"/>
            <Outlet /> 
        </div>
    );
};

export default BankLayout;
