module.exports = {
  rules: {
    'scss-import-name': {
      create(context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value.endsWith('.scss')) {
              const importSpecifier = node.specifiers[0];

              if (
                importSpecifier
                && importSpecifier.local.name !== 'styles'
              ) {
                context.report({
                  fix(fixer) {
                    return fixer.replaceText(importSpecifier.local, 'styles');
                  },
                  messageId: 'invalidImportName',
                  node,
                });
              }
            }
          },
        };
      },
      meta: {
        docs: {
          description: 'Ensure SCSS imports are named "styles"',
        },
        fixable: 'code',
        messages: {
          invalidImportName: 'SCSS imports should be named "styles".',
        },
        type: 'problem',
      },
    },
  },
};
