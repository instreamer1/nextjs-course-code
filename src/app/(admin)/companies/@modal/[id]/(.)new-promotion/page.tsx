'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}


// export default function Page({ params }: PageProps) {
//   const router = useRouter();
  
//   // Проверьте, что params.id действительно строка и не undefined
//   if (!params || typeof params.id !== 'string') {
//     throw new Error('Invalid parameter: id is required and must be a string.');
//   }

//   return (
//     <PromotionFormModal
//       companyId={params.id}
//       show={true}
//       onClose={() => router.back()}
//     />
//   );
// }