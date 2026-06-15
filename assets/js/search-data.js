// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-education",
          title: "Education",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/education/";
          },
        },{id: "nav-competition",
          title: "Competition",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/competition/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-awards",
          title: "Awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "post-we-are-the-winner-of-eth-robotics-club-39-s-hack2026",
        
          title: "We are the winner of ETH Robotics Club&#39;s HACK2026 🏆",
        
        description: "First place at ETH Robotics Club&#39;s HACK2026 — building a system that lets a humanoid robot autonomously navigate and perform manipulation tasks, in just 48 hours.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/eth-robotics-hack2026/";
          
        },
      },{id: "projects-mobile-logistics-robot",
          title: 'Mobile Logistics Robot',
          description: "From-scratch mecanum AGV + linkage arm + ROS navigation (SLAM/AMCL/A*/TEB) + vision-to-grasp pipeline",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-quadruped-locomotion-with-cpg-rl",
          title: 'Quadruped Locomotion with CPG-RL',
          description: "RL-augmented CPG locomotion in PyBullet with physically interpretable obs/action/reward design; omnidirectional velocity tracking and slope locomotion.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
