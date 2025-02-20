const featureFlagsResponse = [
  {
    id: "feature_1",
    name: "Accordion",
    description: "Enables the new design for the homepage.",
    enabled: true,
    conditions: {
      userGroups: ["beta_testers", "admin"],
      startDate: "2024-09-01",
      endDate: "2024-12-31",
    },
  },
  {
    id: "feature_2",
    name: "Dark Mode",
    description: "Enables dark mode across the site.",
    enabled: false,
    conditions: {
      userGroups: ["all_users"],
      startDate: "2024-10-01",
      endDate: null,
    },
  },
  {
    id: "feature_3",
    name: "Image Slider",
    description: "Enables real-time notifications for user activity.",
    enabled: true,
    conditions: {
      userGroups: ["premium_users"],
      startDate: "2024-08-01",
      endDate: "2024-12-31",
    },
  },
];

function featureFlagsResponseServiceCall() {
  return new Promise((resolve, reject) => {
    if (featureFlagsResponse) {
      setTimeout(() => {
        resolve(featureFlagsResponse);
      }, 500);
    } else {
      reject("Some Error Occured");
    }
  });
}

export default featureFlagsResponseServiceCall;
