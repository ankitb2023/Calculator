import styled from 'styled-components'

export const Container = styled.div`
   display:grid;
   justify-content:center;
    align-content:center;
    
   width:400px;
   margin:10px auto;
   grid-template-columns:repeat(4,100px);
   grid-template-rows:minmax(120px,auto) repeat(5,100px);
   box-shadow:2px 2px 10px #333;
   border-radius:10px;
`
export const Screen = styled.div`
grid-column:1/-1; // width
background-color:rgba(60,64,67,0.75);
display:flex;
justify-content:space-around;
flex-direction:column;
padding:10px;
word-wrap:break-word;
word-break:break-all;
text-align:right;
border-top-left-radius:10px;
border-top-right-radius:10px;
`
export const Previous = styled.div`
color:rgba(255,255,255,0.75);
font-size:1.5rem;
`

export const Current = styled.div`
color: white;
font-size:2.5rem;
`
export const Button = styled.div`
cursor:pointer;
font-size:2rem;
border:1px outset white;
outline:none;
text-align:center;
padding:30px 20px;
background-color:#e6ffff;
&:hover{
   background-color:rgba(255,255,255,0.9);
}



${({gridSpan})=> gridSpan && `grid-column:span ${gridSpan};`}

${({operation})=> operation && `background-color:#cccccc;`}
${({control})=> control && `background-color:#b3b3ff;`}

${({equals})=> equals && `background-color:#cccccc;border-bottom-right-radius:10px;`}
${({period})=> period && `background-color:#b3b3ff;border-bottom-left-radius:10px;`}


`


// For dynamic typing 


// export const Texted = styled.div`
// width:500px;
// height:500px;
// overflow:hidden;
// text-align:center;
// font-size:1.2rem;
// padding:150px 20px;
// float:left;
// color:white;
// font-family: Staatliches, 'cursive';

// .demo:after{
//    content:'';
//    animation: changetext 10s infinite linear;
// 	color: white;
//    font-family: 'Dancing Script', cursive;
//    font-size:80px;
// }
// @keyframes changetext{
// 	10%{content:"Ankit";}
// 	60%{content: "Rajiv";}
// 	100%{content: "abhujeja";}
	

// }
// `