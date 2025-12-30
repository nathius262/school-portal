export default function Footer() {
    return (
        <footer
            className="mt-auto"
            style={{
                backgroundColor: "var(--sp-footer-bg)",
                color: "var(--sp-footer-text)",
            }}
        >
            <div className="container py-4">
                <div className="row gy-3">
                    {/* Left */}
                    <div className="col-md-6 text-center text-md-start">
                        <h6 className="fw-semibold mb-2 text-white">
                            School Portal
                        </h6>
                        <p className="mb-0 small">
                            Empowering academic excellence through digital innovation.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="col-md-6 text-center text-md-end">
                        <div className="mb-2">
                            <i className="fab fa-facebook me-3"></i>
                            <i className="fab fa-twitter me-3"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <p className="mb-0 small">
                            © {new Date().getFullYear()} School Portal. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
