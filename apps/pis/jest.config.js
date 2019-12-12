module.exports = {
  name: 'pis',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pis',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
