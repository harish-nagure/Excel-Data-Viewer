import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const QAAnalysisForm = ({ data }) => {

    const { excelData } = data;
    console.log("excelData", excelData, data);
  const location = useLocation();
  const selectedCall = location.state;
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (excelData && selectedCall) {
      const matchingRow = excelData.find((row) => row["Call_ID"] === selectedCall["Call_ID"]);

      if (matchingRow) {
        let structuredData = {
          "Call Score": {},
          "Customer Interest Level": {},
          "Agent Info": {},
        };

        if (matchingRow["Score Call"]) {
          const scoreLabels = matchingRow["Score Call"].split("\n");
          scoreLabels.forEach((label) => {
            structuredData["Call Score"][label] = "";
          });
        }

        if (matchingRow["interest_level_percentage"]) {
          structuredData["Customer Interest Level"][`Interest Level Percentage - ${matchingRow["interest_level_percentage"]}%`] = "";
        }

        const yesNoColumns = [
          "Miscommunication",
          "Agent_clarity",
          "Unnecessary_jargon",
          "Agent_Introduction",
          "Call_associated_with_Product",
          "Explicit_feedback",
          "Follow_Up_Required",
        ];

        yesNoColumns.forEach((column) => {
          if (matchingRow[column]) {
            structuredData["Agent Info"][`${column.replace(/_/g, " ")} - ${matchingRow[column]}`] = "";
          }
        });

        setFormData(structuredData);
        setErrors({});
      } else {
        setFormData({});
        setErrors({});
      }
    }
  }, [excelData, selectedCall]);

  const handleChange = (category, label, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [category]: { ...prevData[category], [label]: value },
    }));

    if (label.includes("Interest Level Percentage") && value !== "" && !/^\d+$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [label]: "Only numbers allowed!",
      }));
    } else {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[label];
        return updatedErrors;
      });
    }
  };

  const handleSubmit = () => {
    let validationErrors = {};

    Object.keys(formData).forEach((category) => {
      Object.keys(formData[category]).forEach((label) => {
        if (label.includes("Interest Level Percentage") && formData[category][label] === "") {
          validationErrors[label] = "This field is required!";
        }
        if (
          (label.includes("Miscommunication") ||
            label.includes("Agent clarity") ||
            label.includes("Unnecessary jargon") ||
            label.includes("Agent Introduction") ||
            label.includes("Call associated with Product") ||
            label.includes("Explicit feedback") ||
            label.includes("Follow Up Required")) &&
          formData[category][label] === ""
        ) {
          validationErrors[label] = "Please select Yes or No!";
        }
      });
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Please fix the errors before submitting.");
      return;
    }

    console.log("Saved Data:", formData);
    alert("Data saved successfully (check console)!");
  };

  const handleClear = () => {
    setFormData((prevData) =>
      Object.keys(prevData).reduce((acc, category) => {
        acc[category] = Object.keys(prevData[category]).reduce((subAcc, key) => {
          subAcc[key] = "";
          return subAcc;
        }, {});
        return acc;
      }, {})
    );
    setErrors({});
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg p-6  mt-6">
      <h2 className="text-2xl font-bold text-black-700 mb-4">System Analysis & QA Analysis</h2>
     
      {Object.keys(formData).length > 0 ? (
        <div className="space-y-6">
          {Object.keys(formData).map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-lg font-bold text-black-600 border-b pb-2 mb-4">{category}</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {Object.keys(formData[category]).map((label, index) => (
                  <React.Fragment key={index}>
                    
                    <label className="font-semibold text-gray-800">{label}</label>

                    
                    <div className="w-full">
                      {label.includes("Miscommunication") ||
                      label.includes("Agent clarity") ||
                      label.includes("Unnecessary jargon") ||
                      label.includes("Agent Introduction") ||
                      label.includes("Call associated with Product") ||
                      label.includes("Explicit feedback") ||
                      label.includes("Follow Up Required") ? (
                        <div className="flex space-x-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name={label}
                              value="Yes"
                              checked={formData[category][label] === "Yes"}
                              onChange={(e) => handleChange(category, label, e.target.value)}
                              className="mr-2"
                            />
                            Yes
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name={label}
                              value="No"
                              checked={formData[category][label] === "No"}
                              onChange={(e) => handleChange(category, label, e.target.value)}
                              className="mr-2"
                            />
                            No
                          </label>
                        </div>
                      ) : (
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          value={formData[category][label]}
                          onChange={(e) => handleChange(category, label, e.target.value)}
                        />
                      )}
                      {errors[label] && <p className="text-gary-500 text-sm">{errors[label]}</p>}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No data available for this Call ID.</p>
      )}

      <div className="flex justify-between mt-6">
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-all"
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QAAnalysisForm;