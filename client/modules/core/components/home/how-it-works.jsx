import React from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

const HowItWorks = ({content = () => null }) => (
  <Grid>
    <video autoPlay loop muted poster="landing-page.png" id="background">
      <source src="landing-page.mp4" type="video/mp4" />
    </video>
    <Row>
      <Col md={12}>
        <Panel id="howitworksPanel">
          <h1 className="text-center">How it works</h1>
          <br/>
          <p>Lorem ipsum dolor sit amet, ferri aliquam quaerendum at pri, te vel tamquam hendrerit, eos fastidii vituperatoribus no. Ne vim probo ubique ornatus. Vel postea praesent repudiare cu, ut mea eruditi inermis. Ius dicunt scripta definitiones et, sea malis altera quidam et. Ius epicurei facilisi delicata et, mea amet ridens definitionem te.
          </p>
          <p>Qui iudico mnesarchum eu, has ad persecuti efficiendi.
            No duo animal partiendo persecuti. Eros adipisci per ei, ne usu commune detracto molestiae,
            fuisset nominavi vel ei. Mel an moderatius percipitur interpretaris, hinc aliquip singulis pro
            ut, assum tollit ne sed. Ne nam ipsum verear euripidis, vim utamur copiosae et, possim officiis
            quo cu.</p>

          <p>Mel duis semper salutatus ne, id has augue paulo tibique. In eum legendos imperdiet, cu aliquip partiendo has. Cu mutat altera nam. Ex doming noluisse quo, accumsan apeirian expetendis at vix, ea cum doctus partiendo expetendis. At wisi decore maiestatis pro, in per lorem dolorem dignissim, sanctus philosophia cu usu.

            Sed ea falli sonet discere, his saepe tractatos interpretaris at, sit malis dicam honestatis ei. Te nam volutpat cotidieque, eam pericula scriptorem no. Et ferri porro vivendum eum, est postulant principes urbanitas in. In vim ferri erant suavitate. Ea vix purto malis, oratio antiopam per eu, ferri periculis in eam. Ei ius tritani volumus vivendum. Graeci tibique definitionem ne qui, cum reprimique ullamcorper contentiones ne.</p>
          <br/>
        </Panel>
      </Col>
    </Row>
  </Grid>
);

export default HowItWorks;