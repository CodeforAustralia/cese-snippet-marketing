import React from 'react';
import { storiesOf } from '@storybook/react';

import GefFooter from './index';


storiesOf('Avatar', module)

  .add('should render initials MP', () => {
    return (
      <GefFooter />
    )
  })

;
