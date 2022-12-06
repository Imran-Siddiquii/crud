import {Table,Button,Modal,Input} from 'antd'
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import {useState}  from 'react'
function App() {
  const [dataSource, setdataSource] = useState([{
    Id:1,
     Name : "Imran",
     Email: "Imran@outlook.com",
     Adress:"265 max street"
   },
   {
    Id:2,
     Name : "Sunil",
     Email: "Sunil@yahoo.com",
     Adress: "234 Blocker street"
   },
   {
    Id:3,
     Name : "Kumr",
     Email:"kumar323@gmail.com",
     Adress: "544 shanti street"
   },
   {
    Id:4,
     Name : "Kmar",
     Email:"kumar323@gmail.com",
     Adress: "544 shanti street",
   },
  ])
  
  const columns=[{
    id:1,
    key:"1",
    title:"Id",
    dataIndex:"Id"
  },
  {
    id:2,
    key:"2",
    title:"Name",
    dataIndex:"Name"
  },
  
  {
    id:3,
    key:"3",
    title:"Email",
    dataIndex:"Email"
  },
  {
    id:4,
    key:"4",
    title:"Adress",
    dataIndex:"Adress"
  },
  {
    key:"5",
    title:"Action",
    render:(record=>{return <>
      <EditOutlined onClick={()=>editRecord(record)}/>
      <DeleteOutlined onClick={()=>deleteEnrty(record)} style={{margin:"0px 5px",color:"red"}}/>
    </>})
  }
]
const [updateRecord,SetUpdateRecord]=useState([])
const editRecord=(record)=>{
setIsModalOpne(true)
console.log(record)
SetUpdateRecord(record)
}
const handleCancel=()=>{
  setIsModalOpne(false)
}
const [isModalOpen,setIsModalOpne]=useState(false)
const deleteEnrty=(record)=>{
  console.log(setdataSource.Id , record.Id)

  return setdataSource(pre=>pre.filter(list=>list.Id !== record.Id))
  
}
// const [NewCol, setNewCol] = useState(null)
const addData=()=>{
  let RandomColumns=parseInt(Math.random() * 100)
  let newData={
    Id:RandomColumns,
    Name :RandomColumns + "Khan",
    Email:RandomColumns +"@gmail.com",
    Adress:RandomColumns + " avenu street"
  }
  setdataSource(pre=>{return [...pre,newData]})
}
const onChangeHandler=(e)=>{
  SetUpdateRecord({...updateRecord,[e.target.name]:e.target.value})
}
const handleOk=()=>{
  console.log(...dataSource,updateRecord)
setdataSource(pre=> {
  return pre.map((value)=>{
  if(value.Id===updateRecord.Id){
    return updateRecord
  }else{
    return value
  }
})
})
setIsModalOpne(false)
}
  return (
    <div className="App">
    <Button onClick={addData} >Add New data</Button>
    <Table style={
      {width:"50%"}
    }
    columns={columns}
    dataSource={dataSource}>
    </Table>
    <Modal title="Update Record" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      
          <Input value={updateRecord.Name} name="Name" onChange={(e)=>onChangeHandler(e)}/>
          <Input value ={updateRecord.Email} name="Email" onChange={(e)=>onChangeHandler(e)} />
          <Input value ={updateRecord.Adress} name="Adress" onChange={(e)=>onChangeHandler(e)}/>
        
      </Modal>
    </div>
  );
}

export default App;
