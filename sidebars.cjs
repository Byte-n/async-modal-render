/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'index',
    {
      type: 'category',
      label: '指南',
      link: {
        type: 'doc',
        id: 'guide/index',
      },
      items: ['guide/vs', 'guide/agent-skills'],
    },
    'components',
    'api/index',
    'changelogs/index',
  ],
};

module.exports = sidebars;
