import React from 'react';
import '../../styles/gallery.css';
import img1 from '../../images/IMG_4427.webp';
import img2 from '../../images/IMG_4422.webp';
import img3 from '../../images/IMG_4551.webp';
import img4 from '../../images/IMG_3204.webp';
import img5 from '../../images/IMG_4414.webp';

const Gallery = () =>  {
    return (
        <section className='gallery'>
            <img src={img1} alt="Photo1" className='item1'/>
            <img src={img2} alt="Photo2" className='item2'/>
            <img src={img3} alt="Photo3" className='item3'/>
            <img src={img4} alt="Photo4" className='item4'/>
            <img src={img5} alt="Photo5" className='item5'/>
        </section>
    );
};

export default Gallery;
