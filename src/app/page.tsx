import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Dhrumil Patel | Data Analytics & AI Specialist',
  description: 'Data analytics and machine learning professional with expertise in Python, SQL, and business intelligence.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Dhrumil Patel
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-100">
                Data Analytics & AI Specialist
              </h2>
              <p className="text-xl mb-8 max-w-2xl">
                Turning complex data into actionable insights. I specialize in developing 
                analytics solutions that drive strategic business decisions and enhance 
                customer experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/projects" 
                  className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
                >
                  View My Projects
                </Link>
                <Link 
                  href="/about" 
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition"
                >
                  About Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              {/* Profile image - replace with your own photo */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image 
                  src="/images/profile-placeholder.jpg"
                  alt="Dhrumil Patel"
                  fill
                  style={{objectFit: 'cover'}}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-2 text-center">Featured Projects</h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Explore some of my recent work in data analytics, machine learning, and business intelligence
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-blue-100 relative">
                {/* Replace with actual project image */}
                <div className="absolute inset-0 flex items-center justify-center text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">NLP</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Voice of Customer Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Integrating 15M+ data points from customer feedback to inform strategic decisions using NLP.
                </p>
                <Link 
                  href="/projects/voc-analysis" 
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  View Project →
                </Link>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-green-100 relative">
                {/* Replace with actual project image */}
                <div className="absolute inset-0 flex items-center justify-center text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Predictive Models</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">SAS</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Retention Study</h3>
                <p className="text-gray-600 mb-4">
                  Analysis of issue resolution impacts that drove $3-4M in annual support cost savings.
                </p>
                <Link 
                  href="/projects/customer-retention" 
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  View Project →
                </Link>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-purple-100 relative">
                {/* Replace with actual project image */}
                <div className="absolute inset-0 flex items-center justify-center text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Data Viz</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Power BI</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Framework leveraging Snowflake, Power BI, and Azure Data Factory for strategic insights.
                </p>
                <Link 
                  href="/projects/analytics-dashboard" 
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-2 text-center">Skills & Expertise</h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Technical capabilities I've developed through my experience at Chipotle, Cox Automotive, and other roles
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skill Card 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Statistical Modeling</li>
                <li>Regression Analysis</li>
                <li>Time Series Forecasting</li>
                <li>A/B Testing</li>
              </ul>
            </div>
            
            {/* Skill Card 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Predictive Modeling</li>
                <li>Natural Language Processing</li>
                <li>Customer Segmentation</li>
                <li>Recommendation Systems</li>
              </ul>
            </div>
            
            {/* Skill Card 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <div className="text-purple-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
              <ul className="text-gray-600 space-y-2">
                <li>SQL (Teradata, Netezza, Snowflake)</li>
                <li>ETL Pipelines</li>
                <li>Data Warehousing</li>
                <li>Cloud Platforms (Azure, AWS)</li>
              </ul>
            </div>
            
            {/* Skill Card 4 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <div className="text-orange-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Visualization</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Power BI</li>
                <li>Interactive Dashboards</li>
                <li>Data Storytelling</li>
              </ul>
            </div>
            
            {/* Skill Card 5 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <div className="text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Programming</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Python</li>
                <li>R</li>
                <li>SAS</li>
                <li>JavaScript/TypeScript</li>
              </ul>
            </div>
            
            {/* Skill Card 6 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
              <div className="text-red-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Leadership</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Team Management</li>
                <li>Stakeholder Collaboration</li>
                <li>Project Management</li>
                <li>Mentoring & Recruitment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-6 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}