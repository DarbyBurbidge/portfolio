import "../Styles/About.css"

export const About: React.FC = () => {
    return(
        <div className="body-container">
            <div className="about">
                <div className="headshot-container"><img className="headshot" src="/headshot.jpg" alt="the author of the website"/></div>
                <aside className="about-bio">
                    <h1>Who am I?</h1>
                    I'm a Portland-based freelance Web Developer. I have been a coding enthusiast for many years, but only recently made the plunge into Web Development. Before Working in Web Development I worked extensively in the Food Service Industry. There I learned my passion: working closely with small teams and individuals to make dreams come true. I really enjoy working with small businesses and startups as they always provide great learning opportunities.
                </aside>
            </div>
        </div>
    );
};