"use client";

import { useState } from "react";

export default function TopNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="header">
            <div className="welcome-section">
                <h1>Welcome back, Alex Johnson!</h1>
                <p>Here's your academic overview for the semester</p>
            </div>

            <div className="user-menu">
                <div className="notification-badge">
                    <i className="bi bi-bell fs-5"></i>
                    <span>3</span>
                </div>
                <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center" type="button" id="userDropdown" data-bs-toggle="dropdown">
                        <div className="me-2">
                            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }}>
                                AJ
                            </div>
                        </div>
                        <span>Alex</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person me-2"></i>Profile</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-gear me-2"></i>Settings</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right me-2"></i>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
