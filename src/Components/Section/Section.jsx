import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { fontSize } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop:"30px"}}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <img
              src="https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg"
              alt="img"
              style={{ width: "400px", height: "500px" }}
            />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item style={{ height: "500px",textAlign:'left' }}>
            <h5 style={{ color: "orangered" }}>Sneaker company</h5>
            <h3>Fall Limited Edition Sneakers</h3>
            <p style={{textAlign:'left'}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              eos repellendus quasi culpa temporibus ex accusantium quae
              voluptate consequuntur quis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Dolore, quam. Asperiores odio
              veritatis, voluptatum quam repellendus rerum similique perferendis
              quia iure ex laborum voluptatem mollitia blanditiis recusandae,
              tempora quas reprehenderit.
            </p>
            <b><del>$125.00</del></b>
            <button style={{width:"35px", backgroundColor:"orangered", color:"white", border:"none", marginLeft:"10px"}}>54%</button>
            <br />
            <button style={{ color: "orangered", fontSize: "20px" }}>-</button>
            <span style={{ fontSize: "15px" }}>0</span>
            <button style={{ color: "orangered", fontSize: "20px" }}>+</button>
            <button style={{ width: "400px", marginLeft: "20px", backgroundColor:"orangered", color:"white", border:"none", padding:"10px 20px"}}>
             
              <ShoppingBasketIcon style={{fontSize:"20px"}}/> Add to card
            </button>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img
              src="https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg"
              alt="sekil"
              style={{ width: "100px", height: "100px" }}
            />
            <img
              src="https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg"
              alt="sekil"
              style={{ width: "100px", height: "100px" }}
            />
            <img
            src="https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg"
            alt="sekil"
            style={{ width: "100px", height: "100px" }}
          />
          <img
              src="https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg"
              alt="sekil"
              style={{ width: "100px", height: "100px" }}
            />
          </Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}
