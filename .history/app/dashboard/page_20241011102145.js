import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/main";

export const metadata = {
    title: "Broodl × Dashboard",
};

export default function DashboardPage (){

    const isAuthenticated = false

    const children = (
        <Login/>
    )

    if (isAuthenticated) {
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