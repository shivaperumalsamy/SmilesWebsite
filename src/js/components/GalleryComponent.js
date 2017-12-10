import React, { Component } from 'react';
import '../../css/galleryComponent.css';

{
  /*
     Class Name: ContentBar
     Return : @component
  */
}

class GalleryComponent extends Component{

	render(){
		return(
            <div className="gallery-wrapper">
            <header>Gallery</header>
            <section>
                <div id="gallery-carousel">
                    <ul>
                        <li>slide 1</li>
                        <li>slide 2</li>
                        <li>slide 3</li>
                    </ul>
                </div>
            </section>
            <div className="popup-details"></div>
          </div>
	   );
	}
}

export default GalleryComponent;