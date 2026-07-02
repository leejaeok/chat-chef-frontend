import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const InfoInput = ({ content, onChange, onRemove }) => {
  // logic
  const { id, label, text } = content;

  // input value
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    // console.log("🚀 ~ handleChange ~ event:", event);
    // console.log("재료 입력하기");
    const { value } = event.target;
    setValue(value);
    // console.log("🚀 ~ handleChange ~ value:", value);

    // 부모에게 이벤트로 데이터 넘기주기
    onChange({ ...content, value });
  };

  const handleRemove = () => {
    console.log("삭제할 데이터 id:", id);

    // 부모에게 삭제할 항목의 id 전달
    onRemove(id);
  };

  // view
  return (
    <div className="py-2 first:pt-0 last:pb-0 ">
      <div className="relative">
        <label
          htmlFor={label}
          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute"
        >
          {text}
        </label>
        <input
          type={"text"}
          id={label}
          name={label}
          value={value}
          placeholder={"남은 재료를 입력해주세요"}
          className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-full pt-4 pr-9 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      border-chef-gray-200 rounded-2xl placeholder:text-chef-gray-200"
          onChange={handleChange}
        />
        <button
          type="button"
          className="absolute right-3 inset-y-0 flex items-center px-1"
          onClick={handleRemove}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default InfoInput;
