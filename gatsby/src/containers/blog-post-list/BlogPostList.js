import React from 'react';
import { withStyles } from '@material-ui/styles';

import { BlogPost } from 'components';

import useBlogPosts from './useBlogPosts';
import styles from './style';

type Props = {
  classes: Object,
};

const BlogPostList = ({ classes }: Props) => {
  const { allMarkdownRemark } = useBlogPosts();

  return (
    <div className={classes.container}>
      {allMarkdownRemark.edges.map(({ node }, index) => (
        <BlogPost key={index} data={node} />
      ))}
    </div>
  );
};

export default withStyles(styles)(BlogPostList);
