import React, { ReactNode } from 'react';

type TableWrapperProps = {
  children: ReactNode;
};

export function TableWrapper({ children }: TableWrapperProps): JSX.Element {
  return (
    <div className="p-4 bg-white shadow-sm border border-gray-200 rounded">
      {children}
    </div>
  );
}
