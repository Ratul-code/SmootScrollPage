import React from "react";

import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  Servicesh1,
  Servicesh2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  Servicep
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <Servicesh1>Our Services</Servicesh1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <Servicesh2>Reduce Expenses</Servicesh2>
          <Servicep>
            We help reduce your fees and increase your overall revenue
          </Servicep>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <Servicesh2>Virtual Offices</Servicesh2>
          <Servicep>
            You can access our platform online anywhere in the world.
          </Servicep>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <Servicesh2>Premium Benefits</Servicesh2>
          <Servicep>
            Unlock our special membership card that returns 5% cash back
          </Servicep>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
