import React from 'react'
import {Table,Input,Button,Form,Select} from 'antd'
import styles from './search.less'

const FormItem = Form.Item
const Option = Select.Option

export default React.createClass({
  getInitialState(){
    return {}
  },
  getComponentByConfig(){
    var config = this.props.widgets||[]
    return config.map((widget,index)=>{
      if(widget.type==='input'){
        return (
          <FormItem key={index}>
            <Input
              placeholder={widget.placeholder||''}
              maxLength={widget.maxLength||100}
              onChange={e=>{
                var state=this.state
                state[widget.name||('input'+index)]=e.target.value
                this.setState(state)
              }}
            />
          </FormItem>
        )
      }
      if(widget.type==='select'){
        const options = widget.options||[];
        return (
          <FormItem key={index}>
            <Select
              style={{width:parseFloat(widget.width)||120}}
              placeholder={widget.placeholder||'请选择'}
              onChange={e=>{
                var state=this.state
                state[widget.name||('select'+index)]=e
                this.setState(state)
              }}
            >
              {options.map((option,idx)=>{
                return <Option key={idx} value={option.value+''}>{option.name}</Option>
              })}
            </Select>
          </FormItem>
        )
      }
      return <span></span>
    })
  },
  render(){
    return (
      <Form inline className={styles.form}>
        {this.getComponentByConfig()}
        <FormItem>
          <Button onClick={e=>{
            this.props.onSearch&&this.props.onSearch(this.state)
          }} type="primary">查询</Button>
        </FormItem>
      </Form>
    );
  }
})
