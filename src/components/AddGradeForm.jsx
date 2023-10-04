import React from "react";

const AddGradeForm = ({ form, onChange, handleSubmit }) => {
  const gradeOptions = ["A", "B+", "B", "C+", "C", "D", "F"];

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col text-xl mb-2">
        <label className="text-left font-bold" htmlFor="courseNo">
          Course No.
        </label>
        <input
          className="placeholder-gray-500::placeholder text-[#2A2B2E] p-2 text-[1rem] rounded-lg mt-2"
          placeholder="Enter Course Number"
          type="text"
          name="courseNo"
          id="courseNo"
          value={form.courseNo}
          onChange={onChange}
          required
        />
      </div>
      <div className="flex flex-col text-xl my-2">
        <label className="text-left font-bold" htmlFor="courseName">
          Course Name
        </label>
        <input
          className="placeholder-gray-500::placeholder text-[#2A2B2E] p-2 text-[1rem] rounded-lg mt-2"
          placeholder="Enter Course Name"
          type="text"
          name="courseName"
          id="courseName"
          value={form.courseName}
          onChange={onChange}
          required
        />
      </div>
      <div className="flex flex-col text-xl my-2">
        <label className="text-left font-bold" htmlFor="courseUnits">
          Units
        </label>
        <input
          className="placeholder-gray-500::placeholder text-[#2A2B2E] p-2 text-[1rem] rounded-lg mt-2"
          type="number"
          name="courseUnits"
          id="courseUnits"
          min="1"
          value={form.courseUnits}
          onChange={onChange}
          required
        />
      </div>
      <div className="flex flex-col text-xl my-2">
        <label className="text-left font-bold" htmlFor="courseGrade">
          Grade
        </label>
        <div>
          {gradeOptions.map((grade) => (
            <div key={grade} className="flex gap-3">
              <input
                type="radio"
                name="courseGrade"
                id="courseGrade"
                value={grade}
                onChange={onChange}
              />
              <label htmlFor="courseGrade">{grade}</label>
            </div>
          ))}
        </div>
        <button
          className="bg-[#844497] rounded-lg hover:opacity-80 text-white font-bold p-1 m-5"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddGradeForm;
