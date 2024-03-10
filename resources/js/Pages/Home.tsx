import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Home = () => {
  return (
    <h1>
      <Link href="/play">
        Play!
      </Link>
    </h1>
  );
};

export default Home;
