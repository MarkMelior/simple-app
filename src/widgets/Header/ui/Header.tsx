import { Button } from '@heroui/react';

import { useTheme } from '@/shared/lib/theme';
import { Card, Col, Flex, Row } from '@/shared/ui';

import { WithAlert } from './WithAlert';

import styles from './header.module.scss';

export const Header = () => {
  const { toggleTheme } = useTheme();

  /**
   * 1) Статьи
   * - Лучшие практики разработки
   *
   * 2) Обо мне
   * - Какие технологии использую
   * - Пройденные курсы
   * - Мой пк
   * - Ссылки (на главном всплытии виджет)
   * - Мои работы
   *
   * 3) Премиум пользователи (сделать посты для людей из бусти)
   *
   * 4) Мини приложения
   * - Заметки
   * - Казино
   * - Нейросети
   *
   * 5) UI core
   *
   * 6) Все ссылки
   */

  return (
    <Row
      align="items-center"
      as="header"
      className={styles.header}
      gap="gap-8"
    >
      <Col span={4}>asd</Col>
      <Col justify="justify-center" span={16}>
        <WithAlert
          action={<>Как переехать из</>}
          color="bg-yellow-500"
          icon={<></>}
          title="Меняем сервис, а не процессы"
        >
          <Card as="nav">
            <Flex as="ul" gap="gap-4">
              <li>Статьи</li>
              <li>Обо мне</li>
              <li>Мини-приложения</li>
              <li>UI-Core</li>
              <li>Все ссылки</li>
            </Flex>
          </Card>
        </WithAlert>
      </Col>
      <Col span={4}>
        <Button onPress={toggleTheme} variant="solid">
          ICON
        </Button>
      </Col>
    </Row>
  );
};
