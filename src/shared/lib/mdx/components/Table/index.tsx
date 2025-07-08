'use client';

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import { Children, isValidElement, useCallback, useMemo, useState } from 'react';

import type { Sort } from '@/shared/types';

import type { FC, ReactElement, ReactNode } from 'react';

interface HeaderDescriptor {
  allowsSorting?: boolean
  field: string
  label: ReactNode
  type?: string
  width?: number | string
}

type TableRowData = Record<string, ReactNode> & { key: string };

interface TableMDXProps {
  children: ReactNode
}

const formatDuration = (seconds: number): string => {
  const totalMinutes = Math.floor(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (minutes === 0) return `${hours} часов`;

  return `${hours} часов ${minutes} минут`;
};

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
            allowsSorting?: boolean
            type?: string
            width?: number | string
            children: ReactNode
          };

          headers.push({
            allowsSorting: props.allowsSorting,
            field: `c${idx}`,
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

  const [sortConfig, setSortConfig] = useState<Sort | null>(null);

  const sortedRows = useMemo<TableRowData[]>(() => {
    if (!sortConfig) return rows;
    const { field, order } = sortConfig;

    return [...rows].sort((a, b) => {
      const valA = a[field];
      const valB = b[field];

      const numA = (typeof valA === 'string' ? parseInt(valA.replace(/\D/g, ''), 10) || valA : valA) as number;
      const numB = (typeof valB === 'string' ? parseInt(valB.replace(/\D/g, ''), 10) || valB : valB) as number;

      if (numA < numB) return order === 'asc' ? -1 : 1;
      if (numA > numB) return order === 'asc' ? 1 : -1;

      return 0;
    });
  }, [rows, sortConfig]);

  const onSort = useCallback((field: string) => {
    const col = headers.find((h) => h.field === field);

    if (!col?.allowsSorting) return;

    setSortConfig((current) => {
      const isSame = current?.field === field && current.order === 'asc';

      return { field, order: isSame ? 'desc' : 'asc' };
    });
  }, [headers]);

  return (
    <Table
      className="mb-6 mt-4"
      classNames={{ th: 'bg-default-200' }}
      layout="fixed"
      radius="lg"
      shadow="sm"
    >
      <TableHeader columns={headers}>
        {(col) => (
          <TableColumn
            allowsSorting={col.allowsSorting}
            key={col.field}
            onClick={() => onSort(col.field)}
            // @ts-expect-error ColumnSize = string
            width={col.width}
          >
            {col.label}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody items={sortedRows}>
        {(item) => (
          <TableRow key={item.key}>
            {headers.map((col) => {
              const raw = item[col.field];
              let display: ReactNode = raw;

              if (col.type === 'time') {
                const secs = typeof raw === 'string' ? parseInt(raw, 10) : Number(raw);

                if (!isNaN(secs)) {
                  display = formatDuration(secs);
                }
              }

              return (
                <TableCell key={col.field}>{display}</TableCell>
              );
            })}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
