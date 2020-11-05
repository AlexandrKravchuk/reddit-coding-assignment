import React, {CSSProperties} from 'react';

const style: CSSProperties = {
    position: "fixed",
    top: -10000,
    left: -10000
};
const PreloadImages = (
    <div style={style}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Emoji_u1f525.svg/120px-Emoji_u1f525.svg.png" alt=""/>
        <img src="https://image.freepik.com/free-vector/you-win-lettering-pop-art-text-banner_185004-60.jpg" alt=""/>

    </div>
);

export default PreloadImages;
