import React, { useState } from 'react';

const MiniCodeTabManager = ({ tabs, defaultTab, withUnset = false }: Props) => {
  const [currentTab, setCurrentTab] = useState<string | null>(
    defaultTab || null
  );

  const TabToShow = tabs.find(({ slug }) => slug === currentTab)?.content;

  return (
    <div className="tab-manager">
      <div className="tab-header">
        {tabs.map((tab) => (
          <button
            className={tab.slug === currentTab ? 'active' : ''}
            key={tab.slug}
            onClick={() => setCurrentTab(tab.slug)}
          >
            {tab.title}
          </button>
        ))}

        {withUnset ? (
          <button
            className={!currentTab ? 'active' : ''}
            onClick={() => setCurrentTab(null)}
          >
            Eliminar
          </button>
        ) : null}
      </div>

      <div className="tab-content">{TabToShow ? <TabToShow /> : null}</div>
    </div>
  );
};

export type Props = {
  defaultTab?: string;
  tabs: {
    content: React.FC;
    slug: string;
    title: string;
  }[];
  withUnset?: boolean;
};

export default MiniCodeTabManager;
