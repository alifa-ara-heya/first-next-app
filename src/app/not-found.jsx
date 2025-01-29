import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 || Not Found (my customized not found page) </h1>
            <Link href={'/'}>Go Back To Home</Link>
        </div>
    );
};

export default NotFoundPage;