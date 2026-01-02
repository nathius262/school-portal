import Sidebar from "../sidebar/Sidebar";
import TopNavbar from "./TopNavbar";

export default function DashboardLayout({ role, children }) {
    return (
        <div className="d-flex min-vh-100" style={{ background: "var(--bg-main)" }}>
            <Sidebar role={role} />

            <div className="flex-grow-1 p-4">
                <TopNavbar />
                <main className="p-4 main-content">{children}</main>
            </div>
        </div>
    );
}
