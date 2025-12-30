import PublicLayout from "@/components/layout/PublicLayout";

export default function HomePage() {
    return (
        <PublicLayout>
            <div className="container py-5">
                <h1 className="fw-bold">Welcome to the School Portal</h1>
                <p className="text-muted">
                    Manage academics, staff, and students seamlessly.
                </p>
            </div>
        </PublicLayout>
    );
}
