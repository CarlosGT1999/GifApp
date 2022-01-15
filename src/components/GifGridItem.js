import React from 'react';

const GifGridItem = ({img}) => {

    return (
        <div className='card animate__animated animate__fadeIn'>
            <h3>{img.title}</h3>
            <img 
                src={img.url}
                alt='NO SE CARGÓ LA IMAGEN'>

            </img>
        </div>
    );
};

export default GifGridItem;