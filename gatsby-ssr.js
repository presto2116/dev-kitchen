/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Disable all eslint rules since this is not a typescript file

import * as React from 'react';
import ResetCss from './ResetCss';

export const wrapRootElement = ({element}) => {
  return (
    <React.Fragment>
      <ResetCss />
      {element}
    </React.Fragment>
  );
};
