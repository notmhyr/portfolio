// framer motion variants

const textContainerVariant = {
  hidden: {
    opacity: 0,
  },

  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: i * 0.1,
    },
  }),
};

const textVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction == "left" ? 100 : direction == "right" ? -100 : 0,
    y: direction == "up" ? 100 : direction == "down" ? -100 : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: {
      type,
      delay,
      duration,
    },
  },
});

const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction == "left" ? "-100%" : direction == "right" ? "100%" : 0,
    y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
  },
  visible: {
    x: 0,
    y: 0,

    transition: {
      type,
      delay,
      duration,
    },
  },
});

const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.3,
    },
  },
};

export { textContainerVariant, textVariant, fadeIn, slideIn, footerVariants };
