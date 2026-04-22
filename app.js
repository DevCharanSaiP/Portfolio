// ===================================================================
// THEME B - AI RESEARCH PORTFOLIO
// Dev Charan Sai P - Interactive JavaScript
// ===================================================================

// ===================================================================
// DATA MODELS
// ===================================================================

// Featured Projects Data (for home page rail)
const featuredProjects = [
  {
    id: 'tech-stack-advisor',
    category: 'Personal Project',
    title: 'Tech Stack Advisory Agent',
    date: 'December 2025',
    summary: 'AI-powered web app generating structured tech stack recommendations using LLaMA 3',
    tags: ['llm', 'agentic-ai', 'gen-ai', 'deployed'],
    tech: 'Python, Gradio, LLaMA 3, Hugging Face',
    links: {
      github: 'https://github.com/DevCharanSaiP/techstack-advisoryagent',
      demo: 'https://huggingface.co/spaces/devcharansaip/tech-stackadvisor'
    }
  },
  {
    id: 'diabetic-retinopathy-patent',
    category: 'Patent',
    title: 'AI System for Diabetic Retinopathy Detection',
    date: 'August 2024',
    summary: 'Federated learning system using Mask R-CNN for privacy-preserving medical diagnostics',
    tags: ['patent', 'federated-learning', 'computer-vision', 'medical-ai'],
    tech: 'Python, TensorFlow, Mask R-CNN, PySyft'
  },
  {
    id: 'prompt-playground',
    category: 'Personal Project',
    title: 'Prompt Engineering Playground',
    date: 'December 2025',
    summary: 'Interactive AI playground to generate, compare, and optimize prompts using multiple techniques',
    tags: ['llm', 'agentic-ai', 'gen-ai', 'deployed'],
    tech: 'Python, Gradio, Hugging Face',
    links: {
      github: 'https://github.com/DevCharanSaiP/prompt-playground',
      demo: 'https://huggingface.co/spaces/devcharansaip/prompt-playground'
    }
  },
  {
    id: 'synthetic-ecg',
    category: 'Academic Project',
    title: 'Synthetic ECG Signal Generation with Diffusion Models',
    date: 'April 2025',
    summary: 'Probabilistic diffusion model generating realistic synthetic ECG signals from MIT-BIH dataset',
    tags: ['gen-ai', 'medical-ai', 'deep-learning'],
    tech: 'Python, PyTorch, Diffusion Models',
    links: {
      github: 'https://github.com/DevCharanSaiP/Synthetic-ECG-using-Probabilistic-Diffusion-Models'
    }
  },
  {
    id: 'skin-lesion-federated',
    category: 'Academic Project',
    title: 'Collaborative AI Model for Skin Lesion Classification',
    date: 'May 2025',
    summary: 'Federated learning system for privacy-preserving skin lesion classification and segmentation',
    tags: ['federated-learning', 'deep-learning', 'computer-vision', 'medical-ai'],
    tech: 'Python, PyTorch, PySyft, OpenCV'
  }
];

