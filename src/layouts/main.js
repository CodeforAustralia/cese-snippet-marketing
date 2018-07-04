import { h } from 'preact';

import {
  StickyContainer,
  StickyBodyPanel,
  StickyFooterPanel,
} from 'components/stickyPageLayout';

const Layout = () => {
  return (
    <StickyContainer>
      <StickyBodyPanel>
        body
      </StickyBodyPanel>
      <StickyFooterPanel>
        footer
      </StickyFooterPanel>
    </StickyContainer>
  )
};

export default Layout;
