import React from "react";
import "./Styles/Footer.css"

export const Footer: React.FC = () => {
    const year = new Date().getFullYear()

    return(
        <footer className="footer">
            <h5 className="copyright">
                Darby Burbidge &copy; {`${year}`}
            </h5>
        
        </footer>
    );
};