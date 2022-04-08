import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Nosotros</Footer.Title>
                    <Footer.Link href="#">Historia</Footer.Link>
                    <Footer.Link href="#">Clientes</Footer.Link>
                    <Footer.Link href="#">Testimonios</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Servicios</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consultas</Footer.Link>
                    <Footer.Link href="#">Ventast</Footer.Link>
                    <Footer.Link href="#">Compras</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contacto</Footer.Title>
                    <Footer.Link href="#">Lima</Footer.Link>
                    <Footer.Link href="#">Piura</Footer.Link>
                    <Footer.Link href="#">Tacna</Footer.Link>
                    <Footer.Link href="#">Trujillo</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Redes</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}