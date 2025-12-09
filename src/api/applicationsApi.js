export const myApplicationsPromise = (email) => {
  return fetch(
    `https://career-code-server-fawn.vercel.app/applications?email=${email}`
  ).then((res) => res.json());
};
