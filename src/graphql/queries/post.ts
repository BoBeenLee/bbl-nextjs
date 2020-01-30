import _ from "lodash";

export interface IPostItem {
  title: string;
  date: string;
  url: string;
}

const query = `{
    viewer {
        allPosts {
            edges {
                node {
                    title
                    date
                    url
                }
            }
        }
    }
}`;

const mapToPosts = (data: {
  data: { viewer: { allPosts: { edges: { node: IPostItem } } } };
}) => {
  const posts = _.get(data, ["data", "viewer", "allPosts", "edges"]);
  return _.map(posts, post => _.get(post, "node"));
};

export { mapToPosts, query };
