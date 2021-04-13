import {useState, useEffect} from 'react';
import { Button1 } from '../../globalStyle';
import { PageContainer, PageRow, PageWrapper, Column2, Column1, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img, BtnWrap } from './404Elements';
import {GET_USERS} from '../../graphql/Query'
import {useQuery} from "@apollo/client";

export default function NotFound({ lightBg, id, imgStart, topLine, lightText, darkText, headline, description, buttonLabel, img, alt, primary, dark, dark2 }) {
  const {loading, error, data} = useQuery(GET_USERS)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (data) setUsers(data.users)
  }, [data])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <PageContainer lightBg={lightBg} id={id}>
        <PageWrapper>
          {/*<PageRow imgStart={imgStart}>*/}
          {/*  <Column1>*/}
          {/*    <TextWrapper>*/}
          {/*      <TopLine>{topLine}</TopLine>*/}
          {/*      <Heading lightText={lightText}>{headline}</Heading>*/}
          {/*      <Subtitle darkText={darkText}>{description}</Subtitle>*/}
          {/*      <BtnWrap>*/}
          {/*        <Button1*/}
          {/*          to="/"*/}
          {/*          primary={primary ? 1 : 0}*/}
          {/*          dark={dark ? 1 : 0}*/}
          {/*          dark2={dark2 ? 1 : 0}*/}
          {/*        >*/}
          {/*          {buttonLabel}*/}
          {/*        </Button1>*/}
          {/*      </BtnWrap>*/}
          {/*    </TextWrapper>*/}
          {/*  </Column1>*/}
          {/*  <Column2>*/}
          {/*    <ImgWrap>*/}
          {/*      <Img src={img} alt={alt} />*/}
          {/*    </ImgWrap>*/}
          {/*  </Column2>*/}
          {/*</PageRow>*/}
          <PageRow>
            <Column1>
              <TopLine>Users</TopLine>
              {users.map(user => (
                <>
                  <Heading lightText={lightText}>{user.firstName} {user.lastName}</Heading>
                  <Subtitle darkText={darkText}>{user.email}</Subtitle>
                </>
              ))}
            </Column1>
          </PageRow>
        </PageWrapper>
      </PageContainer>
    </>
  )
}
