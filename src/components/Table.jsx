import React from "react";

const Table = (props) => {
  const gradeEquivalent = {
    A: 4,
    "B+": 3.5,
    B: 3,
    "C+": 2.5,
    C: 2,
    D: 1,
    F: 0,
  };

  const lowercaseQuery = props.query.toLowerCase();

  const calculateTotalQPI = () => {
    const totalGradePoints = props.items.reduce((total, data) => {
      return total + data.courseUnits * gradeEquivalent[data.courseGrade];
    }, 0);

    const totalUnits = props.items.reduce((total, data) => {
      return total + Number(data.courseUnits);
    }, 0);

    const totalQPI = (totalGradePoints / totalUnits).toFixed(2);

    return isNaN(totalQPI) ? "0.00" : totalQPI;
  };

  return (
    <>
      {props.items
        .filter(
          (item) =>
            lowercaseQuery === "" ||
            item.courseNo.toLowerCase().includes(lowercaseQuery) ||
            item.courseName.toLowerCase().includes(lowercaseQuery)
        )
        .map((item) => (
          <tr key={item.id}>
            <td className="text-left" key={`${item.id}-courseNo`}>
              {item.courseNo}
            </td>
            <td className="text-left" key={`${item.id}-courseName`}>
              {item.courseName}
            </td>
            <td className="text-left" key={`${item.id}-courseUnits`}>
              {item.courseUnits}
            </td>
            <td className="text-left" key={`${item.id}-courseGrade`}>
              {item.courseGrade}
            </td>
          </tr>
        ))}
      <tr>
        <td></td>
        <td></td>
        <td>Total QPI</td>
        <td>{calculateTotalQPI()}</td>
      </tr>
    </>
  );
};

export default Table;
