export const sidebarConfig = {
    student: [
        { label: "Dashboard", path: "/dashboard/student", icon: "bi bi-speedometer2" },
        { label: "Courses", path: "/dashboard/student/courses", icon: "bi bi-journal-text" },
        { label: "Schedule", path: "/dashboard/student/schedule", icon: "bi bi-calendar-check" },
        { label: "Assignments", path: "/dashboard/student/assignments", icon: "bi bi-clipboard-check" },
        { label: "Results", path: "/dashboard/student/results", icon: "bi bi-bar-chart-line" },
        { label: "Settings", path: "/dashboard/student/settings", icon: "bi bi-gear" },
    ],

    staff: [
        { label: "Dashboard", path: "/dashboard/staff", icon: "bi bi-speedometer2" },
        { label: "Classes", path: "/dashboard/staff/classes", icon: "bi bi-journal-text" },
        { label: "Students", path: "/dashboard/staff/students", icon: "bi bi-clipboard-check" },
        { label: "Reports", path: "/dashboard/staff/reports", icon: "bi bi-bar-chart-line" },
    ],

    admin: [
        { label: "Dashboard", path: "/dashboard/admin", icon: "bi bi-speedometer2" },
        { label: "Students", path: "/dashboard/admin/students", icon: "bi bi-clipboard-check" },
        { label: "Staff", path: "/dashboard/admin/staff", icon: "bi bi-journal-text" },
        { label: "Settings", path: "/dashboard/admin/settings", icon: "bi bi-gear" },
    ],
};
