import { Table, Divider, Row, Col } from 'antd';

const blockColumns = [
  {
    title: 'Node',
    dataIndex: 'node',
    key: 'node',
  },
  {
    title: 'Miner',
    dataIndex: 'miner',
    key: 'miner',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
];

const transactionColumns = [
    {
      title: 'Validate',
      dataIndex: 'validate',
      key: 'validate',
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: 'to',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const TransactionHistory = () =>{
    return(
        <div>
            <h2 style={{fontWeight: 'bold'}}>Transaction History</h2>
            <Divider/>
            <Row style={{margin: 5}}>
                <Col span={8} >
                    <h1>Latest Blocks</h1>
                    <Table bordered columns={blockColumns} dataSource={data} />
                </Col>
                <Col title="Latest Transactions" span={14} offset={1}>
                    <h1>Latest Transactions</h1>
                    <Table bordered columns={transactionColumns} dataSource={data} />
                </Col>
            </Row>
            
        </div>
    )
}

export default TransactionHistory