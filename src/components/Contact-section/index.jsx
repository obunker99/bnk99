import React from "react";
import Split from "../Split";
import { Formik, Form, Field } from "formik";
import axios from 'axios';

const ContactSection = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact-sec section-padding">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
          Solicite um orçamento
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
            Contato
            </h3>
          </Split>
          <span className="tbg">Contact</span>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  // alert(JSON.stringify(values, null, 2));
                  // show message
                  const formData = new FormData();

                  formData.append('name', values.name);
                  formData.append('email', values.email);
                  formData.append('message', values.message);
                  const res = await axios.post('/contact.php', formData);

                  if (!res) return;

                  messageRef.current.innerText =
                    "Sua mensagem foi enviada com sucesso. Entrarei em contato com você em breve.";
                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 2000);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>

                    <div className="controls">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Nome"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_email"
                              type="email"
                              name="email"
                              validate={validateEmail}
                              placeholder="E-mail"
                              required="required"
                            />
                            {errors.email && touched.email && (
                              <div>{errors.email}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <Field
                              as="textarea"
                              id="form_message"
                              name="message"
                              placeholder="Sua Mensagem"
                              rows="4"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center">
                            <button
                              type="submit"
                              className="simple-btn custom-font cursor-pointer"
                            >
                              <span>Solicitar</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
