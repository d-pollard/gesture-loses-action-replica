import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrackView } from '../../components/TrackView';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <TrackView />
    </>
  );
}
