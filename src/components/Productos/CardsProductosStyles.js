import styled from "styled-components";

export const ProductosWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-family: 'PT Sans', sans-serif;
  
  h2{
    text-align: center;
    color: #f5f5f5;
    font-size: 35px;
  }

`;

export const ProductosContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  height: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  margin-bottom: 20px;
  color: f5f5f5;
`;
export const ProductosCard = styled.div`
  width: 325px;
  height: 450px;
  overflow: hidden;
  margin: 1px;
  border-radius: 3px;
  position: relative;

 img {
  height: 450px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  transition: all ease-in-out 0.3s;
}
 img:hover {
  transform: scale(1.2) rotate(-5deg); 
  cursor: pointer;
}

.intro {
  width: 325px;
  height: 70px;
  color: #f5f5ff;
  background: rgb(27, 27, 27, .5);
  letter-spacing: 1px;
  text-align: center;
  line-height: 1.6;
  font-family: var(--secondaryFont);
  position: absolute;
  bottom: .5px;
  padding: 6px;
  user-select: none;
  transition: all ease-in-out .3s;
} 
.intro h2{
  margin: 10px;
  font-size: 35px;
}
 p{
  visibility: hidden;
  opacity: 0;
}
 
.intro:hover {
  height: 220px;
  background: #000;

}
.intro:hover p {
  visibility: visible;
  opacity: 1;
}


.oferta-icon{
  width: fit-content;
  height: 40px;
  background: #6e6043;
  color: #efefef;
  position: absolute;
  bottom: 400px;
  left: 0;
  padding: 6px;
  font-weight: 700;
}
@media (max-width:980px){
  .card-item{
    margin: 15px;
  }
}
`;

export const ContainerPrice = styled.div`
  width: fit-content;
  height: 40px;
  background: #6e6043;
  color: #efefef;
  position: absolute;
  bottom: 400px;
  left: 0;
  padding: 6px;
  font-weight: 700;
`;

export const CardPrice = styled.span`
	font-weight: 800;
	font-size: 1.75rem;
    font-family: 'PT Sans', sans-serif;
`;

export const ButtonContainerStyled = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-top: 3rem;
`;