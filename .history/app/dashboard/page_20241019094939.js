import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/main";

export const metadata = {
    title: "Broodl × Dashboard",
};

export default function DashboardPage (){

    const {currentUser, loading} = useAuth()


    let
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