
const DashboardLayout = ({ children }) => {
    return (
        <div>
            <h2>dashboard</h2>
            <div className="grid grid-cols-12">

                {/* sidebar */}
                <div className="col-span-3">
                    <h2>DAshboard Lists</h2>
                </div>

                {/* dashboard content */}
                <div className="col-span-9">
                    {children}
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;