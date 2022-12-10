import React from 'react';
import PropTypes from 'prop-types';

export default function Card({card, children}) {
    return (
        <div className="card" style={{width: "18rem"}}>
            {children}
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <a href="#" className="btn btn-primary">Перейти</a>
        </div>
    );
};

Card.propTypes = {
  card: PropTypes.object
};