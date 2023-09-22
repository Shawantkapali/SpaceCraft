export const LeftFirst ={
    hidden: {
      opacity: 0,
      x: -80,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        delay: 0.2,
      },
    },}

export const RightFirst ={
        hidden: {
          opacity: 0,
          x: 80,
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            type: 'tween',
            delay: 0.2,
          },
        },}

export const FooterVariants = {
          hidden: {
            opacity: 0,
            y: 50,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 140,
            },
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 80,
              delay: 0.3,
            },
          },
        };
