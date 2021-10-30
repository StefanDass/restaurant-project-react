import React from 'react';

const AppetizerDetails = ({ price, likes, dislikes, ingredients }) => {
    // possible ingredients destructuring here:
    const first = ingredients['1'];
    const second = ingredients['2'];
    const third = ingredients['3'];
    const fourth = ingredients['4'];

    return (
        <>
            <h5>Price: {price}</h5>
            <h5>
                Made with {first}, {second}, {third} and {fourth}
            </h5>
            <h5>likes: {likes}  dislikes: {dislikes}</h5>
        </>
    );
};

export default AppetizerDetails;