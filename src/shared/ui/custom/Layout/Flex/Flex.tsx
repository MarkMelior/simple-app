import { clsx } from 'clsx';

import type { AsComponent, TwAlignItems, TwGap, TwJustify } from '@/shared/types';

import type { ReactNode } from 'react';

interface FlexProps {
  align?: TwAlignItems
  as?: AsComponent
  children: ReactNode
  className?: string
  full?: boolean
  gap?: TwGap
  id?: string
  justify?: TwJustify
  vertical?: boolean
  wrap?: boolean
}

/**
 * Универсальный Flex-контейнер.
 *
 * Компонент-обёртка, упрощающий работу с Flex-версткой.
 * Поддерживает направление, выравнивание, отступы, обертку и кастомные стили.
 *
 * @param align — Выравнивание по оси Y (align-items)'.
 * @param justify — Выравнивание по оси X (justify-content).
 * @param as — HTML-тег или React-компонент, который будет использоваться как контейнер.
 * @param children — Дочерние элементы.
 * @param className — Кастомные классы.
 * @param full — Растягивать контейнер на всю ширину/высоту.
 * @param gap — Отступ между элементами.
 * @param id — ID DOM-элемента.
 * @param vertical — Вертикальное направление (flex-direction: column).
 * @param wrap — Разрешить перенос строк (flex-wrap: wrap).
 */
export const Flex = ({
  align,
  as: Component = 'div',
  children,
  className,
  full,
  gap,
  id,
  justify,
  vertical,
  wrap,
}: FlexProps) => (
  <Component
    className={clsx(
      'flex w-fit',
      {
        ['flex-col']: vertical,
        ['flex-wrap']: wrap,
        [String(align)]: align,
        [String(gap)]: gap,
        [String(justify)]: justify,
        ['w-full']: full,
      },
      className,
      'gap',
    )}
    id={id}
  >
    {children}
  </Component>
);