// All Projects Data (for projects page)
const allProjects = {
  academic: [
    {
      id: 'detectron2-segmentation',
      title: 'Panoptic Image Segmentation Using Detectron2',
      role: 'Project Lead',
      organization: 'VIT Bhopal University',
      date: 'November 2023',
      summary: 'Explored Detectron2 pretrained models across 4 vision tasks, evaluating performance on 400 images',
      description: 'Led a project exploring panoptic image segmentation using Detectron2, focusing on evaluating pretrained models across multiple computer vision tasks. The study involved testing 10 images per class to analyze model performance and generalization. As part of a broader Detectron2 exploration, over 100 images were used to assess accuracy and consistency. The project covered all four core tasks supported by Detectron2—object detection, instance segmentation, keypoint detection, and panoptic segmentation—culminating in results generated from more than 400 processed images.',
      tags: ['deep-learning', 'computer-vision'],
      tech: 'Python, PyTorch, Detectron2, OpenCV, NumPy, Matplotlib'
    },
    {
      id: 'human-activity-recognition',
      title: 'Human Activity Recognition Using 2D CNNs',
      role: 'Project Lead',
      organization: 'VIT Bhopal University',
      date: 'April 2024',
      summary: 'A 2D CNN-based model classifying human activities using accelerometer sensor data',
      description: 'Led the development of a Human Activity Recognition system leveraging accelerometer sensor data to classify activities such as walking, sitting, and jogging. Designed and implemented a robust data pipeline including preprocessing, segmentation, and feature engineering of time-series data. Built and trained a 2D Convolutional Neural Network (CNN) model to effectively capture spatial-temporal patterns, achieving reliable classification performance.',
      tags: ['deep-learning', 'machine-learning'],
      tech: 'Python, TensorFlow, Keras, NumPy, Pandas, Scikit-learn',
      links: {
        github: 'https://github.com/DevCharanSaiP/Human-Activity-Recognition2D-CNN'
      }
    },
    {
      id: 'synthetic-ecg',
      title: 'Synthetic ECG Signal Generation with Diffusion Models',
      role: 'Generative AI Engineer',
      organization: 'VIT Bhopal University',
      date: 'April 2025',
      summary: 'Built a probabilistic diffusion model to generate realistic synthetic ECG signals',
      description: 'Developed a generative AI system using probabilistic diffusion models to synthesize realistic ECG signals trained on the MIT-BIH Arrhythmia dataset. The project focused on learning the underlying distribution of cardiac waveforms and generating high-quality synthetic signals that preserve temporal and morphological characteristics of real ECG data. Implemented comprehensive data preprocessing pipelines and evaluated generated outputs using statistical similarity metrics.',
      tags: ['gen-ai', 'medical-ai', 'deep-learning'],
      tech: 'Python, PyTorch, NumPy, Pandas, Matplotlib, SciPy',
      links: {
        github: 'https://github.com/DevCharanSaiP/Synthetic-ECG-using-Probabilistic-Diffusion-Models'
      }
    },
    {
      id: 'skin-lesion-federated',
      title: 'Collaborative AI Model for Skin Lesion Classification',
      role: 'Project Lead',
      organization: 'VIT Bhopal University',
      date: 'May 2025',
      summary: 'Built a federated deep learning system for privacy-preserving skin lesion classification',
      description: 'Led the development of a collaborative AI system for skin lesion classification and segmentation in a decentralized healthcare environment using the HAM10000 dataset. Implemented a federated learning framework that enables multiple institutions to train a shared model without exchanging sensitive patient data, ensuring privacy and regulatory compliance. Designed deep learning architectures for both image classification and segmentation to accurately identify and localize skin lesions.',
      tags: ['federated-learning', 'deep-learning', 'computer-vision', 'medical-ai'],
      tech: 'Python, PyTorch, PySyft, OpenCV, Scikit-learn'
    }
  ],
  personal: [
    {
      id: 'ai-ml-algorithms',
      title: 'Artificial Intelligence ML/DL Algorithms & Models',
      date: 'May 2025',
      summary: 'Comprehensive collection of ML and DL algorithms implemented from scratch',
      description: 'Developed a structured repository of Jupyter notebooks implementing a wide range of machine learning and deep learning algorithms from scratch. The project covers supervised, unsupervised, and probabilistic learning techniques including regression, classification, clustering, and dimensionality reduction methods. Additionally implemented deep learning architectures like CNNs, RNNs, LSTMs, GANs, and Autoencoders with step-by-step explanations.',
      tags: ['machine-learning', 'deep-learning'],
      tech: 'Python, NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, PyTorch',
      links: {
        github: 'https://github.com/DevCharanSaiP/Artificial-Intelligence'
      }
    },
    {
      id: 'reinforcement-learning',
      title: 'Reinforcement Learning Algorithms',
      date: 'May 2025',
      summary: 'Hands-on collection of RL implementations across classic control environments',
      description: 'Developed a comprehensive repository of reinforcement learning implementations covering both value-based and policy-based methods. The project demonstrates core RL algorithms including Deep Q-Networks (DQN), DDPG, Q-Learning, SARSA, and Dynamic Programming through practical environments such as CartPole-v1, Pendulum-v1, FrozenLake-v1, LunarLander-v2, and a custom Grid World.',
      tags: ['reinforcement-learning', 'machine-learning'],
      tech: 'Python, NumPy, Matplotlib, OpenAI Gym, PyTorch',
      links: {
        github: 'https://github.com/DevCharanSaiP/Reinforcement-Learning-Algorithms'
      }
    },
    {
      id: 'spellbook-agent',
      title: 'SpellBook Agent',
      role: 'Deployed',
      date: 'December 2025',
      summary: 'Interactive AI web app generating creative fantasy spells using LLMs',
      description: 'Developed Spellbook Agent, an AI-powered web application that generates imaginative fantasy spells based on user inputs such as magic type, difficulty level, mood, and custom ideas. Built with Python and Gradio with custom CSS styling. Integrated Hugging Face\'s hosted LLM Inference API to enable real-time text generation without requiring user authentication.',
      tags: ['llm', 'agentic-ai', 'gen-ai', 'deployed'],
      tech: 'Python, Gradio, Hugging Face Transformers, HTML/CSS',
      links: {
        github: 'https://github.com/DevCharanSaiP/spellbook-agent',
        demo: 'https://huggingface.co/spaces/devcharansaip/spellbook_agent'
      }
    },
    {
      id: 'tech-stack-advisor',
      title: 'Tech Stack Advisory Agent',
      role: 'Deployed',
      date: 'December 2025',
      summary: 'AI-powered web app generating structured tech stack recommendations using LLaMA 3',
      description: 'Developed a Tech Stack Architecture Advisor that provides intelligent, structured technology stack recommendations based on project requirements and constraints. Leveraging Meta\'s LLaMA 3 8B model via the Hugging Face Inference API, the system analyzes inputs such as project size, budget, target users, and team experience to generate layer-by-layer architectural suggestions with comparative tables.',
      tags: ['llm', 'agentic-ai', 'gen-ai', 'deployed'],
      tech: 'Python, Gradio, LLaMA 3, Hugging Face, HTML/CSS',
      links: {
        github: 'https://github.com/DevCharanSaiP/techstack-advisoryagent',
        demo: 'https://huggingface.co/spaces/devcharansaip/tech-stackadvisor'
      }
    },
    {
      id: 'prompt-playground',
      title: 'Prompt Engineering Playground',
      role: 'Deployed',
      date: 'December 2025',
      summary: 'Interactive AI playground to generate, compare, and optimize prompts',
      description: 'Developed a Prompt Engineering Playground to experiment with and optimize prompt design strategies. The tool generates multiple prompt variants using widely adopted techniques such as Zero-shot, Few-shot, Chain-of-Thought, Role-based prompting, Structured Output, Reverse Prompting, and Socratic questioning. Users can test variants and compare outputs side-by-side to evaluate effectiveness.',
      tags: ['llm', 'agentic-ai', 'gen-ai', 'deployed'],
      tech: 'Python, Gradio, Hugging Face, HTML/CSS, JavaScript',
      links: {
        github: 'https://github.com/DevCharanSaiP/prompt-playground',
        demo: 'https://huggingface.co/spaces/devcharansaip/prompt-playground'
      }
    }
  ],
  patents: [
    {
      id: 'diabetic-retinopathy-patent',
      title: 'AI System for Diabetic Retinopathy Detection using Federated Learning',
      date: 'August 2024',
      summary: 'A federated AI system using Mask R-CNN for privacy-preserving diabetic retinopathy detection',
      description: 'Designed and developed an AI-based diagnostic system for detecting diabetic retinopathy using a federated learning approach combined with Mask R-CNN for image segmentation and classification. The system enables multiple healthcare institutions to collaboratively train a robust deep learning model without sharing sensitive patient data, ensuring privacy and regulatory compliance. The federated setup allows decentralized training and aggregation of model updates, making it suitable for real-world healthcare deployment.',
      tags: ['patent', 'federated-learning', 'deep-learning', 'computer-vision', 'medical-ai'],
      tech: 'Python, TensorFlow/PyTorch, Mask R-CNN, OpenCV, PySyft'
    },
    {
      id: 'smart-life-jacket',
      title: 'A Smart Life Jacket System',
      date: 'May 2024',
      summary: 'IoT-enabled smart life jacket detecting drowning and transmitting emergency alerts',
      description: 'Engineered a Smart Life Jacket System designed to enhance water safety through real-time monitoring and automated emergency response. The device integrates multiple sensors including water detection, pulse rate, and blood oxygen (SpO₂) sensors to continuously assess the wearer\'s condition. Upon detecting abnormal patterns indicative of drowning or distress, the system triggers instant alerts via a GSM module and satellite communication for reliable long-range data transmission. Built using Arduino Uno and embedded C.',
      tags: ['patent', 'iot'],
      tech: 'Arduino Uno, Embedded C, GSM Module, IoT Sensors, Satellite Communication'
    }
  ]
};

