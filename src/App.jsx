import React, { useState } from "react";
import { Search, X, ShieldCheck, Award, Calendar, FolderOpen, Layers, Terminal, Cloud, Sun, Moon } from "lucide-react";

export default function App() {
  const year = new Date ().getFullYear();
  const certificates = [
    
    
    {
      id: 1,
      title: "Full Stack web Developer",
      issuer: "LinkedInLearning",
      year: "2025",
      category: "Frontend",
      driveId: "1SEY-A49jGP0WFiIZ782-xDSHnoqZeHKv",
    },
    {
      id: 2,
      title: "Full Stack Web Developer",
      issuer: "LinkedInLearning",
      year: "2025",
      category: "Full Stack",
      driveId: "1zp5__88hVeMdMAyIhlc758aKD-XYxbQw",
    },
    {
      id: 3,
      title: "Learning Office 2024",
      issuer: "LinkedInLearning",
      year: "2025",
      category: "office",
      driveId: "1S8YXRNUbNXcjVAjALcsLXua9DvIeywpd",
    },
    {
      id: 4,
      title: "Java Foundations Professional",
      issuer: "JETBRAINS",
      year: "2025",
      category: "Backend",
      driveId: "1ZsISfpcKIviMbj7Vbh20usU3Vtr7c61u",
    },
     {
      id: 5,
      title: "Java Essential Training",
      issuer: "LinkedInLearning",
      year: "2025",
      category: "Backend",
      driveId: "1_JVEXV8SjuYogj-QPsgcyb4p1lI1w9K_",
    },
    {
      id: 6,
      title: "Java Object-Oriented Programing",
      issuer: "LinkedInLearning",
      year: "2025",
      category: "Backend",
      driveId: "1_FfearprVbccsNtssljZyCTTkMGkqzKD",
    },
    {
      id: 7,
      title: "Learning JDBC",
      issuer: "LinkedInLearning",
      year: "2025",
      category: "Backend",
      driveId: "1_9cfTvU5nnbPep5f_-3sgAS-TQWwMupp",
    },
    {
      id: 8,
      title: "Java DataStructures",
      issuer: "LinkedInLearning",
      year: "2025",
      category: "Backend",
      driveId: "1_Fd0vELuOz1gEJI-xq2D2dkfj-r1Mq8_",
    },
    {
      id: 9,
      title: "Java Essential Training",
      issuer: "LinkedInLearning",
      year: "2025",
      category: "Backend",
      driveId: "1_ItwgBLtbQPM5JaTAhYG2DTQoeaNHDsC",
    },
    {
      id: 10,
      title: "Learning REST APIs",
      issuer: "LinkedInLearning",
      year: "2025",
      category: "Backend",
      driveId: "1mZUbEhvHw2ebvWosr8OobYBNO945Ck_7",
    },
    {
      id: 11,
      title: "CSS Essential Training",
      issuer: "LinkedInLearning",
      year: "2025",
      category: "Frontend",
      driveId: "1RRYC6cBNhItjcgdI6wBXq04oC-6dKiWi",
    },
    {
      id: 12,
      title: "Java Full Stack Development",
      issuer: "CSC Computer Science College",
      year: "2025",
      category: "Full Stack",
      driveId: "1_K40wmO4fS4zmEjfsVhfx6ZJPPxhgjYK", // Replace with your real Google Drive File ID
    },
    
    
  ];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const categories = ["All", "Frontend", "Backend", "Full Stack"  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Frontend": return <Layers size={14} className={darkMode ? "text-cyan-400" : "text-cyan-600"} />;
      case "Backend": return <Terminal size={14} className={darkMode ? "text-amber-400" : "text-amber-600"} />;
      
      case "Full stack": return <folderbookmark size={14} className={darkMode ? "text-purple-400" : "text-purple-600"} />;
      default: return <FolderOpen size={14} className={darkMode ? "text-emerald-400" : "text-emerald-600"} />;
    }
  };

  const filteredCertificates = certificates.filter((cert) => {
    const matchesSearch = cert.title.toLowerCase().includes(search.toLowerCase()) ||
                          cert.issuer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    // 1. BASE WRAPPER: Takes full width/height background color
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 w-full ${
      darkMode ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-950"
    }`}>
      
      {/* 2. LAYOUT BOUNDARY BOX: This forces the side gaps on left and right sides! */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative w-full">
        
        {/* Stationary Theme Toggle Button (Aligned inside the side gaps layout) */}
        <div className="fixed bottom-6 right-4 z-40">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-xl shadow-md border transition-all hover:scale-105 active:scale-95 flex items-center justify-center ${
              darkMode 
                ? "bg-slate-900 border-slate-800 text-amber-400" 
                : "bg-white border-slate-200 text-slate-950 hover:bg-slate-50"
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Header Section */}
        <header className="pt-2 pb-2">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 border transition-colors">
            <ShieldCheck size={14} className={darkMode ? "text-emerald-400" : "text-indigo-600"} /> 
            <span className={darkMode ? "text-slate-400" : "text-slate-600"}>Academic Credential Vault</span>
          </div> */}
          <h1 className={`font-custom text-4xl sm:text-5xl font-bold tracking-tight leading-none ${darkMode ? "text-white" : "text-black"} `}>
            Jeeva's Certificate Vault
          </h1>
          {/* <p className={`mt-2.5 max-w-xl text-xs sm:text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            A verified interactive portfolio cataloging live academic certifications and technical frameworks.
          </p> */}
        </header>

        {/* Dynamic Navigation & Filter Bar */}
        <section className={`p-3 rounded-2xl border flex flex-col md:flex-row gap-3 items-center justify-between shadow-sm mb-8 ${
          darkMode ? "bg-slate-400/30 border-slate-800/60" : "bg-slate-200 border-slate-200"
        }`}>
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2  text-slate-500" size={16} />
            <input
              type="text"
              placeholder="Search certificates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-sm focus:outline-none border transition-colors ${
                darkMode 
                  ? "bg-slate-950 border-slate-800 text-white focus:border-emerald-500 placeholder-slate-600" 
                  : "bg-slate-50 border-slate-200 text-slate-950 focus:border-indigo-600 placeholder-slate-400"
              }`}
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none snap-x">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all shrink-0 flex items-center gap-1.5 snap-center ${
                  selectedCategory === cat
                    ? darkMode
                      ? "bg-blue-100 text-slate-950 border-emerald-400"
                      : "bg-slate-950 text-white border-slate-900"
                    : darkMode
                      ? "bg-slate-950/50 text-slate-400 border-slate-800 hover:text-white"
                      : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200/60"
                }`}
              >
                {getCategoryIcon(cat)} {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Display Grid Presentation Layer */}
        <main className="pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className={`group rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md ${
                  darkMode 
                    ? "bg-slate-900/20 border-slate-800/80 hover:border-slate-700" 
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Clear Preview Default / Mouse-Over Lightly Dimmed */}
                <div className={`relative aspect-[16/10] w-full overflow-hidden border-b ${
                  darkMode ? "bg-slate-950 border-slate-500/60" : "bg-slate-50 border-slate-200"
                }`}>
                  <iframe
                    src={`https://drive.google.com/file/d/${cert.driveId}/preview`}
                    title={cert.title}
                    className="absolute inset-0 w-full h-full border-0 pointer-events-none select-none opacity-100 group-hover:opacity-75 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Description Block */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className={`text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border inline-flex items-center gap-1 ${
                      darkMode ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"
                    }`}>
                      {getCategoryIcon(cert.category)} {cert.category}
                    </span>
                    <h3 className={`font-bold text-sm sm:text-base leading-snug mt-2.5 line-clamp-2 ${
                      darkMode ? "text-slate-100" : "text-slate-900"
                    }`}>
                      {cert.title}
                    </h3>
                  </div>

                  <div className={`mt-4 pt-2.5 border-t flex items-center justify-between text-xs font-medium ${
                    darkMode ? "border-slate-800/40 text-slate-500" : "border-slate-100 text-slate-500"
                  }`}>
                    <span className={`flex items-center gap-1.5 ${darkMode ? "text-slate-300" : "text-slate-800 font-semibold"}`}>
                      <Award size={13} className={darkMode ? "text-emerald-500" : "text-indigo-600"} /> {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Calendar size={12} /> {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty Filtering State */}
          {filteredCertificates.length === 0 && (
            <div className={`text-center py-16 border border-dashed rounded-2xl max-w-xs mx-auto ${
              darkMode ? "border-slate-800 text-slate-600" : "border-slate-300 text-slate-400"
            }`}>
              <p className="text-xs font-medium">No results match your search keywords.</p>
            </div>
          )}
        </main>
      </div>

      {/* Pop-up Modal Viewer Overlay Layer */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs w-screen h-screen p-4 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className={`w-full h-full md:max-w-5xl md:h-[88vh] rounded-2xl border overflow-hidden flex flex-col relative shadow-2xl ${
              darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Control Action Toolbar Row */}
            <div className={`flex items-center justify-between px-5 py-3 border-b shrink-0 ${
              darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <div>
                <h2 className={`font-bold text-xs sm:text-sm md:text-base tracking-tight line-clamp-1 ${
                  darkMode ? "text-white" : "text-slate-950"
                }`}>
                  {selectedCert.title}
                </h2>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">
                  {selectedCert.issuer} • Completed {selectedCert.year}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className={`p-1.5 rounded-xl border transition-colors shrink-0 ${
                  darkMode 
                    ? "bg-slate-900 border-slate-700 text-slate-400 hover:text-white" 
                    : "bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                <X size={16} />
              </button>
            </div>

            {/* Target Sandbox Iframe Container Viewport */}
            <div className="w-full flex-grow bg-slate-950 relative">
              <iframe
                src={`https://drive.google.com/file/d/${selectedCert.driveId}/preview`}
                title={selectedCert.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}

      <footer className={`p-3 rounded-2xl border flex flex-col md:flex-row gap-3 mx-auto justify-between shadow-sm mb-8 ${
          darkMode ? "bg-slate-400/30 border-slate-800/60" : "bg-slate-200 border-slate-200"
        }`}>
            <div className="mx-auto">
              <span className={`mx-auto font-custom font-bold ${darkMode ? "text-white" : "text-black"}`}>&#169; {year} JEEVANANDHAM | All rigths reserved</span>
            </div>
        </footer>
    </div>
  );
}