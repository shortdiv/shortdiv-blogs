const fetch = require('node-fetch');

const key = process.env.SNOWPACK_PUBLIC_TAKESHAPE_API_KEY;
const projectId = process.env.SNOWPACK_PUBLIC_TAKESHAPE_PROJECT_ID;

const endpoint = `https://api.takeshape.io/project/${projectId}/graphql`;

module.exports = async () => {
  const getProjects = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      query: `
        {
          getPostList {
            items {
              title
              deck
              slug
              tags {
                name
              }
              blockCanvas
              _updatedAt
              author {
                name
              }
            }
          }
        }
      `,
    }),
  });
  const response = await getProjects.json();
  console.log(response.data.getPostList.items[0].blockCanvas)
  return response.data.getPostList.items;
};