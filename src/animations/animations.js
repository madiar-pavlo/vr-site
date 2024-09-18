export const showAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom = 1) => ({
    opacity: 1,
    transition: { duration: custom * 0.5 },
  }),
};

export const afterElAnimation = {
  hidden: {
    opacity: 0,
    zIndex: -1,
  },
  visible: (custom = 1) => ({
    opacity: 1,
    transition: { duration: custom * 0.5 },
  }),
};
export const fromDownAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom = 2) => ({
      y: 0,
      opacity: 1,
      transition: { duration: custom * 0.5 },
    }),
  };
  export const fromUpAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom = 2) => ({
      y: 0,
      opacity: 1,
      transition: { duration: custom * 0.5 },
    }),
  };