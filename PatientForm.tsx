'use client'

import { useState } from 'react'

export default function PatientForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    routine: '',
    medication: '',
    appointment: '',
    symptoms: '',
    caretakerNotes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      onSubmit(formData)
    } else {
      alert('Failed to save patient data')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block mb-2">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-2">Gender</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="routine" className="block mb-2">Routine</label>
        <input
          type="text"
          id="routine"
          name="routine"
          value={formData.routine}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="medication" className="block mb-2">Medication</label>
        <input
          type="text"
          id="medication"
          name="medication"
          value={formData.medication}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="appointment" className="block mb-2">Appointment</label>
        <input
          type="text"
          id="appointment"
          name="appointment"
          value={formData.appointment}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="symptoms" className="block mb-2">Symptoms</label>
        <textarea
          id="symptoms"
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="caretakerNotes" className="block mb-2">Caretaker Notes</label>
        <textarea
          id="caretakerNotes"
          name="caretakerNotes"
          value={formData.caretakerNotes}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
        Submit
      </button>
    </form>
  )
}

