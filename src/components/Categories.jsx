import styled from "styled-components"
import { categories } from "../data"
import { mobile } from "../responsive"
import CategorieItem from "./CategorieItem"

const Container=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({padding :"0px", flexDirection:"column"})}
`

const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
            <CategorieItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories
