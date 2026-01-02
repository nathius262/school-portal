import Link from "next/link";
import { sidebarConfig } from "./SidebarConfig";


export default function Sidebar({ role }) {
    const menu = sidebarConfig[role] || [];
    return (
        <>
            <div className="col-lg-2 col-md-3 sidebar">
                <div className="sidebar-brand">
                    <i className="bi bi-mortarboard-fill"></i>
                    <span>EduPortal</span>
                </div>

                <div className="sidebar-nav">
                    <ul className="nav flex-column">
                        {menu.map((item) => (
                            <li key={item.path} className="nav-item">
                                <Link
                                    href={item.path}
                                    className="nav-link"
                                    style={{ color: "var(--text-light)" }}
                                >
                                    <i className={item.icon}></i>
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sidebar-footer mt-5 px-3">
                    <div className="card dashboard-card">
                        <div className="card-body text-center">
                            <h6 className="text-primary">Need Help?</h6>
                            <p className="small text-muted">Contact student support for assistance</p>
                            <button className="btn btn-sm btn-outline-primary w-100">Get Help</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
