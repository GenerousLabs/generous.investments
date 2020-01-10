import React from 'react';
import { useSelector } from 'react-redux';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Typography, Fade } from '@material-ui/core';

import { Layout, SEO, Animated } from 'components';

const DearName = () => {
  const name = useSelector(({ name }) => name);
  return (
    <div>
      <p>Dear {name}</p>
    </div>
  );
};

const PageMdx = props => {
  const { data } = props;
  const {
    frontmatter: { title, description },
    body,
  } = data.mdx;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Fade in timeout={1000}>
        <Typography variant='h1' color='textPrimary'>
          <Animated>{title}</Animated>
        </Typography>
      </Fade>
      <Typography variant='body1'>
        <MDXProvider components={{ DearName }}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Typography>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PageMdxQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
      }
    }
  }
`;

export default PageMdx;
