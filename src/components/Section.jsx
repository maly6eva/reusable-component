import React from 'react';


export const Section = ({ children, title}) => {
    return (
        <section className="component-group">
            <h2>{title}</h2>
            <div className="component-card">
                {children}
            </div>
        </section>
    );
};
