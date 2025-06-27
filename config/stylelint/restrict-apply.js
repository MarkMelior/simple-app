// eslint-disable-next-line @typescript-eslint/no-require-imports
const stylelint = require('stylelint');

const ruleName = 'custom-rules/restrict-apply';

const messages = stylelint.utils.ruleMessages(ruleName, {
  invalid: (value) => `The class "${value}" is not allowed in @apply.`,
});

module.exports = stylelint.createPlugin(
  ruleName,
  (primaryOption, secondaryOptions) =>
    (postcssRoot, result) => {
      if (!primaryOption) {
        return;
      }

      const allowedPatterns = secondaryOptions.allowedPatterns || [];

      postcssRoot.walkAtRules('apply', (atRule) => {
        const classes = atRule.params.split(/\s+/);

        classes.forEach((className) => {
          const isAllowed = allowedPatterns.some(
            (pattern) => new RegExp(pattern).test(className),
          );

          if (!isAllowed) {
            stylelint.utils.report({
              message: messages.invalid(className),
              node: atRule,
              result,
              ruleName,
            });
          }
        });
      });
    });

module.exports.ruleName = ruleName;
module.exports.messages = messages;
