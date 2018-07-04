import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import './index.scss';

const StorybookDecorator = (story) => (
  <div style={{margin: '40px'}}>
    {story()}
  </div>
);

addDecorator(StorybookDecorator);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.story.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
