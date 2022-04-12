import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import "../CSS/ngoHome.css";

// const medicineData = [
//   {
//     batch_no: 1,
//     medicine_name: "spastone",
//     expiry_date: "15-11-2022",
//     quantiy: 5,
//     is_verified: true,
//     image_ref: "s.jpg",
//     user: {
//       user_ID: 2,
//       name: "Prakash",
//       email: "p@gmail.com",
//       mobileNo: 9850686255,
//       password: "5678",
//       address: "shirur",
//       city: "Pune",
//       state: "Maharashtra",
//       role: "Donor",
//       government_Id_img:
//         "C:\\Users\\SAGAR\\Downloads\\project images\\file-upload-1.png",
//       is_Active: true,
//       securityQues: null,
//       securityAns: null,
//     },
//   },
//   {
//     batch_no: 2,
//     medicine_name: "spastone1",
//     expiry_date: "15-11-2022",
//     quantiy: 5,
//     is_verified: true,
//     image_ref: "s.jpg",
//     user: {
//       user_ID: 2,
//       name: "Prakash",
//       email: "p@gmail.com",
//       mobileNo: 9850686255,
//       password: "5678",
//       address: "shirur",
//       city: "Pune",
//       state: "Maharashtra",
//       role: "Donor",
//       government_Id_img:
//         "C:\\Users\\SAGAR\\Downloads\\project images\\file-upload-1.png",
//       is_Active: true,
//       securityQues: null,
//       securityAns: null,
//     },
//   },
//   {
//     batch_no: 3,
//     medicine_name: "spastone2",
//     expiry_date: "15-11-2022",
//     quantiy: 5,
//     is_verified: true,
//     image_ref: "s.jpg",
//     user: {
//       user_ID: 2,
//       name: "Prakash",
//       email: "p@gmail.com",
//       mobileNo: 9850686255,
//       password: "5678",
//       address: "shirur",
//       city: "Pune",
//       state: "Maharashtra",
//       role: "Donor",
//       government_Id_img:
//         "C:\\Users\\SAGAR\\Downloads\\project images\\file-upload-1.png",
//       is_Active: true,
//       securityQues: null,
//       securityAns: null,
//     },
//   },
//   {
//     batch_no: 3,
//     medicine_name: "spastone2",
//     expiry_date: "15-11-2022",
//     quantiy: 5,
//     is_verified: true,
//     image_ref: "s.jpg",
//     user: {
//       user_ID: 2,
//       name: "Prakash",
//       email: "p@gmail.com",
//       mobileNo: 9850686255,
//       password: "5678",
//       address: "shirur",
//       city: "Pune",
//       state: "Maharashtra",
//       role: "Donor",
//       government_Id_img:
//         "C:\\Users\\SAGAR\\Downloads\\project images\\file-upload-1.png",
//       is_Active: true,
//       securityQues: null,
//       securityAns: null,
//     },
//   },
//   {
//     batch_no: 3,
//     medicine_name: "spastone2",
//     expiry_date: "15-11-2022",
//     quantiy: 5,
//     is_verified: true,
//     image_ref: "s.jpg",
//     user: {
//       user_ID: 2,
//       name: "Prakash",
//       email: "p@gmail.com",
//       mobileNo: 9850686255,
//       password: "5678",
//       address: "shirur",
//       city: "Pune",
//       state: "Maharashtra",
//       role: "Donor",
//       government_Id_img:
//         "C:\\Users\\SAGAR\\Downloads\\project images\\file-upload-1.png",
//       is_Active: true,
//       securityQues: null,
//       securityAns: null,
//     },
//   },
//   ,
//   {
//     batch_no: 3,
//     medicine_name: "spastone2",
//     expiry_date: "15-11-2022",
//     quantiy: 5,
//     is_verified: true,
//     image_ref: "s.jpg",
//     user: {
//       user_ID: 2,
//       name: "Prakash",
//       email: "p@gmail.com",
//       mobileNo: 9850686255,
//       password: "5678",
//       address: "shirur",
//       city: "Pune",
//       state: "Maharashtra",
//       role: "Donor",
//       government_Id_img:
//         "C:\\Users\\SAGAR\\Downloads\\project images\\file-upload-1.png",
//       is_Active: true,
//       securityQues: null,
//       securityAns: null,
//     },
//   },
//   ,
//   {
//     batch_no: 3,
//     medicine_name: "spastone2",
//     expiry_date: "15-11-2022",
//     quantiy: 5,
//     is_verified: true,
//     image_ref: "s.jpg",
//     user: {
//       user_ID: 2,
//       name: "Prakash",
//       email: "p@gmail.com",
//       mobileNo: 9850686255,
//       password: "5678",
//       address: "shirur",
//       city: "Pune",
//       state: "Maharashtra",
//       role: "Donor",
//       government_Id_img:
//         "C:\\Users\\SAGAR\\Downloads\\project images\\file-upload-1.png",
//       is_Active: true,
//       securityQues: null,
//       securityAns: null,
//     },
//   },
// ];

function NgoHome() {
  const [medicines, setMedicines] = useState([]);

  async function medicineData() {
    let res = await axios.get("http://localhost:8083/medicines");
    let myData = res.data;
    console.log(myData);
    setMedicines(res.data);
  }
  const handleChange = () => {
    console.log("handle clain here");
  };

  window.onload = medicineData;
  return (
    <div className="panelNgoContainer">
      <div className="leftPanelNgo">
        <h6 className="headerNgo">NGO Details</h6>
        <ul className="listNgoDetails">
          <li className="listItem">Name</li>
          <li className="listItem">City</li>
          <li className="listItem">State</li>
        </ul>
        <Button variant="contained" size="small" sx={{ mt: 2 }}>
          Claim History
        </Button>
      </div>
      <div className="RightPanelNgo">
        {medicines.map((item, index) => {
          return (
            <Box key={index}>
              <Card sx={{ width: "200px", margin: "10px" }}>
                <CardHeader
                  title={
                    <Typography color="blue">
                      Medicine Name : {item.medicine_name}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography>City: {item.city}</Typography>
                  <Typography>Quantiy: {item.quantity}</Typography>
                  <Typography>Expiry: {item.expiry_date}</Typography>
                </CardContent>
                <CardActions
                  sx={{
                    background: "blue",
                    cursor: "pointer",
                    display: " flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={handleChange}
                >
                  <Typography color="white">Claim</Typography>
                </CardActions>
              </Card>
            </Box>
          );
        })}
      </div>
    </div>
  );
}

export default NgoHome;
