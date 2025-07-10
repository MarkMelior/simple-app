'use client';

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import { Children, isValidElement, useMemo, useState } from 'react';

import { formatDate, formatDuration } from '@/shared/lib/text';

import type { SortDescriptor } from '@heroui/react';
import type { FC, ReactElement, ReactNode } from 'react';

type TimeType = 'date' | 'time';

interface HeaderDescriptor {
  column: string
  disableSorting?: boolean
  label: ReactNode
  type?: TimeType
  width?: number | string
}

type TableRowData = Record<string, ReactNode> & { key: string };

interface TableMDXProps {
  children: ReactNode
}

export const TableMDX: FC<TableMDXProps> = ({ children }) => {
  const headers: HeaderDescriptor[] = [];
  const rows: TableRowData[] = [];

  Children.forEach(children, (section) => {
    if (!isValidElement(section)) return;
    const element = section as ReactElement<{ children: ReactNode }>;

    if (element.type === 'thead') {
      Children.forEach(element.props.children, (tr) => {
        if (!isValidElement(tr)) return;
        Children.forEach((tr as ReactElement<{ children: ReactNode }>).props.children, (th, idx) => {
          if (!isValidElement(th)) return;
          const props = th.props as {
            disableSorting?: boolean
            type?: TimeType
            width?: number | string
            children: ReactNode
          };

          headers.push({
            column: `c${idx}`,
            disableSorting: props.disableSorting,
            label: props.children,
            type: props.type,
            width: props.width,
          });
        });
      });
    }

    if (element.type === 'tbody') {
      Children.forEach(element.props.children, (tr, rIdx) => {
        if (!isValidElement(tr)) return;
        const cells: ReactNode[] = [];

        Children.forEach((tr as ReactElement<{ children: { props: { children: ReactNode } } }>).props.children, (td) => {
          if (!isValidElement(td)) return;
          cells.push(td.props.children);
        });
        rows.push(
          cells.reduce<TableRowData>(
            (acc, cell, i) => ({ ...acc, [`c${i}`]: cell }),
            { key: `r${rIdx}` },
          ),
        );
      });
    }
  });

  const [sortConfig, setSortConfig] = useState<SortDescriptor>({
    column: headers[0].column,
    direction: 'descending',
  });

  const sortedRows = useMemo<TableRowData[]>(() => {
    if (!sortConfig) return rows;
    const { column, direction } = sortConfig;

    return [...rows].sort((a, b) => {
      const valA = a[column];
      const valB = b[column];

      const numA = (typeof valA === 'string' ? parseInt(valA.replace(/\D/g, ''), 10) || valA : valA) as number;
      const numB = (typeof valB === 'string' ? parseInt(valB.replace(/\D/g, ''), 10) || valB : valB) as number;

      if (numA < numB) return direction === 'ascending' ? -1 : 1;
      if (numA > numB) return direction === 'ascending' ? 1 : -1;

      return 0;
    });
  }, [rows, sortConfig]);

  return (
    <Table
      className="mb-6 mt-4"
      classNames={{ th: 'bg-default-200' }}
      isHeaderSticky={true}
      layout="fixed"
      onSortChange={setSortConfig}
      radius="lg"
      shadow="sm"
      sortDescriptor={sortConfig}
    >
      <TableHeader columns={headers}>
        {(col) => (
          <TableColumn
            allowsSorting={!col.disableSorting}
            className="bg-default-200/30 dark:bg-default-200"
            key={col.column}
            width={col.width as never}
          >
            {col.label}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody items={sortedRows}>
        {(item) => (
          <TableRow key={item.key}>
            {headers.map((col) => (
              <TableCell key={col.column}>
                {getDisplayValue(item[col.column], col.type)}
              </TableCell>
            ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

const getDisplayValue = (raw: ReactNode, type: TimeType | undefined) => {
  switch (type) {
    case 'date': {
      const date = typeof raw === 'string' ? new Date(raw) : raw;

      return date instanceof Date && !isNaN(date.getTime()) ? formatDate(date) : raw;
    }
    case 'time': {
      const secs
        = typeof raw === 'string' ? parseInt(raw, 10) : Number(raw);

      return !isNaN(secs) ? formatDuration(secs) : raw;
    }
    default:
      return raw;
  }
};
