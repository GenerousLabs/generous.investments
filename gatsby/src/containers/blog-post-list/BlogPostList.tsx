import React from 'react';
import { withStyles, makeStyles, createStyles } from '@material-ui/styles';
import { graphql } from 'gatsby';

import { BlogPost } from '../../components';

import styles from './style';
import { Theme } from '@material-ui/core';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          html: string;
          frontmatter: {
            title: string;
            path: string;
          };
        };
      }[];
    };
  };
};

const BlogPostList: React.FC<Props> = props => {
  const classes = useStyles(props);
  const { allMarkdownRemark } = props.data;

  return (
    <div className={classes.container}>
      {allMarkdownRemark.edges.map(({ node }, index) => (
        <BlogPost key={index} data={node} />
      ))}
    </div>
  );
};

export const pageQuery = graphql`
  query BlogPostListQuery {
    allMarkdownRemark(filter: { fields: { collection: { eq: "posts" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: `${theme.typography.pxToRem(32)} 0`,
    },
  })
);

export default BlogPostList;