// Certificates Data
const certificates = {
  featured: [
    {
      id: 'ibm-ai-engineering',
      title: 'IBM AI Engineering Professional',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: '7GVZ6KTYDC3N',
      verifyUrl: 'https://coursera.org/verify/professional-cert/7GVZ6KTYDC3N',
      pdfPath: 'doc/certificates/IBM-AI-Engineering-Professional-Certificate-Coursera.pdf'
    },
    {
      id: 'ml-python-ibm',
      title: 'Machine Learning with Python',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: 'FREBG6SKDQAY',
      verifyUrl: 'https://coursera.org/verify/FREBG6SKDQAY',
      pdfPath: 'doc/certificates/IBM-s-Machine-Learning-with-Python-Coursera.pdf'
    },
    {
      id: 'vertex-ai-prompt',
      title: 'Prompt Design in Vertex AI Skill Badge',
      issuer: 'Google Cloud',
      date: 'March 2025',
      credlyUrl: 'https://www.credly.com/badges/219e515c-5adf-463a-9dc5-f83a19d4b20a',
      type: 'badge'
    },
    {
      id: 'opencv-bootcamp',
      title: 'OpenCV Bootcamp',
      issuer: 'OpenCV University',
      date: 'August 2024',
      credentialId: '667ed0154e9748a788cd0c66c61d6cb7',
      pdfPath: 'doc/certificates/OpenCV-Bootcamp.pdf'
    },
    {
      id: 'tensorflow-ibm',
      title: 'Building Deep Learning Models with TensorFlow',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: '4G8HZVMTXETU',
      verifyUrl: 'https://coursera.org/verify/4G8HZVMTXETU',
      pdfPath: 'doc/certificates/IBM-s-Building-Deep-Learning-Models-with-Tensorflow-Coursera.pdf'
    }
  ],
  all: [
    // IBM AI Engineering series
    {
      id: 'deep-learning-intro',
      title: 'Introduction to Deep Learning & Neural Networks',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: 'ER545CCTL43U',
      verifyUrl: 'https://coursera.org/verify/ER545CCTL43U'
    },
    {
      id: 'cv-image-processing',
      title: 'Introduction to Computer Vision and Image Processing',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: 'F95N2NBS3LJV',
      verifyUrl: 'https://coursera.org/verify/F95N2NBS3LJV'
    },
    {
      id: 'pytorch-ibm',
      title: 'Deep Neural Networks with PyTorch',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: 'LPYBPA9CZRSF',
      verifyUrl: 'https://coursera.org/verify/LPYBPA9CZRSF'
    },
    {
      id: 'ai-capstone',
      title: 'AI Capstone Project with Deep Learning',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credentialId: 'E73ARD8B4YQS',
      verifyUrl: 'https://coursera.org/verify/E73ARD8B4YQS'
    },
    // Other certifications
    {
      id: 'cv-vityarthi',
      title: 'Computer Vision',
      issuer: 'VITyarthi',
      date: 'December 2024'
    },
    {
      id: 'excel-linkedin',
      title: 'Learning Excel 2021',
      issuer: 'LinkedIn Learning',
      date: 'October 2022',
      credentialId: 'AU7nZMAhVrdTYircHMUXKs-gfvS5'
    },
    {
      id: 'ml-freecodecamp',
      title: 'Machine Learning with Python',
      issuer: 'FreeCodeCamp',
      date: 'April 2025'
    },
    {
      id: 'matlab-onramp',
      title: 'MATLAB Onramp',
      issuer: 'MathWorks',
      date: 'September 2022'
    },
    {
      id: 'simulink-onramp',
      title: 'Simulink Onramp',
      issuer: 'MathWorks',
      date: 'October 2022'
    },
    {
      id: 'privacy-security-nptel',
      title: 'Privacy and Security in Online Social Media',
      issuer: 'IIIT Hyderabad via NPTEL',
      date: 'April 2024',
      credentialId: 'NPTEL24CS04S115290082630624343',
      verifyUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS04S115290082630624343'
    },
    {
      id: 'personality-dev',
      title: 'Advanced Personality Development',
      issuer: 'BizGurukul',
      date: 'June 2022'
    },
    {
      id: 'speaking-linkedin',
      title: 'Speaking Confidently and Effectively',
      issuer: 'LinkedIn Learning',
      date: 'March 2023',
      credentialId: 'Adq2ZvtuQ-jeGd9-gUictl03Wtz6'
    }
  ],
  badges: [
    {
      id: 'ml-python-credly',
      title: 'Machine Learning with Python',
      issuer: 'IBM via Coursera',
      date: 'December 2023',
      credlyUrl: 'https://www.credly.com/badges/48fafc15-1e2c-47eb-9b22-096e7708fdba'
    },
    {
      id: 'ai-fundamentals-ibm',
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'June 2025',
      credlyUrl: 'https://www.credly.com/badges/cc4b0d6f-4c45-4264-87b9-6d21fe682d63'
    },
    {
      id: 'data-fundamentals-ibm',
      title: 'Data Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'June 2025',
      credlyUrl: 'https://www.credly.com/badges/80822e8d-d105-46b6-986c-348ee0e401ee'
    },
    {
      id: 'getting-started-data',
      title: 'Getting Started with Data',
      issuer: 'IBM SkillsBuild',
      date: 'May 2025',
      credlyUrl: 'https://www.credly.com/badges/a3d2012a-04de-483d-a309-2994278be367'
    },
    {
      id: 'vertex-ai-prompt',
      title: 'Prompt Design in Vertex AI Skill Badge',
      issuer: 'Google Cloud',
      date: 'March 2025',
      credlyUrl: 'https://www.credly.com/badges/219e515c-5adf-463a-9dc5-f83a19d4b20a'
    }
  ]
};


