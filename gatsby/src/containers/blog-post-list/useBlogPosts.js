import { useStaticQuery, graphql } from 'gatsby';

const useBlogPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  );
  return data;
};

export default useBlogPosts;
