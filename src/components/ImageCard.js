import React from 'react';
import PropTypes from 'prop-types';

export default function ImageCard({card}) {
    return (
        <div>
            <img className="card-img-top" src={card.img} alt={card.title} />
        </div>
    );
};

ImageCard.propTypes = {
    card: PropTypes.object
  };