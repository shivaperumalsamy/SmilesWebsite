import React, { Component } from 'react';
import '../../css/galleryComponent.css';
import commonObj from '../common/data.js';

{
  /*
     Class Name: GalleryComponent
     Return : @component
  */
}

class GalleryComponent extends Component{

  /**
   * function Name : renderGalleryObjects
   * return : array of components
   */
        
  renderGalleryObjects = () => {
    let galleryItems = commonObj['gallaryObj'].map((menu, index)=>{
      var style = {
        backgroundImage: 'url(' + menu.img + ')',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#eee',
        boxShadow: '0 0 15px 5px rgba(33,32,28,0.5)',
        borderRadius: '2%'
      }		
    return <li key={index} data-images={menu.img} style={style} data-contents={menu.content}>
                  <span className="img-container item-month-year page-content">{menu.month} {menu.day}</span>
                  <span className="img-container item-description page-content">{menu.description}</span>
            </li>	
    });
    return galleryItems;
  }

	render(){
		return(
            <div className="gallery-wrapper">
            <header className="page-header">Gallery</header>
            <section>
                <div id="gallery-carousel">
                    <ul>
                        {this.renderGalleryObjects()}
                    </ul>
                </div>
            </section>
          </div>
	   );
	}
}

export default GalleryComponent;