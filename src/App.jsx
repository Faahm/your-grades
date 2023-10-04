import "./App.css";
import AddGradeForm from "./components/AddGradeForm";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";
import TableHeaders from "./components/TableHeaders";
import { useState } from "react";

function App() {
  const [txtValue, setTxtValue] = useState("");
  const [formData, setFormformData] = useState([]);
  const [form, setForm] = useState({
    courseNo: "",
    courseName: "",
    courseUnits: 0,
    courseGrade: "",
  });

  const handleSearch = (e) => {
    setTxtValue(e.target.value);
  };

  const handleForm = ({ target: { id, value } }) =>
    setForm({ ...form, [id]: value });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormformData([
      ...formData,
      {
        id: formData.length + 1,
        courseNo: form.courseNo,
        courseName: form.courseName,
        courseUnits: form.courseUnits,
        courseGrade: form.courseGrade,
      },
    ]);
  };

  return (
    <div className="App">
      <div className="container mx-auto p-[1rem]">
        <h1 className="font-bold text-[2.5rem] mb-10 flex">QPI CALCULATOR</h1>
        <div className="flex flex-row items-start justify-center gap-10">
          <div className="w-3/12 mt-11">
            <AddGradeForm
              form={form}
              onChange={handleForm}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="flex flex-col items-start w-9/12 gap-2 table-container">
            <SearchBox value={txtValue} onChange={handleSearch} />
            <table className="w-full border-collapse rounded-lg table">
              <thead>
                <TableHeaders />
              </thead>
              <tbody>
                <Table items={formData} query={txtValue} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
