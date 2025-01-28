

const AboutSlugPages = async ({ params }) => {
    const p = await params;
    console.log(p.slugs[0]);
    return (
        <div>
            <h2>About Slug Pages</h2>
        </div>
    );
};

export default AboutSlugPages;