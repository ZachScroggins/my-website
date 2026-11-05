'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

/** Copies a code block's source. The label switches to "Copied" for two seconds. */
export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked (permissions, insecure context); the code stays selectable.
    }
  }

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      onClick={copy}
      className="ml-auto cursor-pointer"
      aria-label={copied ? 'Copied code' : 'Copy code'}
    >
      {copied ? (
        <FiCheck aria-hidden="true" className="text-green-600 dark:text-green-400" />
      ) : (
        <FiCopy aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </Button>
  );
}
