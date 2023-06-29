import "./styles.css"

function navbar(props: { text: any; }) {
    const linksList = [
        {
            id: 1,
            text: props.text,
            url: '',
        },
        {
            id: 2,
            text: 'Sobre Mim',
            url: '',
        },
        {
            id: 3,
            text: 'Contato',
            url: '',
        },
    ]

    return (
        <div className="navbar">
            <p>Coded & Desinged by Bruno</p>
            <ul className="left-side">
                {linksList.map((link) => {
                    return (<li>{link.text}</li>)
                })}
            </ul>
        </div>
    )
}

export default navbar;