import { Button, Table,Popconfirm, Space } from "antd";
import { useCallback,useEffect, useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";


function CouponPage() {

    const [dataSource, setdataSource] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate=useNavigate()
    const apiUrl=import.meta.env.VITE_API_BASE_URL
    const columns = [
        {
            title: 'Kupon Kodu',
            dataIndex: 'code',
            key: 'code',
            render:(code)=> <b>{code}</b>
          },
        {
          title: 'İndirim Oranı',
          dataIndex: 'discountPercent',
          key: 'discountPercent',
          render:(code)=> <span>%{code}</span>
        },
        
          {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render:(_,record)=>(
                <Space size={"middle"}>
              
            <Button type="primary" onClick={()=>navigate(`/admin/coupons/update/${record._id}`)}>Update</Button>
        
                 <Popconfirm
                title="Kategoriyi sil"
                description="Kategoriyi silmek istediğinizden emin misiniz?" 
                okText="Yes"
                cancelText="No"
                onConfirm={()=>deleteCoupon(record._id)}
              >  
            <Button type="primary"danger>Delete</Button>
            </Popconfirm>
                </Space>
              
            )
          },
        
      ];

 
      const fetchCategories = useCallback(async () => {
        setLoading(true);
        try {
          const response = await fetch(`${apiUrl}/api/coupons`);
          if (response.ok) {
            const data = await response.json();
            setdataSource(data);
          } else {
            
            message.error("Veri getirme başarısız.");
          }
        } catch (error) {
         
          console.log("Veri hatası:", error);
        } finally {
          setLoading(false);
        }
      }, [apiUrl]);
     
   
      const deleteCoupon = async (couponId) => {
        try {
          const response = await fetch(`${apiUrl}/api/coupons/${couponId}`, {
            method: "DELETE",
          });
    
          if (response.ok) {
            message.success("Kupon başarıyla silindi.");
            fetchCategories();
          } else {
            message.error("Silme işlemi başarısız.");
          }
        } catch (error) {
          console.log("Silme hatası:", error);
        }
      };
        
   
    useEffect (()=>{
        fetchCategories();
    },[fetchCategories])
  return (
    <Table dataSource={dataSource} columns={columns} rowKey={(record)=>record._id} loading={loading}/>

  )
}

export default CouponPage