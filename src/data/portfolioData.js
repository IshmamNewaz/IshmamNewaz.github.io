export const initialPortfolioData = {
  personal: {
    name: "Ishmam Newaz",
    titles: [
      "AI & Deep Learning Researcher",
      "Large Language Models & Vision Specialist",
      "Edge AI & Assistive Robotics Engineer",
      "Aspiring University Lecturer & Academic"
    ],
    tagline: "AI and Deep Learning researcher specializing in Computer Vision, LLMs, Model Compression (Quantization & Distillation), Edge AI deployment, and Autonomous Robotics.",
    availability: "Research Assistant at D2A2I, AIUB | Open to Research & Academic Roles",
    location: "Dhaka, Bangladesh",
    address: "91/1 South Madartek, Bashaboo, Sabujbagh, Dhaka",
    phone: "+8801580323400",
    email: "ishu.newaz@gmail.com",
    github: "https://github.com/IshmamNewaz",
    linkedin: "https://linkedin.com/in/ishmam-newaz/",
    googleScholar: "https://scholar.google.com/citations?user=IshmamNewaz",
    resumeUrl: "#",
    avatar: "/profile.png",
    yearsOfExperience: 3,
    projectsCompleted: 14,
    researchProjects: "4+ Major Funded Initiatives",
    targetCareer: "University Lecturer & Research Scholar"
  },
  
  about: {
    story: "I am an AI and Deep Learning researcher working as a Research Assistant at the Dr. Anwarul Abedin Institute of Innovation (D2A2I), AIUB. I have comprehensive research and engineering experience in Computer Vision, Large Language Models (LLMs), STT/TTS voice synthesis, data analysis, and edge AI deployment through major applied research projects—including Bangladesh's first national TRP system with BSCL, a Canada-funded autonomous wheelchair project, an advanced humanoid robot project, and a USA-funded earthquake simulator.",
    subStory: "I possess strong expertise in both vision and LLM-based intelligent systems, focusing on practical AI model development, optimization (Quantization, Knowledge Distillation, LoRA), and constrained edge deployment. Backed by practical IT infrastructure and Cisco enterprise networking experience from PRAN-RFL Group, and currently pursuing an M.Sc. in ICT at RUET, I aspire to build a distinguished academic career as a university lecturer—contributing to higher education teaching, scientific research, and intelligent systems innovation.",
    researchInterests: [
      "Computer Vision & Pattern Recognition",
      "Large Language Models (LLMs) & LoRA Tuning",
      "Edge AI & Model Compression (Quantization, KD)",
      "Vision-Language Models (VLM) & Multimodal AI",
      "Autonomous Robotics & Assistive Technology (ROS/ROS2)",
      "IoT Systems & High-Frequency Sensor Telemetry"
    ],
    pillars: [
      {
        icon: "Bot",
        title: "LLMs & Model Compression",
        description: "Specializing in local LLM optimization for resource-constrained edge hardware using Knowledge Distillation (KD), INT8/INT4 Quantization, LoRA fine-tuning, and low-latency voice (STT/TTS) pipelines."
      },
      {
        icon: "Layout",
        title: "Computer Vision & Perception",
        description: "Designing end-to-end vision pipelines with PyTorch, OpenCV, YOLO, and RGB-D depth cameras for real-time traffic sign detection, object localization, TV channel recognition, and visual analytics."
      },
      {
        icon: "Cpu",
        title: "Edge AI & Assistive Robotics",
        description: "Integrating ROS/ROS2 nodes, RPLIDAR spatial mapping, embedded controllers (Raspberry Pi, Arduino, STM32), MQTT communication, and multi-axis actuators for autonomous assistive robotics."
      },
      {
        icon: "Server",
        title: "Full-Stack & Systems Architecture",
        description: "Bridging AI models with production ecosystems: scalable Laravel/PHP backends, interactive React.js analytical dashboards, complex MySQL/PL-SQL databases, and enterprise Cisco networks."
      }
    ]
  },

  skills: [
    // AI, Deep Learning & Vision
    { name: "PyTorch & TensorFlow", category: "AI & Machine Learning", level: 95, icon: "Cpu" },
    { name: "Computer Vision, YOLO & Object Detection", category: "AI & Machine Learning", level: 94, icon: "Layout" },
    { name: "Large Language Models (LLMs) & LoRA", category: "AI & Machine Learning", level: 92, icon: "Bot" },
    { name: "Knowledge Distillation (KD) & Quantization", category: "AI & Machine Learning", level: 90, icon: "Network" },
    { name: "Vision-Language Models (VLM) & Multimodal", category: "AI & Machine Learning", level: 88, icon: "Sparkles" },
    { name: "Custom Speech STT & TTS Models", category: "AI & Machine Learning", level: 86, icon: "Radio" },

    // Robotics, Edge & Embedded
    { name: "ROS / ROS2 (Robot Operating System)", category: "Robotics & Embedded", level: 92, icon: "Boxes" },
    { name: "Edge AI Deployment (Raspberry Pi / Jetson)", category: "Robotics & Embedded", level: 94, icon: "Box" },
    { name: "RPLIDAR & RGB-D Depth Perception", category: "Robotics & Embedded", level: 90, icon: "Layers" },
    { name: "OpenCV & Real-Time Image Processing", category: "Robotics & Embedded", level: 92, icon: "Layout" },
    { name: "Arduino, STM32 & Multi-Axis Actuators", category: "Robotics & Embedded", level: 90, icon: "Settings" },
    { name: "MQTT & High-Frequency Sensor Protocols", category: "Robotics & Embedded", level: 92, icon: "Share2" },

    // Full-Stack, Web & Data
    { name: "Python & Data Science Analytics", category: "Full-Stack & Web", level: 95, icon: "Terminal" },
    { name: "React.js & Interactive Dashboards", category: "Full-Stack & Web", level: 90, icon: "FileCode" },
    { name: "Laravel & PHP Backend Services", category: "Full-Stack & Web", level: 90, icon: "Server" },
    { name: "RESTful APIs & Device Telemetry", category: "Full-Stack & Web", level: 92, icon: "Share2" },
    { name: "Tailwind CSS & Modern UI", category: "Full-Stack & Web", level: 88, icon: "Palette" },
    { name: "Git & Collaborative Research Workflows", category: "Full-Stack & Web", level: 95, icon: "GitBranch" },

    // Database & Infrastructure
    { name: "MySQL & Complex Database Architecture", category: "Databases & Cloud", level: 92, icon: "Database" },
    { name: "SQL & PL/SQL Stored Procedures", category: "Databases & Cloud", level: 90, icon: "HardDrive" },
    { name: "Cisco Routing, Switching & VLANs (CCNA)", category: "Databases & Cloud", level: 94, icon: "Network" },
    { name: "Linux & Windows Server Administration", category: "Databases & Cloud", level: 92, icon: "Terminal" },
    { name: "Active Directory & Enterprise Security", category: "Databases & Cloud", level: 88, icon: "CheckCircle" },
    { name: "LAN/WAN, VPN & Network Topologies", category: "Databases & Cloud", level: 90, icon: "Cloud" }
  ],

  projects: [
    {
      id: "earthquake-simulator",
      title: "Seismic Impact & Earthquake Simulator",
      category: "Robotics & Embedded",
      projectType: "Research Project",
      description: "USA-Funded physical & digital seismic simulation platform featuring multi-axis vibration tables, real-time accelerometer telemetry, and structural resonance analytics.",
      longDescription: "An advanced research platform engineered for geotechnical and structural dynamics testing under simulated seismic activity. The system precisely replicates multi-magnitude earthquake wave profiles (P-waves, S-waves, and surface waves) through multi-axis servo actuators and embedded microcontrollers. Integrated with high-frequency tri-axial accelerometer arrays, strain gauges, and computer vision to evaluate structural deformation, resonance frequencies, and damping in real-time.",
      image: "/earthquake_simulator.jpg",
      tags: ["USA-Funded", "Research Project", "Embedded Systems", "Seismic Wave Analytics", "Multi-Axis Servo Control", "Python", "Accelerometers", "Edge Telemetry"],
      featured: true,
      githubUrl: "https://github.com/IshmamNewaz",
      liveUrl: "https://aiub.edu",
      metrics: [
        { label: "Sponsorship", value: "USA-Funded" },
        { label: "Type", value: "Research Project" },
        { label: "Motion", value: "Multi-Axis Servo" }
      ],
      highlights: [
        "Engineered multi-axis vibration table control firmware simulating realistic geological earthquake acceleration profiles.",
        "Implemented high-frequency sensor telemetry pipeline collecting real-time acceleration and strain metrics.",
        "Built visual analytics dashboard displaying dynamic response spectrums, peak ground acceleration (PGA), and structural frequency damping."
      ]
    },
    {
      id: "autonomous-wheelchair",
      title: "Autonomous Assistive Wheelchair",
      category: "Robotics & Embedded",
      projectType: "Research Project",
      description: "Canada-funded assistive robotics platform featuring real-time obstacle perception, deep learning traffic sign recognition, and RPLIDAR navigation.",
      longDescription: "An intelligent autonomous assistive mobility platform designed to empower individuals with physical challenges. Integrates RGB-D depth cameras, RPLIDAR, ultrasonic sensors, and edge computing to generate real-time 3D environment maps, detect traffic signs, and navigate complex indoor/outdoor pathways autonomously.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      tags: ["Canada-Funded", "Research Project", "ROS/ROS2", "Python", "PyTorch", "OpenCV", "RPLIDAR", "RGB-D Camera", "Raspberry Pi", "Edge AI"],
      featured: true,
      githubUrl: "https://github.com/IshmamNewaz",
      liveUrl: "https://aiub.edu",
      metrics: [
        { label: "Sponsorship", value: "Canada-Funded" },
        { label: "Type", value: "Research Project" },
        { label: "Inference", value: "Real-Time Edge" }
      ],
      highlights: [
        "Developed and optimized deep learning traffic sign detection model for low-latency inference on edge Raspberry Pi hardware.",
        "Engineered multi-sensor fusion pipeline combining RPLIDAR, RGB-D depth vision, and ultrasonic telemetry.",
        "Implemented ROS/ROS2 modular nodes and MQTT protocols for robust sensor acquisition and motor actuator control."
      ]
    },
    {
      id: "humanoid-robot-platform",
      title: "Humanoid Robot AI & Voice Core",
      category: "AI & Machine Learning",
      projectType: "Research Project",
      description: "Next-gen humanoid robotics system integrating custom quantized LLM conversational intelligence, STT/TTS voice synthesis, and ROS2 motor control.",
      longDescription: "A fully integrated humanoid robotic platform capable of autonomous voice conversation and coordinated physical interaction. Features a custom local LLM optimized via knowledge distillation and quantization for rapid edge inference, natural voice interaction via custom STT/TTS models, and Robot Management System (RMS) integration.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
      tags: ["Research Project", "NLP & LLM", "STT & TTS", "Quantization", "Knowledge Distillation", "PyTorch", "ROS/ROS2", "Raspberry Pi", "Edge AI"],
      featured: true,
      githubUrl: "https://github.com/IshmamNewaz",
      liveUrl: "https://aiub.edu",
      metrics: [
        { label: "Voice Pipeline", value: "STT + TTS" },
        { label: "Type", value: "Research Project" },
        { label: "Optimization", value: "KD & Quantization" }
      ],
      highlights: [
        "Developed custom LLM-based conversational system and tuned response latency for constrained edge computing.",
        "Integrated custom Speech-to-Text and Text-to-Speech models enabling natural, fluid human-robot voice dialogues.",
        "Created unified AI pipeline synchronizing conversational intelligence, sensor telemetry, and robotic servo actuators."
      ]
    },
    {
      id: "trp-system-bangladesh",
      title: "Television Rating Point (TRP) System",
      category: "Full-Stack & Web",
      projectType: "Research Project",
      description: "Bangladesh's first national TRP system — a Government-funded joint initiative between BSCL and AIUB for real-time television audience measurement.",
      longDescription: "Leading the design and engineering of Version 2 of Bangladesh's national TRP system. Architected the complete backend ecosystem in Laravel/PHP, built interactive React.js admin panels and audience statistics dashboards, designed high-throughput MySQL database schemas with PL/SQL, and developed an automated TV channel detection ML model processing audio-visual feeds.",
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1000&q=80",
      tags: ["Govt-Funded (BSCL)", "Research Project", "Laravel", "React.js", "MySQL", "PL/SQL", "Python", "Audio-Visual ML", "REST APIs"],
      featured: true,
      githubUrl: "https://github.com/IshmamNewaz",
      liveUrl: "https://aiub.edu",
      metrics: [
        { label: "Scale", value: "National" },
        { label: "Sponsorship", value: "Govt-Funded (BSCL)" },
        { label: "Type", value: "Research Project" }
      ],
      highlights: [
        "Leading the complete Version 2 system design covering backend services, device telemetry, and React analytics dashboards.",
        "Engineered an automated TV channel detection model using audio-visual recognition for high-accuracy viewership logs.",
        "Built robust data-processing modules for data cleaning, validation, aggregation, and rating metric generation."
      ]
    },
    {
      id: "enterprise-network-infrastructure",
      title: "Enterprise Network & Systems Architecture",
      category: "Databases & Cloud",
      projectType: "Case Study",
      description: "Enterprise-grade multi-site Cisco network infrastructure, server administration, VLAN trunking, and Active Directory security.",
      longDescription: "Managed and configured comprehensive enterprise IT infrastructure at PRAN-RFL Group. Deployed and monitored Cisco routers, switches, VLANs, WAN/LAN connections, IP schemes, Active Directory domains, Linux/Windows servers, firewall policies, and secure remote VPN tunnels across corporate branches.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      tags: ["Case Study", "Cisco CCNA", "VLANs", "LAN/WAN", "Linux Server", "Windows Server", "Active Directory", "VPN", "Network Security"],
      featured: false,
      githubUrl: "https://github.com/IshmamNewaz",
      liveUrl: "https://linkedin.com/in/ishmam-newaz/",
      metrics: [
        { label: "Type", value: "Case Study" },
        { label: "Reliability", value: "99.9% Uptime" },
        { label: "Certification", value: "CCNA Certified" }
      ],
      highlights: [
        "Configured Cisco routing, switching, VLANs, trunking, DHCP, DNS, NAT, VPN, and SSH access control.",
        "Administered Linux and Windows Server environments, user permission matrices, and security patching.",
        "Conducted physical site surveys, structured cabling plans, and network port mapping documentation."
      ]
    }
  ],

  experience: [
    {
      role: "Research Assistant (RA)",
      company: "Dr. Anwarul Abedin Institute of Innovation (D2A2I), AIUB",
      period: "Jan 2025 - Present",
      location: "Kuratoli, Dhaka",
      description: "Conducting cutting-edge research and software engineering across government-funded and international AI, robotics, and full-stack projects.",
      achievements: [
        "Leading the design and development of Version 2 of Bangladesh's national Television Rating Point (TRP) System (BSCL-AIUB joint project), covering backend services, React dashboards, database architecture, and device communication.",
        "Developed and integrated an automated TV channel audio-visual detection model and analytical data pipelines for accurate television viewership statistics.",
        "Engineered deep learning traffic sign recognition models and multi-sensor perception pipelines (RPLIDAR, RGB-D cameras) for a Canada-funded Autonomous Wheelchair project.",
        "Built low-latency custom conversational LLMs, custom STT/TTS speech models, and ROS/ROS2 coordination for advanced Humanoid Robotics.",
        "Collaborated on USA-funded Earthquake Simulator telemetry and multi-axis vibrational control platforms."
      ],
      skills: ["PyTorch", "LLMs", "Computer Vision", "ROS/ROS2", "Edge AI", "RPLIDAR", "Laravel", "React.js", "MySQL", "Python"]
    },
    {
      role: "Management Trainee Officer – MTO (CISCO & Linux)",
      company: "PRAN-RFL Group",
      period: "Aug 2025 - Dec 2025",
      location: "Uttar Badda, Dhaka",
      description: "Managed and monitored enterprise-scale network and server infrastructure ensuring uninterrupted connectivity and security compliance.",
      achievements: [
        "Configured and maintained Cisco enterprise routers, switches, VLANs, trunking, LAN/WAN, IP addressing, DNS, DHCP, NAT, VPN, and SSH.",
        "Administered Linux and Windows Server systems, user permissions, system services, log audits, security patching, and performance monitoring.",
        "Diagnosed and resolved critical hardware, network, operating system, and application connectivity incidents across production facilities.",
        "Conducted site surveys, supported structured cabling installations, Wi-Fi access points, and prepared detailed network topology plans."
      ],
      skills: ["Cisco Routing & Switching", "VLANs", "Linux Administration", "Windows Server", "Active Directory", "LAN/WAN", "VPN"]
    }
  ],

  education: [
    {
      degree: "M.Sc. Engineering in Information & Communication Technology",
      institution: "Rajshahi University of Engineering & Technology (RUET)",
      period: "Oct 2025 - Ongoing",
      honors: "Focus: Advanced Artificial Intelligence & Machine Learning"
    },
    {
      degree: "B.Sc. in Computer Science & Engineering (Major in Computer Engineering)",
      institution: "American International University-Bangladesh (AIUB)",
      period: "Apr 2021 - Jan 2025",
      honors: "Relevant Coursework: Computer Vision, Machine Learning, Artificial Intelligence"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sabujbagh Government College, Dhaka",
      period: "2020",
      honors: "Science Background"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "KPB School & College, Dhaka",
      period: "2018",
      honors: "Science Background"
    }
  ],

  certifications: [
    { 
      name: "CCNA: Cisco Certified Network Associate", 
      year: "Aug 2024", 
      issuer: "Cisco",
      digitalBadges: [
        { name: "Enterprise Networking", url: "https://www.credly.com/organizations/cisco/badges" },
        { name: "Switching, Routing & Wireless Essentials", url: "https://www.credly.com/organizations/cisco/badges" },
        { name: "Introduction to Networks", url: "https://www.credly.com/organizations/cisco/badges" }
      ]
    },
    { 
      name: "Dean's List & Dean's Honorable Mention Award", 
      year: "Spring 2021 - Spring 2024 (4x Awardee)", 
      issuer: "American International University-Bangladesh (AIUB)" 
    },
    { 
      name: "Electronics & Robotics Fundamentals", 
      year: "Mar 2023", 
      issuer: "Robotics Camp 2023, DUET (ID: 23011211)" 
    }
  ],

  testimonials: [
    {
      name: "Sabbir Hossain",
      role: "Senior Software Engineer",
      company: "Dr. Anwarul Abedin Institute of Innovation (D2A2I), AIUB",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "Ishmam is an exceptional researcher and engineer who demonstrates deep technical acumen across computer vision, edge AI model deployment, and large language models. His leadership on national-scale systems and robotics pipelines has been instrumental to our institute's success.",
      rating: 5
    },
    {
      name: "Dr. M. Tanseer Ali",
      role: "Dept. Head [Graduate] & Associate Professor",
      company: "Dr. Anwarul Abedin Institute of Innovation (D2A2I), AIUB",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      content: "Having mentored Ishmam throughout his academic and research journey, I can attest to his relentless work ethic, mastery of robotics and deep learning, and his strong potential as a future university lecturer and leading academic researcher.",
      rating: 5
    }
  ]
};
