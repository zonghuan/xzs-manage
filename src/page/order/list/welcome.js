import React from 'react'
import {Table} from 'antd'
import Search from 'widget/search'

export default React.createClass({
  getInitialState(){
    return {

    }
  },
  render(){
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];

    return (
      <div>
        <Search
          widgets={[
            {name:"name",type:"input",placeholder:"请输入名字",maxLength:20},
            {name:"sex",width:'120',type:'select',options:[
              {value:-1,name:'请选择'},
              {value:0,name:'男'},
              {value:1,name:'女'}
            ]}
          ]}
          onSearch={e=>{
            console.log(e)
          }}
        />
        <Table dataSource={dataSource} columns={columns} />
      </div>
    )
  },
  handleSubmit(e){
    e.preventDefault();

  }
})
