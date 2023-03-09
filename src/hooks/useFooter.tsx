import { useState } from 'react';

const useFooterHook = () => {
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(true);

  const showFooter = () => {
    setIsFooterVisible(true);
  };

  const hideFooter = () => {
    setIsFooterVisible(false);
  };

  return { isFooterVisible, showFooter, hideFooter };
};

export default useFooterHook;
