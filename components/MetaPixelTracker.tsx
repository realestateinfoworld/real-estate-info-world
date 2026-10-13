'use client';

import { useEffect } from 'react';
import { trackMetaEvent } from '@/lib/metaPixel';

interface MetaPixelTrackerProps {
  event: string;
  parameters?: Record<string, unknown>;
  triggerOnMount?: boolean;
}

export function MetaPixelTracker({ 
  event, 
  parameters, 
  triggerOnMount = true 
}: MetaPixelTrackerProps) {
  useEffect(() => {
    if (triggerOnMount) {
      trackMetaEvent(event, parameters);
    }
  }, [event, parameters, triggerOnMount]);

  return null;
}
