import PublicLayout from "@/components/layout/PublicLayout";
import Link from "next/link";

export default function HomePage() {
    return (
        <PublicLayout>
            <main>
                {/* Hero Section */}
                <section className="hero-section d-flex align-items-center">
                    <div className="container text-center">
                        <h1 className="fw-bold mb-3">Welcome to the School Portal</h1>
                        <p className="lead mb-4">
                            A centralized platform for managing student admissions, academic
                            records, and results with clarity and control.
                        </p>
                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                            <Link href="/login" className="btn btn-primary btn-lg">
                                Login
                            </Link>
                            <Link href="/admission" className="btn btn-outline-light btn-lg">
                                Student Admission
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row mb-4 text-center">
                            <div className="col">
                                <h2 className="fw-semibold">Core Features</h2>
                                <p className="text-muted">
                                    Designed to keep operations simple, secure, and efficient.
                                </p>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <div className="card-body">
                                        <h5 className="card-title">Student Admission</h5>
                                        <p className="card-text text-muted">
                                            Manage student onboarding and admission records in one
                                            structured system.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <div className="card-body">
                                        <h5 className="card-title">Result Management</h5>
                                        <p className="card-text text-muted">
                                            Staff can generate, review, and publish student results with
                                            accuracy.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <div className="card-body">
                                        <h5 className="card-title">Student Access</h5>
                                        <p className="card-text text-muted">
                                            Students can securely view and print their individual
                                            academic results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call To Action */}
                <section className="cta-section py-5 text-center">
                    <div className="container">
                        <h2 className="fw-bold mb-3">Built for Academic Excellence</h2>
                        <p className="mb-4">
                            A modern school management experience that grows with your
                            institution.
                        </p>
                        <Link href="/about" className="btn btn-outline-primary btn-lg">
                            Learn More
                        </Link>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}


