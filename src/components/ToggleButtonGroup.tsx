/** @jsx jsx */
import {jsx, Flex, Button} from 'theme-ui';
import {Dispatch} from 'react';
import {motion, AnimateSharedLayout} from 'framer-motion';

const ToggleButtonGroup = ({
  activeTab,
  setActiveTab,
  buttons,
}: {
  activeTab: string;
  setActiveTab: Dispatch<string>;
  buttons: string[];
}): JSX.Element => {
  return (
    <AnimateSharedLayout>
      <Flex
        sx={{
          mt: 2,
          mb: 3,
          position: 'relative',
          maxWidth: 500,
          overflow: 'hidden',
        }}
      >
        {buttons.map((button) => (
          <Button
            key={button}
            variant={'toggle'}
            onClick={() => setActiveTab(button)}
          >
            <span sx={{zIndex: 3, position: 'relative'}}>{button}</span>
            {activeTab === button && (
              <motion.div
                layoutId="outline"
                initial={false}
                animate={{backgroundColor: 'green'}}
                sx={{
                  position: 'absolute',
                  zIndex: 1,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              />
            )}
          </Button>
        ))}
      </Flex>
    </AnimateSharedLayout>
  );
};

export default ToggleButtonGroup;
