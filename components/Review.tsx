import React from "react";

interface ReviewProps {
    children: string
    by: string
}

const Review: React.FC<ReviewProps> = ({ children, by }) => {
    return (
        <div className="flex flex-col justify-center text-center px-5 md:px-10 lg:px-20">
            <div className="text-xl md:text-2xl leading-3 lg:leading-[2em] tracking-wide">
                &ldquo;{children}&rdquo;
            </div>
            <div>
                &mdash;{by}
            </div>
        </div>
    );
}

export default Review;