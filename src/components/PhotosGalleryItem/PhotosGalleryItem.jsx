import { GridItem } from '..';
import style from './PhotosGalleryItem.module.css';
export const PhotosGalleryItem = ({ src, alt, avgColor, openModal }) => {
  return (
    <GridItem>
      <div
        className={style.thumb}
        style={{
          backgroundColor: avgColor,
          borderColor: avgColor,
        }}
      >
        <img
          src={src.large}
          alt={alt}
          onClick={() => openModal(src.large, alt)}
        />
      </div>
    </GridItem>
  );
};
