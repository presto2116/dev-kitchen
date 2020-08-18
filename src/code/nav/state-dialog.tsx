/** @jsx jsx */
import {jsx, Box, Text} from 'theme-ui';

interface StateDialogProps {
  states: string[];
}

export const StateDialog = ({states}: StateDialogProps): JSX.Element => (
  <Box mt={3}>
    {states.map((state) => (
      <Text key={state}>{state}</Text>
    ))}
  </Box>
);
