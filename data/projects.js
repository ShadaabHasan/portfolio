// All my projects, written once.
// To add a project: copy one block, paste it, and change the details.
// "featured: true" means it also shows on the Home page.
// "metric", "metricLabel", "note" and "paper" are optional. Leave them out if a project doesn't have them.

export const projects = [
  {
    title: "Lightweight object tracking",
    metric: "0.806",
    metricLabel: "mAP@50 on Pascal VOC",
    description:
      "A detect-then-track pipeline: YOLO11n finds objects, a Kalman filter follows them. I compared three training setups for the detector and built the OTB benchmark evaluation against KCF and CSRT.",
    note:
      "our Kalman test used ground-truth positions, so its tracking score isn't a fair comparison. The next version feeds it real YOLO detections.",
    tags: ["Group project", "Python", "YOLO11n", "OpenCV"],
    image: "/projects/object-tracking.jpg",
    github: "https://github.com/ShadaabHasan/Object-Tracking-Using-Lightweight-Neural-Networks",
    featured: true,
  },
  {
    title: "Student feedback analysis",
    metric: "72%",
    metricLabel: "accuracy on 14,612 test texts",
    description:
      "I built the model for a team app that sorts student feedback into positive, neutral and negative, comparing eight approaches from logistic regression to fine-tuned BERT.",
    note:
      "measure accuracy on the student comments alone, not mixed with tweets and movie reviews, since that's what the app is for.",
    tags: ["Team project", "Python", "BERT", "Hugging Face", "scikit-learn"],
    image: "/projects/student-feedback-system.png",
    github: "https://github.com/ShadaabHasan/student-review-system",
    featured: true,
  },
  {
    title: "Skin cancer detection",
    metric: "7",
    metricLabel: "lesion types, 10,015 images",
    description:
      "Led a team of four comparing CNN models that classify skin lesion images. Published in JETIR, 2024.",
    note:
      "the data was oversampled before the train/test split, which makes accuracy look too high. I'm rebuilding it with a clean split and transfer learning.",
    tags: ["Python", "TensorFlow", "Keras", "CNN"],
    image: "/projects/skin-cancer-detection-system-image.jpeg",
    github: "https://github.com/ShadaabHasan/Skin-cancer-recognition-system",
    paper: "https://www.jetir.org/view?paper=JETIR2406947",
    featured: true,
  },
  {
    title: "Hotel booking cancellation risk",
    description:
      "Predicted cancellations on 119,390 hotel bookings with Random Forest and Logistic Regression, explained the model with partial dependence plots, and estimated the revenue at risk.",
    tags: ["R", "Random Forest", "Logistic Regression", "caret"],
    image: "/projects/hotel-booking-1.jpg",
    github: "https://github.com/ShadaabHasan/Big-data-hotel-booking-analysis",
  },
  {
    title: "F1 data visualisation",
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
    title: "Instagram follower analysis",
    description:
      "Reads Instagram's data export to list accounts that don't follow you back, and charts how your followers and following grew over time.",
    tags: ["Python", "Pandas", "Matplotlib"],
    image: "/projects/insta_analysis.jpg",
    github: "https://github.com/ShadaabHasan/instagram-follower-analysis",
  },
  {
    title: "Portfolio website",
    description:
      "This site. Built with Next.js and Tailwind CSS, with light and dark themes, and a contact form that checks input on the server and saves messages to Firestore.",
    tags: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/ShadaabHasan/portfolio",
    liveDemo: "https://shadaabhasan.vercel.app/",
  },
];