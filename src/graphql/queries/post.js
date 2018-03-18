import _ from 'lodash';

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

const mapToPosts = (data) => {
    const posts = _.get(data, ['data', 'viewer', 'allPosts', 'edges']);
    return _.map(posts, (post) => {
        return _.get(post, 'node');
    });
};

export default {
    mapToPosts,
    query
};