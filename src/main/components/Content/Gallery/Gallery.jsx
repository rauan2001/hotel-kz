import React from 'react';
import './Gallery.scss';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__title">Галерея</div>
      <div className="gallery__images">
        <img src="https://www.eliaermouhotel.com/uploads/photos/D1024/2019/02/standardroom_1456.jpg" alt="Gallery" />
        <img src="https://www.eliaermouhotel.com/uploads/photos/D1024/2019/02/standardroom_7793.jpg" alt="Gallery" />
        <img src="https://www.eliaermouhotel.com/uploads/photos/D1024/2019/02/standardroom_1878.jpg" alt="Gallery" />
      </div>
    </div>
  );
};

export default Gallery;


{/* <img src="https://www.eliaermouhotel.com/uploads/photos/D1024/2019/02/standardroom_1456.jpg" alt="Gallery" />
<img src="https://www.eliaermouhotel.com/uploads/photos/D1024/2019/02/standardroom_7793.jpg" alt="Gallery" />
<img src="https://www.eliaermouhotel.com/uploads/photos/D1024/2019/02/standardroom_1878.jpg" alt="Gallery" /> */}
