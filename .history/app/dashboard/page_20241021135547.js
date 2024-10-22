import Dashboard from "@/components/Dashboard";

import Main from "@/components/Main";
import { useAuth } from "@/context/AuthContext";
import Loading from "@/components/Loading";

export const metadata = {
    title: "Broodl × Dashboard",
};

export default function DashboardPage(){

    return (
        <Main>
            <Dashboard/>
        </Main>
    )
}