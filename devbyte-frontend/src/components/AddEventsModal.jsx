import { useState } from "react";
// the modal template
import { Modal } from "./forms/modal";

// necessary inputs fields used 
import { InputField , ImageUpload , SelectField , TextAreaField } from "./forms/inputs";

// ==================== Add Event Modal ====================

export const AddEventModal = ({ isOpen, onClose }) => {
    // STATE MANAGEMENT: Initialize state to hold all event data
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    type: '',
    image: '',
  });

  // Static array defining the available event types for the SelectField
  const eventTypes = [
    { name: 'Event Type', value: '' },
    { name: 'Learning', value: 'Learning' },
    { name: 'Collaboration', value: 'Collaboration' },
    { name: 'Networking', value: 'Networking' },
    { name: 'Competition', value: 'Competition' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Data:', formData);
    // API call here
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Event">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Event Title Input */}
        <InputField
          label="Event Title"
          name="title"
          placeholder="Enter event name"
          value={formData.title}
          onChange={handleChange}
          required
        />

        {/* Description Text Area */}
        <TextAreaField
          label="Description"
          name="description"
          placeholder="Describe your event..."
          value={formData.description}
          onChange={handleChange}
          required
          rows={3}
        />

        {/* --- Date and Type Fields (Grid Layout) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <SelectField
            label="Event Type"
            name="type"
            options={eventTypes}
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>

        {/* --- Start and End Time Fields (Grid Layout) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Start Time"
            name="startTime"
            type="time"
            value={formData.startTime}
            onChange={handleChange}
            required
          />

          <InputField
            label="End Time"
            name="endTime"
            type="time"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </div>

        <ImageUpload
          label="Event Image"
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
            Add Event
          </button>
        </div>
      </form>
    </Modal>
  );
};
