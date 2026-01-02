import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";

export default function StudentDashboardPage() {
    return (
        <DashboardLayout role="student">
            <div className="">


                <div className="row mb-4">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card dashboard-card stat-card">
                            <div className="stat-icon" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: 'var(--primary)' }}>
                                <i className="bi bi-journal-bookmark"></i>
                            </div>
                            <div className="stat-value">5</div>
                            <div className="stat-label">Active Courses</div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card dashboard-card stat-card">
                            <div className="stat-icon" style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', color: 'var(--success)' }}>
                                <i className="bi bi-check-circle"></i>
                            </div>
                            <div className="stat-value">87%</div>
                            <div className="stat-label">Average Grade</div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card dashboard-card stat-card">
                            <div className="stat-icon" style={{ backgroundColor: 'rgba(220, 53, 69, 0.1)', color: 'var(--danger)' }}>
                                <i className="bi bi-clock-history"></i>
                            </div>
                            <div className="stat-value">3</div>
                            <div className="stat-label">Pending Assignments</div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card dashboard-card stat-card">
                            <div className="stat-icon" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', color: 'var(--warning)' }}>
                                <i className="bi bi-calendar-week"></i>
                            </div>
                            <div className="stat-value">12</div>
                            <div className="stat-label">Upcoming Events</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="card dashboard-card mb-4">
                            <div className="card-header">
                                <i className="bi bi-bar-chart me-2"></i>
                                Course Progress
                            </div>
                            <div className="card-body">
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Mathematics 101</span>
                                        <span>78%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-primary" style={{ width: '78%' }}></div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Computer Science</span>
                                        <span>92%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" style={{ width: '92%' }}></div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>English Literature</span>
                                        <span>65%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-info" style={{ width: '65%' }}></div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>History 201</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card dashboard-card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <div>
                                    <i className="bi bi-clipboard-check me-2"></i>
                                    Recent Assignments
                                </div>
                                <Link href="#" className="btn btn-sm btn-outline-primary">View All</Link>
                            </div>
                            <div className="card-body">
                                <div className="assignment-item">
                                    <div className="assignment-info">
                                        <h6>Math Problem Set #5</h6>
                                        <p>Due: Tomorrow, 11:59 PM</p>
                                    </div>
                                    <div className="assignment-status" style={{ backgroundColor: 'rgba(220, 53, 69, 0.1)', color: 'var(--danger)' }}>
                                        Pending
                                    </div>
                                </div>

                                <div className="assignment-item">
                                    <div className="assignment-info">
                                        <h6>CS Lab Report</h6>
                                        <p>Due: Nov 15, 2023</p>
                                    </div>
                                    <div className="assignment-status" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: 'var(--primary)' }}>
                                        In Progress
                                    </div>
                                </div>

                                <div className="assignment-item">
                                    <div className="assignment-info">
                                        <h6>History Essay</h6>
                                        <p>Due: Nov 20, 2023</p>
                                    </div>
                                    <div className="assignment-status" style={{ backgroundColor: 'rgba(220, 53, 69, 0.1)', color: 'var(--danger)' }}>
                                        Pending
                                    </div>
                                </div>

                                <div className="assignment-item">
                                    <div className="assignment-info">
                                        <h6>English Presentation</h6>
                                        <p>Submitted: Nov 5, 2023</p>
                                    </div>
                                    <div className="assignment-status" style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', color: 'var(--success)' }}>
                                        Graded: A
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card dashboard-card mb-4">
                            <div className="card-header">
                                <i className="bi bi-calendar-event me-2"></i>
                                Upcoming Events
                            </div>
                            <div className="card-body">
                                <div className="calendar-event">
                                    <div className="event-date">Nov 12, 2023</div>
                                    <div className="event-title">Midterm Exam: Mathematics</div>
                                    <div className="event-desc">Room 204, 10:00 AM - 12:00 PM</div>
                                </div>

                                <div className="calendar-event">
                                    <div className="event-date">Nov 15, 2023</div>
                                    <div className="event-title">CS Project Submission</div>
                                    <div className="event-desc">Online submission before 11:59 PM</div>
                                </div>

                                <div className="calendar-event">
                                    <div className="event-date">Nov 18, 2023</div>
                                    <div className="event-title">Career Fair</div>
                                    <div className="event-desc">Main Campus Hall, 9:00 AM - 4:00 PM</div>
                                </div>

                                <div className="calendar-event">
                                    <div className="event-date">Nov 22, 2023</div>
                                    <div className="event-title">Group Study Session</div>
                                    <div className="event-desc">Library Study Room 3, 2:00 PM</div>
                                </div>
                            </div>
                        </div>

                        <div className="card dashboard-card">
                            <div className="card-header">
                                <i className="bi bi-link-45deg me-2"></i>
                                Quick Links
                            </div>
                            <div className="card-body">
                                <div className="d-grid gap-2">
                                    <Link href="#" className="btn btn-outline-primary d-flex justify-content-between align-items-center">
                                        <span>Course Materials</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                    <Link href="#" className="btn btn-outline-success d-flex justify-content-between align-items-center">
                                        <span>Submit Assignment</span>
                                        <i className="bi bi-upload"></i>
                                    </Link>
                                    <Link href="#" className="btn btn-outline-info d-flex justify-content-between align-items-center">
                                        <span>View Grades</span>
                                        <i className="bi bi-graph-up"></i>
                                    </Link>
                                    <Link href="#" className="btn btn-outline-warning d-flex justify-content-between align-items-center">
                                        <span>Academic Calendar</span>
                                        <i className="bi bi-calendar-date"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}