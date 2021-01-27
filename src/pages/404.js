import React from 'react';
import NotFound from '../components/404';
import { Data } from '../components/404/Data';

export default function NotFoundPage() {
  return (
    <>
      <NotFound {...Data} />
    </>
  )
}
