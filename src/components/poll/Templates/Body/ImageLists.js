import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import CrossImg from '../../../../assets/images/core/cross.png';
import UploadImage from '../../../../assets/images/core/uploadImg.png';

export function ImageLists() {
    /** functions NOT YET Done */
  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        this.setState({img: reader.result})
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <ImageList sx={{ width: 500, height: 400 }} cols={3}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <label for={item.forID}  className={`${item.pointer}`}>
            <img
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"   
              style={{width: 150}}         
            />
          </label>
          <input type="file" id="upload-btn" onChange={this.fileSelectedHandler} style={{display:'none', visibility: 'none'}} accept="image/*" />
          <ImageListItemBar
            title={item.title}
            position="below"
            className="center"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: UploadImage,
    imgID: 1,
    forID: "upload-btn",
    title: 'Upload',
    pointer:'pointer',
  },
  {
    img: CrossImg,
    imgID: 2,
    title: 'xxxx',
  },
  {
    img: CrossImg,
    imgID: 3,
    title: 'xxxx',
  },
  {
    img: CrossImg,
    imgID: 4,
    title: 'xxxx',
  },
  {
    img: CrossImg,
    imgID: 5,
    title: 'xxxx',
  },
  {
    img: CrossImg,
    imgID: 6,
    title: 'xxxx',
  },
  {
    img: CrossImg,
    imgID: 7,
    title: 'xxxx',
  },
  {
    img: CrossImg,
    imgID: 8,
    title: 'xxxx',
  },
  {
    img: CrossImg,
    imgID: 9,
    title: 'xxxx',
  },
  {
    img: CrossImg,
    imgID: 10,
    title: 'xxxx',
  },
  {
    img: CrossImg,
    imgID: 11,
    title: 'xxxx',
  },
  {
    img: CrossImg,
    imgID: 12,
    title: 'xxxx',
  },
];
