// This file contains the metadata for all your projects
// You can add, remove, or modify projects as needed

export interface Project {
    id: string;         // URL-friendly identifier
    title: string;      // Project title
    description: string; // Brief project description
    longDescription?: string; // Detailed description (optional)
    thumbnail: string;  // Path to the thumbnail image
    tags: string[];     // Technologies/skills used
    notebookFile?: string; // Path to the converted notebook JSON file (if applicable)
    githubUrl?: string; // Link to GitHub repository (if applicable)
    date: string;       // Project completion date
    featured: boolean;  // Whether to feature on the home page
  }
  
  // Your projects data
  export const projects: Project[] = [
    {
      id: "voc-analysis",
      title: "Voice of Customer Analysis",
      description: "Integrating 15M+ data points from customer feedback to inform strategic decisions using NLP.",
      longDescription: "This project involved developing an NLP solution that automatically categorizes and analyzes customer feedback from multiple channels including surveys, social media, and support tickets. By applying sentiment analysis and topic modeling, I identified key drivers of customer satisfaction and areas for improvement, leading to targeted operational enhancements.",
      thumbnail: "/images/voc-analysis.jpg",
      tags: ["NLP", "Python", "Machine Learning", "Customer Analytics"],
      notebookFile: "voc-analysis.json",
      date: "2023-05-15",
      featured: true
    },
    {
      id: "customer-retention",
      title: "Customer Retention Study",
      description: "Analysis of issue resolution impacts that drove $3-4M in annual support cost savings.",
      longDescription: "I conducted a comprehensive study analyzing how different support resolution strategies affected customer retention rates. By building predictive models to identify at-risk customers and recommend optimal intervention strategies, this project led to significant cost savings while improving customer satisfaction metrics.",
      thumbnail: "/images/customer-retention.jpg",
      tags: ["Predictive Modeling", "SAS", "Statistical Analysis", "Customer Retention"],
      notebookFile: "customer-retention.json",
      date: "2023-03-10",
      featured: true
    },
    {
      id: "analytics-dashboard",
      title: "Advanced Analytics Dashboard",
      description: "Framework leveraging Snowflake, Power BI, and Azure Data Factory for strategic insights.",
      longDescription: "Designed and implemented an end-to-end analytics solution that transformed raw data into actionable business intelligence. This dashboard provides real-time visibility into key performance indicators, allowing executives to track business health and identify emerging trends without requiring technical expertise.",
      thumbnail: "/images/analytics-dashboard.jpg",
      tags: ["Data Visualization", "Power BI", "Snowflake", "Azure"],
      date: "2023-01-20",
      featured: true
    },
    {
      id: "delivery-optimization",
      title: "Delivery Optimization Algorithm",
      description: "Reduced incorrect delivery incidents by 30% through data-driven app modifications.",
      longDescription: "By analyzing patterns in delivery errors and customer behavior, I developed an algorithm that improved address verification and optimized pickup timing. This project involved clustering analysis of restaurant locations and detailed examination of user interaction patterns with the mobile application.",
      thumbnail: "/images/delivery-optimization.jpg",
      tags: ["Python", "Clustering", "Geospatial Analysis", "A/B Testing"],
      notebookFile: "delivery-optimization.json",
      date: "2022-11-05",
      featured: false
    },
    {
      id: "food-quality-reporting",
      title: "Automated Food Quality Analysis",
      description: "Streamlined reporting process through automated analysis of quality metrics.",
      longDescription: "Created an automated system that processes food quality data from multiple sources, identifies anomalies, and generates comprehensive reports for stakeholders. This system reduced manual analysis time by 80% while providing more consistent and accurate quality assessments.",
      thumbnail: "/images/food-quality.jpg",
      tags: ["Automation", "Python", "Data Pipeline", "Reporting"],
      notebookFile: "food-quality.json",
      date: "2022-09-18",
      featured: false
    },
    {
      id: "vehicle-valuation",
      title: "International Vehicle Valuation Models",
      description: "Enhanced valuation accuracy for international markets through regression modeling.",
      longDescription: "Developed and managed vehicle valuation forecasting models for markets in Brazil, Portugal, Canada, and Australia. By incorporating local market data and vehicle-specific depreciation curves, these models significantly improved pricing accuracy for international inventory.",
      thumbnail: "/images/vehicle-valuation.jpg",
      tags: ["Regression Modeling", "SAS", "Forecasting", "International Markets"],
      date: "2022-07-25",
      featured: false
    }
  ];
  
  // Helper function to get all projects
  export function getAllProjects(): Project[] {
    return projects;
  }
  
  // Helper function to get featured projects
  export function getFeaturedProjects(): Project[] {
    return projects.filter(project => project.featured);
  }
  
  // Helper function to get a project by ID
  export function getProjectById(id: string): Project | undefined {
    return projects.find(project => project.id === id);
  }