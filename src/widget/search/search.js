import React from 'react'
import {Table,Input,Button,Form} from 'antd'
import styles from './search.less'

const FormItem = Form.Item


export default React.createClass({
  getInitialState(){
    return {}
  },
  render(){
    return (
      <Form inline className={styles.form}>
        <FormItem>
          <Input placeholder="请输入姓名"/>
        </FormItem>
        <FormItem>
          <Button type="primary">查询</Button>
        </FormItem>
      </Form>
    );
  }
})
