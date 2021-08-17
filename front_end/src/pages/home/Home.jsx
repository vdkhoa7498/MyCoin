import React, { useEffect, useState } from 'react'
import { Button, Table, Input } from 'antd'
import { useHistory, Link } from 'react-router-dom'
import './styles.scss'
import { getTransactions } from '../../services/transaction.service';


const { TextArea } = Input;

const columns = [
    {
        title: 'Sender',
        dataIndex: 'sender',
        key: 'sender',
        render: text => { return (<TextArea style={{ border: "none" }} autoSize={{ minRows: 2, maxRows: 6 }} value={text} />) },
    },
    {
        title: 'Receiver',
        dataIndex: 'receiver',
        key: 'receiver',
        render: text => { return (<TextArea style={{ border: "none" }} autoSize={{ minRows: 2, maxRows: 6 }} value={text} />) },
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Timestamp',
        dataIndex: 'timestamp',
        key: 'timestamp',
        render: (timestamp) => {
            const date_ob = new Date(timestamp);

            const year = date_ob.getFullYear();
            const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            const date = ("0" + date_ob.getDate()).slice(-2);
            return (
                <span>
                    {year}/{month}/{date}
                </span>
            );
        },
    },
];

const Home = () => {
    const [transactions, setTransactions] = useState([])
    const history = useHistory()
    const isAuthenticated = !!(localStorage.getItem("publicKey"))

    useEffect(() => {
        getTransactions()
            .then((res) => {
                setTransactions(res.data)
            })
            .catch((err) => { console.log(err) })

    })
    return (
        <div>
            {isAuthenticated && <Button type="primary" className="button-card"
            >
                <Link to="/send-coin">
                    Send Coin
                </Link>
            </Button>}
            <Table dataSource={transactions} columns={columns} />
        </div>

    )
}

export default Home