"use client";
import Link from "next/link";

export default function Header() {
    return (
        <nav
            className="navbar navbar-expand-lg"
            style={{
                backgroundColor: "var(--sp-footer-bg)",
                color: "var(--sp-footer-text)",
            }}
        >
            <div className="container-fluid px-3 px-lg-4">
                {/* Brand */}
                <Link
                    className="navbar-brand fw-bold"
                    href="/"
                    style={{ color: "var(--sp-accent)" }}
                >
                    <i className="fas fa-school me-2"></i>
                    School Portal
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation */}
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                        <li className="nav-item">
                            <Link className="nav-link fw-medium" href="#">
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-medium" href="#">
                                Students
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-medium" href="#">
                                Staff
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="btn btn-sm btn-primary ms-lg-3" href="#">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
