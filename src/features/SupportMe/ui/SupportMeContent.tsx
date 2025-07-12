import Link from 'next/link';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiBoosty } from 'react-icons/si';

import { LinksMediaEnum } from '@/shared/constants';
import { Flex, Text } from '@/shared/ui';
import { Button, CopyText } from '@/shared/ui/client';

export const SupportMeContent = () => (
  <Flex align="items-center" gap="gap-4" vertical={true}>
    <Text size="text-lg" weight="font-semibold">
      Сбер:&nbsp;
      <CopyText className="ml-0" copiedText="Номер карты Сбер скопирован">
        2202 2082 9633 2449
      </CopyText>
    </Text>
    <Flex gap="gap-3">
      <Button
        as={Link}
        href={LinksMediaEnum.YouTubeSub}
        isIconOnly={true}
        startContent={<FaYoutube size={18} />}
        target="_blank"
        variant="flat"
      />
      <Button
        as={Link}
        href={LinksMediaEnum.YouTubeSub}
        isIconOnly={true}
        startContent={<FaInstagram size={18} />}
        target="_blank"
        variant="flat"
      />
      <Button
        as={Link}
        href={LinksMediaEnum.Boosty}
        isIconOnly={true}
        startContent={<SiBoosty size={18} />}
        target="_blank"
        variant="flat"
      />
    </Flex>
  </Flex>
);
