import React from 'react';
import findTutorWithEmail from './../../utils/findTutorWithEmail';

export default function HomePage() {
  // console.log("homepagelog", findTutorWithEmail.resolve('hello@me.com'))
  findTutorWithEmail('hello@me.com').then((data) => {
    console.log('homepagethen', data); //works
  });

  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
}
