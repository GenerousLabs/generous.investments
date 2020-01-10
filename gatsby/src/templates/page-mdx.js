import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Typography, Fade } from '@material-ui/core';

import { Layout, SEO, Animated } from 'components';

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
        <MDXRenderer>{body}</MDXRenderer>
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
