'use client';

import dynamic from 'next/dynamic';

const StatusBadge = dynamic(
  () => import('prod-alert-react').then(mod => mod.StatusBadge),
  { ssr: false }
);

export default function HealthStatusBadge() {
    return (
      <StatusBadge
        appId="demo-app"
        pollingInterval={10000}
        label={false}
      />
    );
  }
