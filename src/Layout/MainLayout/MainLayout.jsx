import { Outlet } from "react-router";

import TheHeader from "../../components/TheHeader/TheHeader";
import TheFooter from "../../components/TheFooter/TheFooter";

function MainLayout(){
    return (
        <div className="main-layout">
            <TheHeader />
            <main>
                <Outlet />
            </main>
            <TheFooter />
        </div>
    );
}

export default MainLayout;