'use client';

import React, { useState } from 'react';
import Button from '@/app/components/button';
import dynamic from 'next/dynamic';
// import CompanyFormModal from '@/app/components/company-form-modal';
const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      {show && (
        <CompanyFormModal
          onSubmit={console.log}
          show={show}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
}

export default AddCompanyButton;
