/** @jsx jsx */
import {jsx, Heading, Box, Text} from 'theme-ui';
import {Fragment, ReactNode} from 'react';

interface WebsiteWrapperProps {
  children: ReactNode;
}

// Fake website used on every step page
export const WebsiteWrapper = ({
  children,
}: WebsiteWrapperProps): JSX.Element => (
  <Fragment>
    <Box
      sx={{
        // fake website box
        minHeight: 500,
        border: (theme) => `2px solid ${theme.colors.muted}`,
        mb: 5,
      }}
    >
      {children}
      <Heading m={3}>{`I'm a website.`}</Heading>
      <Text m={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam
        ut diam sed fringilla. Mauris tellus ligula, accumsan in velit non,
        gravida tempus metus. Nunc non eros nec nunc vulputate condimentum.
        Donec id vehicula est. Suspendisse commodo in odio sit amet porta. Morbi
        quis scelerisque magna. Integer maximus varius nisl et ornare. Curabitur
        mattis, nibh et hendrerit pharetra, enim quam placerat libero, fermentum
        porta dui eros in sem. Integer nibh tellus, convallis quis auctor et,
        mattis sed purus. Pellentesque pretium mattis bibendum. Cras et
        tincidunt massa, at consequat lacus. Vestibulum eu pretium velit, in
        facilisis sem. Suspendisse lobortis velit dui, sed pellentesque sapien
        auctor vel. Sed ultricies interdum ipsum, non dignissim nulla lobortis
        a.
      </Text>
    </Box>
  </Fragment>
);
