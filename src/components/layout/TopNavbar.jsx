"use client";

import { useState } from "react";

export default function TopNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <header
            className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom"
            style={{ background: "var(--bg-card)" }}
        >
            {/* Left: Page Context */}
            <div>
                <h6 className="mb-0" style={{ color: "var(--text-primary)" }}>
                    Dashboard
                </h6>
                <small style={{ color: "var(--text-muted)" }}>
                    Welcome back
                </small>
            </div>

            {/* Right: Actions */}
            <div className="d-flex align-items-center gap-3">
                {/* Notifications */}
                <button
                    className="btn btn-sm btn-light position-relative"
                    aria-label="Notifications"
                >
                    🔔
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        3
                    </span>
                </button>

                {/* Profile */}
                <div className="position-relative">
                    <button
                        className="btn btn-sm btn-light d-flex align-items-center gap-2"
                        onClick={() => setOpen(!open)}
                    >
                        <span
                            className="rounded-circle d-inline-flex align-items-center justify-content-center"
                            style={{
                                width: 28,
                                height: 28,
                                background: "var(--primary)",
                                color: "var(--text-light)",
                            }}
                        >
                            U
                        </span>
                        <span style={{ color: "var(--text-primary)" }}>Account</span>
                    </button>

                    {open && (
                        <div
                            className="position-absolute end-0 mt-2 shadow rounded"
                            style={{
                                background: "var(--bg-card)",
                                minWidth: 180,
                                zIndex: 1000,
                            }}
                        >
                            <button className="dropdown-item py-2">Profile</button>
                            <button className="dropdown-item py-2">Settings</button>
                            <hr className="my-1" />
                            <button className="dropdown-item py-2 text-danger">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
