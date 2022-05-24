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
      <p>
        To replicate the issue; drag the clips resize handler to the left then
        back and watch how the action stops being active/fired.
      </p>
      <p>
        I've added the <code>console.log</code> for the gesture's active, state
        (and others)
      </p>
      <TrackView />
    </>
  );
}
