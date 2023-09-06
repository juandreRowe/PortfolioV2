import React from "react";

const LinkIcon = ({icon, link}) => {
    const handleOnClick = () => {
        window.open(link, '_blank').focus();
    };

    return(
        <div style={{cursor: 'pointer'}} onClick={handleOnClick}>
            {icon}
        </div>
    );
};

export default LinkIcon;