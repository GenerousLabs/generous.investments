import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Typography, Fade } from '@material-ui/core';

import { Layout, SEO, Animated } from 'components';

import DearName from 'components/DearName/DearName.component';
import { Question, Yes, No } from 'components/Question/Question.component';

const components = {
  DearName,
  Question,
  Yes,
  No,
};

const PageMdx = props => {
  const { data } = props;
  const {
    frontmatter: { title, description, hideTitle },
    body,
  } = data.mdx;

  return (
    <Layout>
      <SEO title={title} description={description} />
      {hideTitle ? null : (
        <Fade in timeout={1000}>
          <Typography variant='h1' color='textPrimary'>
            <Animated>{title}</Animated>
          </Typography>
        </Fade>
      )}
      <Typography variant='body1'>
        <MDXProvider components={components}>
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
        hideTitle
      }
    }
  }
`;

export default PageMdx;
