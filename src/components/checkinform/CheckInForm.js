import React, { useState } from "react";
import { useForm } from "react-hook-form";
import GooglePlaces from "../GooglePlaces";
import "../checkinform/CheckinForm.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ChekInForm = () => {
  const [inputList, setInputList] = useState([{ skill: "", rating: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { skill: "", rating: "" }]);
  };

  const { handleSubmit, register, errors } = useForm({
    //resolver: yupResolver(Schema),
  });

  const onSubmitHandler = (data) => {
    // console.log("file uploaded successfully: ", data.image[0]);
    data["skillsresult"] = JSON.stringify(inputList);
    console.log("file uploaded successfully: ", data);
  };

  return (
    <div>
      <h3>CheckInFrom</h3>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="form-group">
          <label>Upload Resume</label>
          <input
            type="file"
            name="image"
            className="form-control"
            required
            ref={register}
          />
        </div>

        <div className="form-group">
          <label>Years of Experience</label>
          <select ref={register} name="experience" className="form-control">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">5-10</option>
          </select>
        </div>

        <div className="form-group">
          <label>Select your location</label>
          <GooglePlaces className="form-control"></GooglePlaces>
        </div>

        <div className="form-group">
          <label>Enter Your Skillset</label>
          {inputList.map((x, i) => {
            return (
              <div className="box">
                <input
                  name="skill"
                  placeholder="Enter Skill"
                  value={x.skill}
                  onChange={(e) => handleInputChange(e, i)}
                  className="skillcss"
                  //ref={register}
                />
                <input
                  className="ml10"
                  name="rating"
                  value={x.rating}
                  onChange={(e) => handleInputChange(e, i)}
                  placeholder="Enter Rating"
                  //ref={register}
                />
                <div className="btn-box">
                  {inputList.length !== 1 && (
                    <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button className="mr10" onClick={handleAddClick}>
                      Add
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button type="submit" className="btn btn-dark btn-md btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChekInForm;
