import React from "react";

const CompanyLogo = ({ companylogolist }) => {
  return (
    <div class="companies_logo">
      <div class="companyname">
        {companylogolist.map((item) => {
          return <img src={item} />;
        })}
      </div>
      <div class="companyexplain">
        <span>
          Trusted by more than 500,000 designers and product managers across the
          globe
        </span>
      </div>
    </div>
  );
};

export default CompanyLogo;
