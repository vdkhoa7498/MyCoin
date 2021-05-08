import React from 'react';
import { Button, Row, Col } from 'antd'
import { Link } from "react-router-dom";
import imageNotFound from "../../assets/img/404.svg";
import './styles.scss'

export default function NotFound() {
  return (
    <Row className="not-found-container">
      <Col xl={12} xs={24} className="img">
          <img alt="Not Found" src={imageNotFound}/>
      </Col>
      <Col xl={12} xs={24} className="content">
        <h1>UH OH! You're lost.</h1>
        <br/>
        <p>The page you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.
        </p>
        <br/>
        <Link to ="/">
            <Button type="ghost" >HOME</Button>
        </Link>
      </Col>
    </Row>
  )
}
