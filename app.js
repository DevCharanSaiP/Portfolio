// Portfolio JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation elements
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Contact form elements
    const contactForm = document.getElementById('contact-form');
    
    // Initialize all functionality
    initNavigation();
    initContactForm();
    initScrollAnimations();
    initSmoothScrolling();
    initExternalLinks();
    initResumeDownload();
    initProjectEffects();
    initSkillAnimations();
    initButtonStates();
    initPageAnimation();

    // Navigation Functions
    function initNavigation() {
        // Mobile menu toggle
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Navbar background change on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Update active navigation link
            updateActiveNavLink();
        });
    }

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        // Handle all navigation links
        const allNavLinks = document.querySelectorAll('a[href^="#"]');
        
        allNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Handle external links
    function initExternalLinks() {
        const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="mailto:"]');
        
        externalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                if (href.startsWith('mailto:')) {
                    window.location.href = href;
                } else {
                    window.open(href, '_blank', 'noopener,noreferrer');
                }
                
                showNotification('Opening link...', 'info');
            });
        });
    }

    // Download resume functionality
    function initResumeDownload() {
        const resumeButtons = document.querySelectorAll('.hero-buttons a');
        
        resumeButtons.forEach(button => {
            if (button.textContent.includes('Resume')) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Create a simple text file as a demo resume
                    const resumeContent = `
Dev Charan Sai P - Resume
AI/ML Engineer & Computer Science Student

Contact Information:
Email: devcharansaip@gmail.com
Phone: +91 9154689736
Location: Bhopal, Madhya Pradesh
GitHub: https://github.com/DevCharanSaiP
Credly: https://www.credly.com/users/dev-charan-sai-p.320426ea

Education:
Bachelor of Technology in Computer Science and Engineering (AIML)
VIT Bhopal University | July 2022 – May 2026 | CGPA: 8.24/10

Key Projects:
1. Collaborative AI Model for Skin Lesion Classification (May 2025)
2. AI-based System for Diabetic Retinopathy Detection (Patent - August 2024)
3. Smart Life Jacket System (Patent - May 2024)
4. Panoptic Image Segmentation Using Deep Learning (November 2023)

Technical Skills:
- Programming: Python, Java, SQL, HTML, CSS
- AI/ML: TensorFlow, PyTorch, OpenCV, Detectron2, PySyft
- Cloud: AWS Cloud, Google Cloud, Docker, Kafka

Certifications:
- IBM AI Engineering Professional Certificate
- Privacy and Security in Online Social Media (Elite Certificate)
                    `;
                    
                    // Create and download the file
                    const blob = new Blob([resumeContent], { type: 'text/plain' });
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'Dev_Charan_Sai_P_Resume.txt';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                    
                    showNotification('Resume downloaded successfully!', 'success');
                });
            }
        });
    }

    // Contact form functionality
    function initContactForm() {
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearFormErrors();
            
            // Validate form
            if (validateForm()) {
                submitForm();
            }
        });

        // Real-time validation
        const formInputs = contactForm.querySelectorAll('.form-control');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }

    // Form validation functions
    function validateForm() {
        let isValid = true;
        const formData = new FormData(contactForm);
        
        // Validate name
        const name = formData.get('name').trim();
        if (!name) {
            showFieldError('name', 'Name is required');
            isValid = false;
        } else if (name.length < 2) {
            showFieldError('name', 'Name must be at least 2 characters');
            isValid = false;
        }
        
        // Validate email
        const email = formData.get('email').trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            showFieldError('email', 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate subject
        const subject = formData.get('subject').trim();
        if (!subject) {
            showFieldError('subject', 'Subject is required');
            isValid = false;
        } else if (subject.length < 5) {
            showFieldError('subject', 'Subject must be at least 5 characters');
            isValid = false;
        }
        
        // Validate message
        const message = formData.get('message').trim();
        if (!message) {
            showFieldError('message', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showFieldError('message', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        return isValid;
    }

    function validateField(field) {
        const fieldName = field.name;
        const fieldValue = field.value.trim();
        
        clearFieldError(field);
        
        switch (fieldName) {
            case 'name':
                if (!fieldValue) {
                    showFieldError('name', 'Name is required');
                } else if (fieldValue.length < 2) {
                    showFieldError('name', 'Name must be at least 2 characters');
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!fieldValue) {
                    showFieldError('email', 'Email is required');
                } else if (!emailRegex.test(fieldValue)) {
                    showFieldError('email', 'Please enter a valid email address');
                }
                break;
            case 'subject':
                if (!fieldValue) {
                    showFieldError('subject', 'Subject is required');
                } else if (fieldValue.length < 5) {
                    showFieldError('subject', 'Subject must be at least 5 characters');
                }
                break;
            case 'message':
                if (!fieldValue) {
                    showFieldError('message', 'Message is required');
                } else if (fieldValue.length < 10) {
                    showFieldError('message', 'Message must be at least 10 characters');
                }
                break;
        }
    }

    function showFieldError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        const fieldElement = document.getElementById(fieldName);
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        if (fieldElement) {
            fieldElement.style.borderColor = '#ef4444';
        }
    }

    function clearFieldError(field) {
        const fieldName = field.name;
        const errorElement = document.getElementById(`${fieldName}-error`);
        
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
        
        field.style.borderColor = '';
    }

    function clearFormErrors() {
        const errorElements = contactForm.querySelectorAll('.error-message');
        const formControls = contactForm.querySelectorAll('.form-control');
        
        errorElements.forEach(error => {
            error.textContent = '';
            error.style.display = 'none';
        });
        
        formControls.forEach(control => {
            control.style.borderColor = '';
        });
    }

    function submitForm() {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Show success message
            showSuccessMessage();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }

    function showSuccessMessage() {
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        
        // Also create a more prominent success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 16px 24px;
                border-radius: 8px;
                margin-bottom: 20px;
                text-align: center;
                font-weight: 500;
                box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
                animation: slideIn 0.3s ease;
            ">
                <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                Message sent successfully! I'll respond within 24 hours.
            </div>
        `;
        
        // Insert success message
        const form = document.getElementById('contact-form');
        form.parentNode.insertBefore(successMessage, form);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        
        let bgColor = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
        if (type === 'success') {
            bgColor = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        } else if (type === 'error') {
            bgColor = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        }
        
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${bgColor};
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                z-index: 10000;
                font-weight: 500;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 300px;
                word-wrap: break-word;
            ">
                ${message}
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.firstElementChild.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.firstElementChild.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
    }

    // Scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(`
            .about-content,
            .skill-category,
            .project-card,
            .cert-card,
            .contact-content
        `);

        animateElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Project card hover effects
    function initProjectEffects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Skill tag animations
    function initSkillAnimations() {
        const skillTags = document.querySelectorAll('.skill-tag');
        
        skillTags.forEach((tag, index) => {
            tag.style.animationDelay = `${index * 0.1}s`;
            
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(2deg)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }

    // Add loading states to buttons
    function initButtonStates() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Add visual feedback for button clicks
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }

    // Initialize page with smooth entrance animation
    function initPageAnimation() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                heroContent.style.transition = 'all 0.8s ease';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 300);
        }
    }

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    console.log('Portfolio website initialized successfully!');
});