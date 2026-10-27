// All my projects, written once.
// To add a project: copy one block, paste it, and change the details.
// "featured: true" means it also shows on the Home page.

export const projects = [
  {
    title: "Lightweight Object Tracking",
    description:
      "Group project: a detect-then-track pipeline using YOLO11n for detection and a Kalman Filter for motion, with KCF and CSRT as baselines on the OTB benchmark. Tuned YOLO11n to an mAP@50 of 0.806 on Pascal VOC.",
    tags: ["Python", "YOLO11n", "OpenCV", "Kalman Filter", "Computer Vision"],
    image: "/projects/object-tracking.jpg",
    github: "https://github.com/ShadaabHasan/Object-Tracking-Using-Lightweight-Neural-Networks",
    featured: true,
  },
  {
    title: "Student Feedback Analysis",
    description:
      "Team project: a system that sorts student feedback into positive, neutral or negative, with dashboards for teachers. My part was the model: I compared models from Logistic Regression to fine-tuned BERT on about 72,000 texts, reaching 72% accuracy on 14,612 test texts.",
    tags: ["Python", "BERT", "Hugging Face", "scikit-learn", "NLP"],
    image: "/projects/student-feedback-system.png",
    github: "https://github.com/ShadaabHasan/student-review-system",
    featured: true,
  },
  {
    title: "Skin Cancer Detection",
    description:
      "Led a team of 4 to build and compare four CNN models that sort skin lesion images into 7 types, using the HAM10000 dataset (10,015 images). Published in JETIR (2024).",
    tags: ["Python", "TensorFlow", "Keras", "CNN"],
    image: "/projects/skin-cancer-detection-system-image.jpeg",
    github: "https://github.com/ShadaabHasan/Skin-cancer-recognition-system",
    featured: true,
  },
  {
    title: "Hotel Booking Cancellation Risk",
    description:
      "Predicted cancellations on 119,390 hotel bookings with Random Forest and Logistic Regression, explained the model with partial dependence plots, and estimated the revenue at risk.",
    tags: ["R", "Random Forest", "Logistic Regression", "caret"],
    image: "/projects/hotel-booking-1.jpg",
    github: "https://github.com/ShadaabHasan/Big-data-hotel-booking-analysis",
  },
  {
    title: "F1 Data Visualisation",
    description:
      "Joined 8 Formula 1 datasets with SQL to compare drivers, teams and circuits, and traced a points-vs-wins gap to scoring changes in 1991, 2010 and 2019.",
    tags: ["R", "SQL", "ggplot2"],
    image: "/projects/f1-illustrate.png",
    github: "https://github.com/ShadaabHasan/F1-Data-Visualisation",
  },
  {
    title: "SummarAIze",
    description:
      "A tool that summarises long text, such as research papers, using a pre-trained BART model from Hugging Face.",
    tags: ["Python", "NLP", "Hugging Face", "BART"],
    image: "/projects/literature-review-1.jpg",
    github: "https://github.com/ShadaabHasan/SummarAIze",
  },
  {
    title: "Instagram Follower Analysis",
    description:
      "Reads Instagram's data export to list accounts that don't follow you back, and charts how your followers and following grew over time.",
    tags: ["Python", "Pandas", "Matplotlib"],
    image: "/projects/insta_analysis.jpg",
    github: "https://github.com/ShadaabHasan/instagram-follower-analysis",
  },
  {
    title: "Portfolio Website",
    description:
      "This site. Built with Next.js and Tailwind CSS, with a contact form that checks input on the server and saves messages to Firestore.",
    tags: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/ShadaabHasan/portfolio",
    liveDemo: "https://shadaabhasan.vercel.app/",
  },
];