/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Footer from '../Base/Footer/Footer';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import { MenuList, MenuItem} from 'material-ui/Menu';
import { ListItemIcon, ListItemText, List, ListItem} from 'material-ui/List'
import Label from '@material-ui/icons/Label';
import { Link } from 'react-router-dom';
import ToolBar from 'material-ui/Toolbar';

const styles = {
    header: {
        paddingTop:70
    }
};
class PrivacyPolicy extends React.Component {
    render(){
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.header}>
                <AppBar position="absolute">
                    <ToolBar>
                        <Typography variant="title"  noWrap>
                            <img src="/store/public/app/images/logo.png"
                                 alt="wso2-logo"/> <span style={{color: 'white'}}>API STORE</span>
                        </Typography>
                    </ToolBar>
                </AppBar>
                </div>
            <Grid container spacing={24}>
            <Grid item xs={3}>
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon >
                                <Label />
                            </ListItemIcon>
                            <Link style={{ textDecoration: 'none' }} to="#privacyPolicy">Privacy Policy</Link>
                        </MenuItem>
                        <MenuItem >
                            <ListItemIcon >
                                <Label />
                            </ListItemIcon>
                            <Link style={{ textDecoration: 'none' }} to="#personalInfo">What are the personal information?</Link>
                        </MenuItem>
                        <MenuItem >
                            <ListItemIcon >
                                <Label />
                            </ListItemIcon>
                            <Link style={{ textDecoration: 'none' }} to="#infoCollection">Collection of your information</Link>
                        </MenuItem>
                        <MenuItem >
                            <ListItemIcon >
                                <Label />
                            </ListItemIcon>
                            <Link style={{ textDecoration: 'none' }} to="#useOfInfo">Use of your personal information</Link>
                        </MenuItem>
                        <MenuItem >
                            <ListItemIcon >
                                <Label />
                            </ListItemIcon>
                            <Link style={{ textDecoration: 'none' }} to="#disclosureOfInfo">Disclosure of your information</Link>
                        </MenuItem>
                        <MenuItem >
                            <ListItemIcon >
                                <Label />
                            </ListItemIcon>
                            <Link style={{ textDecoration: 'none' }} to="#storageOfInfo">How API-M keeps your information</Link>
                        </MenuItem>
                        <MenuItem >
                            <ListItemIcon >
                                <Label />
                            </ListItemIcon>
                            <Link style={{ textDecoration: 'none' }} to="#about">About</Link>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon >
                                <Label />
                            </ListItemIcon>
                            <Link style={{ textDecoration: 'none' }} to="#disclaimer">Disclaimer</Link>
                        </MenuItem>
                    </MenuList>
            </Grid>
                <Grid item xs={8}>
                        <h1>
                            <strong>WSO2 API Manager - Privacy Policy</strong>
                        </h1>
                        <p>
                            <a target="_blank" href="https://wso2.com/api-management/">About WSO2 API Manager</a>
                        </p>
                        <p>
                            WSO2 API Manager (referred hereafter as “API-M ”) is an open source enterprise-class solution that supports API publishing, lifecycle management, application development, access control, rate limiting, and analytics in one cleanly integrated system.
                        </p>
                        <h2 id="privacyPolicy">
                            <strong>Privacy Policy</strong>
                        </h2>
                        <p>
                            This section explains how API-M captures your personal information, purpose of capturing,
                            and the retention of your personal information. Please note that this policy is for reference only, and is applicable for the software as a product. WSO2 Inc.,
                            or its developers have no access to the information held within API-M. Please refer
                            “Disclaimer” for more information.
                        </p>
                        <h2 id="personalInfo">
                            What are the personal information?
                        </h2>
                        <ul>
                            <li>Your user name (except in the case where your user name is created by your employer under contract)</li>
                            <li>The IP address you use to login</li>
                            <li>Your device ID, if you choose to login with a device (Phone, Tablet)</li>
                        </ul>
                        <p>
                            API-M considers anything related to you as your personal information. This includes,
                            but is not limited to, However API-M does not consider the following as your personal
                            information, and uses this only for analytical purposes, since this information cannot be
                            used to track you.
                        </p>
                        <ul>
                            <li>City/Country from which your TCP/IP connection originates</li>
                            <li>Time of the day you login.(Year, Month, Week, Hour or Minute)</li>
                            <li>Type of the device you use to login (Phone, Tablet, etc.)</li>
                            <li>Operating system and Generic browser information</li>
                        </ul>
                        <h2 id="infoCollection">
                            Collection of your information
                        </h2>
                        <p>API-M collects your information to only serve your access requirements. For example,</p>
                        <ul>
                            <li>API-M uses your IP address to detect any suspicious login attempt to your account.</li>
                            <li>API-M uses your First Name, Last Name, etc to provide rich and personalized information.</li>
                        </ul>
                        <h3>Tracking Technologies</h3>
                        <p>API-M collects your information through the following,</p>
                        <ul>
                            <li>The user sign up page where you enter your personal data</li>
                            <li>Tracking your IP address with HTTP request, HTTP headers, and TCP/IP</li>
                            <li>Tracking your geographic information with the IP address</li>
                            <li>Your login history with browser cookies. Please refer our cookie policy for more information</li>
                        </ul>
                        <h2 id="useOfInfo">Use of your personal information</h2>
                        <p>
                            API-M will use your personal information only for the purposes for which it was collected (or for a use identified as consistent with that purpose).
                        </p>
                        <p>API-M uses your personal information only for the following purposes.</p>
                        <ul>
                            <li>To provide you with a personalized user experience. API-M uses attributes such as your name for this purpose</li>
                            <li>To protect your account from unauthorized access or a potential hacking attempt. API-M use HTTP or TCP/IP Headers for this purpose which includes</li>
                            <ul>
                                <li>IP address,</li>
                                <li>Browser fingerprinting,</li>
                                <li>Cookies</li>
                            </ul>
                            <li>To derive statistical data for analytical purposes on system performance improvements. API-M will not keep any personal information after statistical calculations. Thus a statistical report has no means to identify an individual person</li>
                            <li>API-M may use</li>
                            <ul>
                                <li>The IP Address to derive geographic information</li>
                                <li>Browser fingerprinting to determine the browser technology and version</li>
                            </ul>
                        </ul>
                        <h2 id="disclosureOfInfo">Disclosure of your personal information</h2>
                        <p>API-M will disclose personal information only for the purposes for which it was collected (or for a use identified as consistent with that purpose), unless you have consented otherwise or where it is required by law.</p>
                        <h3>Legal process</h3>
                        <p>API-M may disclose your personal information with or without your consent where it is required by law following the due and lawful process.</p>
                        <h2 id="storageOfInfo">How API-M keeps your personal information</h2>
                        <h3>Where your personal information is stored</h3>
                        <p>API-M stores your personal information in secured databases. API-M exercises proper industry accepted security measures to protect the database where your personal information is held</p>
                        <p>API-M may use encryption to keep your personal data with added level of security.</p>
                        <h3>How long does API-M keep your personal information?</h3>
                        <p>API-M keep your personal data as long as you are an active user of our system. You can update your personal data at any time with the given self-care user portals.</p>
                        <h3>How can you request a removal of your personal information?</h3>
                        <p>You can request the administrator to delete your account The administrator will be the administrator of the tenant you are registered or the super-administrator if you do not use the tenant feature.</p>
                        <p>You can additionally request to anonymize all traces of your activities that may have been retained by API-M in Logs, Databases or Analytical storage.</p>
                        <h2 id="about">About</h2>
                        <h3>Changes to this policy</h3>
                        <p>The organization running API-M may revise the Privacy Policy from time to time. You can find the most recent governing policy with the respective link provided by the organization running API-M. The organization will notify any changes to the privacy policy over our official public channels.</p>
                        <h3>Your choices</h3>
                        <p>If you already have an account with API Manager; you have the right to deactivate your account if you find that this privacy policy is unacceptable for you.</p>
                        <p>If you do not have an account, you can choose not to subscribe if you do not agree with our privacy policy.</p>
                        <h3>Contact Us</h3>
                        <p>Please contact us if you have any question or concerns of this privacy policy.</p>
                        <p>
                            <a target="_blank" href="https://wso2.com/contact/">https://wso2.com/contact/</a>
                        </p>
                        <h2 id="disclaimer">Disclaimer</h2>
                            <ol>
                                <li>This privacy policy statement serves as a template for the organization running WSO2 API-M. The organizational policies will govern the real privacy policy applicable for its business purposes.</li>
                                <li>WSO2 or its employees, partners, affiliates do not have access to any data, including privacy-related data held at the organization running API-M.</li>
                                <li>This policy should be modified according to the organizational requirements.</li>
                            </ol>
                </Grid>
                <Footer/>
            </Grid>
            </div>
        )
    }
}

PrivacyPolicy.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrivacyPolicy);
