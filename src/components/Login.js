import styled from 'styled-components'
import BGIMAGE from '../assets/images/login-background.jpg'
import CTALOGOONE from '../assets/images/cta-logo-one.svg'
import CTALOGOTWO from '../assets/images/cta-logo-two.png'

export default function Login(props) {
    return (
        <Container>
            <Content>
                <BgImage />
                <CTA>
                    <CTALogoOne src={CTALOGOONE} alt="I don't know" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Get Premier Access to Raya and the Last Dragon for addition fee with a Disny+ Subscription. As of 03/26/21, the price of Disney+ and Bundle will increase by $1
                    </Description>
                    <CTALogoTwo src={CTALOGOTWO} alt="I don't know" />
                </CTA>
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;
`
const Content = styled.div`
    margin-bottom: 10vw;
    width:100%;
    position :relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`
const BgImage = styled.div`
    height: 100%;
    background-position: top;
     background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${BGIMAGE});
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`
const CTA = styled.div`
    /* margin-bottom: 2vw;
    max-width: 615px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right:auto;
    transition-timing-function:ease-out;
    transition:opacity 0.2s;
    width: 100%; */
    max-width:650px;
    width: 100%;
    display: flex;
    flex-direction: column;

`
const CTALogoOne = styled.img`
    /* height: 100%; */
    /* width: 100%; */
    margin-bottom:12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width:100%;
`
const SignUp = styled.a`
    font-weight:bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent ;
    border-radius: 4px;
    &:hover{
        background-color: #0483ee;
    }
`
const Description = styled.p`
    color: hsla(0,0%,95.3%,1);
    font-size: 11px;
    margin: 0 0 23px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`
const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width:100%;
    
`