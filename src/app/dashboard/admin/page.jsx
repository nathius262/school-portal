import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AdminDashboardPage() {
    return (
        <DashboardLayout role="admin">
            <h1 className="mb-4">Admin Dashboard</h1>
            <p>Welcome to the admin dashboard. Here you can manage users, view reports, and configure settings.</p>
        </DashboardLayout>
    );
}
