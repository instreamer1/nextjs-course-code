'use client';

import React, { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page(props: PageProps) {
  const params = use(props.params);
  const router = useRouter();
  const [companyId, setCompanyId] = useState<string | null>(null);

  useEffect(() => {
    // Устанавливаем companyId после того, как params.id будет доступен
    if (params.id) {
      setCompanyId(params.id);
    }
  }, [params.id]);

  if (!companyId) {
    return <p>Загрузка...</p>; // Можно отобразить индикатор загрузки или пустой элемент
  }

  return (
    <PromotionFormModal
      companyId={companyId}
      show={true}
      onClose={() => router.back()}
    />
  );
}









// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import PromotionFormModal from '@/app/components/promotion-form-modal';

// export interface PageProps {
//   params: { id: string };
// }

// export default function Page({ params }: PageProps) {
//   const router = useRouter();

//   console.log(params);
//   return (
//     <PromotionFormModal
//       companyId={params.id}
//       show={true}
//       onClose={() => router.back()}
//     />
//   );
// }

