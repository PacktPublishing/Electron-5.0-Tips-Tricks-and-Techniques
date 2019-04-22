module.exports = {
  projects: [
    //Render Process
    {
      runner: '@jest-runner/electron',
      testEnvironment: '@jest-runner/electron/environment',
      testRegex: ['(/__tests__/render/.*\.(test|spec))\.[jt]sx?$'],
    },
    //Main Process
    {
      runner: '@jest-runner/electron/main',
      testEnvironment: 'node',
      testRegex: '(/__tests__/main/.*\.(test|spec))\.[jt]sx?$',
  },
  ]
}