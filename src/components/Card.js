import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  position: relative;
  display: inline-flex;
  background-color: #ddd;
`;

const CardContainer = styled.div`
  position: relative;
  width: 280px;
  min-height: 220px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #eee;
  margin-bottom: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const JobTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

const CompanyName = styled.p`
  margin: 0;
  font-size: 18px;
  color: #444;
`;

const CommonInfo = styled.div`
  display: flex;
  margin: 10px 0px;
  font-size: 16px;
  color: #999;
  gap: 5px;
`;

const JobCard = ({ job }) => {
  return (
    <MainDiv>
      <CardContainer>
        <HeaderContainer>
          <div>
            <JobTitle>{job.JobTitle}</JobTitle>
            <CompanyName>{job.Company}</CompanyName>
            <CommonInfo>
              <i class="fa-solid fa-envelope"></i>
              {job.EmailAddress}
            </CommonInfo>
            <CommonInfo>
              <i class="fa-solid fa-envelope"></i>
              {job.Email}
            </CommonInfo>
            <CommonInfo>
              <i class="fa-solid fa-phone"></i>
              {job.Phone}
            </CommonInfo>
            <CommonInfo>
              <i class="fa-solid fa-person"></i>
              {job.FirstNameLastName}
            </CommonInfo>
          </div>
        </HeaderContainer>
      </CardContainer>
    </MainDiv>
  );
};

export default JobCard;
