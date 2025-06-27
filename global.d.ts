declare namespace NodeJS {
  interface ProcessEnv {
    /** Версия приложения, проброшенная из package.json */
    NEXT_PUBLIC_APP_VERSION: string
  }
}

type DeepPartial<T> = T extends object
  ? {
    [P in keyof T]?: DeepPartial<T[P]>;
  }
  : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string;
};
