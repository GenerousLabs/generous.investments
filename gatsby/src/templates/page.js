import React from 'react';
import { graphql } from 'gatsby';
import { Typography, Fade } from '@material-ui/core';

import { Layout, SEO, Animated } from 'components';

const Page = props => {
  const { data } = props;
  const {
    frontmatter: { title, description },
    html,
  } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Fade in timeout={1000}>
        <Typography variant='h1' color='textPrimary'>
          <Animated>{title}</Animated>
        </Typography>
      </Fade>
      <Typography
        variant='body1'
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query PageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;

export default Page;
