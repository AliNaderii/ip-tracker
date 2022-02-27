// STYLES
import { StyledResult, StyledInfo, Info, Line } from "../styles/Result.styled";

export default function Result({ data }) {

  return (
    <StyledResult>
      <StyledInfo>
        <Info>
          <span>IP ADDRESS</span>
          { data ? <p>{ data.ip }</p> : (<p>192.212.174.101</p>) }
        </Info>
        <Line />
      </StyledInfo>

      <StyledInfo>
        <Info>
          <span>LOCATION</span>
          { data ? (
            <p>
              { data.location.city }, { data.location.region }<br /> { data.location.postalCode }
            </p>
          ) : <p>Brooklyn, NY<br /> 10001</p> }
        </Info>
        <Line />
      </StyledInfo>

      <StyledInfo>
        <Info>
          <span>TIME ZONE</span>
          { data ? (<p>UTC{ data.location.timezone }</p>) : (<p>UTC-05:00</p>) }
        </Info>
        <Line />
      </StyledInfo>

      <StyledInfo>
        <Info>
          <span>ISP</span>
          { data ? (<p>{ data.isp }</p>) : (<p>SpaceX Starlink</p>) }
        </Info>
      </StyledInfo>

    </StyledResult>
  );
}