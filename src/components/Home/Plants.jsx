import { useLoaderData } from 'react-router';
import Card from './Card';

import Container from '../Shared/Container';
import EmptyState from '../Shared/EmptyState';
import { useState, useEffect } from 'react';
import SkeletonCard from '../Dashboard/lodder/SkeletonCard';

const Plants = () => {
  const data = useLoaderData();
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setPlants(data);
      setTimeout(() => {
        setLoading(false); // simulate loading
      }, 600); // optional delay
    }
  }, [data]);

  return (
    <Container>
      {loading ? (
        <div className='pt-12 py grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4 gap-8'>
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : plants && plants.length > 0 ? (
        <div className='container mx-auto pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4 gap-8'>
          {plants.map(plant => (
            <Card key={plant._id} plant={plant} />
          ))}
        </div>
      ) : (
        <EmptyState message='No plant data available right now!' />
      )}
    </Container>
  );
};

export default Plants;
