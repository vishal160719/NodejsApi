import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'ID',
    dataIndex: 'id',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'year',
    dataIndex: 'year',
    filters: [
      {
        text: '2023',
        value: '2023',
      },
      {
        text: '2023',
        value: '2023',
      },
    ],
    onFilter: (value, record) => record.year.indexOf(value) === 0,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    ID: 32,
    Year: '2023',
  },
  {
    key: '2',
    name: 'Jim Green',
    ID: 42,
    Year: '2023',
  },
  {
    key: '3',
    name: 'Joe Black',
    ID: 32,
    Year: '2023',
  },
  {
    key: '4',
    name: 'Jim Red',
    ID: 31,
    Year: '2023',
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const SeStudent = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default SeStudent;