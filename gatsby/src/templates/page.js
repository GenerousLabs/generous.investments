import React from 'react';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';

import Layout from 'components/layout';

const Page = props => {
  const { data } = props;
  const {
    frontmatter: { title },
    html,
  } = data.markdownRemark;

  return (
    <Layout>
      <Typography variant='h1'>{title}</Typography>
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
      }
    }
  }
`;

export default Page;
