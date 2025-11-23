import { useState } from "react";
// import necessary fields from the basics input component
import { TextAreaField, InputField , TagsInput , SelectField, ImageUpload  } from "@/components/forms/inputs";
// the Modals template
import { Modal } from "@/components/forms/modal";


// ==================== Add Project Modal ====================
export const AddProjectModal = ({ isOpen, onClose }) => {
    // form data for the project 
    const [formData, setFormData] = useState({
    title: '',
    description: '',
    technology: '',
    image: '',
    github: '',
    contributors: [],
  });

  // an array of technologies 
  const technologies = [
    { name: 'Select Technology', value: '' },
    { name: 'React', value: 'React' },
    { name: 'Next.js', value: 'Next.js' },
    { name: 'Vue.js', value: 'Vue.js' },
    { name: 'Angular', value: 'Angular' },
    { name: 'Node.js', value: 'Node.js' },
    { name: 'Python', value: 'Python' },
    { name: 'JavaScript', value: 'JavaScript' },
    { name: 'TypeScript', value: 'TypeScript' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // action to be performed when submiting data 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Data:', formData);
    // API call here
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Project">
      <form onSubmit={handleSubmit} className="space-y-4">
        { /** title input field */}
        <InputField
          label="Project Title"
          name="title"
          placeholder="Enter project name"
          value={formData.title}
          onChange={handleChange}
          required
        />
            { /** Description text area field */}
        <TextAreaField
          label="Description"
          name="description"
          placeholder="Describe your project..."
          value={formData.description}
          onChange={handleChange}
          required
        />
        { /** select technolgies , select field */}
        <SelectField
          label="Technology"
          name="technology"
          options={technologies}
          value={formData.technology}
          onChange={handleChange}
          required
        />

        <ImageUpload
          label="Project Image"
          value={formData.image}
          onChange={(value) => setFormData({ ...formData, image: value })}
          required
        />
        { /** github repository input field */}
        <InputField
          label="GitHub Repository"
          name="github"
          type="url"
          placeholder="https://github.com/username/repo"
          value={formData.github}
          onChange={handleChange}
        />
            { /** Contributors of the project */}
        <TagsInput
          label="Contributors"
          tags={formData.contributors}
          onChange={(contributors) => setFormData({ ...formData, contributors })}
        />

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-medium"
          >
            Add Project
          </button>
        </div>
      </form>
    </Modal>
  );
};
