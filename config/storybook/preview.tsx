import { HeroUIProvider, NextThemesProvider } from '@/app/@core/providers';

import type { Preview } from '@storybook/react';

import '@/shared/ui';

const preview: Preview = {
  decorators: [
    (Story) => (
      <NextThemesProvider>
        <HeroUIProvider>
          <Story />
        </HeroUIProvider>
      </NextThemesProvider>
    ),
  ],
};

export default preview;
