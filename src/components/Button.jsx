import React from 'react';

const Button = () => {
    return (
        <div>
            <button onClick={()=>console.log("Hello my friend")}>Start</button>
        </div>
    );
};

export default Button;