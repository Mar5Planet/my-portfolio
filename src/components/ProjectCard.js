import React from 'react';
import { Card } from 'antd';
import { PlaySquareOutlined, GithubOutlined } from '@ant-design/icons';
import Col from 'react-bootstrap/Col'
const { Meta } = Card;

function ProjectCard(props) {

    return (
      <Col lg={4} md={6}>
        <Card
    style={{ width: 300, }}
    cover={
      <img className={props.project.name}
        alt="project-logo"
        src={props.project.logo}
      />
    }
    actions={[
      <PlaySquareOutlined style={{fontSize: '1.4rem'}} onClick={() => props.renderVid(props.project)}/>,
      <a href={props.project.repo}>
        <GithubOutlined style={{fontSize: '1.4rem'}}/>
      </a>
      ,
    ]}
  >

<Meta
      title={props.project.name}
      description={props.project.description}
    />

  </Card>
      </Col>
    )
}

export default ProjectCard;