import Link from "next/link";
import { sidebarConfig } from "./SidebarConfig";

export default function Sidebar({ role }) {
    const menu = sidebarConfig[role] || [];

    return (
        <aside
            className="p-3"
            style={{
                width: "240px",
                background: "var(--bg-sidebar)",
                color: "var(--text-light)",
            }}
        >
            <h5 className="mb-4">School Portal</h5>

            <ul className="list-unstyled">
                {menu.map((item) => (
                    <li key={item.path} className="mb-2">
                        <Link
                            href={item.path}
                            className="text-decoration-none"
                            style={{ color: "var(--text-light)" }}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
