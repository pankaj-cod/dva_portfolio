import { Book } from "lucide-react";

export default function RepoCard({ imageSrc, title, description, tags, language, langColor, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden flex flex-col cursor-pointer hover:border-[#8b949e] transition-all duration-200"
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[180px] object-cover border-b border-[#30363d]"
      />
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-semibold text-[#58a6ff] flex items-center gap-2">
            <span className="text-[#8b949e]">
              <Book size={16} />
            </span>
            {title}
          </h3>
          <span className="text-xs text-[#8b949e] border border-[#30363d] px-2 py-0.5 rounded-full shrink-0 ml-2">
            Public
          </span>
        </div>
        <p className="text-xs text-[#8b949e] mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#58a6ff] bg-[rgba(56,139,253,0.1)] px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#8b949e]">
          <span
            className="w-3 h-3 rounded-full inline-block shrink-0"
            style={{ backgroundColor: langColor }}
          />
          {language}
        </div>
      </div>
    </div>
  );
}
