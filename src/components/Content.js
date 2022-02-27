// TOOLS
import { useEffect, useState } from "react";
import axios from "axios";
// STYLES
import { Container } from "../styles/Container";
import { StyledHeader } from '../styles/Header.styled';
import { StyledForm } from '../styles/Form.styled';
// COMPONENTS
import Result from './Result';
import Map from './Map';
// ICON
import Arrow from '../images/icon-arrow.svg';

const key = 'at_4758HRvW4lJ6Jdc3J3dyNrUxfbT1H';

export default function Header() {
  const [ip, setIp] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  console.log(data);

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    setData(null);
    setIsPending(true);
    setError(null);

    try {
      const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${ip}`);

      setData(res.data);
      setIsPending(false);
    }
    catch (err) {
      console.log(err);
      setError('Something went wrong ...');
      setIsPending(false);
    }
  };

  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <StyledHeader>
        <h1>IP Address Tracker</h1>

        <StyledForm onSubmit={ handleSubmit }>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            onChange={ (e) => setIp(e.target.value) }
            value={ ip }
          />
          <button aria-label="submit">
            <img src={ Arrow } alt="arrow icon" />
          </button>
        </StyledForm>

        {/* RENDERING LOADING && ERROR && RESULTS */ }
        { isPending && <p>Please Wait ...</p> }
        { error && <p>{ error }</p> }
        { !isPending && !error && <Result data={ data } isPending={ isPending } error={ error } /> }
      </StyledHeader>

      {/* RENDERING MAP */ }
      { data && !error && <Map data={ data } isPending={ isPending } error={ error } /> }
    </Container>
  );
}