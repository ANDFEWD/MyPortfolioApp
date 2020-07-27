import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/avatar-vol-5-1/512/2-512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Andrii Blashchuk</h2>
            <h4 style={{ color: "grey" }}>Front-End Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Ukraine,Ivano-Frankivsk,Kiev</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>ablashch@gmail.com</p>
            <h5>Web</h5>
            <p>github.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2006}
              endYear={2009}
              schoolName="Ternolip National Economic University"
              schoolDescription="Master degree in Finance and Accounting"
            />

            <Education
              startYear={2011}
              endYear={2015}
              schoolName="Precarpathian National University"
              schoolDescription="Master degree in Law Sciences "
            />

            <Education
              startYear={2019}
              endYear={2019}
              schoolName="ITClaster Academy Front-end Web Development/WEB UI course"
              schoolDescription="Master degree in Law Sciences "
            />

            <Education
              startYear={2020}
              endYear={2020}
              schoolName=" OSF Globally Academy Front-end Web Development/WEB UI course."
              schoolDescription="Master degree in Law Sciences "
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={'Till now'}
              companyName = "Private enterprise “M.S.”"
              jobName="1C solution middle developer"
              jobDescription="Support, development, implementation of solutions for 1C accounting program."
            />

           
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="Javascript" progress={70} />
            <Skills skill="HTML/CSS" progress={95} />
            <Skills skill="NodeJS" progress={65} />
            <Skills skill="React" progress={35} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
