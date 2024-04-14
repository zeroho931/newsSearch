// src/components/DateFilter.js

import React, { useState } from "react";

const DateFilter = ({ onApplyFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleApplyFilter = () => {
    // 시작일과 종료일을 검증하고, 부모 컴포넌트로 필터링 적용
    if (startDate && endDate) {
      onApplyFilter(startDate, endDate);
    }
  };

  return (
    <div>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Start Date"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End Date"
      />
      <button onClick={handleApplyFilter}>Apply</button>
    </div>
  );
};

export default DateFilter;
