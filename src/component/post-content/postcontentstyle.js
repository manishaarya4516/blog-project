import { styled } from "styled-components";

export const PostContentStyle = styled.div`
display: flex;
flex-direction: row;
margin: 10px;
padding: 10px;
cursor: pointer;
.postcontent{
    width: 400px;
    margin: 10px;
    border: 1px solid gray;
    border-color: brown;
    border-radius: 10px;

}
.postcontentimg{
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 10px;
}
.postinfo{
    display: flex;
    flex-direction: column;
    align-items: center;

}
.postcategory{
    font-size: 20px;
    margin: 10px;
    line-height: 20px;
    font-weight: 400px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    margin-right: 20px;
}
.postcatlist{
    padding: 20px;
    color: blue;


}
.posttitle{
    font-family: Georgia, 'Times New Roman', Times, serif;
font-weight: 400px;
}
.post-time{
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    /* font-weight: 300px; */
    font-style: italic;
    margin: 10px;
    margin-top: 0;
}
.postdesc{
 font-size: 17px;
 padding: 5px;
 font-weight: 400px;
 margin-top: 0px;
 overflow: hidden;


}
`