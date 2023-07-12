import './styles.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <p>Precisa de uma ajuda?</p>
                <h1>Entre em contato</h1>
                <div className='buttons'>
                    <button className='info-button'>(11) 95770-5558</button>
                    <button className='info-button'>br.fevereiro@terra.com.br</button>
                    <button className='contact-button'><p>Contato</p></button>
                </div>
                <div className='line'></div>
            </div>
        </>
    )
}

export default Footer;