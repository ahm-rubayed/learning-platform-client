import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="container mx-auto position-absolute top-50 start-50 translate-middle  my-5 pt-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>what is cors?</Accordion.Header>
          <Accordion.Body>
            CORS is an HTTP-header based mechanism that allows a server to
            indicate any origins (domain, scheme, or port) other than its own
            from which a browser should permit loading resources. CORS also
            relies on a mechanism by which browsers make a "preflight" request
            to the server hosting the cross-origin resource, in order to check
            that the server will permit the actual request. In that preflight,
            the browser sends headers that indicate the HTTP method and headers
            that will be used in the actual request.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
            <br />
            <br />
            The other options that i have for implement authentication is Auth0,
            MongoDB, Passport, and Okta are the most popular alternatives and
            competitors to Firebase Authentication.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            A node is a basic unit of a data structure, such as a linked list or
            tree data structure. Nodes contain data and also may link to other
            nodes. Links between nodes are often implemented by pointers.
            <br />
            <br />
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
