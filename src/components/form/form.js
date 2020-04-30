import React, { useState } from './node_modules/react';
import addToMailchimp from './node_modules/gatsby-plugin-mailchimp';
import styled from "./node_modules/styled-components"

function SubscribeForm(props) {
  // const [name, setName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const { result, msg } = await addToMailchimp(email);
    result === 'success' && setEmail('');
    // Removes the HTML returned in some response messages in case of error
    setMessage(msg.split('<')[0]);
    setStatus(result);
  };

  const Section = styled.div`
      background-color: #dbdbdb;
  `;
  // const handleChangeName = event => setName(event.target.value);
  // const handleChangeLastName = event => setLastName(event.target.value);
  // const handleChangeContact = event => setContact(event.target.value);
  const handleChangeEmail = event => setEmail(event.target.value);

  return (
    <Section id="form" >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 ">
            <h2 className="form-title">Únete al Newsletter <i className="fas fa-angle-double-right"></i></h2>
          </div>
          <div className="col-lg-6">
            <div className="modal-body-form">
              <form className="suscribe">
                <div className="wrap-input2">
                  <input
                    className={email !== '' ? 'input2 has-val' : 'input2'}
                    type="text"
                    onChange={handleChangeEmail}
                    value={email}
                    required
                  />
                  <span
                    status={status}
                    data-placeholder="EMAIL"
                    className='focus-input2'
                  >
                  </span>
                </div>
                  <div className="input2-message">{message}</div>
                <button className="suscribe-sumit btn-dark mt-4" type="submit" onClick={handleSubmit}>
                  Enviar
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SubscribeForm;