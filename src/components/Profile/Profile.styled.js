import styled from 'styled-components';

export const ProfileContainer = styled.div`
text-align: center;
  max-width: 320px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);`

export const Avatar = styled.img`
    margin: auto;
  border-radius: 50%;
  display: block;
  max-width: 100%;
  height: auto;`

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;`

export const Tag = styled.p`
  color: rgb(0 0 0 / 40%);`

export const Location = styled.p`
  color: rgb(0 0 0 / 40%);`

export const Stats = styled.ul`
   padding: 0 0 15px;
  display: flex;
  justify-content: space-around;
  background: antiquewhite;`

export const Item = styled.li`
  display: grid;
  place-items: center;
  list-style: none;`

export const Label = styled.span`
  color: rgb(0 0 0 / 40%);`

export const Quantity = styled.span`
  font-weight: 700;`



