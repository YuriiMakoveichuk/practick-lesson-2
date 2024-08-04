import { Grid, PhotosGalleryItem } from '..';

export const PhotosGallery = ({ images, openModal }) => {
  return (
    <Grid>
      {images.map(({ id, src, alt, avg_color }) => (
        <PhotosGalleryItem
          key={id}
          src={src}
          alt={alt}
          avgColor={avg_color}
          openModal={openModal}
        />
      ))}
    </Grid>
  );
};
