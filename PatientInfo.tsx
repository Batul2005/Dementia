'use client'

import { useState } from 'react'

export default function PatientInfo({ data }: { data: any }) {
  const [routineCompleted, setRoutineCompleted] = useState(false)
  const [appointmentCompleted, setAppointmentCompleted] = useState(false)

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Patient Information</h2>
      <div className="mb-4">
        <strong>Name:</strong> {data.name}
      </div>
      <div className="mb-4">
        <strong>Age:</strong> {data.age}
      </div>
      <div className="mb-4">
        <strong>Gender:</strong> {data.gender}
      </div>
      <div className="mb-4">
        <strong>Routine:</strong> {data.routine}
        <button
          onClick={() => setRoutineCompleted(!routineCompleted)}
          className={`ml-2 px-2 py-1 rounded ${
            routineCompleted ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
        >
          {routineCompleted ? 'Completed' : 'Mark Complete'}
        </button>
      </div>
      <div className="mb-4">
        <strong>Medication:</strong> {data.medication}
      </div>
      <div className="mb-4">
        <strong>Appointment:</strong> {data.appointment}
        <button
          onClick={() => setAppointmentCompleted(!appointmentCompleted)}
          className={`ml-2 px-2 py-1 rounded ${
            appointmentCompleted ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
        >
          {appointmentCompleted ? 'Completed' : 'Mark Complete'}
        </button>
      </div>
      <div className="mb-4">
        <strong>Symptoms:</strong> {data.symptoms}
      </div>
      <div className="mb-4">
        <strong>Caretaker Notes:</strong> {data.caretakerNotes}
      </div>
    </div>
  )
}

