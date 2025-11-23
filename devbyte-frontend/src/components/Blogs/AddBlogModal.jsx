import { useState } from "react";

// the modal template
import { Modal } from "../forms/modal";
// Import form field components
import { TextAreaField , InputField , SelectField , ImageUpload } from "../forms/inputs";

// ==================== Add Blog Modal ====================
export const AddBlogModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
  });

  // Static array defining the available blog categories for the SelectField
  const categories = [
    { name: 'Select Category', value: '' }, // default placeholder
    { name: 'Development', value: 'Development' },
    { name: 'Design', value: 'Design' },
    { name: 'Tutorial', value: 'Tutorial' },
    { name: 'AI/ML', value: 'AI/ML' },
    { name: 'DevOps', value: 'DevOps' },
    { name: 'Security', value: 'Security' },
    { name: 'Frontend', value: 'Frontend' },
    { name: 'Performance', value: 'Performance' },
    { name: 'Testing', value: 'Testing' },
    { name: 'Mobile', value: 'Mobile' },
  ];

  // EVENT HANDLER: Handles changes for standard input fields (text, select, url)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Blog Data:', formData);
    // API call here
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Blog Post">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Blog Title Input Field */}
        <InputField
          label="Blog Title"
          name="title"
          placeholder="Enter blog title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        {/* Description Text Area */}
        <TextAreaField
          label="Description"
          name="description"
          placeholder="Write a brief description..."
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
        />

        {/* Category Selector Dropdown */}
        <SelectField
          label="Category"
          name="category"
          options={categories}
          value={formData.category}
          onChange={handleChange}
          required
        />

        <ImageUpload
          label="Featured Image"
          value={formData.image}
          onChange={(value) => setFormData({ ...formData, image: value })}
          required
        />

        {/* Action Buttons Container (responsive layout using flex) */}
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
            Publish Post
          </button>
        </div>
      </form>
    </Modal>
  );
};
