import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url/";

const client = sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception to localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default client;
