import { h } from 'preact';

import {
  StickyContainer,
  StickyBodyPanel,
  StickyFooterPanel,
} from 'components/stickyPageLayout';
import Footer from 'components/gefFooter';

const Layout = ({ children }) => {
  return (
    <StickyContainer>
      <StickyBodyPanel>
        {children}
      </StickyBodyPanel>
      <StickyFooterPanel>
        <Footer />
      </StickyFooterPanel>
    </StickyContainer>
  )
};

export default Layout;
