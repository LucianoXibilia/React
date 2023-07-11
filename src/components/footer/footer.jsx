import "./footer.css"
export const Footer = () =>{
    return(
        <footer>
            <div className="footer">
                <div className="footer__contenido">
                    <h2>Redes sociales</h2>
                    <a>Instagram</a>
                    <a>Facebook</a>
                    <h2>Numero de whatsapp: (inserte numero random)</h2>
                </div>
                <div className="footer_contenido">
                    <h2>
                        Formas de envio
                    </h2>
                    <ul>
                        <li>Correo argentino</li>
                        <li>Retiro en el local</li>
                    </ul>
                </div>
                <div className="footer_contenido">
                    <h2>Formas de pago</h2>
                    <ul> 
                        <li>Transferencia bancaria</li>
                        <li>Tarjetas de credito</li>
                        <li>Pago facil</li>
                        <li>Rapi pago</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}