// ===================================================================
// THEME MANAGER
// ===================================================================

class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.themeIcon = document.getElementById('theme-icon');
    this.html = document.documentElement;
    
    this.init();
  }

  init() {
    // Get system preference
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const savedTheme = localStorage.getItem('theme') || systemPreference;
    
    this.setTheme(savedTheme);
    
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  setTheme(theme) {
    this.html.setAttribute('data-theme', theme);
    this.updateIcon(theme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const currentTheme = this.html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  updateIcon(theme) {
    if (!this.themeIcon) return;
    
    if (theme === 'dark') {
      this.themeIcon.classList.remove('fa-moon');
      this.themeIcon.classList.add('fa-sun');
    } else {
      this.themeIcon.classList.remove('fa-sun');
      this.themeIcon.classList.add('fa-moon');
    }
  }
}

// ===================================================================
// MOBILE NAVIGATION
// ===================================================================

class MobileNavigation {
  constructor() {
    this.navToggle = document.getElementById('nav-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.navLinks = document.querySelectorAll('.nav-link');
    
    this.init();
  }

  init() {
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMenu());
    }

    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-container') && this.navMenu.classList.contains('active')) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.navMenu.classList.toggle('active');
    this.navToggle.classList.toggle('active');
  }

  closeMenu() {
    this.navMenu.classList.remove('active');
    this.navToggle.classList.remove('active');
  }
}

// ===================================================================
// SCROLL-AWARE HEADER
// ===================================================================

class ScrollHeader {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.lastScroll = 0;
    
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
      
      this.lastScroll = currentScroll;
    });
  }
}

