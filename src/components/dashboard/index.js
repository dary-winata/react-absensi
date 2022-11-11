import { getAbsensi, getUsers, checkInAbsensi, checkOutAbsensi, editUser } from '../utils/db-crud'
import { Table, notification, Modal, Form, Input } from 'antd';
import { tableData, timeCompare } from '../utils/data'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Navbar from '../navbar'
import EditUser from './edit';

const Dashboard = () => {
  const [dataUsers, setDataUsers] = useState([])
  const [dataAbsensis, setDataAbsensis] = useState([])
  const [cleanUseState, setUseState] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('nip') == null && localStorage.getItem('nama') == null) {
      window.location.href = "/login"
    }
    getAbsensi().then(response=> setDataAbsensis(response.data.absensi))
    getUsers().then(response => setDataUsers(response.data.users))

    const checkin = document.getElementById("checkinButton")
    const checkout = document.getElementById("checkoutButton")

    if(localStorage.getItem('status') == "in") {
      checkin.style.visibility = 'hidden'
      checkout.style.visibility = 'visible'
    } else {
      checkout.style.visibility = 'hidden'
      checkin.style.visibility = 'visible'
    }
  }, [cleanUseState])

  const columns = [
      {
        title: 'Nip',
        dataIndex: 'nip',
        sorter: {
          compare: (a, b) => a.nip - b.nip,
          multiple: 3
        }
      },
      {
        title: 'Name',
        dataIndex: 'username',
        sorter: {
          compare: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
          multiple: 3
        }
      },
      {
        title: 'Status',
        dataIndex: 'status',
        filters: [
          {
            text: 'in',
            value: 'in'
          },
          {
            text: 'out',
            value: 'out'
          }
        ],
        onFilter: (value, record) => record.status.indexOf(value) === 0,
      },
      {
        title: 'Tanggal',
        dataIndex: 'time',
        sorter:  (a, b) => timeCompare(a.createdAt, b.createdAt)
      },
    ];

    const data = () => {
      return tableData(dataUsers, dataAbsensis)
    }

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    const checkInClick = () => { 
      checkInAbsensi(localStorage.getItem('nip')).then(() => { 
        setUseState(!cleanUseState) 
        openNotification("success", "Login Success", `user ${localStorage.getItem('nama')} is checked in`)
        localStorage.setItem('status', 'in')
      }).catch(() => openNotification("error", "Checkin Error", `user ${localStorage.getItem('nama')} already checked in`))
    }

    const checkOutClick = () => {
      checkOutAbsensi(localStorage.getItem('nip')).then(() => {
        setUseState(!cleanUseState) 
        openNotification("success", "Logout Success", `user ${localStorage.getItem('nama')} is checked out`)
        localStorage.setItem('status', 'out')
      }).catch(() => openNotification("error", "Checkout Error", `user ${localStorage.getItem('nama')} already checked out`))
    }

    const openNotification = (type, title, description) => {
      notification[type]({
        message: `${title}`,
        description:
        `${description}`,
      });
    };
    
    return (
      <div>
          <Navbar />
          <Table columns={columns} dataSource={data()} onChange={onChange} />;
          <div>
            <EditUser />
            <Button className="d-flex" id='checkinButton' style={{float: "right"}} onClick={() => checkInClick()} >Check In</Button>
            <Button className="d-flex" id='checkoutButton' style={{float: "right"}} onClick={() => checkOutClick()} >Check Out</Button>
          </div>
      </div>
    )
}

export default Dashboard