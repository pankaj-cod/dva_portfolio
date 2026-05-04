"use client"
import { useState, useMemo } from "react";
import { Book, MapPin, Mail, Phone, Link, X } from "lucide-react";
import RepoCard from "./RepoCard";
import ContributionGraph from "./ContributionGraph";


export default function Hero() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);
    const filters = ["All", "Python", "Tableau", "Excel"];

    const repos = [
        {
            "title": "YouTube Trending: Category Performance Dashboard",
            "live_link": "https://public.tableau.com/app/profile/yashi.agrawal/vizzes",
            "tags": [
                "Data Visualization",
                "EDA",
                "Dashboard",
                "YouTube Analytics",
                "Category Analysis",
                "Engagement Metrics"
            ],
            "tool": "Tableau",

            "description": "Interactive Tableau dashboard analyzing YouTube trending video categories, engagement rates, and viewership patterns across India.",

            "long_description": "This Tableau dashboard was built as part of the YouTube Trending Analytics capstone project at Newton School of Technology. It provides a comprehensive visual analysis of category-wise performance metrics for trending YouTube videos in India. The dashboard covers average views by category, engagement rate comparisons, views distribution via donut charts, and trending video counts over time. Key findings include Music and Entertainment dominating in total views, while niche categories like Education show higher engagement rates. The dashboard enables content creators and strategists to identify high-performing categories and optimize their content strategy accordingly. Built using Tableau Public with a dark theme for professional presentation.",

            "imageSrc": "/Project/1.png",
            "language": "Tableau",
            "langColor": "#E97627"
        },
        {
            "title": "YouTube Trending: Virality & Timing Analysis",
            "live_link": "https://public.tableau.com/app/profile/yashi.agrawal/vizzes",
            "tags": ["Virality Analysis", "Time Series", "Heatmap", "Trend Prediction", "Upload Timing"],
            "tool": "Tableau",
            "description": "Tableau dashboard analyzing video virality patterns, optimal upload timing, and engagement metrics to decode what drives trending success.",
            "long_description": "This dashboard explores the temporal dynamics of YouTube virality in the Indian market. It features a daily views & engagement time series chart, cumulative subscriber analysis by category, a heatmap revealing the best upload hours and days of the week, and a scatter plot correlating comments with shares across different video durations. The analysis found that evening uploads (6–9 PM) consistently outperform other time slots, the first 72 hours are critical for viral success, and weekend uploads tend to remain trending longer. The KPI section tracks total views (9.38K), average engagement rate (1.63%), and highlights the top 5 most viral videos. This dashboard enables data-driven content scheduling decisions.",
            "imageSrc": "/Project/2.png",
            "language": "Tableau",
            "langColor": "#E97627"
        },
        {
            "title": "YouTube Trending Data Pipeline & EDA",
            "description": "Built a data cleaning and transformation pipeline for 250K+ YouTube trending records. Performed feature engineering and statistical analysis.",
            "long_description": "Orchestrated a complete data quality workflow for the YouTube Trending Analytics capstone. Handled missing values, normalized date formats, computed derived KPIs (engagement rate, virality score, time-to-trend), and performed exploratory data analysis using Python. The pipeline processes 250,000+ rows across 16+ columns, producing 30+ engineered features. Key statistical findings include the Pareto effect in channel views, strong correlation between early like ratio and long-term performance, and the significance of comment activity on content longevity. The cleaned dataset powers downstream Tableau dashboards and recommendation engine.",
            "imageSrc": "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            "live_link": "https://github.com/pankaj-cod/SectionD_Team16_YoutubeTrending",
            "tags": ["python", "pandas", "data-pipeline", "EDA", "feature-engineering"],
            "language": "Python",
            "langColor": "#3572A5",
            "tool": "Python"
        },
        {
            "title": "YouTube Dataset Sourcing & Curation",
            "live_link": "https://github.com/pankaj-cod/SectionD_Team16_YoutubeTrending",
            "tags": [
                "Dataset Curation",
                "Data Collection",
                "Kaggle",
                "Data Quality",
                "Documentation"
            ],
            "tool": "Python",
            "description": "Sourced and curated the YouTube Trending Dataset from Kaggle with 250K+ records spanning multiple years of trending video snapshots.",
            "long_description": "Led the dataset sourcing effort for the YouTube Trending Analytics capstone project. Identified and evaluated multiple Kaggle datasets before selecting the optimal one with 250,000+ records covering multi-year trending snapshots across 16+ raw columns. Performed initial data profiling to assess completeness, consistency, and coverage. Documented data dictionary, column descriptions, and access links. Ensured the dataset met project requirements for category analysis, timing analysis, and virality scoring. The curated dataset became the foundation for all downstream analysis, feature engineering, and Tableau dashboarding work by the team.",
            "imageSrc": "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            "language": "Python",
            "langColor": "#3572A5"
        }
    ]

    const filteredRepos = useMemo(() => {
        return repos.filter((repo) => {
            const matchesFilter = activeFilter === "All" ||
                repo.language.toLowerCase() === activeFilter.toLowerCase() ||
                repo.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase());

            const matchesSearch = repo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (repo.long_description && repo.long_description.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, searchQuery, repos]);

    return (
        <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] text-sm leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
            <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col md:flex-row gap-8">

                {/* ── Sidebar ── */}
                <aside className="w-full md:w-[25%] md:min-w-[280px]">
                    <img
                        src="/Profile/1.jpg"
                        alt="Profile"
                        className="w-full max-w-[280px] aspect-square rounded-full border-2 border-[#30363d] object-cover mb-4 md:mx-0 mx-auto block"
                    />

                    <h1 className="text-2xl font-semibold text-white leading-tight">Pankaj Upadhyay</h1>
                    <h2 className="text-base font-normal text-[#8b949e] mt-1 mb-6">
                        Data Analyst | Visualization Specialist
                    </h2>

                    <p className="text-sm text-[#c9d1d9] mb-4">
                        Aspiring Data Analyst with a passion for transforming raw data into compelling visual stories. Skilled in building interactive dashboards, sourcing quality datasets, and extracting actionable insights. Experienced in end-to-end data workflows from collection to presentation. Currently pursuing studies at Newton School of Technology.
                    </p>

                    <a
                        href="mailto:upadhyaypankaj322@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-block text-center py-1.5 px-4 text-sm font-medium text-[#c9d1d9] bg-[#21262d] border border-[rgba(240,246,252,0.1)] rounded-md hover:bg-[#30363d] transition-colors mb-4 cursor-pointer no-underline"
                    >
                        Get in Touch
                    </a>

                    {/* Contact Details */}
                    <ul className="mb-6 pb-6 border-b border-[#30363d] space-y-2">
                        <li className="flex items-center gap-2 text-[#c9d1d9]">
                            <span className="text-[#8b949e]">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </span>
                            <span>India</span>
                        </li>
                        <li className="flex items-center gap-2 text-[#c9d1d9]">
                            <span className="text-[#8b949e]">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </span>
                            <span>upadhyaypankaj322@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[#8b949e]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </span>
                            <a
                                href="https://www.linkedin.com/in/pankaj-upadhyay-12625330a/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#58a6ff] hover:underline"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[#8b949e]">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </span>
                            <a
                                href="https://github.com/pankaj-cod"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#58a6ff] hover:underline"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>

                    {/* Skills */}
                    <div>
                        <h3 className="text-base font-semibold text-[#c9d1d9] mb-3">Skills & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "SQL", "Pandas", "NumPy", "Tableau", "Microsoft Excel", "Data Visualization", "GitHub"].map((skill) => (
                                <span
                                    key={skill}
                                    className="text-xs px-2.5 py-1 rounded-full bg-[rgba(56,139,253,0.1)] text-[#58a6ff] border border-[rgba(56,139,253,0.2)]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* ── Main Content ── */}
                <main className="flex-1 min-w-0">
                    {/* Tabs */}
                    <nav className="flex border-b border-[#30363d] mb-6">
                        <a
                            href="#"
                            className="flex items-center gap-2 px-4 py-2 font-semibold text-[#c9d1d9] border-b-2 border-[#f78166] -mb-px no-underline"
                        >
                            <Book size={16} />
                            Projects
                            <span className="bg-[rgba(110,118,129,0.4)] text-[#c9d1d9] rounded-full px-2 py-0.5 text-xs font-medium">
                                {repos.length}
                            </span>
                        </a>
                    </nav>

                    {/* Filters */}
                    <div className="flex gap-4 mb-6 flex-wrap">
                        <div className="flex-1 min-w-[300px]">
                            <input
                                type="text"
                                placeholder="Find a project..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-[#c9d1d9] text-sm focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-all"
                            />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {filters.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`px-4 py-1.5 border rounded-md text-sm cursor-pointer transition-all duration-200
                    ${activeFilter === f 
                        ? "bg-[#0969da] border-[#0969da] text-white font-medium shadow-sm" 
                        : "bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e]"}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Repo Grid */}
                    {filteredRepos.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
                            {filteredRepos.map((repo) => (
                                <RepoCard key={repo.title} {...repo} onClick={() => setSelectedProject(repo)} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 border border-dashed border-[#30363d] rounded-xl mb-8 bg-[#0d1117]">
                            <p className="text-[#8b949e] text-base mb-2">
                                No projects found matching {searchQuery ? `"${searchQuery}"` : ""} {activeFilter !== "All" ? `in ${activeFilter}` : ""}
                            </p>
                            <button
                                onClick={() => {
                                    setActiveFilter("All");
                                    setSearchQuery("");
                                }}
                                className="text-[#58a6ff] hover:underline text-sm font-medium"
                            >
                                Clear all filters and search
                            </button>
                        </div>
                    )}

                    {/* Project Modal */}
                    {selectedProject && (
                        <div
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#0d1117] border border-[#30363d] rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
                            >
                                <div className="flex items-center justify-between p-4 border-b border-[#30363d]">
                                    <h3 className="text-lg font-semibold text-white">{selectedProject.title}</h3>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="text-[#8b949e] hover:text-white transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                                <div className="p-5 max-h-[85vh] overflow-y-auto">
                                    <img
                                        src={selectedProject.imageSrc}
                                        alt={selectedProject.title}
                                        className="w-full aspect-video object-cover rounded-lg border border-[#30363d] mb-5"
                                    />
                                    <p className="text-[#8b949e] text-sm leading-relaxed mb-8">
                                        {selectedProject.long_description || selectedProject.description}
                                    </p>
                                    <div className="flex justify-end gap-3 pt-5 border-t border-[#30363d]">
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="px-6 py-2 text-sm font-medium text-[#c9d1d9] bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        {selectedProject.live_link && (
                                            <a
                                                href={selectedProject.live_link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-6 py-2 text-sm font-medium text-white bg-[#0969da] rounded-md hover:bg-[#0861c5] transition-colors flex items-center gap-2"
                                            >
                                                View Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Contribution Graph */}
                    <ContributionGraph />
                </main>
            </div>
        </div>
    );
}
