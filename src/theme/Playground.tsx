import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import React, { useCallback, useContext, useRef, useState } from 'react';
import { LiveContext, LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

declare const navigator: {
  clipboard: {
    writeText(value: string): Promise<void>;
  };
};

function PlaygroundAction({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button type="button" className="playground-action" onClick={onClick}>
      {children}
    </button>
  );
}

function PlaygroundCodeBlock({
  initialCode,
  defaultCodeCollapsed,
  pruneCode,
}: {
  initialCode?: string;
  defaultCodeCollapsed?: boolean;
  pruneCode: (code?: string) => string;
}) {
  const isBrowser = useIsBrowser();
  const { error, onChange } = useContext(LiveContext);
  const [showCode, setShowCode] = useState(!!defaultCodeCollapsed);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <div className="playground">
      <BrowserOnly>
        {() => (
          <div>
            {!error && <LivePreview className="playground-preview" />}
            <LiveError className="playground-error" />
            <div className="playground-toolbar">
              <PlaygroundAction
                onClick={async () => {
                  await navigator.clipboard.writeText(initialCode ?? '');
                  setCopied(true);
                  if (copyTimer.current) clearTimeout(copyTimer.current);
                  copyTimer.current = setTimeout(() => setCopied(false), 1500);
                }}
              >
                {copied ? '已复制' : '复制'}
              </PlaygroundAction>
              <PlaygroundAction onClick={() => setShowCode((value) => !value)}>
                {showCode ? '隐藏代码' : '展开代码'}
              </PlaygroundAction>
            </div>
          </div>
        )}
      </BrowserOnly>
      {showCode && (
        <LiveEditor
          key={String(isBrowser)}
          code={initialCode}
          onChange={(latestCode) => onChange(pruneCode(latestCode))}
          className="playground-editor"
        />
      )}
    </div>
  );
}

export default function Playground({ children, ...props }: { children?: string }) {
  const { siteConfig } = useDocusaurusContext();
  const customFields = (siteConfig.customFields ?? {}) as {
    liveCodeBlock?: { defaultCollapsed?: boolean };
  };

  const initialCode = children?.replace(/\n$/, '');
  const pruneCode = useCallback((code?: string) => {
    return (code ?? '')
      .replace(/\n$/, '')
      .replace(/import\s+[\s\S]*?\s+from.*?\n/g, '')
      .replace(/export\s+(default\s+)?/g, '');
  }, []);

  return (
    <LiveProvider {...props} code={pruneCode(children)}>
      <PlaygroundCodeBlock
        initialCode={initialCode}
        pruneCode={pruneCode}
        defaultCodeCollapsed={customFields.liveCodeBlock?.defaultCollapsed}
      />
    </LiveProvider>
  );
}
