import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-pink dib br3 pa3 ma2 grow shadow-S'>
            <img alt= 'robots' src = {`https://robohash.org/${id}?100*100`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;