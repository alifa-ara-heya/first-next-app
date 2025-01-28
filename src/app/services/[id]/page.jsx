
const ServiceDetailsPage = ({ params }) => {
    const id = params?.id;

    const data = [
        {
            "id": 1,
            "service_name": "Web Development",
            "service_description": "Custom website design and development tailored to your business needs."
        },
        {
            "id": 2,
            "service_name": "Mobile App Development",
            "service_description": "Building cross-platform mobile applications for iOS and Android."
        },
        {
            "id": 3,
            "service_name": "Cloud Hosting",
            "service_description": "Reliable and scalable cloud hosting solutions for your applications."
        },
        {
            "id": 4,
            "service_name": "SEO Optimization",
            "service_description": "Improving your website's visibility on search engines to drive more traffic."
        },
        {
            "id": 5,
            "service_name": "Graphic Design",
            "service_description": "Creating visually appealing designs for branding, marketing, and more."
        },
        {
            "id": 6,
            "service_name": "IT Consulting",
            "service_description": "Expert advice and strategies to optimize your IT infrastructure."
        },
        {
            "id": 7,
            "service_name": "Data Analytics",
            "service_description": "Transforming raw data into actionable insights for better decision-making."
        },
        {
            "id": 8,
            "service_name": "Cybersecurity",
            "service_description": "Protecting your digital assets with advanced security measures."
        },
        {
            "id": 9,
            "service_name": "E-commerce Solutions",
            "service_description": "Building and managing online stores to grow your business."
        },
        {
            "id": 10,
            "service_name": "Content Writing",
            "service_description": "High-quality content creation for blogs, websites, and marketing campaigns."
        }
    ]

    const singleData = data.find(d => d['id'] == id)

    return (
        <div>
            <h2>Service Details</h2>
            <p>ID:{id} </p>
            <p>{singleData['service_description']}</p>

        </div>
    );
};

export default ServiceDetailsPage;