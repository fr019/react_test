import React, { useState } from "react";
import { Button, Input, List } from "antd";

export default ({ keywords, addHandler, removeHandler }) => {
  const [value, setValue] = useState('');
  const addKeyword = () => {
    if (value) {
      addHandler(value);
      setValue('');
    }
  };

  return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
    <List
      header={<strong>List of keywords</strong>}
      footer={<Input value={value} onChange={e => setValue(e.target.value)} placeholder="enter keyword" />}
      bordered
      dataSource={keywords}
      renderItem={item => (
        <List.Item  style={{display: 'flex', justifyContent: 'space-between'}}>{item}<Button type="danger" ghost icon="delete" size={'small'} onClick={() => removeHandler(item)} /></List.Item>
      )}
    />
    <Button type="primary" onClick={() => addKeyword()}>Add word</Button>
  </div>
}
