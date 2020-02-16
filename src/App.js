import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Col, Layout, Menu, Row } from 'antd';
import Keywords from './components/keywords';
import Text from './components/text';
const { Header, Content } = Layout;

function App() {
  const [text, setText] = useState(`Racing car sprays burning fuel into crowd. Japanese princess to wed commoner. Australian walks 100km after outback crash. Man charged over missing wedding girl. Los Angeles battles huge wildfires.`);
  const [result, setResult] = useState(text);
  const [edit, setEdit] = useState(false);
  const [keywords, setKeywords] = useState(['crowd', 'princess', '100km', 'man', 'huge']);

  const addHandler = keyword => setKeywords(keywords.concat(keyword));
  const editHandler = text => setText(text);
  const editModeHandler = () => setEdit(!edit);

  useEffect(() => {
    let tempText = text;
    keywords.forEach(it => tempText = tempText.replace(new RegExp("\\b" + it + "\\b", 'g'), `<i>${it}</i>`));
    setResult(tempText)
  }, [text, keywords]);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Logout</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px 50px 50px', height: 'calc(100vh - 64px)' }}>
        <Row style={{ background: '#fff', padding: 24, height: '100%' }}>
          <Col span={18} style={{ padding: '0 50px 0 0', height: '100%' }}>
            <Text keywords={keywords}
                  text={text}
                  result={result}
                  editHandler={editHandler}
                  editModeHandler={editModeHandler}
                  edit={edit} />
          </Col>
          <Col span={6} style={{ height: '100%' }}>
            <Keywords keywords={keywords} addHandler={addHandler} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
