import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/main";
import { useAuth } from "@/context/AuthContext";
import Loading from "@/components/Loading";

export const metadata = {
    title: "Broodl × Dashboard",
};

export default function DashboardPage (){

    const {currentUser, loading} = useAuth()


    let children = (
        <Login/>
    )

    if (loading) {
        children =(
            <Loading />
        )
    }

    if (currentUser){
     children = (
        <Dashboard/>
    )
    }

   
    return (
        <Main>
            { children }
        </Main>
    )
}