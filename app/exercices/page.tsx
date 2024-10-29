"use client";

import ExoAlgo from '@/components/ExoAlgo';
import { TracingBeam }  from '@/components/ui/tracing-beam';


import React from 'react'

function Home() {
  return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <TracingBeam>
            <ExoAlgo/>
          </TracingBeam>
        </div>
      </main>
  );
};

export default React.memo(Home);
