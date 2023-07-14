import { styled } from "styled-components";

export const WritePostStyle=styled.div`
width: 50%;
height: 60vh;
margin: 10px;
margin-left: 300px;
padding-top:50px;
/* background-color: #d3ddde; */
.writeform{
    height: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    

}
.writeformgroup{
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 10px;
    gap: 10px;
   

}
.writepostimg{
    width: 100%;
    height: 150px;
    border-radius: 20px;
    /* margin-top: 0px; */
}
.writetitle{
    font-size: 20px;
    border: none;
    /* padding: 10px; */
    
}
.writedesc{
    border: none;
    font-size: 20px;
}
.writefile{
    font-size: 15px;
    cursor: pointer;
    /* margin: 10px; */

}
.writepostbtn{
    background-color: #03fc8c;
    width: 40%;
    color: red;
    border-radius: 20px;
    font-size: 20px;
    height: 50px;
    padding: 10px;
    cursor: pointer;
}
.writepostbtn:hover{
    background-color: #62a0f0;
}
`