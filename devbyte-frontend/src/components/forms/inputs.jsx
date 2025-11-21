import { Upload , Plus} from "lucide-react";
import { useState } from "react";
// ==================== Form Input Components ====================

// Inputs field
export const InputField = ({ label, name, type = "text", placeholder, value, onChange, required = false }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
    />
  </div>
);

// text area field
export const TextAreaField = ({ label, name, placeholder, value, onChange, required = false, rows = 4 }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-2.5 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors resize-none"
    />
  </div>
);

// Select field
export const SelectField = ({ label, name, options, value, onChange, required = false }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2.5 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
    >
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

// image upload field
export const ImageUpload = ({ label, value, onChange, required = false }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://example.com/image.jpg"
        className="flex-1 px-4 py-2.5 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
      />
      <button
        type="button"
        className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <Upload size={18} />
        <span className="hidden sm:inline">Upload</span>
      </button>
    </div>
    {value && (
      <img src={value} alt="Preview" className="w-full h-32 object-cover rounded-lg mt-2" />
    )}
  </div>
);


// Tags inputs for managing lot tags 
export const TagsInput = ({ label, tags, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  // adding tags 
  const addTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      onChange([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  // removing tags 
  const removeTag = (tagToRemove) => {
    onChange(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
          placeholder="Type and press Enter"
          className="flex-1 px-4 py-2.5 bg-white dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
        />
        <button
          type="button"
          onClick={addTag}
          className="px-4 py-2.5 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
        >
          <Plus size={18} />
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full text-sm flex items-center gap-2"
          >
            {tag}
            <button onClick={() => removeTag(tag)} className="hover:text-red-500">
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};
