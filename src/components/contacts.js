import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export default class Contacts extends Component {
    render() {
        return (
            <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Andrii Blashchuk</h2>
            <img
              src="https://cdn1.iconfinder.com/data/icons/avatar-vol-5-1/512/2-512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                Lorem Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
             printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
             </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-facebook" aria-hidden="true"/>
                    <a href="https://www.facebook.com/profile.php?id=100005224117565" target="_blank" rel="noopener noreferrer" style={{color:'black', textDecoration:'none', paddingLeft:'25px'}}>
                    Facebook
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    <a href="https://www.linkedin.com/in/andrii-blashchuk-6116461b2/" target="_blank" rel="noopener noreferrer" style={{color:'black', textDecoration:'none', paddingLeft:'8px'}}>
                    Linkedin
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <a href="mailto:ablashch@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:'black', textDecoration:'none'}}>
                    ablashch@gmail.com
                    </a>
                   
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    <a href="skype:barrifan" target="_blank" rel="noopener noreferrer" style={{color:'black', textDecoration:'none', paddingLeft:'12px'}}>
                    barrifan
                    </a>
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
        )
    }
}
