export const myApplicationsPromise = (email) => {
  return fetch(
    `https://career-code-server-henna.vercel.app/applications?email=${email}`
  ).then((res) => res.json());
};
