import { styled } from "styled-components";

export const SinglePostStyle=styled.div`
display: flex;
width: 70%;
/* border: 1px solid red; */
.singlepostwrapper{
    padding: 20px;
    margin: 10px;
    

}
.singlepostimg{
    width: 100%;
    height: 400px;
    border-radius: 5px;
    object-fit: cover;
    display: flex;

}
.singleposttitle{
    text-align: center;

}
.singlepostdesc{
    color: #302d2d;
    font-size: 16px;
    

}
.singlepostinfo{
    display: flex;
    justify-content: space-between;
    color: olive;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;

}
.singlepostauthor{

}
.singlepostdate{

}
.singlepostedit{
    float: right;
    

}
.singleposticon{
    margin-left: 10px;
    cursor: pointer;
    font-size: 25px;
}


`