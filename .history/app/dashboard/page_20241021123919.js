import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/main";
import { useAuth } from "@/context/AuthContext";
import Loading from "@/components/Loading";

export const metadata = {
    title: "Broodl × Dashboard",
};

export default function DashboardPage ({}){

    return (
        <Main>
            { children }
        </Main>
    )
}