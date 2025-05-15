import { Course } from "./types";


export const sampleCourse: Course = {
    id: 1565838,
    title: "The Complete Full-Stack Web Development Bootcamp",
    url: "/course/the-complete-web-development-bootcamp/",
    is_paid: true,
    visible_instructors: [{
      id: 31334738,
      title: "Dr. Angela Yu, Developer and Lead Instructor",
      name: "Dr. Angela",
      display_name: "Dr. Angela Yu, Developer and Lead Instructor",
      job_title: "Developer and Lead Instructor",
      image: "https://img-c.udemycdn.com/user/100x100/31334738_a13c_3.jpg",
      initials: "DY",
      url: "/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/"
    }],
    published_title: "the-complete-web-development-bootcamp",
    headline: "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
    num_subscribers: 1450408,
    avg_rating: 4.6773796,
    avg_rating_recent: 4.670286,
    rating: 4.670286,
    num_reviews: 436394,
    is_wishlisted: false,
    num_published_lectures: 374,
    image: {
        small: "https://img-c.udemycdn.com/course/50x50/1565838_e54e_18.jpg",
        medium: "https://img-c.udemycdn.com/course/304x171/1565838_e54e_18.jpg",
        large: "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg"
      },
    published_time: "2018-10-25T21:34:15Z",
    objectives_summary: [
      "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
      "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
      "After the course you will be able to build ANY website you want."
    ],
    is_recently_published: false,
    last_update_date: "2025-02-27",
    instructor_name: null,
    content_info: "61.5 total hours",
    content_info_short: "61.5 hours",
    bestseller_badge_content: {
      _class: "ds_course_badge",
      id: "70e9554c73b448cd9587b6c813d5e21f",
      badge_text: "Bestseller",
      badge_family: "bestseller",
    }
  };
  


  export const sampleCourses: Course[] = [
    sampleCourse,
    { ...sampleCourse, id: 1565839, title: "React - The Complete Guide", 
      headline: "Master React and Redux with hooks, context, Next.js and build powerful web applications" },
    { ...sampleCourse, id: 1565840, title: "The Complete JavaScript Course", 
      headline: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and deep dives" },
    { ...sampleCourse, id: 1565841, title: "Python for Data Science and Machine Learning", 
      headline: "Learn Python programming and how to use it for data analysis, visualization, and machine learning" },
    { ...sampleCourse, id: 1565842, title: "iOS & Swift - The Complete iOS App Development Bootcamp", 
      headline: "From beginner to iOS App Developer with just one course" },
    { ...sampleCourse, id: 1565843, title: "Modern HTML & CSS From The Beginning", 
      headline: "Build modern responsive websites & UIs with HTML5, CSS3 & modern CSS techniques" },
    { ...sampleCourse, id: 1565844, title: "Node.js, Express & MongoDB for Beginners", 
      headline: "Build RESTful APIs, user authentication, file upload, and more with Node.js and Express" },
    { ...sampleCourse, id: 1565845, title: "TypeScript for Professionals", 
      headline: "Learn all advanced TypeScript features and best practices for large-scale applications" }
  ];
  
 
  export const categorizedCourses = {
    popular: sampleCourses,
    trending: sampleCourses.slice(2, 6),
    new: sampleCourses.slice(4, 8),
    'web-dev': sampleCourses.slice(0, 4),
    'mobile-dev': sampleCourses.slice(4, 8),
    'data-science': sampleCourses.slice(3, 7)
  };