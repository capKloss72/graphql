export const resolvers = {
  Query: {
    jobs: () => {
      return [
        {
          id: "1",
          title: "Software Engineer",
          description: "Develop and maintain software applications.",
        },
        {
          id: "2",
          title: "Electrical Engineer",
          description: "Develop and maintain electrical systems.",
        },
      ];
    },
  },
};
