import React from 'react';
import useTitle from '../hooks/useTitle';
import './Blog.css'

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='container mt-5 mb-5 blog border rounded pb-5'>
            <section className="container mt-3" id="faq">
                <div className="blog-header text-center">
                    <h1 className="display-5 text-white fw-bold">Blog Page
                    </h1>
                    {/* <p className="fs-5 text-white text-wrap text-center">Here is the list of most commonly asked web
                    development interview questions for freshers and experienced candidates.</p> */}
                </div>
                <section className="blog-body mt-5">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button fw-bold text-black fs-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    What is difference between SQL and NoSQL?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    <h6 className="text-muted">
                                        <table>
                                            <tr>
                                                <th>SQL</th>
                                                <th>NoSQL</th>
                                            </tr>
                                            <tr>
                                                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) </td>
                                                <td>Non-relational or distributed database system.</td>
                                            </tr>
                                            <tr>
                                                <td>These databases have fixed or static or predefined schema</td>
                                                <td>They have dynamic schema
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>These databases are not suited for hierarchical data storage.</td>
                                                <td>These databases are best suited for hierarchical data storage.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>These databases are best suited for complex queries</td>
                                                <td>These databases are not so good for complex queries
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Vertically Scalable</td>
                                                <td>Horizontally scalable
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Follows ACID property</td>
                                                <td>Follows CAP(consistency, availability, partition tolerance)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Examples:</b> MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td>
                                                <td><b>Examples:</b> MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
                                                </td>
                                            </tr>
                                        </table>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    What is JWT, and how does it work?
                                </button>

                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <h6 className="text-muted px-5">
                                        <b>JWT: </b> <span className='fs-6'>JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                                        </span><br></br><br></br>
                                        <b>Work Mechanism: </b> <span className='fs-6'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                                            <ul>
                                                <li>User sign-in using username and password or google/facebook.</li>
                                                <li>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                                                <li>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                                                <li>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                                            </ul>

                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    What is the difference between javascript and NodeJS?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <h6 className="text-muted">
                                        <table>
                                            <tr>
                                                <th>Javascript</th>
                                                <th>NodeJS</th>
                                            </tr>
                                            <tr>
                                                <td>Javascript is a programming language that is used for writing scripts on the website.
                                                </td>
                                                <td>We can run Javascript outside the browser with the help of NodeJS.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>It is basically used on the client-side.	</td>
                                                <td>It is mostly used on the server-side.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Javascript is capable enough to add HTML and play with the DOM.
                                                </td>
                                                <td>Nodejs does not have capability to add HTML tags.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                                                </td>
                                                <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Javascript is used in frontend development.	</td>
                                                <td>Nodejs is used in server-side development.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                                                </td>
                                                <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                                                </td>
                                            </tr>
                                        </table>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    How does NodeJS handle multiple requests at the same time?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFour">
                                <div className="accordion-body">
                                    <h6 className="text-muted">
                                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default Blog;