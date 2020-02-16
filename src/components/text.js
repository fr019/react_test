import React from "react";
import { Button, Card, Input } from "antd";
const { TextArea } = Input;

export default ({ text, result, editHandler, editModeHandler, edit }) => {
  return <div className={!edit ? 'red-lines' : null} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    {edit ? <TextArea style={{ flex: 1, padding: '24px', borderColor: '#1890ff' }}
                      value={text} onChange={e => editHandler(e.target.value)} />
      : <Card style={{ flex: 1 }}><p dangerouslySetInnerHTML={{ __html: result }} /></Card>}
    <Button style={{ marginTop: '1rem' }} onClick={editModeHandler} type="primary">Edit / Save</Button>
  </div>
}
