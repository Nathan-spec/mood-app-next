import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/main";
import { useAuth } from "@/context/AuthContext";

export const metadata = {
    title: "Broodl × Dashboard",
};

export default function DashboardPage (){

    const {currentUser, loading} = useAuth(loading)


    let children = (
        <Login/>
    )

    if (currentUser){
    const children = (
        <Dashboard/>
    )
    }

   
    return (
        <Main>
            { children }
        </Main>
    )
}