import React from "react";
import companyLogo from '../../static/logo.svg';

const Logo = props => {
    return (
        <div className="flex justify-start items-center ms-5 my-2">
            <img className="sm:h-14 h-10" src={companyLogo} alt="logo" />
            <strong className="font-serif text-2xl sm:text-4xl m-1 mb-1 italic sm:m-2 sm:mb-2 text-stone-700">{props.name}</strong>
        </div>
    )
};

export default Logo;