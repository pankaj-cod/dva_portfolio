import { useState, useMemo, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ChevronDown } from "lucide-react";

export default function ContributionGraph() {
  const [year, setYear] = useState("last");
  const [total, setTotal] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "last", label: "Last 12 months" },
    { value: "2026", label: "2026" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Transform data to calculate total contributions
  const transformData = (data) => {
    const totalContributions = data.reduce((sum, day) => sum + day.count, 0);
    if (total !== totalContributions) {
        setTimeout(() => setTotal(totalContributions), 0);
    }
    return data;
  };

  if (!mounted) {
    return <div className="border border-[#30363d] rounded-md p-4 mb-8 bg-[#0d1117] min-h-[200px] animate-pulse" />;
  }

  return (
    <div className="border border-[#30363d] rounded-md p-4 mb-8 bg-[#0d1117]">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm text-[#c9d1d9]">
          {total} contributions {year === "last" ? "in the last year" : `in ${year}`}
        </h3>

        {/* Custom Year Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 bg-[#21262d] text-[#c9d1d9] border border-[#30363d] text-xs px-3 py-1.5 rounded-md hover:bg-[#30363d] transition-colors outline-none"
          >
            {options.find(o => o.value === year)?.label}
            <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isOpen && (
            <>
              {/* Backdrop to close dropdown */}
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-44 bg-[#161b22] border border-[#30363d] rounded-md shadow-2xl z-20 py-1 animate-in fade-in zoom-in-95 duration-100">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setYear(opt.value);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between
                      ${year === opt.value ? 'text-white bg-[#21262d]' : 'text-[#8b949e] hover:bg-[#21262d] hover:text-[#c9d1d9]'}`}
                  >
                    {opt.label}
                    {year === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-[#39d353]" />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Calendar */}
      <div className="overflow-x-auto flex justify-center py-2">
        <GitHubCalendar
          username="pankaj-cod"
          year={year === "last" ? undefined : Number(year)}
          colorScheme="dark"
          fontSize={12}
          blockSize={10}
          blockMargin={3}
          transformData={transformData}
          labels={{
            totalCount: "{{count}} contributions in {{year}}",
          }}
          theme={{
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between text-xs text-[#8b949e] mt-2">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-[#161b22] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#0e4429] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#006d32] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#26a641] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#39d353] rounded-sm"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
