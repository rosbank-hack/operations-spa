import React, { memo } from 'react';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';

import { WarningSlide } from './WarningSlide';
import { FinanceHealth } from './FinanceHealth';
import { CreditNotification } from './CreditNotification';
import { AnalyzeSlide } from './AnalyzeSlide';

import useStyles from './styles';

const WidgetSlider = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        <div style={{ padding: '20px' }}>
          <WarningSlide />
        </div>
        <div style={{ padding: '20px', marginRight: '20px' }}>
          <FinanceHealth />
        </div>
        <div style={{ padding: '20px', marginRight: '20px' }}>
          <CreditNotification />
        </div>
        <div style={{ padding: '20px', marginRight: '20px' }}>
          <AnalyzeSlide />
        </div>
      </SwipeableViews>
    </div>
  );
};

export default memo(WidgetSlider);
