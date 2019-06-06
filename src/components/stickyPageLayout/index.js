import { h } from 'preact';
import style from './style.scss';

/**
 * Sticky Footer Layout
 *
 * example:
   <StickyContainer>
     <StickyBodyPanel>
      body
     </StickyBodyPanel>
     <StickyFooterPanel>
      footer
     </StickyFooterPanel>
   </StickyContainer>
 */

export const StickyContainer = ({ children }) => (
  <div className={style.wrapper}>
    {children}
  </div>
);
export const StickyBodyPanel = ({ children }) => (
  <div className={style.body}>
    {children}
  </div>
);

export const StickyFooterPanel = ({ children }) => (
  <div className={style.footer}>
    {children}
  </div>
);
