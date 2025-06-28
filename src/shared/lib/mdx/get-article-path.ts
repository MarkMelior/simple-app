interface ArticlePath {
  category: string
  name: string
}

export const getArticlePath = (path: string): ArticlePath | undefined => {
  const parts = path.split('/');

  const articleListIndex = parts.indexOf('articles');

  if (articleListIndex === -1 || articleListIndex + 2 >= parts.length) {
    return;
  }

  const category = parts[articleListIndex + 1];
  const name = parts[articleListIndex + 2];

  return { category, name };
};