// ===================================================================
// TYPING ANIMATION
// ===================================================================

class TypingAnimation {
  constructor() {
    this.element = document.getElementById('typing-text');
    this.text = 'Dev Charan Sai P';
    this.speed = 100;
    this.index = 0;
    
    if (this.element) {
      this.type();
    }
  }

  type() {
    if (this.index < this.text.length) {
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), this.speed);
    }
  }
}

// ===================================================================
// DESCRIPTOR ROTATOR
// ===================================================================

class DescriptorRotator {
  constructor() {
    this.element = document.getElementById('descriptor-text');
    this.descriptors = [
      'Federated Learning',
      'Generative AI',
      'Computer Vision',
      'Agentic AI',
      'Deep Learning',
      'LLM Systems'
    ];
    this.currentIndex = 0;
    
    if (this.element) {
      this.rotate();
    }
  }

  rotate() {
    this.element.style.opacity = '0';
    
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.descriptors.length;
      this.element.textContent = this.descriptors[this.currentIndex];
      this.element.style.opacity = '1';
    }, 300);
    
    setTimeout(() => this.rotate(), 3000);
  }
}

// ===================================================================
// SCROLL REVEAL OBSERVER
// ===================================================================

class ScrollReveal {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Animate skill bars
          if (entry.target.classList.contains('skill-card')) {
            this.animateSkillBars(entry.target);
          }
        }
      });
    }, this.observerOptions);

    // Observe sections
    document.querySelectorAll('.section, .skill-card, .credential-card, .timeline-item').forEach(el => {
      observer.observe(el);
    });
  }

  animateSkillBars(card) {
    const skillFills = card.querySelectorAll('.skill-fill');
    
    skillFills.forEach(fill => {
      const level = fill.getAttribute('data-level');
      fill.style.setProperty('--skill-width', level + '%');
      fill.classList.add('animated');
    });
  }
}

// ===================================================================
// PROJECTS RAIL (Marquee)
// ===================================================================

class ProjectsRail {
  constructor() {
    this.railContainer = document.getElementById('projects-rail');
    
    if (this.railContainer) {
      this.init();
    }
  }

  init() {
    // Render featured projects
    this.renderProjects();
    
    // Duplicate for seamless loop
    const railContent = this.railContainer.innerHTML;
    this.railContainer.innerHTML = railContent + railContent;
  }

  renderProjects() {
    const html = featuredProjects.map(project => `
      <div class="project-preview-card" onclick="openProject('${project.id}')">
        <div class="project-preview-header">
          <span>${project.category}</span>
          <span>${project.date}</span>
        </div>
        <h3 class="project-preview-title">${project.title}</h3>
        <p class="project-preview-summary">${project.summary}</p>
        <div class="project-preview-tags">
          ${project.tags.map(tag => `<span class="tag-chip">${tag}</span>`).join('')}
        </div>
        <div class="project-preview-footer">
          <span>View Details</span>
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    `).join('');
    
    this.railContainer.innerHTML = html;
  }
}

function openProject(projectId) {
  window.location.href = `projects.html?project=${projectId}`;
}

// ===================================================================
// COUNTER ANIMATION
// ===================================================================

