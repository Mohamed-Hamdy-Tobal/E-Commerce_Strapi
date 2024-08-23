import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";


export const CustomEmail = ({ user }) => (
    <Html>
        <Head />
        <Preview>
            The sales intelligence platform that helps you uncover qualified leads.
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={'https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg'}
                    width="170"
                    height="170"
                    alt="img"
                    style={logo}
                />
                <Text style={paragraph}>Hi {user.firstName},</Text>
                <Text style={paragraph}>
                    Welcome to E-Commerce, the sales intelligence platform that helps you
                    uncover qualified leads and close deals faster.
                </Text>
                <Section style={btnContainer}>
                    <Button style={button} href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210215160315/FREE-Python-Course-For-Beginners.png">
                        Download
                    </Button>
                </Section>
                <Text style={paragraph}>
                    Best,
                    <br />
                    Mohamed Tobal
                </Text>
                <Hr style={hr} />
                <Text style={footer}>
                    470 Noor Ave STE B #1148, South San Francisco, CA 94080
                </Text>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};

const logo = {
    margin: "0 auto",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
};

const btnContainer = {
    textAlign: "center",
};

const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
};
