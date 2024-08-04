import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImagas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoading(true);
      try {
        const { photos, per_page, total_results } = await getPhotos(
          query,
          page,
        );
        console.log(photos);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [page, query]);

  const handleSubmit = value => {
    setQuery(value);
  };
  return (
    <>
      <Form onSubmit={handleSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