class CounterAnimation {
  constructor() {
    this.counters = document.querySelectorAll('.counter-value');
    
    if (this.counters.length > 0) {
      this.init();
    }
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    this.counters.forEach(counter => observer.observe(counter));
  }

  animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  }
}

// ===================================================================
// PROJECTS PAGE
// ===================================================================

class ProjectsPage {
  constructor() {
    this.academicGrid = document.getElementById('academic-grid');
    this.personalGrid = document.getElementById('personal-grid');
    this.patentsGrid = document.getElementById('patents-grid');
    this.filterChips = document.querySelectorAll('.filter-chip');
    this.modal = document.getElementById('project-modal');
    this.modalContent = document.getElementById('modal-content');
    this.modalClose = document.getElementById('modal-close');
    this.modalBackdrop = document.getElementById('modal-backdrop');
    
    if (this.academicGrid) {
      this.init();
    }
  }

  init() {
    this.renderProjects();
    this.setupFilters();
    this.setupModal();
    this.openFromURL();
  }

  renderProjects() {
    if (this.academicGrid) {
      this.academicGrid.innerHTML = allProjects.academic.map(project => 
        this.createProjectCard(project)
      ).join('');
    }
    
    if (this.personalGrid) {
      this.personalGrid.innerHTML = allProjects.personal.map(project => 
        this.createProjectCard(project)
      ).join('');
    }
    
    if (this.patentsGrid) {
      this.patentsGrid.innerHTML = allProjects.patents.map(project => 
        this.createProjectCard(project)
      ).join('');
    }

    // Add click listeners
    document.querySelectorAll('.project-compact-card').forEach(card => {
      card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project-id');
        this.openProjectModal(projectId);
      });
    });
  }

  createProjectCard(project) {
    const tags = project.tags.map(tag => `<span class="tag-chip">${tag}</span>`).join('');
    
    return `
      <div class="project-compact-card" data-project-id="${project.id}" data-tags="${project.tags.join(' ')}">
        <div class="project-meta">
          <span class="project-role">${project.role || ' '}</span>
          <span>${project.date}</span>
        </div>
        <h3 class="project-compact-title">${project.title}</h3>
        ${project.organization ? `<p class="project-org">${project.organization}</p>` : ''}
        <p class="project-summary">${project.summary}</p>
        <div class="project-tags">${tags}</div>
        <p class="project-tech">${project.tech}</p>
        <div class="project-cta">
          <span>View Details</span>
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    `;
  }

  setupFilters() {
    this.filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        // Update active state
        this.filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        
        const filter = chip.getAttribute('data-filter');
        this.filterProjects(filter);
      });
    });
  }

  filterProjects(filter) {
    const allCards = document.querySelectorAll('.project-compact-card');
    
    allCards.forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        const tags = card.getAttribute('data-tags');
        if (tags.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      }
    });
  }

  setupModal() {
    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }
    
    if (this.modalBackdrop) {
      this.modalBackdrop.addEventListener('click', () => this.closeModal());
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.closeModal();
      }
    });
  }

  openFromURL() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
  
    if (projectId) {
      setTimeout(() => {
        this.openProjectModal(projectId);
      }, 300);
    }
  }

  openProjectModal(projectId) {
    // Find project in all categories
    let project = null;
    for (const category of Object.values(allProjects)) {
      project = category.find(p => p.id === projectId);
      if (project) break;
    }
    
    if (!project) return;

    const tags = project.tags.map(tag => `<span class="tag-chip">${tag}</span>`).join('');
    
    let linksHtml = '';
    if (project.links) {
      linksHtml = '<div class="modal-links">';
      if (project.links.github) {
        linksHtml += `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="modal-link">
          <i class="fab fa-github"></i> View on GitHub
        </a>`;
      }
      if (project.links.demo) {
        linksHtml += `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="modal-link">
          <i class="fas fa-external-link-alt"></i> Live Demo
        </a>`;
      }
      linksHtml += '</div>';
    }

    this.modalContent.innerHTML = `
      <div class="modal-header">
        <h2 class="modal-title">${project.title}</h2>
        <div class="modal-meta">
          ${project.role ? `<div class="modal-meta-item"><i class="fas fa-user"></i> ${project.role}</div>` : ''}
          ${project.organization ? `<div class="modal-meta-item"><i class="fas fa-building"></i> ${project.organization}</div>` : ''}
          <div class="modal-meta-item"><i class="fas fa-calendar"></i> ${project.date}</div>
        </div>
        <div class="project-tags" style="margin-top: 1rem;">${tags}</div>
      </div>
      
      <div class="modal-description">
        ${project.description}
      </div>
      
      <div class="modal-section">
        <h3 class="modal-section-title">Tech Stack</h3>
        <p style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--color-text-muted);">${project.tech}</p>
      </div>
      
      ${linksHtml}
    `;

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Certificate Preview Mapping
const certificatePreviewMap = {
  'ibm-ai-engineering': 'doc/certificates/IBM-AI-Engineering-Professional-Certificate-Coursera.pdf',
  'ml-python-ibm': 'doc/certificates/IBM-s-Machine-Learning-with-Python-Coursera.pdf',
  'opencv-bootcamp': 'doc/certificates/OpenCV-Bootcamp.pdf',
  'tensorflow-ibm': 'doc/certificates/IBM-s-Building-Deep-Learning-Models-with-Tensorflow-Coursera.pdf',
  'deep-learning-intro': 'doc/certificates/IBM-s-Introduction-to-Deep-Learning-&-Neural-Networks-with-Keras-Coursera.pdf',
  'cv-image-processing': 'doc/certificates/IBM-s-Introduction-to-Computer-Vision-and-Image-Processing-Coursera.pdf',
  'pytorch-ibm': 'doc/certificates/IBM-s-Deep-Neural-Networks-with-PyTorch-Coursera.pdf',
  'ai-capstone': 'doc/certificates/IBM-s-AI-Capestone-Project-with-Deep-Learning-Coursera.pdf',
  'cv-vityarthi': 'doc/certificates/Computer Vision by VITyarthi.png',
  'excel-linkedin': 'doc/certificates/Learning Excel 2021 - Linkedin.pdf',
  'ml-freecodecamp': 'doc/certificates/Machine Learning with Python FreeCodeCamp.pdf',
  'matlab-onramp': 'doc/certificates/MATLAB Onramp - MathWorks.pdf',
  'simulink-onramp': 'doc/certificates/Simulink Onramp - MathWorks.pdf',
  'privacy-security-nptel': 'doc/certificates/Privacy and Security in Online Social Media.pdf',
  'personality-dev': 'doc/certificates/Advanced Personality Development - Bizgurukul.pdf',
  'speaking-linkedin': 'doc/certificates/Speaking Confidently and Effectively - Linkedin.pdf',
  'ml-python-credly': 'doc/badges/machine-learning-with-python.png',
  'ai-fundamentals-ibm': 'doc/badges/artificial-intelligence-fundamentals.png',
  'data-fundamentals-ibm': 'doc/badges/data-fundamentals.png',
  'getting-started-data': 'doc/badges/getting-started-with-data.png',
  'vertex-ai-prompt': 'doc/badges/prompt-design-in-vertex-ai-skill-badge.png'
};

// Function to get preview for certificate
function getCertificatePreview(certId) {
  const previewPath = certificatePreviewMap[certId];
  if (previewPath && (previewPath.endsWith('.png') || previewPath.endsWith('.jpeg') || previewPath.endsWith('.jpg'))) {
    return `<img src="${previewPath}" alt="Certificate preview" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">`;
  }
  // Fallback to icon if no image preview available
  return `<i class="fas fa-award"></i>`;
}

function getCertificatePreview(certId) {
  const previewPath = certificatePreviewMap[certId];

  if (!previewPath) {
    return `<i class="fas fa-award"></i>`;
  }

  // IMAGE preview
  if (previewPath.match(/\.(png|jpg|jpeg)$/i)) {
    return `
      <img src="${previewPath}" 
           alt="Certificate preview" 
           loading="lazy"
           style="width:100%; height:100%; object-fit:cover;">
    `;
  }

  // PDF preview
  if (previewPath.endsWith('.pdf')) {
    return `
      <iframe src="${previewPath}#toolbar=0&navpanes=0&scrollbar=0"
              style="width:100%; height:100%; border:none;">
      </iframe>
    `;
  }

  return `<i class="fas fa-award"></i>`;
}

// ===================================================================
// CERTIFICATES PAGE
// ===================================================================

class CertificatesPage {
  constructor() {
    this.featuredGrid = document.getElementById('featured-certs-grid');
    this.certsGrid = document.getElementById('certs-grid');
    this.badgesGrid = document.getElementById('badges-grid');
    this.modal = document.getElementById('cert-modal');
    this.modalContent = document.getElementById('cert-modal-content');
    this.modalClose = document.getElementById('cert-modal-close');
    this.modalBackdrop = document.getElementById('cert-modal-backdrop');
    
    if (this.featuredGrid) {
      this.init();
    }
  }

  init() {
    this.renderFeaturedCerts();
    this.renderAllCerts();
    this.renderBadges();
    this.setupModal();
  }

  renderFeaturedCerts() {
    this.featuredGrid.innerHTML = certificates.featured.map(cert => 
      this.createCertCard(cert, true)
    ).join('');
  }

  renderAllCerts() {
    this.certsGrid.innerHTML = certificates.all.map(cert => 
      this.createCertCard(cert, false)
    ).join('');
  }

  renderBadges() {
    this.badgesGrid.innerHTML = certificates.badges.map(badge => 
      this.createBadgeCard(badge)
    ).join('');
  }

  createCertCard(cert, isFeatured) {
    const actions = [];
    
    if (cert.pdfPath) {
      actions.push(`<button class="cert-action-btn" onclick="window.open('${cert.pdfPath}', '_blank')">
        <i class="fas fa-file-pdf"></i> View
      </button>`);
    }
    
    if (cert.verifyUrl) {
      actions.push(`<a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-action-btn">
        <i class="fas fa-check-circle"></i> Verify
      </a>`);
    }
    
    if (cert.credlyUrl) {
      actions.push(`<a href="${cert.credlyUrl}" target="_blank" rel="noopener noreferrer" class="cert-action-btn">
        <i class="fas fa-external-link-alt"></i> Badge
      </a>`);
    }

    return `
      <div class="cert-doc-card" data-cert-id="${cert.id}">
        <div class="cert-doc-preview">
          ${getCertificatePreview(cert.id)}
        </div>
        <div class="cert-doc-content">
          <h4 class="cert-doc-title">${cert.title}</h4>
          <p class="cert-doc-issuer">${cert.issuer}</p>
          <p class="cert-doc-date">${cert.date}</p>
          ${cert.credentialId ? `<p class="cert-doc-id">${cert.credentialId}</p>` : ''}
          ${actions.length > 0 ? `<div class="cert-doc-actions">${actions.join('')}</div>` : ''}
        </div>
      </div>
    `;
  }

  createBadgeCard(badge) {
    return `
      <div class="badge-card">
        <div class="badge-icon">
          ${getCertificatePreview(badge.id)}
        </div>
        <h4 class="badge-title">${badge.title}</h4>
        <p class="badge-issuer">${badge.issuer}</p>
        <p class="badge-date">${badge.date}</p>
        <a href="${badge.credlyUrl}" target="_blank" rel="noopener noreferrer" class="badge-link">
          <i class="fas fa-external-link-alt"></i>
          View Badge
        </a>
      </div>
    `;
  }

  setupModal() {
    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }
    
    if (this.modalBackdrop) {
      this.modalBackdrop.addEventListener('click', () => this.closeModal());
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.closeModal();
      }
    });
  }

  closeModal() {
    if (this.modal) {
      this.modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

// ===================================================================
// ACTIVE NAV HIGHLIGHTING
// ===================================================================

class ActiveNavHighlight {
  constructor() {
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('.section[id]');
    
    if (this.sections.length > 0) {
      this.init();
    }
  }

  init() {
    window.addEventListener('scroll', () => {
      let current = '';
      
      this.sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });

      this.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }
}

// ===================================================================
// SMOOTH SCROLL
// ===================================================================

class SmoothScroll {
  constructor() {
    this.links = document.querySelectorAll('a[href^="#"]');
    
    this.init();
  }

  init() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          const offsetTop = target.offsetTop - 80;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// ===================================================================
// INITIALIZATION
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Core features (all pages)
  new ThemeManager();
  new MobileNavigation();
  new ScrollHeader();
  new SmoothScroll();
  
  // Home page features
  if (document.getElementById('typing-text')) {
    new TypingAnimation();
  }
  
  if (document.getElementById('descriptor-text')) {
    new DescriptorRotator();
  }
  
  if (document.getElementById('projects-rail')) {
    new ProjectsRail();
  }
  
  // Reveal animations
  new ScrollReveal();
  
  // Projects page
  if (document.getElementById('academic-grid')) {
    new ProjectsPage();
  }
  
  // Certificates page
  if (document.getElementById('featured-certs-grid')) {
    new CertificatesPage();
  }
  
  // Counter animations
  new CounterAnimation();
  
  // Active nav highlighting (only on home page)
  if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
    new ActiveNavHighlight();
  }
});

// ===================================================================
// PERFORMANCE OPTIMIZATION
// ===================================================================

// Lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// Reduced motion support
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  document.documentElement.style.setProperty('--transition-fast', '0ms');
  document.documentElement.style.setProperty('--transition-base', '0ms');
  document.documentElement.style.setProperty('--transition-slow', '0ms');
}

// Console message
console.log('%cDev Charan Sai P', 'font-size: 24px; font-weight: bold; color: #22d3ee;');
console.log('%cAI Research Engineer | Deep Learning Innovator', 'font-size: 14px; color: #9ca3af;');
console.log('%cPortfolio Theme B - Designed with precision', 'font-size: 12px; color: #5c6370;');
